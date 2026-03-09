import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Camera,
  CheckCircle,
  ChevronRight,
  Cpu,
  Lightbulb,
  Music,
  Package,
  Phone,
  RotateCcw,
  Settings,
  Shield,
  Star,
  Thermometer,
} from "lucide-react";

const accessories = [
  {
    icon: <Camera className="w-5 h-5" />,
    name: "Dashboard Camera (Dash Cam)",
    desc: "HD front and rear cameras for safety and evidence.",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    name: "Parking Sensors & Reversing Camera",
    desc: "Ultrasonic sensors with display for easy parking.",
  },
  {
    icon: <Music className="w-5 h-5" />,
    name: "Car Audio & Entertainment",
    desc: "Premium stereos, subwoofers, and Bluetooth systems.",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    name: "LED & HID Lighting",
    desc: "LED headlights, DRL lights, and interior LED upgrades.",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    name: "Seat Covers & Upholstery",
    desc: "Custom-fit seat covers in leather, fabric, and more.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    name: "Car Tinting & Sun Film",
    desc: "Window tinting for heat protection and privacy.",
  },
  {
    icon: <Thermometer className="w-5 h-5" />,
    name: "AC Vent Fresheners & Perfumes",
    desc: "Premium car fragrances and air purifiers.",
  },
  {
    icon: <Star className="w-5 h-5" />,
    name: "Steering & Interior Accessories",
    desc: "Steering covers, floor mats, boot liners, and more.",
  },
];

const newParts = [
  "Engine Components",
  "Transmission Parts",
  "Brake System Parts",
  "Suspension & Steering",
  "Cooling System",
  "Electrical Components",
  "Body Parts & Panels",
  "Exhaust System",
  "Fuel System",
  "Clutch Assembly",
  "AC Components",
  "Filters & Belts",
];

const usedParts = [
  "Doors & Panels",
  "Bumpers & Fenders",
  "Engine Assemblies",
  "Gearboxes",
  "Axles & Driveshafts",
  "Alternators & Starters",
  "AC Compressors",
  "Headlights & Taillights",
  "Mirrors",
  "Wheels & Rims",
];

export default function AccessoriesPage() {
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
                Accessories & Spares
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-4">
              Accessories &{" "}
              <span className="text-red-gradient">Spare Parts</span>
            </h1>
            <p className="text-az-silver text-lg leading-relaxed">
              Enhance and maintain your vehicle with our wide selection of
              accessories, new parts, and quality used spares.
            </p>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-20 bg-az-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded bg-az-red/10 flex items-center justify-center text-az-red">
              <Settings className="w-8 h-8" />
            </div>
            <div>
              <div className="text-az-red text-xs font-semibold uppercase tracking-widest mb-1">
                Enhance Your Ride
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-white">
                Car Accessories Installation
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-az-silver leading-relaxed mb-6">
                Upgrade your vehicle with our comprehensive range of car
                accessories. Whether you want to enhance safety, comfort,
                entertainment, or aesthetics — we have everything and our expert
                technicians will install it all professionally.
              </p>
              <ul className="space-y-2">
                {[
                  "Professional installation by certified technicians",
                  "Warranty on all accessories",
                  "Original and branded products only",
                  "Competitive pricing",
                  "Advice on the best products for your vehicle",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-az-silver text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-az-red shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {accessories.map((acc) => (
                <div
                  key={acc.name}
                  className="bg-az-card border border-az-surface rounded p-4 card-hover"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-az-red">{acc.icon}</div>
                    <h4 className="text-white text-xs font-semibold leading-tight">
                      {acc.name}
                    </h4>
                  </div>
                  <p className="text-az-metallic text-xs">{acc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-az-surface" />

      {/* Spare Parts Sections */}
      <section className="py-20 bg-az-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* New Parts */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded bg-az-red/10 flex items-center justify-center text-az-red">
                  <Package className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-az-red text-xs font-semibold uppercase tracking-wider mb-0.5">
                    Brand New
                  </div>
                  <h2 className="font-display text-2xl font-black text-white">
                    New Spare Parts
                  </h2>
                </div>
              </div>
              <p className="text-az-silver text-sm leading-relaxed mb-6">
                We stock genuine and high-quality equivalent new spare parts for
                all major car brands. Every part is sourced from trusted
                suppliers and comes with manufacturer warranty.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {newParts.map((part) => (
                  <div
                    key={part}
                    className="flex items-center gap-2 text-az-silver text-sm py-2 px-3 bg-az-card border border-az-surface rounded"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-az-red shrink-0" />
                    {part}
                  </div>
                ))}
              </div>
            </div>

            {/* Used Parts */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded bg-az-red/10 flex items-center justify-center text-az-red">
                  <RotateCcw className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-az-red text-xs font-semibold uppercase tracking-wider mb-0.5">
                    Cost-Effective
                  </div>
                  <h2 className="font-display text-2xl font-black text-white">
                    Second-Hand Spare Parts
                  </h2>
                </div>
              </div>
              <p className="text-az-silver text-sm leading-relaxed mb-6">
                Quality-tested second-hand spare parts for those looking for
                budget-friendly options. All used parts go through thorough
                inspection and testing before we sell them.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {usedParts.map((part) => (
                  <div
                    key={part}
                    className="flex items-center gap-2 text-az-silver text-sm py-2 px-3 bg-az-card border border-az-surface rounded"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-az-silver/50 shrink-0" />
                    {part}
                  </div>
                ))}
              </div>
              <div className="p-4 bg-az-card border border-az-red/30 rounded-lg">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-az-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1">
                      Quality Assurance
                    </h4>
                    <p className="text-az-silver text-xs leading-relaxed">
                      Every second-hand part is inspected, tested, and certified
                      by our technicians before sale. We only sell parts we
                      would use on our own vehicles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-az-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-4">
            Looking for a Specific Part or Accessory?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Contact us with your vehicle details and we'll source the right part
            at the best price.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-az-red hover:bg-az-silver-light font-black text-base px-8"
              >
                Make an Enquiry
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
