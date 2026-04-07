import { c as createLucideIcon, j as jsxRuntimeExports, m as motion, L as Link } from "./index-kwy3CwmH.js";
import { M as MetaTags } from "./MetaTags-BrbFOQK3.js";
import { u as useGalleryItems } from "./useQueries-WYGuSho1.js";
import { A as ArrowRight } from "./arrow-right-BaByG2NJ.js";
import { M as MapPin } from "./map-pin-DOGCAUmq.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode);
const exhibitions = [
  {
    id: 1,
    title: "Forms & Light",
    subtitle: "A Study in Contrast",
    date: "April 1 – May 15, 2026",
    category: "Photography",
    image: "/assets/generated/exhibition-forms-light.dim_800x600.jpg"
  },
  {
    id: 2,
    title: "The Sculptural Mind",
    subtitle: "Contemporary Voices in Clay",
    date: "May 20 – June 30, 2026",
    category: "Sculpture",
    image: "/assets/generated/exhibition-sculptures.dim_800x600.jpg"
  }
];
const SAMPLE_ARTWORKS = [
  {
    title: "Echoes in Charcoal",
    artist: "Priya Mehta",
    src: "/assets/generated/gallery-artwork-1.dim_600x800.jpg"
  },
  {
    title: "Golden Hour Study",
    artist: "Arjun Trivedi",
    src: "/assets/generated/gallery-artwork-2.dim_600x800.jpg"
  },
  {
    title: "Geometric Reverie",
    artist: "Kavita Desai",
    src: "/assets/generated/gallery-artwork-3.dim_800x600.jpg"
  }
];
const STATS = [
  { number: "50+", label: "Exhibitions Hosted" },
  { number: "120+", label: "Artists Collaborated" },
  { number: "8", label: "Years of Excellence" },
  { number: "300+", label: "Events Curated" }
];
function HomePage() {
  const { data: galleryItems } = useGalleryItems();
  const featuredItems = (galleryItems == null ? void 0 : galleryItems.slice(0, 3)) ?? [];
  const displayArtworks = featuredItems.length > 0 ? featuredItems.map((item) => ({
    title: item.title,
    artist: item.artist,
    src: item.image.getDirectURL()
  })) : SAMPLE_ARTWORKS;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      MetaTags,
      {
        title: "Mostra Exhibition Gallery | Rajkot, India",
        description: "Mostra is a premium art and exhibition gallery in Rajkot, Gujarat, India. Discover curated exhibitions, artist collaborations, and luxury art experiences.",
        keywords: "art gallery Rajkot, exhibition gallery Gujarat, artist collaboration Rajkot, luxury art space India, Mostra gallery",
        ogImage: "/assets/generated/hero-gallery-interior.dim_1920x1080.jpg"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-screen flex items-center overflow-hidden",
        style: {
          backgroundImage: "url(/assets/generated/hero-gallery-interior.dim_1920x1080.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[oklch(0.05_0_0)]/75" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[oklch(0.05_0_0)]/90 via-[oklch(0.05_0_0)]/50 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                className: "font-sans-ui text-xs font-medium uppercase tracking-[0.3em] text-gold mb-6",
                children: "Rajkot, Gujarat, India"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.h1,
              {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.1 },
                className: "font-playfair text-6xl sm:text-7xl lg:text-8xl font-bold text-foreground uppercase tracking-wide leading-none",
                children: [
                  "CURATED",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "ELEGANCE" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.25 },
                className: "mt-6 text-base sm:text-lg text-[oklch(0.78_0_0)] max-w-xl leading-relaxed",
                children: [
                  "Where art meets architecture. Discover curated exhibitions",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden sm:block" }),
                  "that redefine the gallery experience in Rajkot, India."
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.4 },
                className: "mt-10 flex flex-col sm:flex-row gap-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/gallery",
                      className: "inline-flex items-center justify-center gap-2 px-8 py-3 border border-gold text-gold font-sans-ui text-xs uppercase tracking-[0.15em] hover:bg-gold hover:text-[oklch(0.08_0_0)] transition-all duration-300 rounded-sm",
                      "data-ocid": "hero.primary_button",
                      children: [
                        "Explore Exhibitions ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/collaboration",
                      className: "inline-flex items-center justify-center px-8 py-3 bg-gold text-[oklch(0.08_0_0)] font-sans-ui text-xs uppercase tracking-[0.15em] font-medium hover:opacity-90 transition-all duration-300 rounded-sm",
                      "data-ocid": "hero.secondary_button",
                      children: "Book a Consultation"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",
              initial: { opacity: 0 },
              animate: { opacity: 0.5 },
              transition: { delay: 1, duration: 0.5 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans-ui text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "Scroll" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "w-px h-10 bg-muted-foreground",
                    animate: { scaleY: [0.5, 1, 0.5] },
                    transition: { repeat: Number.POSITIVE_INFINITY, duration: 1.5 },
                    style: { transformOrigin: "top" }
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 lg:py-24 bg-background",
        "data-ocid": "exhibitions.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans-ui text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3", children: "Current Exhibitions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-wide", children: "On Display Now" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8", children: exhibitions.map((exhibition, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: i * 0.1 },
              className: "group relative overflow-hidden rounded-sm border border-border bg-card cursor-pointer hover:border-gold/50 transition-all duration-300",
              "data-ocid": `exhibitions.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-72 overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: exhibition.image,
                      alt: exhibition.title,
                      className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                      loading: "lazy"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0_0)]/90 via-[oklch(0.08_0_0)]/30 to-transparent" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block font-sans-ui text-[10px] uppercase tracking-[0.2em] text-gold border border-gold/40 px-2 py-0.5 rounded-sm mb-3", children: exhibition.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-2xl font-bold text-foreground uppercase", children: exhibition.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: exhibition.subtitle }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-3 text-xs text-muted-foreground font-sans-ui", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 12 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: exhibition.date })
                  ] })
                ] })
              ]
            },
            exhibition.id
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 lg:py-24 bg-[oklch(0.08_0_0)]",
        "data-ocid": "featured.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans-ui text-xs font-medium uppercase tracking-[0.25em] text-gold mb-3", children: "Featured Artworks" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-3xl sm:text-4xl font-bold text-foreground uppercase tracking-wide", children: "From the Collection" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/gallery",
                    className: "font-sans-ui text-xs uppercase tracking-[0.15em] text-gold hover:text-foreground flex items-center gap-2 transition-colors",
                    "data-ocid": "featured.link",
                    children: [
                      "View All ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: displayArtworks.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: i * 0.1 },
              className: "group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-card border border-border rounded-sm aspect-[3/4]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: item.src,
                      alt: item.title,
                      className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                      loading: "lazy"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[oklch(0.05_0_0)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 px-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-base font-bold text-foreground", children: item.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: item.artist })
                ] })
              ]
            },
            item.title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 lg:py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans-ui text-xs font-medium uppercase tracking-[0.25em] text-gold mb-4", children: "About Mostra" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-wide leading-tight", children: [
              "Rajkot's Premier",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "Exhibition Space" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base text-muted-foreground leading-relaxed", children: "Founded to bridge the gap between local artists and global audiences, Mostra is a premium art and exhibition space in the heart of Rajkot, Gujarat. We curate transformative experiences that celebrate artistic excellence and cultural heritage." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col sm:flex-row gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/about",
                  className: "inline-flex items-center gap-2 font-sans-ui text-xs uppercase tracking-[0.15em] text-gold hover:text-foreground transition-colors",
                  "data-ocid": "about.link",
                  children: [
                    "Our Story ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/services",
                  className: "inline-flex items-center gap-2 font-sans-ui text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors",
                  "data-ocid": "services.link",
                  children: [
                    "Our Services ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
                  ]
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.2 },
          className: "grid grid-cols-2 gap-4",
          children: STATS.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-sm p-6 text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-playfair text-3xl font-bold text-gold", children: stat.number }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs font-sans-ui uppercase tracking-[0.1em] text-muted-foreground", children: stat.label })
              ]
            },
            stat.label
          ))
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 lg:py-20 bg-[oklch(0.08_0_0)] border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans-ui text-xs font-medium uppercase tracking-[0.25em] text-gold mb-4", children: "Ready to Create?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-wide", children: [
            "Let's Build Something",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "Extraordinary Together" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground max-w-xl mx-auto", children: "Whether you're an emerging artist, an established brand, or an event organiser \\u2014 Mostra is your stage." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/collaboration",
                className: "inline-flex items-center justify-center px-8 py-3 bg-gold text-[oklch(0.08_0_0)] font-sans-ui text-xs uppercase tracking-[0.15em] font-medium hover:opacity-90 transition-all duration-300 rounded-sm",
                "data-ocid": "cta.primary_button",
                children: "Start Collaborating"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/contact",
                className: "inline-flex items-center justify-center gap-2 px-8 py-3 border border-border text-foreground font-sans-ui text-xs uppercase tracking-[0.15em] hover:border-gold hover:text-gold transition-all duration-300 rounded-sm",
                "data-ocid": "cta.secondary_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14 }),
                  " Visit Us in Rajkot"
                ]
              }
            )
          ] })
        ]
      }
    ) }) })
  ] });
}
export {
  HomePage as default
};
