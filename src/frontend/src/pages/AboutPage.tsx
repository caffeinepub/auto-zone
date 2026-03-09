import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle,
  ChevronRight,
  Clock,
  Package,
  Shield,
  Star,
  ThumbsUp,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

const stats = [
  {
    value: "10+",
    label: "Years of Experience",
    icon: <Award className="w-5 h-5" />,
  },
  {
    value: "5000+",
    label: "Happy Customers",
    icon: <Users className="w-5 h-5" />,
  },
  {
    value: "10",
    label: "Services Offered",
    icon: <Wrench className="w-5 h-5" />,
  },
  {
    value: "3",
    label: "Certified Technicians",
    icon: <Shield className="w-5 h-5" />,
  },
];

const whyUs = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Certified & Experienced Technicians",
    desc: "Our mechanics are trained professionals with years of hands-on experience across all car makes and models.",
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Quality Genuine Parts",
    desc: "We source only authentic, high-quality parts to ensure long-lasting performance and reliability.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Transparent & Fair Pricing",
    desc: "No hidden charges. We provide clear upfront estimates and stick to them, always.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Quick & Efficient Service",
    desc: "We respect your time. Our streamlined processes ensure minimal wait times without compromising quality.",
  },
  {
    icon: <ThumbsUp className="w-6 h-6" />,
    title: "Customer-First Approach",
    desc: "Your satisfaction is our priority. We listen, advise honestly, and deliver results you can trust.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Convenient Hours",
    desc: "Open 6 days a week with extended hours so we fit into your schedule, not the other way around.",
  },
];

const milestones = [
  {
    year: "2014",
    event: "AUTO ZONE Founded",
    desc: "Started as a small garage with a passion for quality car care.",
  },
  {
    year: "2016",
    event: "Expanded Services",
    desc: "Added tyre, battery, and accessories services to meet growing demand.",
  },
  {
    year: "2019",
    event: "RTO Services Launch",
    desc: "Launched comprehensive RTO documentation and vehicle paperwork services.",
  },
  {
    year: "2022",
    event: "5000+ Customers",
    desc: "Reached a milestone of 5000+ satisfied customers and counting.",
  },
  {
    year: "2024",
    event: "Full-Service Center",
    desc: "Became a complete automobile solution center with 10+ specialized services.",
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
              About <span className="text-red-gradient">AUTO ZONE</span>
            </h1>
            <p className="text-az-silver text-lg leading-relaxed">
              Your trusted automobile service center — where expertise meets
              genuine care for every vehicle.
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
                Our Story & Mission
              </h2>
              <p className="text-az-silver leading-relaxed mb-4">
                AUTO ZONE was founded with a singular mission: to provide car
                owners with a reliable, honest, and comprehensive automobile
                service center they can truly trust. We started as a modest
                workshop over a decade ago and have grown into a full-service
                automobile solution center.
              </p>
              <p className="text-az-silver leading-relaxed mb-4">
                Our philosophy is simple — treat every vehicle as if it were our
                own. From routine oil changes to complex engine repairs, tyre
                replacements to RTO documentation, we handle it all with the
                same dedication and precision.
              </p>
              <p className="text-az-silver leading-relaxed mb-6">
                Today, AUTO ZONE serves thousands of satisfied customers who
                trust us with their most valuable assets. Our team of skilled
                technicians, combined with genuine parts and state-of-the-art
                equipment, ensures that your vehicle receives the best possible
                care every time you visit us.
              </p>
              <div className="p-4 bg-az-card border-l-4 border-az-red rounded">
                <p className="text-white font-semibold italic">
                  "Complete car care under one roof — that's not just our motto,
                  it's our commitment to every customer."
                </p>
                <p className="text-az-metallic text-sm mt-2">
                  — Vinod, Founder, AUTO ZONE
                </p>
              </div>
            </div>

            {/* Stats */}
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
              Why Choose AUTO ZONE?
            </h2>
            <p className="text-az-silver text-lg max-w-2xl mx-auto">
              We go beyond just fixing cars. We build relationships with our
              customers built on trust, quality, and reliability.
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
              Milestones & Growth
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
            Experience the AUTO ZONE Difference
          </h2>
          <p className="text-az-silver text-lg mb-8 max-w-xl mx-auto">
            Book your service today or visit us to see why thousands of
            customers trust AUTO ZONE for all their car care needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/booking">
              <Button
                size="lg"
                className="bg-az-red hover:bg-az-red-bright text-white font-bold px-8"
              >
                Book a Service
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
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
