import { r as reactExports, j as jsxRuntimeExports, m as motion } from "./index-kwy3CwmH.js";
import { B as Badge } from "./badge-y05vpcNf.js";
import { S as Skeleton } from "./skeleton-CuGLkn9f.js";
import { M as MetaTags } from "./MetaTags-BrbFOQK3.js";
import { P as PageHero } from "./PageHero-CusSHHVp.js";
import { u as useGalleryItems } from "./useQueries-WYGuSho1.js";
import "./utils-DbZTExyV.js";
const SAMPLE_ITEMS = [
  {
    id: "s1",
    title: "Echoes in Charcoal",
    artist: "Priya Mehta",
    category: "Drawing",
    year: "2025",
    src: "/assets/generated/gallery-artwork-1.dim_600x800.jpg"
  },
  {
    id: "s2",
    title: "Golden Hour Study",
    artist: "Arjun Trivedi",
    category: "Painting",
    year: "2025",
    src: "/assets/generated/gallery-artwork-2.dim_600x800.jpg"
  },
  {
    id: "s3",
    title: "Geometric Reverie",
    artist: "Kavita Desai",
    category: "Mixed Media",
    year: "2024",
    src: "/assets/generated/gallery-artwork-3.dim_800x600.jpg"
  },
  {
    id: "s4",
    title: "Forms & Shadows",
    artist: "Rohan Shah",
    category: "Photography",
    year: "2025",
    src: "/assets/generated/exhibition-forms-light.dim_800x600.jpg"
  },
  {
    id: "s5",
    title: "Urban Silhouette",
    artist: "Meera Joshi",
    category: "Photography",
    year: "2024",
    src: "/assets/generated/exhibition-sculptures.dim_800x600.jpg"
  },
  {
    id: "s6",
    title: "Clay & Memory",
    artist: "Vivek Nair",
    category: "Sculpture",
    year: "2025",
    src: "/assets/generated/gallery-artwork-1.dim_600x800.jpg"
  }
];
const SKELETON_KEYS = [
  "sk-1",
  "sk-2",
  "sk-3",
  "sk-4",
  "sk-5",
  "sk-6",
  "sk-7",
  "sk-8"
];
function GalleryPage() {
  const { data: galleryItems, isLoading } = useGalleryItems();
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const items = galleryItems && galleryItems.length > 0 ? galleryItems.map((item) => ({
    id: String(item.id),
    title: item.title,
    artist: item.artist,
    category: item.category,
    year: "",
    src: item.image.getDirectURL()
  })) : SAMPLE_ITEMS;
  const categories = [
    "All",
    ...Array.from(new Set(items.map((i) => i.category)))
  ];
  const filtered = activeCategory === "All" ? items : items.filter((i) => i.category === activeCategory);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      MetaTags,
      {
        title: "Gallery | Mostra Exhibition Gallery, Rajkot",
        description: "Browse Mostra's curated gallery collection. Paintings, sculptures, photography, and mixed media artworks from artists across Gujarat and India.",
        keywords: "art gallery Rajkot, exhibition works, paintings sculptures photography Gujarat, Indian contemporary art"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        kicker: "The Collection",
        title: "Gallery",
        subtitle: "A curated selection of works from artists across Gujarat and beyond."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-12 lg:py-16 bg-background",
        "data-ocid": "gallery.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          categories.length > 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex flex-wrap gap-2 mb-10",
              role: "tablist",
              "aria-label": "Filter by category",
              children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  role: "tab",
                  "aria-selected": activeCategory === cat,
                  onClick: () => setActiveCategory(cat),
                  className: `font-sans-ui text-[10px] uppercase tracking-[0.15em] px-4 py-2 rounded-sm border transition-all duration-200 ${activeCategory === cat ? "border-gold text-gold bg-gold/10" : "border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"}`,
                  "data-ocid": "gallery.tab",
                  children: cat
                },
                cat
              ))
            }
          ),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",
              "data-ocid": "gallery.loading_state",
              children: SKELETON_KEYS.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[3/4] rounded-sm" }, k))
            }
          ) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-24", "data-ocid": "gallery.empty_state", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-playfair text-2xl font-bold text-foreground", children: "Gallery Coming Soon" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground max-w-sm mx-auto", children: "Check back for our latest curated works. New pieces are added regularly." })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4",
              "data-ocid": "gallery.list",
              children: filtered.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.4, delay: i % 4 * 0.05 },
                  className: "break-inside-avoid mb-4 group cursor-pointer",
                  "data-ocid": `gallery.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-card border border-border rounded-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: item.src,
                          alt: item.title,
                          className: "w-full object-cover transition-transform duration-500 group-hover:scale-105",
                          loading: "lazy"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-gradient-to-t from-[oklch(0.05_0_0)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-sm font-bold text-foreground", children: item.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[oklch(0.75_0_0)] mt-0.5", children: item.artist })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 px-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-sm font-bold text-foreground", children: item.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                          item.artist,
                          item.year ? ` • ${item.year}` : ""
                        ] })
                      ] }),
                      item.category && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          variant: "outline",
                          className: "text-[10px] border-border text-muted-foreground shrink-0",
                          children: item.category
                        }
                      )
                    ] }) })
                  ]
                },
                item.id
              ))
            }
          )
        ] })
      }
    )
  ] });
}
export {
  GalleryPage as default
};
