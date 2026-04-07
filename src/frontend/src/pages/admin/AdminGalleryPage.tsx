import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import { ImageIcon, Loader2, LogOut, Pencil, Plus, Trash2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { ExternalBlob } from "../../backend";
import type { GalleryItem } from "../../backend";
import { MetaTags } from "../../components/MetaTags";
import { useInternetIdentity } from "../../hooks/useInternetIdentity";
import {
  useAddGalleryItem,
  useGalleryItems,
  useRemoveGalleryItem,
  useUpdateGalleryItem,
} from "../../hooks/useQueries";

interface ItemForm {
  title: string;
  artist: string;
  description: string;
  category: string;
  sortOrder: string;
  imageFile: File | null;
  existingImageUrl: string;
}

const SKELETON_KEYS = [
  "gsk-1",
  "gsk-2",
  "gsk-3",
  "gsk-4",
  "gsk-5",
  "gsk-6",
  "gsk-7",
  "gsk-8",
];

const EMPTY_FORM: ItemForm = {
  title: "",
  artist: "",
  description: "",
  category: "",
  sortOrder: "0",
  imageFile: null,
  existingImageUrl: "",
};

export default function AdminGalleryPage() {
  const { clear } = useInternetIdentity();
  const { data: items = [], isLoading } = useGalleryItems();
  const addItem = useAddGalleryItem();
  const updateItem = useUpdateGalleryItem();
  const removeItem = useRemoveGalleryItem();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [form, setForm] = useState<ItemForm>(EMPTY_FORM);
  const [uploadProgress, setUploadProgress] = useState(0);

  const openAdd = () => {
    setEditingItem(null);
    setForm(EMPTY_FORM);
    setDialogOpen(true);
  };

  const openEdit = (item: GalleryItem) => {
    setEditingItem(item);
    setForm({
      title: item.title,
      artist: item.artist,
      description: item.description,
      category: item.category,
      sortOrder: String(item.sortOrder),
      imageFile: null,
      existingImageUrl: item.image.getDirectURL(),
    });
    setDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.artist || !form.category) {
      toast.error("Please fill in required fields.");
      return;
    }

    let imageBlob: ExternalBlob;
    if (form.imageFile) {
      const bytes = new Uint8Array(await form.imageFile.arrayBuffer());
      imageBlob = ExternalBlob.fromBytes(bytes).withUploadProgress((pct) =>
        setUploadProgress(pct),
      );
    } else if (form.existingImageUrl) {
      imageBlob = ExternalBlob.fromURL(form.existingImageUrl);
    } else {
      toast.error("Please select an image.");
      return;
    }

    try {
      if (editingItem) {
        await updateItem.mutateAsync({
          id: editingItem.id,
          title: form.title,
          artist: form.artist,
          description: form.description,
          image: imageBlob,
          category: form.category,
          sortOrder: BigInt(form.sortOrder || "0"),
        });
        toast.success("Gallery item updated");
      } else {
        await addItem.mutateAsync({
          title: form.title,
          artist: form.artist,
          description: form.description,
          image: imageBlob,
          category: form.category,
          sortOrder: BigInt(form.sortOrder || "0"),
        });
        toast.success("Gallery item added");
      }
      setDialogOpen(false);
    } catch {
      toast.error("Failed to save item. Please try again.");
    } finally {
      setUploadProgress(0);
    }
  };

  const handleRemove = async (id: bigint) => {
    try {
      await removeItem.mutateAsync(id);
      toast.success("Item removed");
    } catch {
      toast.error("Failed to remove item");
    }
  };

  const isPending = addItem.isPending || updateItem.isPending;

  return (
    <>
      <MetaTags
        title="Gallery Management | Mostra Admin"
        description="Manage gallery items for Mostra Exhibition Gallery."
      />
      <div className="min-h-screen bg-background" data-ocid="admin.page">
        {/* Admin header */}
        <div className="border-b border-border bg-[oklch(0.10_0_0)] sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="font-playfair text-xl font-bold text-gold tracking-[0.2em] uppercase"
              >
                MOSTRA
              </Link>
              <span className="text-border">|</span>
              <Link
                to="/admin/dashboard"
                className="font-sans-ui text-xs uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
              >
                Dashboard
              </Link>
              <span className="font-sans-ui text-xs uppercase tracking-[0.1em] text-gold">
                Gallery
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={clear}
              className="text-muted-foreground hover:text-foreground font-sans-ui text-xs uppercase tracking-widest gap-2"
              data-ocid="admin.secondary_button"
            >
              <LogOut size={14} /> Logout
            </Button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-playfair text-2xl font-bold text-foreground uppercase">
                Gallery Management
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                {items.length} items in collection
              </p>
            </div>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  onClick={openAdd}
                  className="bg-gold text-[oklch(0.08_0_0)] hover:opacity-90 font-sans-ui text-xs uppercase tracking-[0.1em] gap-2 rounded-sm"
                  data-ocid="admin.open_modal_button"
                >
                  <Plus size={14} /> Add Artwork
                </Button>
              </DialogTrigger>

              <DialogContent
                className="bg-card border-border max-w-lg"
                data-ocid="admin.dialog"
              >
                <DialogHeader>
                  <DialogTitle className="font-playfair text-xl font-bold text-foreground uppercase">
                    {editingItem ? "Edit Artwork" : "Add Artwork"}
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label className="font-sans-ui text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                        Title *
                      </Label>
                      <Input
                        value={form.title}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, title: e.target.value }))
                        }
                        className="bg-[oklch(0.16_0_0)] border-border text-foreground"
                        data-ocid="admin.input"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="font-sans-ui text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                        Artist *
                      </Label>
                      <Input
                        value={form.artist}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, artist: e.target.value }))
                        }
                        className="bg-[oklch(0.16_0_0)] border-border text-foreground"
                        data-ocid="admin.input"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label className="font-sans-ui text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                        Category *
                      </Label>
                      <Input
                        placeholder="e.g. Photography"
                        value={form.category}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, category: e.target.value }))
                        }
                        className="bg-[oklch(0.16_0_0)] border-border text-foreground"
                        data-ocid="admin.input"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="font-sans-ui text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                        Sort Order
                      </Label>
                      <Input
                        type="number"
                        value={form.sortOrder}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, sortOrder: e.target.value }))
                        }
                        className="bg-[oklch(0.16_0_0)] border-border text-foreground"
                        data-ocid="admin.input"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="font-sans-ui text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                      Description
                    </Label>
                    <Textarea
                      rows={3}
                      value={form.description}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, description: e.target.value }))
                      }
                      className="bg-[oklch(0.16_0_0)] border-border text-foreground resize-none"
                      data-ocid="admin.textarea"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="font-sans-ui text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                      {editingItem ? "Replace Image (optional)" : "Image *"}
                    </Label>
                    {form.existingImageUrl && !form.imageFile && (
                      <div className="mb-2 h-24 rounded-sm overflow-hidden">
                        <img
                          src={form.existingImageUrl}
                          alt="Current"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <label
                      htmlFor="gallery-image"
                      className="flex items-center gap-3 cursor-pointer border border-dashed border-border rounded-sm px-4 py-3 hover:border-gold/50 transition-colors"
                      data-ocid="admin.upload_button"
                    >
                      <ImageIcon size={16} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        {form.imageFile
                          ? form.imageFile.name
                          : "Choose image file"}
                      </span>
                      <input
                        id="gallery-image"
                        type="file"
                        accept="image/*"
                        className="sr-only"
                        onChange={(e) => {
                          const file = e.target.files?.[0] ?? null;
                          setForm((p) => ({ ...p, imageFile: file }));
                        }}
                      />
                    </label>
                    {uploadProgress > 0 && uploadProgress < 100 && (
                      <div className="h-1 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gold transition-all duration-200"
                          style={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setDialogOpen(false)}
                      className="flex-1 border-border text-foreground rounded-sm"
                      data-ocid="admin.cancel_button"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={isPending}
                      className="flex-1 bg-gold text-[oklch(0.08_0_0)] hover:opacity-90 rounded-sm gap-2"
                      data-ocid="admin.confirm_button"
                    >
                      {isPending ? (
                        <>
                          <Loader2 size={14} className="animate-spin" /> Saving…
                        </>
                      ) : (
                        "Save Artwork"
                      )}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {isLoading ? (
            <div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
              data-ocid="admin.loading_state"
            >
              {SKELETON_KEYS.map((k) => (
                <Skeleton key={k} className="aspect-square rounded-sm" />
              ))}
            </div>
          ) : items.length === 0 ? (
            <div
              className="text-center py-24 bg-card border border-border rounded-sm"
              data-ocid="admin.empty_state"
            >
              <ImageIcon
                size={36}
                className="text-muted-foreground mx-auto mb-3"
              />
              <p className="font-playfair text-xl font-bold text-foreground">
                No Gallery Items
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Add your first artwork to get started.
              </p>
            </div>
          ) : (
            <div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
              data-ocid="admin.list"
            >
              {items.map((item, i) => (
                <motion.div
                  key={String(item.id)}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="group relative bg-card border border-border rounded-sm overflow-hidden"
                  data-ocid={`admin.item.${i + 1}`}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image.getDirectURL()}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3">
                    <p className="font-playfair text-sm font-bold text-foreground truncate">
                      {item.title}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5 truncate">
                      {item.artist}
                    </p>
                    <p className="font-sans-ui text-[9px] uppercase tracking-wider text-gold mt-1">
                      {item.category}
                    </p>
                  </div>
                  <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-7 w-7 bg-[oklch(0.10_0_0)]/90 border border-border hover:border-gold"
                      onClick={() => openEdit(item)}
                      data-ocid="admin.edit_button"
                    >
                      <Pencil size={12} />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          size="icon"
                          variant="secondary"
                          className="h-7 w-7 bg-[oklch(0.10_0_0)]/90 border border-border hover:border-destructive hover:text-destructive"
                          data-ocid="admin.delete_button"
                        >
                          <Trash2 size={12} />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="bg-card border-border">
                        <AlertDialogHeader>
                          <AlertDialogTitle className="font-playfair text-foreground">
                            Remove Artwork?
                          </AlertDialogTitle>
                          <AlertDialogDescription className="text-muted-foreground">
                            &quot;{item.title}&quot; will be permanently removed
                            from the gallery.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel
                            className="border-border text-foreground"
                            data-ocid="admin.cancel_button"
                          >
                            Cancel
                          </AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleRemove(item.id)}
                            className="bg-destructive text-foreground hover:opacity-90"
                            data-ocid="admin.confirm_button"
                          >
                            Remove
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
