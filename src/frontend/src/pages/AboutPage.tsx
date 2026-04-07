import { Award, Globe, Heart, Users } from "lucide-react";
import { motion } from "motion/react";
import { MetaTags } from "../components/MetaTags";
import { PageHero } from "../components/PageHero";

const values = [
  {
    icon: Award,
    title: "Curated Excellence",
    description:
      "Every exhibition is handpicked and thoughtfully composed to deliver the highest standard of artistic presentation.",
  },
  {
    icon: Heart,
    title: "Artist First",
    description:
      "We exist to elevate artists. From emerging talent to established names, Mostra provides the platform, support, and audience every artist deserves.",
  },
  {
    icon: Globe,
    title: "Cultural Heritage",
    description:
      "Deeply rooted in Gujarat's rich creative tradition, we celebrate local culture while connecting it to the global art conversation.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description:
      "Art is transformative. We build meaningful connections between artists, collectors, brands, and the wider Rajkot community.",
  },
];

const team = [
  {
    name: "Aditya Shah",
    role: "Founder & Creative Director",
    description:
      "With over a decade in curatorial practice, Aditya founded Mostra to make Rajkot a name on the global art map.",
  },
  {
    name: "Riya Patel",
    role: "Head of Artist Relations",
    description:
      "Riya bridges the gap between emerging artists and the gallery, nurturing talent and building long-term partnerships.",
  },
  {
    name: "Nikhil Desai",
    role: "Events & Curation Lead",
    description:
      "A master of experiential design, Nikhil transforms every exhibition into an immersive journey guests return to again and again.",
  },
];

export default function AboutPage() {
  return (
    <>
      <MetaTags
        title="About Mostra | Premium Exhibition Gallery, Rajkot"
        description="Learn about Mostra Exhibition Gallery — Rajkot's premier art space founded to bridge local artists with global audiences."
        keywords="about Mostra gallery, Rajkot art gallery story, exhibition space Gujarat, premium gallery India"
      />
      <PageHero
        kicker="Our Story"
        title="About Mostra"
        subtitle="A premium exhibition gallery in Rajkot, Gujarat — founded to bridge the gap between local artists and global audiences."
        backgroundImage="/assets/generated/hero-gallery-interior.dim_1920x1080.jpg"
      />
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-sans-ui text-xs font-medium uppercase tracking-[0.25em] text-gold mb-4">
                The Beginning
              </p>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground uppercase tracking-wide">
                Where It All Began
              </h2>
              <div className="mt-6 space-y-5 text-base text-muted-foreground leading-relaxed">
                <p>
                  Mostra was born from a simple yet powerful observation:
                  Rajkot, a city pulsing with creativity, lacked a dedicated
                  space where art could breathe and audiences could truly
                  connect with it.
                </p>
                <p>
                  In 2016, our founder envisioned a gallery that would be more
                  than walls and frames — a living institution championing the
                  artists of Gujarat while welcoming voices from across India
                  and the world.
                </p>
                <p>
                  Today, Mostra stands as Rajkot&apos;s most respected
                  exhibition destination, having hosted over 50 exhibitions,
                  collaborated with 120+ artists, and curated 300+ events
                  spanning intimate solo shows to large-scale brand experiences.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[oklch(0.08_0_0)] border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-sans-ui text-xs font-medium uppercase tracking-[0.25em] text-gold mb-6">
              Our Mission
            </p>
            <blockquote className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-wide leading-snug max-w-4xl mx-auto">
              &ldquo;To curate transformative experiences that celebrate
              artistic excellence and cultural heritage.&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="font-sans-ui text-xs font-medium uppercase tracking-[0.25em] text-gold mb-4">
              What We Stand For
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground uppercase tracking-wide">
              Our Values
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-card border border-border rounded-sm p-6 hover:border-gold/50 transition-colors duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-gold/30 rounded-sm mb-4">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[oklch(0.08_0_0)] border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="font-sans-ui text-xs font-medium uppercase tracking-[0.25em] text-gold mb-4">
              The Team
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground uppercase tracking-wide">
              Faces Behind Mostra
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded-sm p-8"
              >
                <div className="w-16 h-16 rounded-sm bg-[oklch(0.20_0_0)] border border-border flex items-center justify-center mb-5">
                  <span className="font-playfair text-2xl font-bold text-gold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="font-sans-ui text-xs uppercase tracking-[0.1em] text-gold mt-1 mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
