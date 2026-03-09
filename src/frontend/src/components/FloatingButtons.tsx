import { Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919225516006"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn w-14 h-14 rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_oklch(0.52_0.18_145/0.4)] animate-pulse-red"
        aria-label="WhatsApp"
        title="Chat on WhatsApp"
      >
        <SiWhatsapp className="w-6 h-6" />
      </a>

      {/* Call Now */}
      <a
        href="tel:+919225516006"
        className="btn-red w-14 h-14 rounded-full flex items-center justify-center text-white shadow-red-glow"
        aria-label="Call Now"
        title="Call +91 9225516006"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
