import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Megaphone,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { MetaTags } from "../components/MetaTags";
import { PageHero } from "../components/PageHero";

const services = [
  {
    number: "01",
    icon: Camera,
    title: "Exhibition Hosting",
    description:
      "Full-service curation and hosting of solo and group exhibitions. From concept development and spatial design to installation, lighting, and opening events — we handle every detail.",
    features: [
      "Curatorial Direction",
      "Spatial & Lighting Design",
      "Artwork Installation",
      "Opening Events",
    ],
    href: "/collaboration",
  },
  {
    number: "02",
    icon: Users,
    title: "Artist Collaboration",
    description:
      "Strategic partnerships for emerging and established artists. We provide the platform, audience, and industry connections to elevate your practice to new heights.",
    features: [
      "Portfolio Review",
      "Exhibition Opportunities",
      "Press & Publicity",
      "Collector Introductions",
    ],
    href: "/collaboration",
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Brand Promotion",
    description:
      "Luxury brand experiences and marketing through art. We design immersive brand activations within the gallery context that resonate with high-value, culturally engaged audiences.",
    features: [
      "Brand Installations",
      "Corporate Art Programs",
      "Product Launches",
      "Luxury Experiences",
    ],
    href: "/collaboration",
  },
  {
    number: "04",
    icon: CalendarDays,
    title: "Event Curation",
    description:
      "Private and corporate event design and execution. From intimate collector dinners to large-scale cultural festivals, we bring creativity and precision to every gathering.",
    features: [
      "Concept & Theme Design",
      "Venue Styling",
      "Guest Experience",
      "Full Production",
    ],
    href: "/collaboration",
  },
];

export default function ServicesPage() {
  return (
    <>
      <MetaTags
        title="Services | Mostra Exhibition Gallery, Rajkot"
        description="Explore Mostra's services: Exhibition Hosting, Artist Collaboration, Brand Promotion, and Event Curation in Rajkot, Gujarat."
        keywords="exhibition hosting Rajkot, artist collaboration Gujarat, brand promotion through art, event curation Rajkot"
      />
      <PageHero
        kicker="What We Offer"
        title="Our Services"
        subtitle="From intimate solo exhibitions to large-scale brand experiences — we bring artistic vision and flawless execution together."
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-12 items-start bg-card border border-border rounded-sm p-6 lg:p-10 hover:border-gold/40 transition-colors duration-300"
                  data-ocid={`services.item.${service.number}`}
                >
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-2">
                    <span className="font-playfair text-5xl lg:text-7xl font-bold text-[oklch(0.20_0_0)] leading-none">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 flex items-center justify-center border border-gold/30 rounded-sm">
                      <Icon size={20} className="text-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-foreground uppercase tracking-wide">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="font-sans-ui text-[10px] uppercase tracking-[0.15em] text-muted-foreground border border-border px-3 py-1 rounded-sm"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center">
                    <Link
                      to={service.href}
                      className="inline-flex items-center gap-2 font-sans-ui text-xs uppercase tracking-[0.15em] text-gold hover:text-foreground transition-colors whitespace-nowrap"
                      data-ocid={`services.link.${service.number}`}
                    >
                      Enquire <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[oklch(0.08_0_0)] border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground uppercase tracking-wide">
              Ready to Begin?
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-lg mx-auto">
              Contact us to discuss your project and discover how Mostra can
              bring your vision to life.
            </p>
            <div className="mt-8">
              <Link
                to="/collaboration"
                className="inline-flex items-center justify-center px-8 py-3 bg-gold text-[oklch(0.08_0_0)] font-sans-ui text-xs uppercase tracking-[0.15em] font-medium hover:opacity-90 transition-all duration-300 rounded-sm"
                data-ocid="services.cta_button"
              >
                Start a Conversation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
