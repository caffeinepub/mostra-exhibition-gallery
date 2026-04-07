import { c as createLucideIcon, a as useInternetIdentity, b as useNavigate, r as reactExports, j as jsxRuntimeExports, m as motion, U as UserRole, u as ue } from "./index-kwy3CwmH.js";
import { L as LoaderCircle, B as Button } from "./button-k7_EFqO5.js";
import { M as MetaTags } from "./MetaTags-BrbFOQK3.js";
import { b as useActor, c as useIsAdmin } from "./useQueries-WYGuSho1.js";
import "./utils-DbZTExyV.js";
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
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode$2);
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
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m14.5 9.5-5 5", key: "17q4r4" }],
  ["path", { d: "m9.5 9.5 5 5", key: "18nt4w" }]
];
const ShieldX = createLucideIcon("shield-x", __iconNode$1);
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
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
function AdminLoginPage() {
  const { login, isLoggingIn, identity, isInitializing } = useInternetIdentity();
  const { actor } = useActor();
  const { data: isAdmin, isLoading: checkingAdmin, refetch } = useIsAdmin();
  const navigate = useNavigate();
  const [settingAdmin, setSettingAdmin] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (isAdmin) {
      navigate({ to: "/admin/dashboard" });
    }
  }, [isAdmin, navigate]);
  const handleSetAdmin = async () => {
    if (!actor || !identity) return;
    setSettingAdmin(true);
    try {
      const principal = identity.getPrincipal();
      await actor.assignCallerUserRole(principal, UserRole.admin);
      ue.success("Admin role assigned successfully!");
      refetch();
    } catch {
      ue.error("Failed to set admin role.");
    } finally {
      setSettingAdmin(false);
    }
  };
  const isLoggedIn = !!identity;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      MetaTags,
      {
        title: "Admin Login | Mostra Gallery",
        description: "Admin access for Mostra Exhibition Gallery."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-screen bg-background flex flex-col items-center justify-center px-4",
        "data-ocid": "admin.page",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "w-full max-w-md",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-playfair text-3xl font-bold text-gold tracking-[0.2em] uppercase", children: "MOSTRA" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans-ui text-xs uppercase tracking-[0.15em] text-muted-foreground mt-2", children: "Admin Portal" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "bg-card border border-border rounded-sm p-8 space-y-6",
                  "data-ocid": "admin.dialog",
                  children: isInitializing || checkingAdmin ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex flex-col items-center gap-3 py-6",
                      "data-ocid": "admin.loading_state",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 28, className: "text-gold animate-spin" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Checking authentication…" })
                      ]
                    }
                  ) : !isLoggedIn ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 flex items-center justify-center border border-gold/30 rounded-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 28, className: "text-gold" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-xl font-bold text-foreground uppercase", children: "Admin Access" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Sign in with Internet Identity to access the admin dashboard." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        onClick: login,
                        disabled: isLoggingIn,
                        className: "w-full bg-gold text-[oklch(0.08_0_0)] hover:opacity-90 font-sans-ui text-xs uppercase tracking-[0.15em] h-11 rounded-sm",
                        "data-ocid": "admin.primary_button",
                        children: isLoggingIn ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
                          " Signing In…"
                        ] }) : "Sign In with Internet Identity"
                      }
                    )
                  ] }) : isAdmin === false ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 flex items-center justify-center border border-gold/30 rounded-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldX, { size: 28, className: "text-destructive" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-xl font-bold text-foreground uppercase", children: "First Time Setup" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Your identity is connected but no admin role exists yet. Click below to set yourself as the gallery admin." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-[10px] bg-muted px-2 py-1 rounded font-mono text-muted-foreground break-all", children: identity == null ? void 0 : identity.getPrincipal().toString() })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        onClick: handleSetAdmin,
                        disabled: settingAdmin,
                        className: "w-full bg-gold text-[oklch(0.08_0_0)] hover:opacity-90 font-sans-ui text-xs uppercase tracking-[0.15em] h-11 rounded-sm",
                        "data-ocid": "admin.confirm_button",
                        children: settingAdmin ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
                          " Setting Up…"
                        ] }) : "Set as Admin"
                      }
                    )
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex flex-col items-center gap-3 text-center py-4",
                      "data-ocid": "admin.success_state",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 28, className: "text-gold" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Redirecting to dashboard…" })
                      ]
                    }
                  )
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
export {
  AdminLoginPage as default
};
