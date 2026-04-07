import { c as createLucideIcon, j as jsxRuntimeExports, m as motion, L as Link } from "./index-kwy3CwmH.js";
import { M as MetaTags } from "./MetaTags-BrbFOQK3.js";
import { P as PageHero } from "./PageHero-CusSHHVp.js";
import { U as Users } from "./users-CloCDCII.js";
import { A as ArrowRight } from "./arrow-right-BaByG2NJ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
const CalendarDays = createLucideIcon("calendar-days", __iconNode$2);
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
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
];
const Camera = createLucideIcon("camera", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }]
];
const Megaphone = createLucideIcon("megaphone", __iconNode);
const services = [
  {
    number: "01",
    icon: Camera,
    title: "Exhibition Hosting",
    description: "Full-service curation and hosting of solo and group exhibitions. From concept development and spatial design to installation, lighting, and opening events — we handle every detail.",
    features: [
      "Curatorial Direction",
      "Spatial & Lighting Design",
      "Artwork Installation",
      "Opening Events"
    ],
    href: "/collaboration"
  },
  {
    number: "02",
    icon: Users,
    title: "Artist Collaboration",
    description: "Strategic partnerships for emerging and established artists. We provide the platform, audience, and industry connections to elevate your practice to new heights.",
    features: [
      "Portfolio Review",
      "Exhibition Opportunities",
      "Press & Publicity",
      "Collector Introductions"
    ],
    href: "/collaboration"
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Brand Promotion",
    description: "Luxury brand experiences and marketing through art. We design immersive brand activations within the gallery context that resonate with high-value, culturally engaged audiences.",
    features: [
      "Brand Installations",
      "Corporate Art Programs",
      "Product Launches",
      "Luxury Experiences"
    ],
    href: "/collaboration"
  },
  {
    number: "04",
    icon: CalendarDays,
    title: "Event Curation",
    description: "Private and corporate event design and execution. From intimate collector dinners to large-scale cultural festivals, we bring creativity and precision to every gathering.",
    features: [
      "Concept & Theme Design",
      "Venue Styling",
      "Guest Experience",
      "Full Production"
    ],
    href: "/collaboration"
  }
];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      MetaTags,
      {
        title: "Services | Mostra Exhibition Gallery, Rajkot",
        description: "Explore Mostra's services: Exhibition Hosting, Artist Collaboration, Brand Promotion, and Event Curation in Rajkot, Gujarat.",
        keywords: "exhibition hosting Rajkot, artist collaboration Gujarat, brand promotion through art, event curation Rajkot"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        kicker: "What We Offer",
        title: "Our Services",
        subtitle: "From intimate solo exhibitions to large-scale brand experiences — we bring artistic vision and flawless execution together."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 lg:py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: services.map((service) => {
      const Icon = service.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "group grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-12 items-start bg-card border border-border rounded-sm p-6 lg:p-10 hover:border-gold/40 transition-colors duration-300",
          "data-ocid": `services.item.${service.number}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 lg:flex-col lg:items-start lg:gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-playfair text-5xl lg:text-7xl font-bold text-[oklch(0.20_0_0)] leading-none", children: service.number }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 flex items-center justify-center border border-gold/30 rounded-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, className: "text-gold" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-2xl lg:text-3xl font-bold text-foreground uppercase tracking-wide", children: service.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base text-muted-foreground leading-relaxed max-w-2xl", children: service.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 flex flex-wrap gap-2", children: service.features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "li",
                {
                  className: "font-sans-ui text-[10px] uppercase tracking-[0.15em] text-muted-foreground border border-border px-3 py-1 rounded-sm",
                  children: feature
                },
                feature
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: service.href,
                className: "inline-flex items-center gap-2 font-sans-ui text-xs uppercase tracking-[0.15em] text-gold hover:text-foreground transition-colors whitespace-nowrap",
                "data-ocid": `services.link.${service.number}`,
                children: [
                  "Enquire ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
                ]
              }
            ) })
          ]
        },
        service.number
      );
    }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 lg:py-20 bg-[oklch(0.08_0_0)] border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-3xl sm:text-4xl font-bold text-foreground uppercase tracking-wide", children: "Ready to Begin?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground max-w-lg mx-auto", children: "Contact us to discuss your project and discover how Mostra can bring your vision to life." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/collaboration",
              className: "inline-flex items-center justify-center px-8 py-3 bg-gold text-[oklch(0.08_0_0)] font-sans-ui text-xs uppercase tracking-[0.15em] font-medium hover:opacity-90 transition-all duration-300 rounded-sm",
              "data-ocid": "services.cta_button",
              children: "Start a Conversation"
            }
          ) })
        ]
      }
    ) }) })
  ] });
}
export {
  ServicesPage as default
};
