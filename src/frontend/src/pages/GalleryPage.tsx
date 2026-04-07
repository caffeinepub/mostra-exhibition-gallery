import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";
import { useState } from "react";
import { MetaTags } from "../components/MetaTags";
import { PageHero } from "../components/PageHero";
import { useGalleryItems } from "../hooks/useQueries";

const SAMPLE_ITEMS = [
  {
    id: "s1",
    title: "Echoes in Charcoal",
    artist: "Priya Mehta",
    category: "Drawing",
    year: "2025",
    src: "/assets/generated/gallery-artwork-1.dim_600x800.jpg",
  },
  {
    id: "s2",
    title: "Golden Hour Study",
    artist: "Arjun Trivedi",
    category: "Painting",
    year: "2025",
    src: "/assets/generated/gallery-artwork-2.dim_600x800.jpg",
  },
  {
    id: "s3",
    title: "Geometric Reverie",
    artist: "Kavita Desai",
    category: "Mixed Media",
    year: "2024",
    src: "/assets/generated/gallery-artwork-3.dim_800x600.jpg",
  },
  {
    id: "s4",
    title: "Forms & Shadows",
    artist: "Rohan Shah",
    category: "Photography",
    year: "2025",
    src: "/assets/generated/exhibition-forms-light.dim_800x600.jpg",
  },
  {
    id: "s5",
    title: "Urban Silhouette",
    artist: "Meera Joshi",
    category: "Photography",
    year: "2024",
    src: "/assets/generated/exhibition-sculptures.dim_800x600.jpg",
  },
  {
    id: "s6",
    title: "Clay & Memory",
    artist: "Vivek Nair",
    category: "Sculpture",
    year: "2025",
    src: "/assets/generated/gallery-artwork-1.dim_600x800.jpg",
  },
];

const SKELETON_KEYS = [
  "sk-1",
  "sk-2",
  "sk-3",
  "sk-4",
  "sk-5",
  "sk-6",
  "sk-7",
  "sk-8",
];

export default function GalleryPage() {
  const { data: galleryItems, isLoading } = useGalleryItems();
  const [activeCategory, setActiveCategory] = useState("All");

  const items =
    galleryItems && galleryItems.length > 0
      ? galleryItems.map((item) => ({
          id: String(item.id),
          title: item.title,
          artist: item.artist,
          category: item.category,
          year: "",
          src: item.image.getDirectURL(),
        }))
      : SAMPLE_ITEMS;

  const categories = [
    "All",
    ...Array.from(new Set(items.map((i) => i.category))),
  ];
  const filtered =
    activeCategory === "All"
      ? items
      : items.filter((i) => i.category === activeCategory);

  return (
    <>
      <MetaTags
        title="Gallery | Mostra Exhibition Gallery, Rajkot"
        description="Browse Mostra's curated gallery collection. Paintings, sculptures, photography, and mixed media artworks from artists across Gujarat and India."
        keywords="art gallery Rajkot, exhibition works, paintings sculptures photography Gujarat, Indian contemporary art"
      />
      <PageHero
        kicker="The Collection"
        title="Gallery"
        subtitle="A curated selection of works from artists across Gujarat and beyond."
      />

      <section
        className="py-12 lg:py-16 bg-background"
        data-ocid="gallery.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.length > 2 && (
            <div
              className="flex flex-wrap gap-2 mb-10"
              role="tablist"
              aria-label="Filter by category"
            >
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-sans-ui text-[10px] uppercase tracking-[0.15em] px-4 py-2 rounded-sm border transition-all duration-200 ${
                    activeCategory === cat
                      ? "border-gold text-gold bg-gold/10"
                      : "border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
                  }`}
                  data-ocid="gallery.tab"
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {isLoading ? (
            <div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              data-ocid="gallery.loading_state"
            >
              {SKELETON_KEYS.map((k) => (
                <Skeleton key={k} className="aspect-[3/4] rounded-sm" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-24" data-ocid="gallery.empty_state">
              <p className="font-playfair text-2xl font-bold text-foreground">
                Gallery Coming Soon
              </p>
              <p className="mt-3 text-sm text-muted-foreground max-w-sm mx-auto">
                Check back for our latest curated works. New pieces are added
                regularly.
              </p>
            </div>
          ) : (
            <div
              className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4"
              data-ocid="gallery.list"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                  className="break-inside-avoid mb-4 group cursor-pointer"
                  data-ocid={`gallery.item.${i + 1}`}
                >
                  <div className="relative overflow-hidden bg-card border border-border rounded-sm">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.05_0_0)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="font-playfair text-sm font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[oklch(0.75_0_0)] mt-0.5">
                        {item.artist}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 px-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-playfair text-sm font-bold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {item.artist}
                          {item.year ? ` • ${item.year}` : ""}
                        </p>
                      </div>
                      {item.category && (
                        <Badge
                          variant="outline"
                          className="text-[10px] border-border text-muted-foreground shrink-0"
                        >
                          {item.category}
                        </Badge>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
