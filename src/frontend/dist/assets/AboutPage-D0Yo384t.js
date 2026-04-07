import { c as createLucideIcon, j as jsxRuntimeExports, m as motion } from "./index-kwy3CwmH.js";
import { M as MetaTags } from "./MetaTags-BrbFOQK3.js";
import { P as PageHero } from "./PageHero-CusSHHVp.js";
import { U as Users } from "./users-CloCDCII.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode);
const values = [
  {
    icon: Award,
    title: "Curated Excellence",
    description: "Every exhibition is handpicked and thoughtfully composed to deliver the highest standard of artistic presentation."
  },
  {
    icon: Heart,
    title: "Artist First",
    description: "We exist to elevate artists. From emerging talent to established names, Mostra provides the platform, support, and audience every artist deserves."
  },
  {
    icon: Globe,
    title: "Cultural Heritage",
    description: "Deeply rooted in Gujarat's rich creative tradition, we celebrate local culture while connecting it to the global art conversation."
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Art is transformative. We build meaningful connections between artists, collectors, brands, and the wider Rajkot community."
  }
];
const team = [
  {
    name: "Aditya Shah",
    role: "Founder & Creative Director",
    description: "With over a decade in curatorial practice, Aditya founded Mostra to make Rajkot a name on the global art map."
  },
  {
    name: "Riya Patel",
    role: "Head of Artist Relations",
    description: "Riya bridges the gap between emerging artists and the gallery, nurturing talent and building long-term partnerships."
  },
  {
    name: "Nikhil Desai",
    role: "Events & Curation Lead",
    description: "A master of experiential design, Nikhil transforms every exhibition into an immersive journey guests return to again and again."
  }
];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      MetaTags,
      {
        title: "About Mostra | Premium Exhibition Gallery, Rajkot",
        description: "Learn about Mostra Exhibition Gallery — Rajkot's premier art space founded to bridge local artists with global audiences.",
        keywords: "about Mostra gallery, Rajkot art gallery story, exhibition space Gujarat, premium gallery India"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        kicker: "Our Story",
        title: "About Mostra",
        subtitle: "A premium exhibition gallery in Rajkot, Gujarat — founded to bridge the gap between local artists and global audiences.",
        backgroundImage: "/assets/generated/hero-gallery-interior.dim_1920x1080.jpg"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 lg:py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans-ui text-xs font-medium uppercase tracking-[0.25em] text-gold mb-4", children: "The Beginning" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-3xl sm:text-4xl font-bold text-foreground uppercase tracking-wide", children: "Where It All Began" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-5 text-base text-muted-foreground leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Mostra was born from a simple yet powerful observation: Rajkot, a city pulsing with creativity, lacked a dedicated space where art could breathe and audiences could truly connect with it." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "In 2016, our founder envisioned a gallery that would be more than walls and frames — a living institution championing the artists of Gujarat while welcoming voices from across India and the world." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Today, Mostra stands as Rajkot's most respected exhibition destination, having hosted over 50 exhibitions, collaborated with 120+ artists, and curated 300+ events spanning intimate solo shows to large-scale brand experiences." })
          ] })
        ]
      }
    ) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 lg:py-24 bg-[oklch(0.08_0_0)] border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans-ui text-xs font-medium uppercase tracking-[0.25em] text-gold mb-6", children: "Our Mission" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-wide leading-snug max-w-4xl mx-auto", children: "“To curate transformative experiences that celebrate artistic excellence and cultural heritage.”" })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 lg:py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans-ui text-xs font-medium uppercase tracking-[0.25em] text-gold mb-4", children: "What We Stand For" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-3xl sm:text-4xl font-bold text-foreground uppercase tracking-wide", children: "Our Values" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: values.map((value) => {
        const Icon = value.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            className: "bg-card border border-border rounded-sm p-6 hover:border-gold/50 transition-colors duration-300",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 flex items-center justify-center border border-gold/30 rounded-sm mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, className: "text-gold" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-lg font-bold text-foreground", children: value.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: value.description })
            ]
          },
          value.title
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 lg:py-24 bg-[oklch(0.08_0_0)] border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans-ui text-xs font-medium uppercase tracking-[0.25em] text-gold mb-4", children: "The Team" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-3xl sm:text-4xl font-bold text-foreground uppercase tracking-wide", children: "Faces Behind Mostra" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: team.map((member) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "bg-card border border-border rounded-sm p-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-sm bg-[oklch(0.20_0_0)] border border-border flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-playfair text-2xl font-bold text-gold", children: member.name.charAt(0) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-xl font-bold text-foreground", children: member.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans-ui text-xs uppercase tracking-[0.1em] text-gold mt-1 mb-3", children: member.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: member.description })
          ]
        },
        member.name
      )) })
    ] }) })
  ] });
}
export {
  AboutPage as default
};
