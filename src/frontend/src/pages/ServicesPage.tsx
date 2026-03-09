import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Archive,
  Battery,
  Car,
  ChevronRight,
  FileText,
  Package,
  Phone,
  RefreshCw,
  RotateCcw,
  Settings,
  ShoppingBag,
  Wrench,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Wrench className="w-10 h-10" />,
    title: "Car Servicing & Repair",
    desc: "Comprehensive car servicing including oil changes, filter replacements, brake inspection, engine diagnostics, and full vehicle repair by our certified mechanics.",
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
    icon: <Settings className="w-10 h-10" />,
    title: "Mechanical & General Maintenance",
    desc: "Regular maintenance services to keep your vehicle running at peak performance and prevent costly breakdowns down the line.",
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
    id: 3,
    icon: <Car className="w-10 h-10" />,
    title: "New Tyre Sales & Replacement",
    desc: "Wide selection of new tyres from top brands. Professional fitting, balancing, and wheel alignment services included.",
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
    title: "Old Tyre Buy & Sell",
    desc: "We buy your used tyres and offer quality second-hand tyres at affordable prices. Great value for budget-conscious car owners.",
    features: [
      "Fair valuation",
      "Quality tested",
      "All sizes available",
      "Same-day service",
      "Best prices",
    ],
    href: "/tyres-battery",
  },
  {
    id: 5,
    icon: <Battery className="w-10 h-10" />,
    title: "Battery Sales & Exchange",
    desc: "Premium car batteries for all makes and models. Free battery testing, installation, and old battery exchange program.",
    features: [
      "Premium brands",
      "Free testing",
      "Free installation",
      "Old battery exchange",
      "Warranty included",
    ],
    href: "/tyres-battery",
  },
  {
    id: 6,
    icon: <Archive className="w-10 h-10" />,
    title: "Car Accessories Installation",
    desc: "Enhance your vehicle with a wide range of car accessories professionally installed by our expert technicians.",
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
    id: 7,
    icon: <Package className="w-10 h-10" />,
    title: "New & Used Spare Parts",
    desc: "Genuine new spare parts and quality-tested used parts for all car models at competitive prices.",
    features: [
      "Genuine OEM parts",
      "All car brands",
      "Quality tested",
      "Warranty on parts",
      "Fast availability",
    ],
    href: "/accessories-spare-parts",
  },
  {
    id: 8,
    icon: <RotateCcw className="w-10 h-10" />,
    title: "Second-Hand Spare Parts",
    desc: "Quality second-hand spare parts sourced from reliable suppliers. Tested and certified before sale for peace of mind.",
    features: [
      "Quality checked",
      "Cost-effective",
      "Wide selection",
      "Expert advice",
      "Warranty available",
    ],
    href: "/accessories-spare-parts",
  },
  {
    id: 9,
    icon: <FileText className="w-10 h-10" />,
    title: "RTO Documentation & Paperwork",
    desc: "Hassle-free handling of all your RTO documentation needs — from registration to transfer of ownership and beyond.",
    features: [
      "Vehicle registration",
      "Transfer of ownership",
      "RC renewal",
      "Fitness certificate",
      "NOC & more",
    ],
    href: "/rto-services",
  },
  {
    id: 10,
    icon: <ShoppingBag className="w-10 h-10" />,
    title: "Automobile Product Sales",
    desc: "A comprehensive range of automobile products including lubricants, cleaners, additives, and care products.",
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
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-az-red" />
              <span className="text-az-red text-sm font-semibold uppercase tracking-widest">
                Services
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-4">
              All Our <span className="text-red-gradient">Services</span>
            </h1>
            <p className="text-az-silver text-lg leading-relaxed">
              Complete automobile solutions under one roof. Professional service
              for every car need.
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
                    <h3 className="font-display text-xl font-bold text-white">
                      {service.title}
                    </h3>
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

      {/* CTA */}
      <section className="py-16 bg-az-red relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-4">
            Need a Service? Let's Get Started.
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Book online or call us directly. We're ready to get your vehicle
            back in top condition.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/booking">
              <Button
                size="lg"
                className="bg-white text-az-red hover:bg-az-silver-light font-black text-base px-8"
              >
                Book a Service
              </Button>
            </Link>
            <a href="tel:+919225516006">
              <Button
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
