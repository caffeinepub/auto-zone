import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Archive,
  Battery,
  Car,
  ChevronRight,
  FileText,
  LifeBuoy,
  Package,
  Phone,
  RefreshCw,
  RotateCcw,
  Settings,
  Shield,
  ShoppingBag,
  Wrench,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Wrench className="w-10 h-10" />,
    title: "Car Service in Pune",
    seoTitle: "Car Servicing & Repair — Pune",
    desc: "Auto Zone is Pune's go-to car service center. We provide comprehensive car servicing including engine diagnostics, oil changes, filter replacements, brake inspection, suspension work, and full vehicle repair by our experienced technicians.",
    features: [
      "Engine diagnostics",
      "Oil & fluid changes",
      "Brake service",
      "AC repair",
      "Suspension repair",
    ],
    href: "/booking",
  },
  {
    id: 2,
    icon: <Shield className="w-10 h-10" />,
    title: "Luxury Car Service Pune",
    seoTitle: "Luxury Car Service — Specialist Care",
    desc: "Premium luxury car service for high-end vehicles. Our experienced technicians understand the precision and standards required for luxury cars — BMWs, Mercedes, Audis, and more — with specialist care and genuine parts.",
    features: [
      "Luxury brand specialists",
      "Genuine OEM parts",
      "Precision diagnostics",
      "Premium service standards",
      "Confidential handling",
    ],
    href: "/booking",
  },
  {
    id: 3,
    icon: <Car className="w-10 h-10" />,
    title: "Tyre Shop Pune — New Tyres",
    seoTitle: "New Tyre Sales & Replacement",
    desc: "Auto Zone is one of Pune's most trusted tyre shops. We stock a wide selection of new tyres from all major brands with professional fitting, balancing, and wheel alignment for every car type.",
    features: [
      "All major brands",
      "Professional fitting",
      "Wheel balancing",
      "Wheel alignment",
      "Tyre rotation",
    ],
    href: "/tyres-battery",
  },
  {
    id: 4,
    icon: <RefreshCw className="w-10 h-10" />,
    title: "Old Tyre Buy & Sell Pune",
    seoTitle: "Used Tyre Trading — Affordable Options",
    desc: "We buy your used tyres at fair value and offer quality second-hand tyres at affordable prices. Our tyre shop in Pune is the go-to for budget-friendly tyre solutions without compromising safety.",
    features: [
      "Fair tyre valuation",
      "Quality tested",
      "All sizes available",
      "Same-day service",
      "Best prices in Pune",
    ],
    href: "/tyres-battery",
  },
  {
    id: 5,
    icon: <Battery className="w-10 h-10" />,
    title: "Car Battery Replacement Pune",
    seoTitle: "Battery Sales, Testing & Exchange",
    desc: "Fast, professional car battery replacement in Pune. We stock premium batteries for all makes and models. Free battery health testing, free installation, and an old battery exchange program.",
    features: [
      "Premium brand batteries",
      "Free battery testing",
      "Free installation",
      "Old battery exchange",
      "Warranty included",
    ],
    href: "/tyres-battery",
  },
  {
    id: 6,
    icon: <LifeBuoy className="w-10 h-10" />,
    title: "Roadside Assistance Pune",
    seoTitle: "Emergency Roadside Help",
    desc: "Stranded in or around Pune? Our roadside assistance team provides emergency support including tyre changes, battery jumpstarts, fuel delivery, and on-the-spot minor repairs to get you moving again.",
    features: [
      "Emergency tyre change",
      "Battery jumpstart",
      "Fuel delivery",
      "On-spot minor repairs",
      "Fast response",
    ],
    href: "/contact",
  },
  {
    id: 7,
    icon: <FileText className="w-10 h-10" />,
    title: "RTO Paper Transfer Pune",
    seoTitle: "RTO Documentation & Ownership Transfer",
    desc: "Hassle-free RTO paper transfer and vehicle documentation in Pune. From ownership transfer and new registration to RC renewal, fitness certificates, and NOC — our team handles it all accurately and quickly.",
    features: [
      "Ownership transfer",
      "New registration",
      "RC renewal",
      "Fitness certificate",
      "NOC & more",
    ],
    href: "/rto-services",
  },
  {
    id: 8,
    icon: <Archive className="w-10 h-10" />,
    title: "Car Accessories Installation",
    seoTitle: "Accessories Fitting & Upgrades",
    desc: "Upgrade your car with a wide range of accessories — seat covers, cameras, parking sensors, audio systems, and LED lighting — professionally installed by our skilled technicians.",
    features: [
      "Seat covers",
      "Dashboard cameras",
      "Parking sensors",
      "Sound systems",
      "LED lighting",
    ],
    href: "/accessories-spare-parts",
  },
  {
    id: 9,
    icon: <Package className="w-10 h-10" />,
    title: "New & Used Spare Parts",
    seoTitle: "Genuine Parts for All Car Models",
    desc: "Genuine new spare parts and quality-tested second-hand spare parts for all car brands and models at competitive prices. Both OEM and aftermarket options available.",
    features: [
      "Genuine OEM parts",
      "All car brands",
      "Quality tested used parts",
      "Warranty on parts",
      "Fast availability",
    ],
    href: "/accessories-spare-parts",
  },
  {
    id: 10,
    icon: <Settings className="w-10 h-10" />,
    title: "Mechanical & General Maintenance",
    seoTitle: "Preventive & Routine Maintenance",
    desc: "Keep your car running at peak performance with our comprehensive mechanical maintenance services — clutch repair, transmission service, coolant flush, timing belt, and more.",
    features: [
      "Periodic maintenance",
      "Clutch repair",
      "Transmission service",
      "Coolant flush",
      "Timing belt service",
    ],
    href: "/booking",
  },
  {
    id: 11,
    icon: <RotateCcw className="w-10 h-10" />,
    title: "Engine Repair & Workshop",
    seoTitle: "Full Workshop & Engine Services",
    desc: "Full workshop and engine repair services. From minor engine issues to major overhauls, our skilled mechanics handle all workshop jobs with precision and attention to detail.",
    features: [
      "Engine diagnostics",
      "Engine overhaul",
      "Fuel system repair",
      "Exhaust service",
      "All makes & models",
    ],
    href: "/booking",
  },
  {
    id: 12,
    icon: <ShoppingBag className="w-10 h-10" />,
    title: "Automobile Product Sales",
    seoTitle: "Auto Products — Oils, Fluids & Care",
    desc: "A full range of automobile products including engine oils, coolants, car care products, lubricants, and cleaning solutions. Trusted brands available in-store.",
    features: [
      "Engine oils",
      "Coolants",
      "Car care products",
      "Lubricants",
      "Cleaning products",
    ],
    href: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-[88px] md:pt-[112px]">
      {/* Page Header */}
      <section className="py-16 bg-az-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-az-red blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-az-red" />
              <span className="text-az-red text-sm font-semibold uppercase tracking-widest">
                Services
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-4">
              Car Service in Pune —{" "}
              <span className="text-red-gradient">All Under One Roof</span>
            </h1>
            <p className="text-az-silver text-lg leading-relaxed">
              Auto Zone offers 12+ automobile services in Pune — car service,
              tyre shop, car battery replacement, luxury car service, roadside
              assistance, RTO paper transfer, spare parts, and more. Trusted for
              over 30 years.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-az-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-az-card border border-az-surface rounded-lg p-6 card-hover flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded bg-az-red/10 flex items-center justify-center text-az-red shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <div className="text-az-red text-xs font-mono font-semibold mb-1">
                      Service #{service.id.toString().padStart(2, "0")}
                    </div>
                    <h2 className="font-display text-xl font-bold text-white">
                      {service.title}
                    </h2>
                    <p className="text-az-metallic text-xs mt-0.5">
                      {service.seoTitle}
                    </p>
                  </div>
                </div>
                <p className="text-az-silver text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 flex-1">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs bg-az-surface text-az-silver px-2.5 py-1 rounded"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <Link to={service.href} className="mt-auto">
                  <Button
                    variant="outline"
                    className="w-full border-az-surface text-az-silver hover:border-az-red hover:text-az-red text-sm"
                  >
                    Learn More / Book
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Footer Section */}
      <section className="py-12 bg-az-surface border-t border-az-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl font-black text-white mb-4">
              Auto Zone — Your Complete Car Care Destination in Pune
            </h2>
            <p className="text-az-silver text-sm leading-relaxed">
              Searching for car service near me in Pune? Auto Zone has been
              Pune's most trusted car service center for over 30 years. We are a
              full-service tyre shop in Pune offering new and used tyres, a
              dedicated car battery replacement service, specialist luxury car
              service, reliable roadside assistance, and expert RTO paper
              transfer. Visit us for all your automobile needs — from routine
              maintenance to emergency repairs — all handled under one roof by
              Pune's most experienced team.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-az-red relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-4">
            Book Car Service in Pune Today
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Call Auto Zone or book online. Tyres, batteries, luxury car service,
            roadside assistance, RTO paper transfer — all available in Pune.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/booking">
              <Button
                data-ocid="services.cta_primary_button"
                size="lg"
                className="bg-white text-az-red hover:bg-az-silver-light font-black text-base px-8"
              >
                Book a Service
              </Button>
            </Link>
            <a href="tel:+919225516006">
              <Button
                data-ocid="services.cta_secondary_button"
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold"
              >
                <Phone className="mr-2 w-5 h-5" />
                +91 9225516006
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
