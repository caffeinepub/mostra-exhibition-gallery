import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { Loader2, Shield, ShieldCheck, ShieldX } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { UserRole } from "../../backend";
import { MetaTags } from "../../components/MetaTags";
import { useActor } from "../../hooks/useActor";
import { useInternetIdentity } from "../../hooks/useInternetIdentity";
import { useIsAdmin } from "../../hooks/useQueries";

export default function AdminLoginPage() {
  const { login, isLoggingIn, identity, isInitializing } =
    useInternetIdentity();
  const { actor } = useActor();
  const { data: isAdmin, isLoading: checkingAdmin, refetch } = useIsAdmin();
  const navigate = useNavigate();
  const [settingAdmin, setSettingAdmin] = useState(false);

  useEffect(() => {
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
      toast.success("Admin role assigned successfully!");
      refetch();
    } catch {
      toast.error("Failed to set admin role.");
    } finally {
      setSettingAdmin(false);
    }
  };

  const isLoggedIn = !!identity;

  return (
    <>
      <MetaTags
        title="Admin Login | Mostra Gallery"
        description="Admin access for Mostra Exhibition Gallery."
      />
      <div
        className="min-h-screen bg-background flex flex-col items-center justify-center px-4"
        data-ocid="admin.page"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-10">
            <p className="font-playfair text-3xl font-bold text-gold tracking-[0.2em] uppercase">
              MOSTRA
            </p>
            <p className="font-sans-ui text-xs uppercase tracking-[0.15em] text-muted-foreground mt-2">
              Admin Portal
            </p>
          </div>

          <div
            className="bg-card border border-border rounded-sm p-8 space-y-6"
            data-ocid="admin.dialog"
          >
            {isInitializing || checkingAdmin ? (
              <div
                className="flex flex-col items-center gap-3 py-6"
                data-ocid="admin.loading_state"
              >
                <Loader2 size={28} className="text-gold animate-spin" />
                <p className="text-sm text-muted-foreground">
                  Checking authentication…
                </p>
              </div>
            ) : !isLoggedIn ? (
              <>
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-14 h-14 flex items-center justify-center border border-gold/30 rounded-sm">
                    <Shield size={28} className="text-gold" />
                  </div>
                  <h2 className="font-playfair text-xl font-bold text-foreground uppercase">
                    Admin Access
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Sign in with Internet Identity to access the admin
                    dashboard.
                  </p>
                </div>
                <Button
                  onClick={login}
                  disabled={isLoggingIn}
                  className="w-full bg-gold text-[oklch(0.08_0_0)] hover:opacity-90 font-sans-ui text-xs uppercase tracking-[0.15em] h-11 rounded-sm"
                  data-ocid="admin.primary_button"
                >
                  {isLoggingIn ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing
                      In…
                    </>
                  ) : (
                    "Sign In with Internet Identity"
                  )}
                </Button>
              </>
            ) : isAdmin === false ? (
              <>
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-14 h-14 flex items-center justify-center border border-gold/30 rounded-sm">
                    <ShieldX size={28} className="text-destructive" />
                  </div>
                  <h2 className="font-playfair text-xl font-bold text-foreground uppercase">
                    First Time Setup
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Your identity is connected but no admin role exists yet.
                    Click below to set yourself as the gallery admin.
                  </p>
                  <code className="text-[10px] bg-muted px-2 py-1 rounded font-mono text-muted-foreground break-all">
                    {identity?.getPrincipal().toString()}
                  </code>
                </div>
                <Button
                  onClick={handleSetAdmin}
                  disabled={settingAdmin}
                  className="w-full bg-gold text-[oklch(0.08_0_0)] hover:opacity-90 font-sans-ui text-xs uppercase tracking-[0.15em] h-11 rounded-sm"
                  data-ocid="admin.confirm_button"
                >
                  {settingAdmin ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Setting
                      Up…
                    </>
                  ) : (
                    "Set as Admin"
                  )}
                </Button>
              </>
            ) : (
              <div
                className="flex flex-col items-center gap-3 text-center py-4"
                data-ocid="admin.success_state"
              >
                <ShieldCheck size={28} className="text-gold" />
                <p className="text-sm text-muted-foreground">
                  Redirecting to dashboard…
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}
