import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  AlertCircle,
  Battery,
  Car,
  CheckCircle,
  ChevronRight,
  Phone,
  RefreshCw,
  ShoppingCart,
  Zap,
} from "lucide-react";

const tyreServices = [
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "New Tyre Sales",
    desc: "Wide selection of new tyres from trusted brands including MRF, Apollo, CEAT, Bridgestone, and more. Available for all car makes and models.",
    features: [
      "All major brands",
      "Multiple sizes",
      "Budget to premium options",
      "Manufacturer warranty",
    ],
  },
  {
    icon: <Car className="w-6 h-6" />,
    title: "Tyre Replacement",
    desc: "Professional tyre fitting and replacement service with proper balancing and alignment to ensure smooth, safe driving.",
    features: [
      "Professional fitting",
      "Wheel balancing",
      "Wheel alignment",
      "TPMS reset",
    ],
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Old Tyre Buy & Sell",
    desc: "We buy your worn tyres and sell quality used tyres at affordable prices. Great for those looking for cost-effective options.",
    features: [
      "Fair market value",
      "Quality inspection",
      "All conditions considered",
      "Instant payment",
    ],
  },
  {
    icon: <AlertCircle className="w-6 h-6" />,
    title: "Tyre Inspection & Repair",
    desc: "Complete tyre health checkup including puncture repair, tread depth measurement, and sidewall inspection.",
    features: [
      "Puncture repair",
      "Tread check",
      "Pressure check",
      "Safety assessment",
    ],
  },
];

const batteryServices = [
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Battery Sales",
    desc: "Premium car batteries from leading brands — Amaron, Exide, Bosch, and more. Find the perfect battery for your vehicle.",
    features: [
      "Top brands",
      "All capacities",
      "Long warranty",
      "Compatibility check",
    ],
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Battery Exchange Program",
    desc: "Exchange your old battery for a new one at special exchange prices. We handle the old battery responsibly.",
    features: [
      "Old battery acceptance",
      "Exchange discount",
      "Eco-friendly disposal",
      "Same-day service",
    ],
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Battery Testing",
    desc: "Free battery health check and load test to determine your battery's current health and remaining life.",
    features: [
      "Free testing",
      "Load test",
      "Cold cranking amps",
      "Health report",
    ],
  },
  {
    icon: <Battery className="w-6 h-6" />,
    title: "Battery Installation",
    desc: "Professional battery installation included free with every battery purchase. Quick and done right the first time.",
    features: [
      "Free installation",
      "Terminal check",
      "Cable inspection",
      "System check",
    ],
  },
];

const tyreBrands = [
  "MRF",
  "Apollo",
  "CEAT",
  "Bridgestone",
  "Michelin",
  "Goodyear",
  "JK Tyre",
  "Pirelli",
];
const batteryBrands = [
  "Amaron",
  "Exide",
  "Bosch",
  "Luminous",
  "Tata Green",
  "SF Sonic",
  "Livguard",
  "Okaya",
];

export default function TyresBatteryPage() {
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
                Tyres & Battery
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-4">
              Tyres & <span className="text-red-gradient">Battery</span>{" "}
              Services
            </h1>
            <p className="text-az-silver text-lg leading-relaxed">
              Complete tyre and battery solutions — new sales, replacements,
              exchanges, and expert advice.
            </p>
          </div>
        </div>
      </section>

      {/* Tyre Services */}
      <section className="py-20 bg-az-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded bg-az-red/10 flex items-center justify-center text-az-red">
              <Car className="w-8 h-8" />
            </div>
            <div>
              <div className="text-az-red text-xs font-semibold uppercase tracking-widest mb-1">
                Tyre Solutions
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-white">
                Tyre Services
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {tyreServices.map((service) => (
              <div
                key={service.title}
                className="bg-az-card border border-az-surface rounded-lg p-6 card-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded bg-az-red/10 flex items-center justify-center text-az-red">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-az-silver text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <ul className="space-y-1.5">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-az-silver text-sm"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-az-red shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tyre Brands */}
          <div className="bg-az-card border border-az-surface rounded-lg p-6">
            <h3 className="font-display text-xl font-bold text-white mb-4">
              Tyre Brands We Carry
            </h3>
            <div className="flex flex-wrap gap-3">
              {tyreBrands.map((brand) => (
                <span
                  key={brand}
                  className="px-4 py-2 bg-az-surface border border-az-surface rounded text-az-silver text-sm font-medium hover:border-az-red hover:text-az-red transition-colors"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-az-surface" />

      {/* Battery Services */}
      <section className="py-20 bg-az-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded bg-az-red/10 flex items-center justify-center text-az-red">
              <Battery className="w-8 h-8" />
            </div>
            <div>
              <div className="text-az-red text-xs font-semibold uppercase tracking-widest mb-1">
                Power Solutions
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-white">
                Battery Services
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {batteryServices.map((service) => (
              <div
                key={service.title}
                className="bg-az-card border border-az-surface rounded-lg p-6 card-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded bg-az-red/10 flex items-center justify-center text-az-red">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-az-silver text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <ul className="space-y-1.5">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-az-silver text-sm"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-az-red shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Battery Brands */}
          <div className="bg-az-card border border-az-surface rounded-lg p-6">
            <h3 className="font-display text-xl font-bold text-white mb-4">
              Battery Brands We Stock
            </h3>
            <div className="flex flex-wrap gap-3">
              {batteryBrands.map((brand) => (
                <span
                  key={brand}
                  className="px-4 py-2 bg-az-surface border border-az-surface rounded text-az-silver text-sm font-medium hover:border-az-red hover:text-az-red transition-colors"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-az-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-4">
            Need New Tyres or a Battery?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Visit us today or book online. We'll find the perfect tyre or
            battery for your vehicle at the best price.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/booking">
              <Button
                size="lg"
                className="bg-white text-az-red hover:bg-az-silver-light font-black text-base px-8"
              >
                Book Service
              </Button>
            </Link>
            <a href="tel:+919225516006">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call for Enquiry
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
