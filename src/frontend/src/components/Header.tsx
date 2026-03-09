import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Tyres & Battery", href: "/tyres-battery" },
  { label: "Accessories", href: "/accessories-spare-parts" },
  { label: "RTO Services", href: "/rto-services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-az-black/95 backdrop-blur-md shadow-[0_2px_20px_oklch(0_0_0/0.5)]"
          : "bg-az-black/80 backdrop-blur-sm"
      }`}
    >
      {/* Top bar */}
      <div className="bg-az-surface border-b border-az-surface hidden md:block">
        <div className="container mx-auto px-4 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-6 text-xs text-az-silver">
            <a
              href="tel:+919225516006"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-az-red" />
              +91 9225516006
            </a>
            <a
              href="mailto:vinodautozone@gmail.com"
              className="hover:text-white transition-colors"
            >
              vinodautozone@gmail.com
            </a>
          </div>
          <div className="text-xs text-az-silver">
            Mon–Sat: 9:00 AM – 7:00 PM | Sun: 10:00 AM – 4:00 PM
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/assets/generated/autozone-logo-transparent.dim_400x120.png"
              alt="AUTO ZONE"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link text-sm font-medium transition-colors ${
                  currentPath === link.href
                    ? "text-az-red active"
                    : "text-az-silver hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+919225516006">
              <Button
                variant="outline"
                size="sm"
                className="border-az-surface text-az-silver hover:text-white hover:border-az-red text-xs"
              >
                <Phone className="w-3 h-3 mr-1.5" />
                Call Now
              </Button>
            </a>
            <Link to="/booking">
              <Button
                size="sm"
                className="bg-az-red hover:bg-az-red-bright text-white font-semibold text-xs px-4 shadow-red-glow transition-all"
              >
                Book Service
              </Button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="lg:hidden text-az-silver hover:text-white p-2 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="lg:hidden bg-az-card border-t border-az-surface">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                  currentPath === link.href
                    ? "bg-az-surface text-az-red"
                    : "text-az-silver hover:text-white hover:bg-az-surface"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 mt-3 pt-3 border-t border-az-surface">
              <a href="tel:+919225516006" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-az-surface text-az-silver hover:text-white text-sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
              <Link to="/booking" className="flex-1">
                <Button className="w-full bg-az-red hover:bg-az-red-bright text-white font-semibold text-sm">
                  Book Service
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
