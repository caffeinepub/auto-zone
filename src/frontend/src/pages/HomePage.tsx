import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Award,
  Battery,
  Car,
  ChevronRight,
  Clock,
  FileText,
  LifeBuoy,
  Package,
  Phone,
  Settings,
  Shield,
  ShoppingBag,
  Star,
  ThumbsUp,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Car Service in Pune",
    desc: "Complete car servicing and repair by certified technicians — engine diagnostics, oil changes, brake work and full vehicle maintenance.",
    href: "/services",
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Tyre Shop Pune",
    desc: "Pune's trusted tyre shop. New and used tyres from top brands with professional fitting, balancing, and wheel alignment.",
    href: "/tyres-battery",
  },
  {
    icon: <Battery className="w-8 h-8" />,
    title: "Car Battery Replacement",
    desc: "Expert car battery replacement in Pune. Premium batteries, free testing, free installation, and old battery exchange.",
    href: "/tyres-battery",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Luxury Car Service",
    desc: "Specialised luxury car service for premium vehicles. Handled with the precision, care, and discretion your car deserves.",
    href: "/services",
  },
  {
    icon: <LifeBuoy className="w-8 h-8" />,
    title: "Roadside Assistance",
    desc: "Stuck on the road? Our roadside assistance team is ready to help with tyre changes, battery jumpstart, and emergency repairs.",
    href: "/contact",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "RTO Paper Transfer",
    desc: "Hassle-free RTO paper transfer, vehicle registration, ownership transfer, and all RTO documentation handled by our experts.",
    href: "/rto-services",
  },
];

const trustPillars = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "30+ Years of Experience",
    desc: "Over three decades of serving Pune's car owners. Our experience means your vehicle is always in safe, knowledgeable hands.",
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Genuine Quality Parts",
    desc: "We use only original or certified equivalent parts — new and quality-tested used parts — for lasting performance.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Transparent Pricing",
    desc: "Fair, upfront pricing with no hidden charges. Know exactly what you pay before any work begins.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Fast Turnaround",
    desc: "Efficient service processes to get you back on the road as quickly as possible — without cutting corners.",
  },
];

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "10,000+", label: "Happy Customers" },
  { value: "12", label: "Services Offered" },
  { value: "100%", label: "Satisfaction Rate" },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    vehicle: "Maruti Swift",
    text: "Best car service in Pune! My car was repaired quickly and at a very reasonable price. The staff is professional and completely transparent about the work needed.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    vehicle: "Honda City",
    text: "Got my tyres replaced and wheel alignment done at this tyre shop in Pune. Super smooth experience. Auto Zone is now my go-to for all car needs!",
    rating: 5,
  },
  {
    name: "Amit Patil",
    vehicle: "Hyundai Creta",
    text: "They handled all my RTO paper transfer without any hassle. Very knowledgeable team. Saved me so much time and stress navigating the paperwork.",
    rating: 5,
  },
  {
    name: "Sneha Desai",
    vehicle: "Toyota Fortuner",
    text: "Excellent luxury car service for my Fortuner. They treat premium vehicles with the care and attention they deserve. Highly recommended in Pune.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="pt-[88px] md:pt-[112px]">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-workshop.dim_1400x600.jpg')",
          }}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10"
          style={{
            background:
              "linear-gradient(135deg, transparent 0%, oklch(0.55 0.22 25) 100%)",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-az-red/20 border border-az-red/40 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-az-red animate-pulse" />
              <span className="text-az-red text-sm font-semibold tracking-wide uppercase">
                Pune's Trusted Car Service Center — 30+ Years
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-black text-white leading-none mb-6 animate-fade-in-up">
              PUNE'S #1 <span className="text-red-gradient">AUTO CARE</span>{" "}
              CENTER
            </h1>

            <p className="text-az-silver text-lg md:text-xl leading-relaxed mb-8 max-w-xl animate-fade-in-up">
              Auto Zone is Pune's most trusted car service center — providing
              expert car servicing, tyre shop services, car battery replacement,
              luxury car service, roadside assistance, and RTO paper transfer
              under one roof for over 30 years.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up">
              <Link to="/booking">
                <Button
                  data-ocid="hero.primary_button"
                  size="lg"
                  className="bg-az-red hover:bg-az-red-bright text-white font-bold text-base px-8 shadow-red-glow-lg transition-all hover:-translate-y-0.5"
                >
                  Book a Service
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+919225516006">
                <Button
                  data-ocid="hero.secondary_button"
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8 backdrop-blur-sm"
                >
                  <Phone className="mr-2 w-5 h-5 text-az-red" />
                  Call Now
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="stat-number text-3xl font-black">
                    {stat.value}
                  </div>
                  <div className="text-az-silver text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO keyword strip */}
      <section className="py-4 bg-az-red/90">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/90 text-sm font-medium">
            {[
              "Car Service in Pune",
              "Tyre Shop Pune",
              "Car Battery Replacement",
              "Luxury Car Service",
              "Roadside Assistance",
              "RTO Paper Transfer",
            ].map((kw) => (
              <span key={kw} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-az-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-az-red" />
              <span className="text-az-red text-sm font-semibold uppercase tracking-widest">
                What We Do
              </span>
              <span className="w-8 h-0.5 bg-az-red" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-4">
              Complete Car Care in Pune
            </h2>
            <p className="text-az-silver text-lg max-w-2xl mx-auto">
              From routine car service and tyre replacement to luxury car care
              and RTO paper transfer — everything your vehicle needs, all under
              one roof in Pune.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.title} to={service.href}>
                <div className="bg-az-card border border-az-surface rounded-lg p-6 card-hover h-full">
                  <div className="w-14 h-14 rounded bg-az-red/10 flex items-center justify-center text-az-red mb-4">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-az-silver text-sm leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-az-red text-sm font-medium">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button
                data-ocid="services.primary_button"
                size="lg"
                className="bg-az-red hover:bg-az-red-bright text-white font-bold"
              >
                View All Services
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose AUTO ZONE */}
      <section className="py-20 bg-az-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-az-red" />
                <span className="text-az-red text-sm font-semibold uppercase tracking-widest">
                  Why Choose Us
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-6">
                30+ Years Serving{" "}
                <span className="text-red-gradient">Pune</span>
              </h2>
              <p className="text-az-silver text-lg leading-relaxed mb-4">
                Auto Zone has been the most trusted name in car service in Pune
                for over 30 years. Whether you need routine maintenance, urgent
                car battery replacement, a new set of tyres from our tyre shop,
                or professional RTO paper transfer — we deliver quality every
                single time.
              </p>
              <p className="text-az-silver leading-relaxed mb-8">
                We also provide dedicated luxury car service for high-end
                vehicles and 24/7 roadside assistance for emergencies. Our
                experience, combined with genuine parts and skilled technicians,
                makes us Pune's complete automotive partner.
              </p>
              <Link to="/about">
                <Button
                  variant="outline"
                  className="border-az-red text-az-red hover:bg-az-red hover:text-white font-semibold"
                >
                  About Auto Zone
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-az-card border border-az-surface rounded-lg p-5 card-hover"
                >
                  <div className="w-12 h-12 rounded bg-az-red/10 flex items-center justify-center text-az-red mb-3">
                    {pillar.icon}
                  </div>
                  <h3 className="font-display text-base font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-az-silver text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-az-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 20px, oklch(0.98 0 0 / 0.1) 20px, oklch(0.98 0 0 / 0.1) 22px)",
            }}
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-black text-white mb-4">
            Looking for Car Service Near You in Pune?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Book your service today at Auto Zone — Pune's most trusted car
            service center for tyres, batteries, luxury cars, and more.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/booking">
              <Button
                data-ocid="cta.primary_button"
                size="lg"
                className="bg-white text-az-red hover:bg-az-silver-light font-black text-base px-8 transition-all hover:-translate-y-0.5"
              >
                Book a Service Now
              </Button>
            </Link>
            <a
              href="https://wa.me/919225516006"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                data-ocid="cta.secondary_button"
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold text-base px-8"
              >
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-az-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-az-red" />
              <span className="text-az-red text-sm font-semibold uppercase tracking-widest">
                Customer Reviews
              </span>
              <span className="w-8 h-0.5 bg-az-red" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-4">
              What Pune Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-az-card border border-az-surface rounded-lg p-6 card-hover"
              >
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }, (_, i) => (
                    <Star
                      key={`star-${t.name}-${i}`}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-az-silver text-sm leading-relaxed mb-4 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-az-red/20 flex items-center justify-center text-az-red font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {t.name}
                    </div>
                    <div className="text-az-metallic text-xs">{t.vehicle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-12 bg-az-card border-t border-az-surface">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-black text-white mb-1">
                Need a Car Service in Pune? Call Us Now
              </h3>
              <p className="text-az-silver">
                Reach Auto Zone anytime — our team is ready to assist with car
                service, tyres, batteries, or RTO help
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+919225516006">
                <Button
                  data-ocid="contact.primary_button"
                  className="bg-az-red hover:bg-az-red-bright text-white font-semibold"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  +91 9225516006
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  data-ocid="contact.secondary_button"
                  variant="outline"
                  className="border-az-surface text-az-silver hover:text-white hover:border-az-red"
                >
                  Send Enquiry
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
