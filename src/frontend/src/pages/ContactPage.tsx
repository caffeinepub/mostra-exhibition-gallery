import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { MetaTags } from "../components/MetaTags";
import { PageHero } from "../components/PageHero";
import { useSubmitLead } from "../hooks/useQueries";

const WHATSAPP_NUMBER = "919099000000";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi Mostra Exhibition Gallery, I'm interested in your exhibitions/collaboration.",
);

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ArtGallery",
  name: "Mostra Exhibition Gallery",
  description:
    "A premium art and exhibition gallery in Rajkot, Gujarat, India.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gallery Road, Kalawad Road",
    addressLocality: "Rajkot",
    addressRegion: "Gujarat",
    postalCode: "360001",
    addressCountry: "IN",
  },
  telephone: "+91-90990-00000",
  email: "hello@mostra.in",
  openingHours: "Mo-Sa 10:00-19:00",
  geo: { "@type": "GeoCoordinates", latitude: 22.3039, longitude: 70.8022 },
  url: "https://mostra.in",
};

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
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
        message: form.message,
        source: "contact",
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
        title="Contact | Mostra Exhibition Gallery, Rajkot"
        description="Get in touch with Mostra Exhibition Gallery in Rajkot, Gujarat. Visit us, call us, or send a message. Open Monday to Saturday, 10am to 7pm."
        keywords="contact Mostra gallery, Rajkot art gallery address, exhibition gallery contact Gujarat"
        schema={localBusinessSchema}
      />
      <PageHero
        kicker="Reach Out"
        title="Get In Touch"
        subtitle="We'd love to hear from you. Visit us in Rajkot or reach out through any of the channels below."
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Business info */}
              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "Gallery Road, Kalawad Road, Rajkot, Gujarat 360001",
                  },
                  {
                    icon: Clock,
                    label: "Hours",
                    value: "Monday – Saturday: 10:00 AM – 7:00 PM",
                  },
                  { icon: Phone, label: "Phone", value: "+91 90990 00000" },
                  { icon: Mail, label: "Email", value: "hello@mostra.in" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 shrink-0 flex items-center justify-center border border-gold/30 rounded-sm">
                      <Icon size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-sans-ui text-[10px] uppercase tracking-[0.15em] text-gold">
                        {label}
                      </p>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366]/10 border border-[#25D366]/30 rounded-sm px-5 py-4 hover:bg-[#25D366]/20 transition-colors duration-200"
                data-ocid="contact.whatsapp_button"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <MessageCircle size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-sans-ui text-xs uppercase tracking-[0.1em] text-[#25D366] font-medium">
                    Chat on WhatsApp
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Quick response during gallery hours
                  </p>
                </div>
              </a>

              {/* Map placeholder */}
              <div className="rounded-sm border border-border overflow-hidden">
                <div className="bg-[oklch(0.13_0_0)] h-56 flex flex-col items-center justify-center gap-3">
                  <MapPin size={28} className="text-gold" />
                  <div className="text-center">
                    <p className="font-playfair text-base font-bold text-foreground">
                      Mostra Exhibition Gallery
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Rajkot, Gujarat, India
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Rajkot+Gujarat+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans-ui text-[10px] uppercase tracking-[0.15em] text-gold border border-gold/30 px-3 py-1.5 rounded-sm hover:bg-gold/10 transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {submitted ? (
                <div
                  className="bg-card border border-border rounded-sm p-10 text-center"
                  data-ocid="contact.success_state"
                >
                  <CheckCircle size={48} className="text-gold mx-auto mb-4" />
                  <h3 className="font-playfair text-2xl font-bold text-foreground">
                    Message Sent
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card border border-border rounded-sm p-6 lg:p-8 space-y-5"
                  data-ocid="contact.form"
                >
                  <h3 className="font-playfair text-xl font-bold text-foreground uppercase">
                    Send a Message
                  </h3>

                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-name"
                      className="font-sans-ui text-xs uppercase tracking-[0.1em] text-muted-foreground"
                    >
                      Full Name <span className="text-gold">*</span>
                    </Label>
                    <Input
                      id="contact-name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      className="bg-[oklch(0.16_0_0)] border-border text-foreground placeholder:text-muted-foreground focus:border-gold"
                      data-ocid="contact.input"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="contact-email"
                        className="font-sans-ui text-xs uppercase tracking-[0.1em] text-muted-foreground"
                      >
                        Email <span className="text-gold">*</span>
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, email: e.target.value }))
                        }
                        className="bg-[oklch(0.16_0_0)] border-border text-foreground placeholder:text-muted-foreground focus:border-gold"
                        data-ocid="contact.input"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="contact-phone"
                        className="font-sans-ui text-xs uppercase tracking-[0.1em] text-muted-foreground"
                      >
                        Phone
                      </Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, phone: e.target.value }))
                        }
                        className="bg-[oklch(0.16_0_0)] border-border text-foreground placeholder:text-muted-foreground focus:border-gold"
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-message"
                      className="font-sans-ui text-xs uppercase tracking-[0.1em] text-muted-foreground"
                    >
                      Message <span className="text-gold">*</span>
                    </Label>
                    <Textarea
                      id="contact-message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      className="bg-[oklch(0.16_0_0)] border-border text-foreground placeholder:text-muted-foreground focus:border-gold resize-none"
                      data-ocid="contact.textarea"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitLead.isPending}
                    className="w-full bg-gold text-[oklch(0.08_0_0)] hover:opacity-90 font-sans-ui text-xs uppercase tracking-[0.15em] h-11 rounded-sm"
                    data-ocid="contact.submit_button"
                  >
                    {submitLead.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                        Sending...
                      </>
                    ) : (
                      "Send Message"
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
