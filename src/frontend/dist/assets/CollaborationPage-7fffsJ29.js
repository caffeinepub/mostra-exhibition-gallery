import { r as reactExports, j as jsxRuntimeExports, m as motion, u as ue } from "./index-kwy3CwmH.js";
import { B as Button, L as LoaderCircle } from "./button-k7_EFqO5.js";
import { I as Input } from "./index-Bp1gYKkQ.js";
import { L as Label, T as Textarea } from "./textarea-BuKaX4T4.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BhzVgTB-.js";
import { M as MetaTags } from "./MetaTags-BrbFOQK3.js";
import { P as PageHero } from "./PageHero-CusSHHVp.js";
import { a as useSubmitLead } from "./useQueries-WYGuSho1.js";
import { C as CircleCheckBig } from "./circle-check-big-COb8t3Jg.js";
import "./utils-DbZTExyV.js";
import "./Combination-CIO9KBzX.js";
const interests = [
  { value: "artist_collaboration", label: "Artist Collaboration" },
  { value: "brand_partnership", label: "Brand Partnership" },
  { value: "event_curation", label: "Event Curation" },
  { value: "exhibition_inquiry", label: "Exhibition Inquiry" }
];
const COLLABORATION_BENEFITS = [
  "A dedicated gallery space in the heart of Rajkot",
  "A curated audience of art collectors and enthusiasts",
  "End-to-end curatorial and production support",
  "Media coverage and press outreach",
  "Access to our artist and brand network"
];
function CollaborationPage() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
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
        message: `[${form.interest}] ${form.message}`,
        source: "collaboration"
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
        title: "Collaborate | Mostra Exhibition Gallery, Rajkot",
        description: "Partner with Mostra Exhibition Gallery. Submit your collaboration inquiry for artist partnerships, brand promotions, and event curation in Rajkot.",
        keywords: "collaborate with gallery Rajkot, artist partnership Gujarat, brand art collaboration, exhibition inquiry"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        kicker: "Partner With Us",
        title: "Collaborate With Us",
        subtitle: "Whether you're an artist, a brand, or an organiser — we'd love to hear from you."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 lg:py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans-ui text-xs font-medium uppercase tracking-[0.25em] text-gold mb-4", children: "Why Mostra" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-playfair text-3xl sm:text-4xl font-bold text-foreground uppercase tracking-wide", children: [
              "Your Vision,",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "Our Platform" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base text-muted-foreground leading-relaxed", children: "Mostra brings together an established network of artists, collectors, brands, and cultural figures in Rajkot and beyond. When you collaborate with us, you gain access to:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-4", children: COLLABORATION_BENEFITS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-start gap-3 text-sm text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full bg-gold mt-2.5 shrink-0" }),
                  item
                ]
              },
              item
            )) })
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
              "data-ocid": "collaboration.success_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 48, className: "text-gold mx-auto mb-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-2xl font-bold text-foreground", children: "Thank You!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: "We've received your collaboration request. Our team will be in touch within 48 hours." })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: handleSubmit,
              className: "bg-card border border-border rounded-sm p-6 lg:p-8 space-y-5",
              "data-ocid": "collaboration.form",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-xl font-bold text-foreground uppercase", children: "Send an Enquiry" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Label,
                    {
                      htmlFor: "collab-name",
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
                      id: "collab-name",
                      placeholder: "Your full name",
                      value: form.name,
                      onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
                      className: "bg-[oklch(0.16_0_0)] border-border text-foreground placeholder:text-muted-foreground focus:border-gold",
                      "data-ocid": "collaboration.input",
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Label,
                      {
                        htmlFor: "collab-email",
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
                        id: "collab-email",
                        type: "email",
                        placeholder: "your@email.com",
                        value: form.email,
                        onChange: (e) => setForm((p) => ({ ...p, email: e.target.value })),
                        className: "bg-[oklch(0.16_0_0)] border-border text-foreground placeholder:text-muted-foreground focus:border-gold",
                        "data-ocid": "collaboration.input",
                        required: true
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "collab-phone",
                        className: "font-sans-ui text-xs uppercase tracking-[0.1em] text-muted-foreground",
                        children: "Phone"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "collab-phone",
                        type: "tel",
                        placeholder: "+91 XXXXX XXXXX",
                        value: form.phone,
                        onChange: (e) => setForm((p) => ({ ...p, phone: e.target.value })),
                        className: "bg-[oklch(0.16_0_0)] border-border text-foreground placeholder:text-muted-foreground focus:border-gold",
                        "data-ocid": "collaboration.input"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans-ui text-xs uppercase tracking-[0.1em] text-muted-foreground", children: "Area of Interest" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      onValueChange: (v) => setForm((p) => ({ ...p, interest: v })),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          SelectTrigger,
                          {
                            className: "bg-[oklch(0.16_0_0)] border-border text-foreground focus:ring-gold",
                            "data-ocid": "collaboration.select",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select an interest" })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "bg-[oklch(0.16_0_0)] border-border", children: interests.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          SelectItem,
                          {
                            value: opt.value,
                            className: "text-foreground focus:bg-[oklch(0.20_0_0)]",
                            children: opt.label
                          },
                          opt.value
                        )) })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Label,
                    {
                      htmlFor: "collab-message",
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
                      id: "collab-message",
                      placeholder: "Tell us about your project or vision...",
                      rows: 5,
                      value: form.message,
                      onChange: (e) => setForm((p) => ({ ...p, message: e.target.value })),
                      className: "bg-[oklch(0.16_0_0)] border-border text-foreground placeholder:text-muted-foreground focus:border-gold resize-none",
                      "data-ocid": "collaboration.textarea",
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
                    "data-ocid": "collaboration.submit_button",
                    children: submitLead.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
                      " ",
                      "Sending..."
                    ] }) : "Submit Enquiry"
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
  CollaborationPage as default
};
