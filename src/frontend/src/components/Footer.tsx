import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "All Services", href: "/services" },
  { label: "Tyres & Battery", href: "/tyres-battery" },
  { label: "Accessories & Parts", href: "/accessories-spare-parts" },
  { label: "RTO Services", href: "/rto-services" },
];

const services = [
  "Car Servicing & Repair",
  "Tyre Sales & Replacement",
  "Battery Sales & Exchange",
  "Car Accessories",
  "Spare Parts",
  "RTO Documentation",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-az-card border-t border-az-surface">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/assets/generated/autozone-logo-transparent.dim_400x120.png"
                alt="AUTO ZONE"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-az-silver text-sm leading-relaxed mb-4">
              Your trusted automobile service center providing complete car care
              solutions under one roof — from servicing and tyres to RTO
              documentation.
            </p>
            <div className="flex items-center gap-2 text-az-silver text-sm">
              <Clock className="w-4 h-4 text-az-red shrink-0" />
              <div>
                <div>Mon–Sat: 9:00 AM – 7:00 PM</div>
                <div>Sun: 10:00 AM – 4:00 PM</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-az-red inline-block" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-az-silver text-sm hover:text-az-red transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-az-surface" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-az-red inline-block" />
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-az-silver text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-az-surface" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-az-red inline-block" />
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+919225516006"
                className="flex items-center gap-3 text-az-silver hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded bg-az-surface flex items-center justify-center group-hover:bg-az-red transition-colors">
                  <Phone className="w-4 h-4 text-az-red group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-az-metallic">Phone</div>
                  <div className="text-sm font-medium">+91 9225516006</div>
                </div>
              </a>
              <a
                href="mailto:vinodautozone@gmail.com"
                className="flex items-center gap-3 text-az-silver hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded bg-az-surface flex items-center justify-center group-hover:bg-az-red transition-colors">
                  <Mail className="w-4 h-4 text-az-red group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-az-metallic">Email</div>
                  <div className="text-sm font-medium">
                    vinodautozone@gmail.com
                  </div>
                </div>
              </a>
              <div className="flex items-start gap-3 text-az-silver">
                <div className="w-8 h-8 rounded bg-az-surface flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-az-red" />
                </div>
                <div>
                  <div className="text-xs text-az-metallic">Location</div>
                  <div className="text-sm">AUTO ZONE Service Center</div>
                </div>
              </div>
              <a
                href="https://wa.me/919225516006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-az-silver hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded bg-az-surface flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <MessageCircle className="w-4 h-4 text-green-500 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-az-metallic">WhatsApp</div>
                  <div className="text-sm font-medium">Chat with us</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-az-surface">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-az-metallic text-xs text-center md:text-left">
            © {year} AUTO ZONE Automobile Service Center. All rights reserved.
          </p>
          <p className="text-az-metallic text-xs">
            Built with <span className="text-az-red">♥</span> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-az-silver hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
