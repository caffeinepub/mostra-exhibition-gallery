import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { MetaTags } from "../components/MetaTags";
import { useGalleryItems } from "../hooks/useQueries";

const exhibitions = [
  {
    id: 1,
    title: "Forms & Light",
    subtitle: "A Study in Contrast",
    date: "April 1 \u2013 May 15, 2026",
    category: "Photography",
    image: "/assets/generated/exhibition-forms-light.dim_800x600.jpg",
  },
  {
    id: 2,
    title: "The Sculptural Mind",
    subtitle: "Contemporary Voices in Clay",
    date: "May 20 \u2013 June 30, 2026",
    category: "Sculpture",
    image: "/assets/generated/exhibition-sculptures.dim_800x600.jpg",
  },
];

const SAMPLE_ARTWORKS = [
  {
    title: "Echoes in Charcoal",
    artist: "Priya Mehta",
    src: "/assets/generated/gallery-artwork-1.dim_600x800.jpg",
  },
  {
    title: "Golden Hour Study",
    artist: "Arjun Trivedi",
    src: "/assets/generated/gallery-artwork-2.dim_600x800.jpg",
  },
  {
    title: "Geometric Reverie",
    artist: "Kavita Desai",
    src: "/assets/generated/gallery-artwork-3.dim_800x600.jpg",
  },
];

const STATS = [
  { number: "50+", label: "Exhibitions Hosted" },
  { number: "120+", label: "Artists Collaborated" },
  { number: "8", label: "Years of Excellence" },
  { number: "300+", label: "Events Curated" },
];

export default function HomePage() {
  const { data: galleryItems } = useGalleryItems();
  const featuredItems = galleryItems?.slice(0, 3) ?? [];

  const displayArtworks =
    featuredItems.length > 0
      ? featuredItems.map((item) => ({
          title: item.title,
          artist: item.artist,
          src: item.image.getDirectURL(),
        }))
      : SAMPLE_ARTWORKS;

  return (
    <>
      <MetaTags
        title="Mostra Exhibition Gallery | Rajkot, India"
        description="Mostra is a premium art and exhibition gallery in Rajkot, Gujarat, India. Discover curated exhibitions, artist collaborations, and luxury art experiences."
        keywords="art gallery Rajkot, exhibition gallery Gujarat, artist collaboration Rajkot, luxury art space India, Mostra gallery"
        ogImage="/assets/generated/hero-gallery-interior.dim_1920x1080.jpg"
      />

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage:
            "url(/assets/generated/hero-gallery-interior.dim_1920x1080.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[oklch(0.05_0_0)]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.05_0_0)]/90 via-[oklch(0.05_0_0)]/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans-ui text-xs font-medium uppercase tracking-[0.3em] text-gold mb-6"
          >
            Rajkot, Gujarat, India
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-6xl sm:text-7xl lg:text-8xl font-bold text-foreground uppercase tracking-wide leading-none"
          >
            CURATED
            <br />
            <span className="text-gold">ELEGANCE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-base sm:text-lg text-[oklch(0.78_0_0)] max-w-xl leading-relaxed"
          >
            Where art meets architecture. Discover curated exhibitions
            <br className="hidden sm:block" />
            that redefine the gallery experience in Rajkot, India.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-gold text-gold font-sans-ui text-xs uppercase tracking-[0.15em] hover:bg-gold hover:text-[oklch(0.08_0_0)] transition-all duration-300 rounded-sm"
              data-ocid="hero.primary_button"
            >
              Explore Exhibitions <ArrowRight size={14} />
            </Link>
            <Link
              to="/collaboration"
              className="inline-flex items-center justify-center px-8 py-3 bg-gold text-[oklch(0.08_0_0)] font-sans-ui text-xs uppercase tracking-[0.15em] font-medium hover:opacity-90 transition-all duration-300 rounded-sm"
              data-ocid="hero.secondary_button"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="font-sans-ui text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Scroll
          </span>
          <motion.div
            className="w-px h-10 bg-muted-foreground"
            animate={{ scaleY: [0.5, 1, 0.5] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      </section>

      {/* Exhibitions */}
      <section
        className="py-16 lg:py-24 bg-background"
        data-ocid="exhibitions.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-sans-ui text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">
              Current Exhibitions
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-wide">
              On Display Now
            </h2>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {exhibitions.map((exhibition, i) => (
              <motion.div
                key={exhibition.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-sm border border-border bg-card cursor-pointer hover:border-gold/50 transition-all duration-300"
                data-ocid={`exhibitions.item.${i + 1}`}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={exhibition.image}
                    alt={exhibition.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0_0)]/90 via-[oklch(0.08_0_0)]/30 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="inline-block font-sans-ui text-[10px] uppercase tracking-[0.2em] text-gold border border-gold/40 px-2 py-0.5 rounded-sm mb-3">
                    {exhibition.category}
                  </span>
                  <h3 className="font-playfair text-2xl font-bold text-foreground uppercase">
                    {exhibition.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {exhibition.subtitle}
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground font-sans-ui">
                    <Calendar size={12} />
                    <span>{exhibition.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section
        className="py-16 lg:py-24 bg-[oklch(0.08_0_0)]"
        data-ocid="featured.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <p className="font-sans-ui text-xs font-medium uppercase tracking-[0.25em] text-gold mb-3">
                Featured Artworks
              </p>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground uppercase tracking-wide">
                From the Collection
              </h2>
            </div>
            <Link
              to="/gallery"
              className="font-sans-ui text-xs uppercase tracking-[0.15em] text-gold hover:text-foreground flex items-center gap-2 transition-colors"
              data-ocid="featured.link"
            >
              View All <ArrowRight size={12} />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayArtworks.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden bg-card border border-border rounded-sm aspect-[3/4]">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.05_0_0)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-3 px-1">
                  <h3 className="font-playfair text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {item.artist}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-sans-ui text-xs font-medium uppercase tracking-[0.25em] text-gold mb-4">
                About Mostra
              </p>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-wide leading-tight">
                Rajkot&apos;s Premier
                <br />
                <span className="text-gold">Exhibition Space</span>
              </h2>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                Founded to bridge the gap between local artists and global
                audiences, Mostra is a premium art and exhibition space in the
                heart of Rajkot, Gujarat. We curate transformative experiences
                that celebrate artistic excellence and cultural heritage.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-sans-ui text-xs uppercase tracking-[0.15em] text-gold hover:text-foreground transition-colors"
                  data-ocid="about.link"
                >
                  Our Story <ArrowRight size={12} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 font-sans-ui text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
                  data-ocid="services.link"
                >
                  Our Services <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-sm p-6 text-center"
                >
                  <p className="font-playfair text-3xl font-bold text-gold">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-xs font-sans-ui uppercase tracking-[0.1em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 lg:py-20 bg-[oklch(0.08_0_0)] border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-sans-ui text-xs font-medium uppercase tracking-[0.25em] text-gold mb-4">
              Ready to Create?
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-wide">
              Let&apos;s Build Something
              <br />
              <span className="text-gold">Extraordinary Together</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
              Whether you&apos;re an emerging artist, an established brand, or
              an event organiser \u2014 Mostra is your stage.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/collaboration"
                className="inline-flex items-center justify-center px-8 py-3 bg-gold text-[oklch(0.08_0_0)] font-sans-ui text-xs uppercase tracking-[0.15em] font-medium hover:opacity-90 transition-all duration-300 rounded-sm"
                data-ocid="cta.primary_button"
              >
                Start Collaborating
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-border text-foreground font-sans-ui text-xs uppercase tracking-[0.15em] hover:border-gold hover:text-gold transition-all duration-300 rounded-sm"
                data-ocid="cta.secondary_button"
              >
                <MapPin size={14} /> Visit Us in Rajkot
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
