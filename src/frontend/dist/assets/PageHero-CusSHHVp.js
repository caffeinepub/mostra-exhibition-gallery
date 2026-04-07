import { j as jsxRuntimeExports, m as motion } from "./index-kwy3CwmH.js";
function PageHero({
  kicker,
  title,
  subtitle,
  children,
  backgroundImage
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative pt-36 pb-20 lg:pt-48 lg:pb-28 overflow-hidden",
      style: backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      } : void 0,
      children: [
        backgroundImage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[oklch(0.08_0_0)]/70" }),
        !backgroundImage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[oklch(0.10_0_0)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          kicker && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.4 },
              className: "font-sans-ui text-xs font-medium uppercase tracking-[0.25em] text-gold mb-4",
              children: kicker
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h1,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.1 },
              className: "font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground uppercase tracking-wide leading-tight",
              children: title
            }
          ),
          subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.2 },
              className: "mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed",
              children: subtitle
            }
          ),
          children && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.3 },
              className: "mt-8",
              children
            }
          )
        ] })
      ]
    }
  );
}
export {
  PageHero as P
};
