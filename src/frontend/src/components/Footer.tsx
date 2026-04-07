import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-[oklch(0.10_0_0)] border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="font-playfair text-2xl font-bold text-gold tracking-[0.2em] uppercase"
            >
              MOSTRA
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              A premium exhibition gallery in Rajkot, Gujarat, bridging local
              artists with global audiences.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="font-sans-ui text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-4">
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Gallery", href: "/gallery" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Collaborate", href: "/collaboration" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  data-ocid="footer.link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social + Legal */}
          <div>
            <p className="font-sans-ui text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mb-4">
              Connect
            </p>
            <div className="flex items-center gap-4 mb-6">
              <a
                href="https://instagram.com/mostraexhibition"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/mostraexhibition"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/mostraexhibition"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-ocid="footer.link"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-ocid="footer.link"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {year} Mostra Exhibition Gallery, Rajkot, Gujarat, India.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with <span className="text-gold">&hearts;</span> using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
