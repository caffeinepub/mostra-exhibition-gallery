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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@tanstack/react-router";
import { Loader2, LogOut, RefreshCw, Save, Trash2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import type { Lead } from "../../backend";
import { MetaTags } from "../../components/MetaTags";
import { useInternetIdentity } from "../../hooks/useInternetIdentity";
import {
  useDeleteLead,
  useInteraktWebhookUrl,
  useLeads,
  useSetInteraktWebhookUrl,
  useUpdateLeadStatus,
} from "../../hooks/useQueries";

const STATUS_COLORS: Record<string, string> = {
  new: "border-gold text-gold",
  contacted: "border-blue-400 text-blue-400",
  converted: "border-green-400 text-green-400",
  closed: "border-muted-foreground text-muted-foreground",
};

function formatDate(ts: bigint) {
  return new Date(Number(ts) / 1_000_000).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function AdminDashboardPage() {
  const { clear } = useInternetIdentity();
  const { data: leads = [], isLoading, refetch } = useLeads();
  const updateStatus = useUpdateLeadStatus();
  const deleteLead = useDeleteLead();
  const { data: webhookUrl = "", isLoading: loadingWebhook } =
    useInteraktWebhookUrl();
  const setWebhookUrl = useSetInteraktWebhookUrl();

  const [sourceFilter, setSourceFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [webhookInput, setWebhookInput] = useState("");
  const [webhookInitialized, setWebhookInitialized] = useState(false);

  if (!webhookInitialized && webhookUrl) {
    setWebhookInput(webhookUrl);
    setWebhookInitialized(true);
  }

  const filtered = leads.filter((l: Lead) => {
    const sourceOk = sourceFilter === "all" || l.source === sourceFilter;
    const statusOk = statusFilter === "all" || l.status === statusFilter;
    return sourceOk && statusOk;
  });

  const handleStatusChange = async (id: bigint, status: string) => {
    try {
      await updateStatus.mutateAsync({ id, status });
      toast.success("Status updated");
    } catch {
      toast.error("Failed to update status");
    }
  };

  const handleDelete = async (id: bigint) => {
    try {
      await deleteLead.mutateAsync(id);
      toast.success("Lead deleted");
    } catch {
      toast.error("Failed to delete lead");
    }
  };

  const handleSaveWebhook = async () => {
    try {
      await setWebhookUrl.mutateAsync(webhookInput);
      toast.success("Webhook URL saved");
    } catch {
      toast.error("Failed to save webhook URL");
    }
  };

  return (
    <>
      <MetaTags
        title="Admin Dashboard | Mostra Gallery"
        description="CRM dashboard for Mostra Gallery."
      />
      <div className="min-h-screen bg-background" data-ocid="admin.page">
        {/* Admin header */}
        <div className="border-b border-border bg-[oklch(0.10_0_0)] sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="font-playfair text-xl font-bold text-gold tracking-[0.2em] uppercase"
              >
                MOSTRA
              </Link>
              <span className="font-sans-ui text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                Admin
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
          <Tabs defaultValue="leads">
            <TabsList className="mb-8 bg-card border border-border">
              <TabsTrigger
                value="leads"
                className="font-sans-ui text-xs uppercase tracking-[0.1em] data-[state=active]:bg-gold data-[state=active]:text-[oklch(0.08_0_0)]"
                data-ocid="admin.tab"
              >
                Leads CRM
              </TabsTrigger>
              <TabsTrigger
                value="gallery"
                className="font-sans-ui text-xs uppercase tracking-[0.1em] data-[state=active]:bg-gold data-[state=active]:text-[oklch(0.08_0_0)]"
                data-ocid="admin.tab"
              >
                Gallery
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                className="font-sans-ui text-xs uppercase tracking-[0.1em] data-[state=active]:bg-gold data-[state=active]:text-[oklch(0.08_0_0)]"
                data-ocid="admin.tab"
              >
                Settings
              </TabsTrigger>
            </TabsList>

            {/* LEADS CRM */}
            <TabsContent value="leads">
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Select value={sourceFilter} onValueChange={setSourceFilter}>
                  <SelectTrigger
                    className="w-full sm:w-44 bg-card border-border text-foreground"
                    data-ocid="admin.select"
                  >
                    <SelectValue placeholder="Filter by Source" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="all">All Sources</SelectItem>
                    <SelectItem value="collaboration">Collaboration</SelectItem>
                    <SelectItem value="contact">Contact</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger
                    className="w-full sm:w-44 bg-card border-border text-foreground"
                    data-ocid="admin.select"
                  >
                    <SelectValue placeholder="Filter by Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="converted">Converted</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => refetch()}
                  className="border-border text-muted-foreground hover:text-foreground gap-2"
                  data-ocid="admin.secondary_button"
                >
                  <RefreshCw size={14} /> Refresh
                </Button>
              </div>

              {isLoading ? (
                <div
                  className="flex items-center justify-center py-20"
                  data-ocid="admin.loading_state"
                >
                  <Loader2 size={24} className="text-gold animate-spin" />
                </div>
              ) : filtered.length === 0 ? (
                <div
                  className="text-center py-20 bg-card border border-border rounded-sm"
                  data-ocid="admin.empty_state"
                >
                  <p className="font-playfair text-xl font-bold text-foreground">
                    No leads found
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Leads from your forms will appear here.
                  </p>
                </div>
              ) : (
                <div
                  className="rounded-sm border border-border overflow-hidden"
                  data-ocid="admin.table"
                >
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-border hover:bg-transparent">
                          {[
                            "Name",
                            "Contact",
                            "Source",
                            "Message",
                            "Date",
                            "Status",
                            "Actions",
                          ].map((h) => (
                            <TableHead
                              key={h}
                              className="font-sans-ui text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
                            >
                              {h}
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filtered.map((lead: Lead, i: number) => (
                          <TableRow
                            key={String(lead.id)}
                            className="border-border hover:bg-[oklch(0.13_0_0)]"
                            data-ocid={`admin.row.${i + 1}`}
                          >
                            <TableCell className="font-medium text-foreground whitespace-nowrap">
                              {lead.name}
                            </TableCell>
                            <TableCell className="text-xs">
                              <div>{lead.email}</div>
                              <div className="text-muted-foreground">
                                {lead.phone}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className="text-[10px] border-border text-muted-foreground uppercase tracking-wider"
                              >
                                {lead.source}
                              </Badge>
                            </TableCell>
                            <TableCell className="max-w-[180px] truncate text-muted-foreground text-xs">
                              {lead.message}
                            </TableCell>
                            <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                              {formatDate(lead.timestamp)}
                            </TableCell>
                            <TableCell>
                              <Select
                                value={lead.status}
                                onValueChange={(v) =>
                                  handleStatusChange(lead.id, v)
                                }
                              >
                                <SelectTrigger
                                  className={`h-7 text-[10px] uppercase tracking-wider w-28 bg-transparent border ${STATUS_COLORS[lead.status] ?? "border-border text-muted-foreground"}`}
                                  data-ocid="admin.select"
                                >
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-card border-border">
                                  {[
                                    "new",
                                    "contacted",
                                    "converted",
                                    "closed",
                                  ].map((s) => (
                                    <SelectItem
                                      key={s}
                                      value={s}
                                      className="text-foreground text-xs uppercase"
                                    >
                                      {s}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </TableCell>
                            <TableCell>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-7 w-7 text-muted-foreground hover:text-destructive"
                                    data-ocid="admin.delete_button"
                                  >
                                    <Trash2 size={14} />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent className="bg-card border-border">
                                  <AlertDialogHeader>
                                    <AlertDialogTitle className="font-playfair text-foreground">
                                      Delete Lead?
                                    </AlertDialogTitle>
                                    <AlertDialogDescription className="text-muted-foreground">
                                      This action cannot be undone. The lead
                                      from {lead.name} will be permanently
                                      removed.
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
                                      onClick={() => handleDelete(lead.id)}
                                      className="bg-destructive text-foreground hover:opacity-90"
                                      data-ocid="admin.confirm_button"
                                    >
                                      Delete
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              )}
            </TabsContent>

            {/* GALLERY (redirect to gallery management) */}
            <TabsContent value="gallery">
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  Manage gallery images and artwork listings.
                </p>
                <Link
                  to="/admin/gallery"
                  className="inline-flex items-center px-6 py-3 bg-gold text-[oklch(0.08_0_0)] font-sans-ui text-xs uppercase tracking-[0.15em] rounded-sm hover:opacity-90 transition-opacity"
                  data-ocid="admin.primary_button"
                >
                  Open Gallery Manager
                </Link>
              </div>
            </TabsContent>

            {/* SETTINGS */}
            <TabsContent value="settings">
              <div className="max-w-lg">
                <h3 className="font-playfair text-xl font-bold text-foreground uppercase mb-2">
                  Interakt Webhook
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Configure your Interakt webhook URL for WhatsApp automation.
                  When a lead is submitted, this endpoint will be triggered.
                </p>
                {loadingWebhook ? (
                  <Loader2
                    size={20}
                    className="text-gold animate-spin"
                    data-ocid="admin.loading_state"
                  />
                ) : (
                  <div className="flex gap-3">
                    <Input
                      placeholder="https://api.interakt.ai/v1/..."
                      value={webhookInput}
                      onChange={(e) => setWebhookInput(e.target.value)}
                      className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-gold flex-1"
                      data-ocid="admin.input"
                    />
                    <Button
                      onClick={handleSaveWebhook}
                      disabled={setWebhookUrl.isPending}
                      className="bg-gold text-[oklch(0.08_0_0)] hover:opacity-90 gap-2 rounded-sm"
                      data-ocid="admin.save_button"
                    >
                      {setWebhookUrl.isPending ? (
                        <Loader2 size={14} className="animate-spin" />
                      ) : (
                        <Save size={14} />
                      )}
                      Save
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
