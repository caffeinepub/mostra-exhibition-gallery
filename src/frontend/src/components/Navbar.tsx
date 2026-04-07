import { Link, useRouter } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Gallery", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Collaborate", href: "/collaboration" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.10_0_0)]/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-[oklch(0.10_0_0)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-playfair text-2xl lg:text-3xl font-bold text-gold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
            data-ocid="nav.link"
          >
            MOSTRA
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-sans-ui text-xs font-medium uppercase tracking-[0.15em] transition-all duration-200 ${
                  currentPath === link.href
                    ? "text-gold"
                    : "text-[oklch(0.75_0_0)] hover:text-foreground"
                }`}
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden text-foreground p-2 hover:text-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            data-ocid="nav.toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[oklch(0.10_0_0)] border-t border-border overflow-hidden"
          >
            <nav
              className="px-4 py-6 flex flex-col gap-5"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-sans-ui text-sm font-medium uppercase tracking-[0.15em] transition-all duration-200 ${
                    currentPath === link.href
                      ? "text-gold"
                      : "text-[oklch(0.75_0_0)] hover:text-foreground"
                  }`}
                  data-ocid="nav.link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom divider */}
      <div className="h-px bg-border" />
    </header>
  );
}
