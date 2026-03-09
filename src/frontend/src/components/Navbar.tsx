import { Button } from "@/components/ui/button";
import { Menu, Phone, Settings2, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  onBookService: () => void;
}

export default function Navbar({ onBookService }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-[0_2px_20px_oklch(0.22_0.07_260/0.12)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-az-navy rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-black text-sm leading-none">
                AZ
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-display font-black text-xl tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-az-navy" : "text-white"
                }`}
              >
                AUTO ZONE
              </span>
              <span
                className={`text-xs font-body transition-colors duration-300 ${
                  scrolled ? "text-az-gray" : "text-white/70"
                }`}
              >
                Professional Car Care
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                data-ocid="nav.link"
                onClick={() => handleNavClick(link.href)}
                className={`nav-link text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-foreground/70 hover:text-az-navy"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+919225516006">
              <Button
                variant="ghost"
                size="sm"
                className={`gap-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-foreground/70 hover:text-az-navy hover:bg-muted"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                <Phone className="w-4 h-4" />
                +91 9225516006
              </Button>
            </a>
            <button
              type="button"
              data-ocid="nav.admin_link"
              onClick={() => {
                window.location.hash = "#admin";
              }}
              className={`flex items-center gap-1.5 text-xs font-medium transition-colors px-2 py-1 rounded-md ${
                scrolled
                  ? "text-foreground/40 hover:text-az-navy hover:bg-muted"
                  : "text-white/40 hover:text-white/70 hover:bg-white/10"
              }`}
              title="Admin Dashboard"
            >
              <Settings2 className="w-3.5 h-3.5" />
              Admin
            </button>
            <Button
              data-ocid="nav.book_service_button"
              onClick={onBookService}
              className="bg-az-navy hover:bg-az-navy-light text-white font-semibold text-sm px-6 shadow-navy-glow transition-all"
            >
              Book Service
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-az-gray-border shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-3 rounded-lg text-sm font-medium text-foreground/70 hover:text-az-navy hover:bg-muted text-left transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              data-ocid="nav.admin_link"
              onClick={() => {
                setMenuOpen(false);
                window.location.hash = "#admin";
              }}
              className="px-3 py-3 rounded-lg text-xs font-medium text-foreground/40 hover:text-az-navy hover:bg-muted text-left transition-colors flex items-center gap-2"
            >
              <Settings2 className="w-3.5 h-3.5" />
              Admin Dashboard
            </button>
            <div className="flex gap-3 mt-3 pt-3 border-t border-az-gray-border">
              <a href="tel:+919225516006" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-az-gray-border text-foreground/70 hover:text-az-navy text-sm gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
              <Button
                className="flex-1 bg-az-navy hover:bg-az-navy-light text-white font-semibold text-sm"
                onClick={() => {
                  setMenuOpen(false);
                  onBookService();
                }}
              >
                Book Service
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
