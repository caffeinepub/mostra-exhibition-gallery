import { c as createLucideIcon, j as jsxRuntimeExports, X, a as useInternetIdentity, r as reactExports, L as Link, m as motion, u as ue, E as ExternalBlob } from "./index-kwy3CwmH.js";
import { R as Root, i as Trigger, C as Content, j as Close, k as Title, l as Portal, O as Overlay, L as LogOut, A as AlertDialog, a as AlertDialogTrigger, T as Trash2, b as AlertDialogContent, c as AlertDialogHeader, d as AlertDialogTitle, e as AlertDialogDescription, f as AlertDialogFooter, g as AlertDialogCancel, h as AlertDialogAction } from "./alert-dialog-Bgktxncw.js";
import { B as Button, L as LoaderCircle } from "./button-k7_EFqO5.js";
import { c as cn } from "./utils-DbZTExyV.js";
import { I as Input } from "./index-Bp1gYKkQ.js";
import { L as Label, T as Textarea } from "./textarea-BuKaX4T4.js";
import { S as Skeleton } from "./skeleton-CuGLkn9f.js";
import { M as MetaTags } from "./MetaTags-BrbFOQK3.js";
import { u as useGalleryItems, i as useAddGalleryItem, j as useUpdateGalleryItem, k as useRemoveGalleryItem } from "./useQueries-WYGuSho1.js";
import "./Combination-CIO9KBzX.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
];
const Image = createLucideIcon("image", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
const Pencil = createLucideIcon("pencil", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode);
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
const SKELETON_KEYS = [
  "gsk-1",
  "gsk-2",
  "gsk-3",
  "gsk-4",
  "gsk-5",
  "gsk-6",
  "gsk-7",
  "gsk-8"
];
const EMPTY_FORM = {
  title: "",
  artist: "",
  description: "",
  category: "",
  sortOrder: "0",
  imageFile: null,
  existingImageUrl: ""
};
function AdminGalleryPage() {
  const { clear } = useInternetIdentity();
  const { data: items = [], isLoading } = useGalleryItems();
  const addItem = useAddGalleryItem();
  const updateItem = useUpdateGalleryItem();
  const removeItem = useRemoveGalleryItem();
  const [dialogOpen, setDialogOpen] = reactExports.useState(false);
  const [editingItem, setEditingItem] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState(EMPTY_FORM);
  const [uploadProgress, setUploadProgress] = reactExports.useState(0);
  const openAdd = () => {
    setEditingItem(null);
    setForm(EMPTY_FORM);
    setDialogOpen(true);
  };
  const openEdit = (item) => {
    setEditingItem(item);
    setForm({
      title: item.title,
      artist: item.artist,
      description: item.description,
      category: item.category,
      sortOrder: String(item.sortOrder),
      imageFile: null,
      existingImageUrl: item.image.getDirectURL()
    });
    setDialogOpen(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.artist || !form.category) {
      ue.error("Please fill in required fields.");
      return;
    }
    let imageBlob;
    if (form.imageFile) {
      const bytes = new Uint8Array(await form.imageFile.arrayBuffer());
      imageBlob = ExternalBlob.fromBytes(bytes).withUploadProgress(
        (pct) => setUploadProgress(pct)
      );
    } else if (form.existingImageUrl) {
      imageBlob = ExternalBlob.fromURL(form.existingImageUrl);
    } else {
      ue.error("Please select an image.");
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
          sortOrder: BigInt(form.sortOrder || "0")
        });
        ue.success("Gallery item updated");
      } else {
        await addItem.mutateAsync({
          title: form.title,
          artist: form.artist,
          description: form.description,
          image: imageBlob,
          category: form.category,
          sortOrder: BigInt(form.sortOrder || "0")
        });
        ue.success("Gallery item added");
      }
      setDialogOpen(false);
    } catch {
      ue.error("Failed to save item. Please try again.");
    } finally {
      setUploadProgress(0);
    }
  };
  const handleRemove = async (id) => {
    try {
      await removeItem.mutateAsync(id);
      ue.success("Item removed");
    } catch {
      ue.error("Failed to remove item");
    }
  };
  const isPending = addItem.isPending || updateItem.isPending;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      MetaTags,
      {
        title: "Gallery Management | Mostra Admin",
        description: "Manage gallery items for Mostra Exhibition Gallery."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "admin.page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border bg-[oklch(0.10_0_0)] sticky top-0 z-30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/",
              className: "font-playfair text-xl font-bold text-gold tracking-[0.2em] uppercase",
              children: "MOSTRA"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-border", children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/admin/dashboard",
              className: "font-sans-ui text-xs uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors",
              children: "Dashboard"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans-ui text-xs uppercase tracking-[0.1em] text-gold", children: "Gallery" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: clear,
            className: "text-muted-foreground hover:text-foreground font-sans-ui text-xs uppercase tracking-widest gap-2",
            "data-ocid": "admin.secondary_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 14 }),
              " Logout"
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-playfair text-2xl font-bold text-foreground uppercase", children: "Gallery Management" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
              items.length,
              " items in collection"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: dialogOpen, onOpenChange: setDialogOpen, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: openAdd,
                className: "bg-gold text-[oklch(0.08_0_0)] hover:opacity-90 font-sans-ui text-xs uppercase tracking-[0.1em] gap-2 rounded-sm",
                "data-ocid": "admin.open_modal_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
                  " Add Artwork"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DialogContent,
              {
                className: "bg-card border-border max-w-lg",
                "data-ocid": "admin.dialog",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-playfair text-xl font-bold text-foreground uppercase", children: editingItem ? "Edit Artwork" : "Add Artwork" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 mt-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans-ui text-[10px] uppercase tracking-[0.1em] text-muted-foreground", children: "Title *" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            value: form.title,
                            onChange: (e) => setForm((p) => ({ ...p, title: e.target.value })),
                            className: "bg-[oklch(0.16_0_0)] border-border text-foreground",
                            "data-ocid": "admin.input",
                            required: true
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans-ui text-[10px] uppercase tracking-[0.1em] text-muted-foreground", children: "Artist *" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            value: form.artist,
                            onChange: (e) => setForm((p) => ({ ...p, artist: e.target.value })),
                            className: "bg-[oklch(0.16_0_0)] border-border text-foreground",
                            "data-ocid": "admin.input",
                            required: true
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans-ui text-[10px] uppercase tracking-[0.1em] text-muted-foreground", children: "Category *" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            placeholder: "e.g. Photography",
                            value: form.category,
                            onChange: (e) => setForm((p) => ({ ...p, category: e.target.value })),
                            className: "bg-[oklch(0.16_0_0)] border-border text-foreground",
                            "data-ocid": "admin.input",
                            required: true
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans-ui text-[10px] uppercase tracking-[0.1em] text-muted-foreground", children: "Sort Order" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            type: "number",
                            value: form.sortOrder,
                            onChange: (e) => setForm((p) => ({ ...p, sortOrder: e.target.value })),
                            className: "bg-[oklch(0.16_0_0)] border-border text-foreground",
                            "data-ocid": "admin.input"
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans-ui text-[10px] uppercase tracking-[0.1em] text-muted-foreground", children: "Description" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Textarea,
                        {
                          rows: 3,
                          value: form.description,
                          onChange: (e) => setForm((p) => ({ ...p, description: e.target.value })),
                          className: "bg-[oklch(0.16_0_0)] border-border text-foreground resize-none",
                          "data-ocid": "admin.textarea"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans-ui text-[10px] uppercase tracking-[0.1em] text-muted-foreground", children: editingItem ? "Replace Image (optional)" : "Image *" }),
                      form.existingImageUrl && !form.imageFile && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 h-24 rounded-sm overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: form.existingImageUrl,
                          alt: "Current",
                          className: "h-full w-full object-cover"
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "label",
                        {
                          htmlFor: "gallery-image",
                          className: "flex items-center gap-3 cursor-pointer border border-dashed border-border rounded-sm px-4 py-3 hover:border-gold/50 transition-colors",
                          "data-ocid": "admin.upload_button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { size: 16, className: "text-muted-foreground" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: form.imageFile ? form.imageFile.name : "Choose image file" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                id: "gallery-image",
                                type: "file",
                                accept: "image/*",
                                className: "sr-only",
                                onChange: (e) => {
                                  var _a;
                                  const file = ((_a = e.target.files) == null ? void 0 : _a[0]) ?? null;
                                  setForm((p) => ({ ...p, imageFile: file }));
                                }
                              }
                            )
                          ]
                        }
                      ),
                      uploadProgress > 0 && uploadProgress < 100 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 bg-border rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "h-full bg-gold transition-all duration-200",
                          style: { width: `${uploadProgress}%` }
                        }
                      ) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          type: "button",
                          variant: "outline",
                          onClick: () => setDialogOpen(false),
                          className: "flex-1 border-border text-foreground rounded-sm",
                          "data-ocid": "admin.cancel_button",
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          type: "submit",
                          disabled: isPending,
                          className: "flex-1 bg-gold text-[oklch(0.08_0_0)] hover:opacity-90 rounded-sm gap-2",
                          "data-ocid": "admin.confirm_button",
                          children: isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 14, className: "animate-spin" }),
                            " Saving…"
                          ] }) : "Save Artwork"
                        }
                      )
                    ] })
                  ] })
                ]
              }
            )
          ] })
        ] }),
        isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",
            "data-ocid": "admin.loading_state",
            children: SKELETON_KEYS.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-square rounded-sm" }, k))
          }
        ) : items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center py-24 bg-card border border-border rounded-sm",
            "data-ocid": "admin.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Image,
                {
                  size: 36,
                  className: "text-muted-foreground mx-auto mb-3"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-playfair text-xl font-bold text-foreground", children: "No Gallery Items" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Add your first artwork to get started." })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",
            "data-ocid": "admin.list",
            children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.97 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.3, delay: i * 0.03 },
                className: "group relative bg-card border border-border rounded-sm overflow-hidden",
                "data-ocid": `admin.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: item.image.getDirectURL(),
                      alt: item.title,
                      className: "w-full h-full object-cover",
                      loading: "lazy"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-playfair text-sm font-bold text-foreground truncate", children: item.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5 truncate", children: item.artist }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans-ui text-[9px] uppercase tracking-wider text-gold mt-1", children: item.category })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "icon",
                        variant: "secondary",
                        className: "h-7 w-7 bg-[oklch(0.10_0_0)]/90 border border-border hover:border-gold",
                        onClick: () => openEdit(item),
                        "data-ocid": "admin.edit_button",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { size: 12 })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "icon",
                          variant: "secondary",
                          className: "h-7 w-7 bg-[oklch(0.10_0_0)]/90 border border-border hover:border-destructive hover:text-destructive",
                          "data-ocid": "admin.delete_button",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 })
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { className: "bg-card border-border", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { className: "font-playfair text-foreground", children: "Remove Artwork?" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { className: "text-muted-foreground", children: [
                            '"',
                            item.title,
                            '" will be permanently removed from the gallery.'
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            AlertDialogCancel,
                            {
                              className: "border-border text-foreground",
                              "data-ocid": "admin.cancel_button",
                              children: "Cancel"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            AlertDialogAction,
                            {
                              onClick: () => handleRemove(item.id),
                              className: "bg-destructive text-foreground hover:opacity-90",
                              "data-ocid": "admin.confirm_button",
                              children: "Remove"
                            }
                          )
                        ] })
                      ] })
                    ] })
                  ] })
                ]
              },
              String(item.id)
            ))
          }
        )
      ] })
    ] })
  ] });
}
export {
  AdminGalleryPage as default
};
