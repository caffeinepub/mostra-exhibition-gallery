import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { MetaTags } from "../components/MetaTags";
import { PageHero } from "../components/PageHero";
import { useSubmitLead } from "../hooks/useQueries";

const interests = [
  { value: "artist_collaboration", label: "Artist Collaboration" },
  { value: "brand_partnership", label: "Brand Partnership" },
  { value: "event_curation", label: "Event Curation" },
  { value: "exhibition_inquiry", label: "Exhibition Inquiry" },
];

const COLLABORATION_BENEFITS = [
  "A dedicated gallery space in the heart of Rajkot",
  "A curated audience of art collectors and enthusiasts",
  "End-to-end curatorial and production support",
  "Media coverage and press outreach",
  "Access to our artist and brand network",
];

export default function CollaborationPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const submitLead = useSubmitLead();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      await submitLead.mutateAsync({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: `[${form.interest}] ${form.message}`,
        source: "collaboration",
      });
      setSubmitted(true);
    } catch {
      toast.error(
        "Something went wrong. Please try again or contact us on WhatsApp.",
      );
    }
  };

  return (
    <>
      <MetaTags
        title="Collaborate | Mostra Exhibition Gallery, Rajkot"
        description="Partner with Mostra Exhibition Gallery. Submit your collaboration inquiry for artist partnerships, brand promotions, and event curation in Rajkot."
        keywords="collaborate with gallery Rajkot, artist partnership Gujarat, brand art collaboration, exhibition inquiry"
      />
      <PageHero
        kicker="Partner With Us"
        title="Collaborate With Us"
        subtitle="Whether you're an artist, a brand, or an organiser — we'd love to hear from you."
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-sans-ui text-xs font-medium uppercase tracking-[0.25em] text-gold mb-4">
                Why Mostra
              </p>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground uppercase tracking-wide">
                Your Vision,
                <br />
                <span className="text-gold">Our Platform</span>
              </h2>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                Mostra brings together an established network of artists,
                collectors, brands, and cultural figures in Rajkot and beyond.
                When you collaborate with us, you gain access to:
              </p>
              <ul className="mt-6 space-y-4">
                {COLLABORATION_BENEFITS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {submitted ? (
                <div
                  className="bg-card border border-border rounded-sm p-10 text-center"
                  data-ocid="collaboration.success_state"
                >
                  <CheckCircle size={48} className="text-gold mx-auto mb-4" />
                  <h3 className="font-playfair text-2xl font-bold text-foreground">
                    Thank You!
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    We&apos;ve received your collaboration request. Our team
                    will be in touch within 48 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card border border-border rounded-sm p-6 lg:p-8 space-y-5"
                  data-ocid="collaboration.form"
                >
                  <h3 className="font-playfair text-xl font-bold text-foreground uppercase">
                    Send an Enquiry
                  </h3>

                  <div className="space-y-2">
                    <Label
                      htmlFor="collab-name"
                      className="font-sans-ui text-xs uppercase tracking-[0.1em] text-muted-foreground"
                    >
                      Full Name <span className="text-gold">*</span>
                    </Label>
                    <Input
                      id="collab-name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      className="bg-[oklch(0.16_0_0)] border-border text-foreground placeholder:text-muted-foreground focus:border-gold"
                      data-ocid="collaboration.input"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="collab-email"
                        className="font-sans-ui text-xs uppercase tracking-[0.1em] text-muted-foreground"
                      >
                        Email <span className="text-gold">*</span>
                      </Label>
                      <Input
                        id="collab-email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, email: e.target.value }))
                        }
                        className="bg-[oklch(0.16_0_0)] border-border text-foreground placeholder:text-muted-foreground focus:border-gold"
                        data-ocid="collaboration.input"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="collab-phone"
                        className="font-sans-ui text-xs uppercase tracking-[0.1em] text-muted-foreground"
                      >
                        Phone
                      </Label>
                      <Input
                        id="collab-phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, phone: e.target.value }))
                        }
                        className="bg-[oklch(0.16_0_0)] border-border text-foreground placeholder:text-muted-foreground focus:border-gold"
                        data-ocid="collaboration.input"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-sans-ui text-xs uppercase tracking-[0.1em] text-muted-foreground">
                      Area of Interest
                    </Label>
                    <Select
                      onValueChange={(v) =>
                        setForm((p) => ({ ...p, interest: v }))
                      }
                    >
                      <SelectTrigger
                        className="bg-[oklch(0.16_0_0)] border-border text-foreground focus:ring-gold"
                        data-ocid="collaboration.select"
                      >
                        <SelectValue placeholder="Select an interest" />
                      </SelectTrigger>
                      <SelectContent className="bg-[oklch(0.16_0_0)] border-border">
                        {interests.map((opt) => (
                          <SelectItem
                            key={opt.value}
                            value={opt.value}
                            className="text-foreground focus:bg-[oklch(0.20_0_0)]"
                          >
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="collab-message"
                      className="font-sans-ui text-xs uppercase tracking-[0.1em] text-muted-foreground"
                    >
                      Message <span className="text-gold">*</span>
                    </Label>
                    <Textarea
                      id="collab-message"
                      placeholder="Tell us about your project or vision..."
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      className="bg-[oklch(0.16_0_0)] border-border text-foreground placeholder:text-muted-foreground focus:border-gold resize-none"
                      data-ocid="collaboration.textarea"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitLead.isPending}
                    className="w-full bg-gold text-[oklch(0.08_0_0)] hover:opacity-90 font-sans-ui text-xs uppercase tracking-[0.15em] h-11 rounded-sm"
                    data-ocid="collaboration.submit_button"
                  >
                    {submitLead.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                        Sending...
                      </>
                    ) : (
                      "Submit Enquiry"
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
