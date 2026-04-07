import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, m as motion, u as ue } from "./index-kwy3CwmH.js";
import { B as Button, L as LoaderCircle } from "./button-k7_EFqO5.js";
import { I as Input } from "./index-Bp1gYKkQ.js";
import { L as Label, T as Textarea } from "./textarea-BuKaX4T4.js";
import { M as MetaTags } from "./MetaTags-BrbFOQK3.js";
import { P as PageHero } from "./PageHero-CusSHHVp.js";
import { a as useSubmitLead } from "./useQueries-WYGuSho1.js";
import { M as MapPin } from "./map-pin-DOGCAUmq.js";
import { C as CircleCheckBig } from "./circle-check-big-COb8t3Jg.js";
import "./utils-DbZTExyV.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$1);
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
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);
const WHATSAPP_NUMBER = "919099000000";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi Mostra Exhibition Gallery, I'm interested in your exhibitions/collaboration."
);
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ArtGallery",
  name: "Mostra Exhibition Gallery",
  description: "A premium art and exhibition gallery in Rajkot, Gujarat, India.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gallery Road, Kalawad Road",
    addressLocality: "Rajkot",
    addressRegion: "Gujarat",
    postalCode: "360001",
    addressCountry: "IN"
  },
  telephone: "+91-90990-00000",
  email: "hello@mostra.in",
  openingHours: "Mo-Sa 10:00-19:00",
  geo: { "@type": "GeoCoordinates", latitude: 22.3039, longitude: 70.8022 },
  url: "https://mostra.in"
};
function ContactPage() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const submitLead = useSubmitLead();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      ue.error("Please fill in all required fields.");
      return;
    }
    try {
      await submitLead.mutateAsync({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        source: "contact"
      });
      setSubmitted(true);
    } catch {
      ue.error(
        "Something went wrong. Please try again or contact us on WhatsApp."
      );
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      MetaTags,
      {
        title: "Contact | Mostra Exhibition Gallery, Rajkot",
        description: "Get in touch with Mostra Exhibition Gallery in Rajkot, Gujarat. Visit us, call us, or send a message. Open Monday to Saturday, 10am to 7pm.",
        keywords: "contact Mostra gallery, Rajkot art gallery address, exhibition gallery contact Gujarat",
        schema: localBusinessSchema
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        kicker: "Reach Out",
        title: "Get In Touch",
        subtitle: "We'd love to hear from you. Visit us in Rajkot or reach out through any of the channels below."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 lg:py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "space-y-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
              {
                icon: MapPin,
                label: "Address",
                value: "Gallery Road, Kalawad Road, Rajkot, Gujarat 360001"
              },
              {
                icon: Clock,
                label: "Hours",
                value: "Monday – Saturday: 10:00 AM – 7:00 PM"
              },
              { icon: Phone, label: "Phone", value: "+91 90990 00000" },
              { icon: Mail, label: "Email", value: "hello@mostra.in" }
            ].map(({ icon: Icon, label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 shrink-0 flex items-center justify-center border border-gold/30 rounded-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16, className: "text-gold" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans-ui text-[10px] uppercase tracking-[0.15em] text-gold", children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: value })
              ] })
            ] }, label)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-3 bg-[#25D366]/10 border border-[#25D366]/30 rounded-sm px-5 py-4 hover:bg-[#25D366]/20 transition-colors duration-200",
                "data-ocid": "contact.whatsapp_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                      style: { backgroundColor: "#25D366" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 18, className: "text-white" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans-ui text-xs uppercase tracking-[0.1em] text-[#25D366] font-medium", children: "Chat on WhatsApp" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Quick response during gallery hours" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-sm border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[oklch(0.13_0_0)] h-56 flex flex-col items-center justify-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 28, className: "text-gold" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-playfair text-base font-bold text-foreground", children: "Mostra Exhibition Gallery" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Rajkot, Gujarat, India" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://maps.google.com/?q=Rajkot+Gujarat+India",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "font-sans-ui text-[10px] uppercase tracking-[0.15em] text-gold border border-gold/30 px-3 py-1.5 rounded-sm hover:bg-gold/10 transition-colors",
                  children: "Open in Google Maps"
                }
              )
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: 0.1 },
          children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-sm p-10 text-center",
              "data-ocid": "contact.success_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 48, className: "text-gold mx-auto mb-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-2xl font-bold text-foreground", children: "Message Sent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: "Thank you for reaching out. We'll get back to you within 24 hours." })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: handleSubmit,
              className: "bg-card border border-border rounded-sm p-6 lg:p-8 space-y-5",
              "data-ocid": "contact.form",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-xl font-bold text-foreground uppercase", children: "Send a Message" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Label,
                    {
                      htmlFor: "contact-name",
                      className: "font-sans-ui text-xs uppercase tracking-[0.1em] text-muted-foreground",
                      children: [
                        "Full Name ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "*" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "contact-name",
                      placeholder: "Your full name",
                      value: form.name,
                      onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
                      className: "bg-[oklch(0.16_0_0)] border-border text-foreground placeholder:text-muted-foreground focus:border-gold",
                      "data-ocid": "contact.input",
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Label,
                      {
                        htmlFor: "contact-email",
                        className: "font-sans-ui text-xs uppercase tracking-[0.1em] text-muted-foreground",
                        children: [
                          "Email ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "*" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "contact-email",
                        type: "email",
                        placeholder: "your@email.com",
                        value: form.email,
                        onChange: (e) => setForm((p) => ({ ...p, email: e.target.value })),
                        className: "bg-[oklch(0.16_0_0)] border-border text-foreground placeholder:text-muted-foreground focus:border-gold",
                        "data-ocid": "contact.input",
                        required: true
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "contact-phone",
                        className: "font-sans-ui text-xs uppercase tracking-[0.1em] text-muted-foreground",
                        children: "Phone"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "contact-phone",
                        type: "tel",
                        placeholder: "+91 XXXXX XXXXX",
                        value: form.phone,
                        onChange: (e) => setForm((p) => ({ ...p, phone: e.target.value })),
                        className: "bg-[oklch(0.16_0_0)] border-border text-foreground placeholder:text-muted-foreground focus:border-gold",
                        "data-ocid": "contact.input"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Label,
                    {
                      htmlFor: "contact-message",
                      className: "font-sans-ui text-xs uppercase tracking-[0.1em] text-muted-foreground",
                      children: [
                        "Message ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "*" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Textarea,
                    {
                      id: "contact-message",
                      placeholder: "How can we help you?",
                      rows: 5,
                      value: form.message,
                      onChange: (e) => setForm((p) => ({ ...p, message: e.target.value })),
                      className: "bg-[oklch(0.16_0_0)] border-border text-foreground placeholder:text-muted-foreground focus:border-gold resize-none",
                      "data-ocid": "contact.textarea",
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    disabled: submitLead.isPending,
                    className: "w-full bg-gold text-[oklch(0.08_0_0)] hover:opacity-90 font-sans-ui text-xs uppercase tracking-[0.15em] h-11 rounded-sm",
                    "data-ocid": "contact.submit_button",
                    children: submitLead.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
                      " ",
                      "Sending..."
                    ] }) : "Send Message"
                  }
                )
              ]
            }
          )
        }
      )
    ] }) }) })
  ] });
}
export {
  ContactPage as default
};
