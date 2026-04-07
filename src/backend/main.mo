import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import OutCall "http-outcalls/outcall";
import Storage "blob-storage/Storage";
import MixinStorage "blob-storage/Mixin";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  type Lead = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    source : Text;
    timestamp : Int;
    status : Text;
  };

  type GalleryItem = {
    id : Nat;
    title : Text;
    artist : Text;
    description : Text;
    image : Storage.ExternalBlob;
    category : Text;
    sortOrder : Nat;
    createdAt : Int;
  };

  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);
  include MixinStorage();

  module Lead {
    public func compare(lead1 : Lead, lead2 : Lead) : Order.Order {
      Nat.compare(lead1.id, lead2.id);
    };
  };

  module GalleryItem {
    public func compareBySortOrder(item1 : GalleryItem, item2 : GalleryItem) : Order.Order {
      Nat.compare(item1.sortOrder, item2.sortOrder);
    };
  };

  let leads = Map.empty<Nat, Lead>();
  let galleryItems = Map.empty<Nat, GalleryItem>();
  let siteSettings = Map.empty<Text, Text>();

  var nextLeadId = 1;
  var nextGalleryItemId = 1;

  var interaktWebhookUrl : Text = "";

  // Lead Management
  public shared ({ caller }) func submitLead(name : Text, email : Text, phone : Text, message : Text, source : Text) : async Nat {
    let lead : Lead = {
      id = nextLeadId;
      name;
      email;
      phone;
      message;
      source;
      timestamp = Time.now();
      status = "new";
    };
    leads.add(nextLeadId, lead);
    nextLeadId += 1;
    lead.id;
  };

  public query ({ caller }) func getLeads() : async [Lead] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can fetch leads");
    };
    leads.values().toArray()
  };

  public shared ({ caller }) func updateLeadStatus(id : Nat, status : Text) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update leads");
    };
    switch (leads.get(id)) {
      case (null) {
        Runtime.trap("Lead not found");
      };
      case (?lead) {
        let updatedLead : Lead = { lead with status };
        leads.add(id, updatedLead);
      };
    };
  };

  public shared ({ caller }) func deleteLead(id : Nat) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can delete leads");
    };
    leads.remove(id);
  };

  public query ({ caller }) func filterLeadsBySource(source : Text) : async [Lead] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can filter leads");
    };
    leads.values().toArray().filter(
      func(lead) {
        lead.source == source
      }
    );
  };

  public query ({ caller }) func filterLeadsByStatus(status : Text) : async [Lead] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can filter leads");
    };
    leads.values().toArray().filter(
      func(lead) {
        lead.status == status
      }
    );
  };

  // Gallery Content Management
  public shared ({ caller }) func addGalleryItem(title : Text, artist : Text, description : Text, image : Storage.ExternalBlob, category : Text, sortOrder : Nat) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can add gallery items");
    };
    let item : GalleryItem = {
      id = nextGalleryItemId;
      title;
      artist;
      description;
      image;
      category;
      sortOrder;
      createdAt = Time.now();
    };
    galleryItems.add(nextGalleryItemId, item);
    nextGalleryItemId += 1;
  };

  public shared ({ caller }) func updateGalleryItem(id : Nat, title : Text, artist : Text, description : Text, image : Storage.ExternalBlob, category : Text, sortOrder : Nat) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update gallery items");
    };
    switch (galleryItems.get(id)) {
      case (null) {
        Runtime.trap("Gallery item not found");
      };
      case (?item) {
        let updatedItem : GalleryItem = {
          id;
          title;
          artist;
          description;
          image;
          category;
          sortOrder;
          createdAt = item.createdAt;
        };
        galleryItems.add(id, updatedItem);
      };
    };
  };

  public shared ({ caller }) func removeGalleryItem(id : Nat) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can remove gallery items");
    };
    galleryItems.remove(id);
  };

  public query ({ caller }) func getGalleryItems() : async [GalleryItem] {
    galleryItems.values().toArray().sort(GalleryItem.compareBySortOrder);
  };

  // Interakt Webhook
  public shared ({ caller }) func setInteraktWebhookUrl(url : Text) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can set webhook URL");
    };
    interaktWebhookUrl := url;
  };

  public query ({ caller }) func getInteraktWebhookUrl() : async Text {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can get webhook URL");
    };
    interaktWebhookUrl;
  };

  public shared ({ caller }) func triggerInteraktNotification(_leadName : Text, _leadPhone : Text, _leadEmail : Text) : async Text {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can trigger notifications");
    };
    if (interaktWebhookUrl == "") {
      return "Not configured";
    };
    Runtime.trap("Not yet supported: JSON serialization not fully supported in current backend core library version. This will be implemented in a future version via Candid serialization!");
  };

  // Site Settings
  public shared ({ caller }) func setSiteSetting(key : Text, value : Text) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can set site settings");
    };
    siteSettings.add(key, value);
  };

  public query ({ caller }) func getSiteSetting(key : Text) : async ?Text {
    siteSettings.get(key);
  };
};
