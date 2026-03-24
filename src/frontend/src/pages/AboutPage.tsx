import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle,
  ChevronRight,
  Clock,
  LifeBuoy,
  Package,
  Shield,
  ThumbsUp,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

const stats = [
  {
    value: "30+",
    label: "Years of Experience",
    icon: <Award className="w-5 h-5" />,
  },
  {
    value: "10,000+",
    label: "Happy Customers",
    icon: <Users className="w-5 h-5" />,
  },
  {
    value: "12",
    label: "Services Offered",
    icon: <Wrench className="w-5 h-5" />,
  },
  {
    value: "100%",
    label: "Satisfaction Commitment",
    icon: <Shield className="w-5 h-5" />,
  },
];

const whyUs = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "30+ Years in Pune",
    desc: "Serving Pune's car owners since the early 1990s. Our decades of experience mean every car that enters our workshop gets the right diagnosis, the right repair, and the right price.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Certified & Skilled Technicians",
    desc: "Our mechanics are trained professionals with hands-on experience across all car makes and models, from hatchbacks to luxury cars.",
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Genuine & Quality Parts",
    desc: "We source authentic new parts and quality-tested used spare parts to ensure long-lasting performance and reliability at competitive prices.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Transparent & Fair Pricing",
    desc: "No hidden charges. We provide clear upfront estimates and stick to them. What we quote is what you pay — always.",
  },
  {
    icon: <LifeBuoy className="w-6 h-6" />,
    title: "Roadside Assistance",
    desc: "Emergencies don't wait. Our roadside assistance service in Pune covers tyre changes, battery jumpstarts, and on-the-spot emergency repairs.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Quick & Convenient",
    desc: "Fast turnaround times, easy booking, and a location that's easy to reach in Pune. We fit into your schedule, not the other way around.",
  },
];

const milestones = [
  {
    year: "1993",
    event: "Auto Zone Founded",
    desc: "Started with a passion for honest, quality car care in Pune.",
  },
  {
    year: "1999",
    event: "Tyre Shop Launched",
    desc: "Expanded to become a full tyre shop in Pune — new and used tyres, fitting, and alignment.",
  },
  {
    year: "2005",
    event: "Battery & Accessories Wing",
    desc: "Added car battery replacement, accessories fitting, and spare parts sales to our services.",
  },
  {
    year: "2012",
    event: "Luxury Car Service",
    desc: "Launched dedicated luxury car service for premium vehicles with specialist care.",
  },
  {
    year: "2018",
    event: "RTO Paper Transfer Services",
    desc: "Became Pune's trusted partner for RTO paper transfer, registration, and all vehicle documentation.",
  },
  {
    year: "2024",
    event: "10,000+ Customers Served",
    desc: "Reached the milestone of 10,000+ satisfied customers across Pune — and counting.",
  },
];

export default function AboutPage() {
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
                About Us
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-4">
              About <span className="text-red-gradient">Auto Zone</span>
            </h1>
            <p className="text-az-silver text-lg leading-relaxed">
              Pune's most trusted automobile service center — over 30 years of
              expert car service, tyre shop, battery replacement, luxury car
              care, and RTO paper transfer.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-az-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-6">
                Our Story — 30 Years of Car Service in Pune
              </h2>
              <p className="text-az-silver leading-relaxed mb-4">
                Auto Zone was founded with a single mission: to give Pune's car
                owners a reliable, honest, and complete automobile service
                center they can truly trust. For over 30 years, we have served
                thousands of customers across Pune with professionalism,
                transparency, and genuine care.
              </p>
              <p className="text-az-silver leading-relaxed mb-4">
                We started as a modest workshop in Pune and grew into a
                full-service car care hub. Today, Auto Zone covers everything —
                from routine car servicing and our well-stocked tyre shop to car
                battery replacement, luxury car service, roadside assistance,
                new and used spare parts, and hassle-free RTO paper transfer.
              </p>
              <p className="text-az-silver leading-relaxed mb-6">
                Our philosophy is simple: treat every vehicle as if it were our
                own. Whether it's a daily hatchback or a premium luxury car, our
                skilled technicians apply the same care, precision, and honesty
                to every job. We believe that car owners in Pune deserve
                transparent service and fair pricing — and that's what we've
                delivered for over three decades.
              </p>
              <div className="p-4 bg-az-card border-l-4 border-az-red rounded">
                <p className="text-white font-semibold italic">
                  "Complete car care under one roof — that's not just our motto,
                  it's our commitment to every customer in Pune."
                </p>
                <p className="text-az-metallic text-sm mt-2">
                  — Vinod, Founder, Auto Zone
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-az-card border border-az-surface rounded-lg p-6 text-center card-hover"
                >
                  <div className="w-10 h-10 rounded bg-az-red/10 flex items-center justify-center text-az-red mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="stat-number text-4xl font-black mb-1">
                    {stat.value}
                  </div>
                  <div className="text-az-silver text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-12 bg-az-red/10 border-y border-az-red/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <p className="text-az-red text-sm font-semibold uppercase tracking-widest">
              What We Offer
            </p>
            <h2 className="font-display text-2xl font-black text-white mt-1">
              Complete Automobile Solutions in Pune
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Car Service in Pune",
              "Tyre Shop Pune",
              "Car Battery Replacement",
              "Luxury Car Service",
              "Roadside Assistance",
              "RTO Paper Transfer",
              "New & Used Spare Parts",
              "Car Accessories Fitting",
              "Old Tyre Buy & Sell",
              "Engine & Mechanical Repair",
            ].map((service) => (
              <span
                key={service}
                className="flex items-center gap-1.5 bg-az-card border border-az-surface text-az-silver text-sm px-3 py-1.5 rounded-full"
              >
                <CheckCircle className="w-3.5 h-3.5 text-az-red shrink-0" />
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-az-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-az-red" />
              <span className="text-az-red text-sm font-semibold uppercase tracking-widest">
                Our Strengths
              </span>
              <span className="w-8 h-0.5 bg-az-red" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-4">
              Why Car Owners in Pune Choose Auto Zone
            </h2>
            <p className="text-az-silver text-lg max-w-2xl mx-auto">
              We go beyond just fixing cars. We build lasting relationships with
              our customers built on trust, quality, and 30 years of proven
              reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="bg-az-card border border-az-surface rounded-lg p-6 card-hover"
              >
                <div className="w-12 h-12 rounded bg-az-red/10 flex items-center justify-center text-az-red mb-4">
                  {item.icon}
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-az-silver text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-az-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-az-red" />
              <span className="text-az-red text-sm font-semibold uppercase tracking-widest">
                Our Journey
              </span>
              <span className="w-8 h-0.5 bg-az-red" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white">
              30 Years of Growth in Pune
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-az-red flex items-center justify-center text-white font-mono text-xs font-bold shrink-0">
                    {m.year.slice(-2)}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-az-surface mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-az-red text-xs font-semibold uppercase tracking-wider mb-1">
                    {m.year}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-1">
                    {m.event}
                  </h3>
                  <p className="text-az-silver text-sm">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-az-card border-t border-az-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-4">
            Experience 30+ Years of Trusted Car Service in Pune
          </h2>
          <p className="text-az-silver text-lg mb-8 max-w-xl mx-auto">
            Book your service today or visit Auto Zone in Pune to see why
            thousands of car owners trust us for all their automobile needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/booking">
              <Button
                data-ocid="about.primary_button"
                size="lg"
                className="bg-az-red hover:bg-az-red-bright text-white font-bold px-8"
              >
                Book a Service
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                data-ocid="about.secondary_button"
                size="lg"
                variant="outline"
                className="border-az-surface text-az-silver hover:text-white hover:border-az-red"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
