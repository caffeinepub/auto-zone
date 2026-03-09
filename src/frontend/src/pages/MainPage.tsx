import BookingModal from "@/components/BookingModal";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import {
  CheckCircle,
  ChevronRight,
  Clock,
  DollarSign,
  Loader2,
  Mail,
  MapPin,
  Network,
  Phone,
  Shield,
  Star,
  Wrench,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { toast } from "sonner";

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    id: 1,
    title: "Engine Diagnostics",
    image: "/assets/generated/service-engine-diagnostics.dim_600x400.jpg",
    desc: "Advanced computer diagnostics to identify and resolve engine issues accurately",
  },
  {
    id: 2,
    title: "Oil Change & Maintenance",
    image: "/assets/generated/service-oil-change.dim_600x400.jpg",
    desc: "Regular oil changes and fluid maintenance to keep your engine running smoothly",
  },
  {
    id: 3,
    title: "Brake Repair",
    image: "/assets/generated/service-brake-repair.dim_600x400.jpg",
    desc: "Complete brake system inspection, repair, and replacement for your safety",
  },
  {
    id: 4,
    title: "AC Service",
    image: "/assets/generated/service-ac-service.dim_600x400.jpg",
    desc: "Full air conditioning service, recharging, and repair for comfort on the road",
  },
  {
    id: 5,
    title: "Battery Replacement",
    image: "/assets/generated/service-battery.dim_600x400.jpg",
    desc: "Battery testing, charging, and replacement with quality automotive batteries",
  },
  {
    id: 6,
    title: "Tire Services",
    image: "/assets/generated/service-tire.dim_600x400.jpg",
    desc: "Tire fitting, balancing, alignment, and rotation for safe, smooth driving",
  },
  {
    id: 7,
    title: "Car Inspection",
    image: "/assets/generated/service-inspection.dim_600x400.jpg",
    desc: "Comprehensive pre-purchase and safety inspections with detailed reports",
  },
  {
    id: 8,
    title: "General Car Repair",
    image: "/assets/generated/about-workshop.dim_800x600.jpg",
    desc: "Full-service mechanical repair handled by skilled and experienced technicians",
  },
];

const whyChooseItems = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "30+ Years Experience",
    desc: "Decades of hands-on expertise in all types of vehicles",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Skilled Mechanics",
    desc: "Trained and certified technicians for every repair",
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "Trusted Service Network",
    desc: "Partner workshops for specialized repairs",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Transparent Pricing",
    desc: "No hidden fees. Honest quotes before any work begins",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Quality Parts",
    desc: "Only genuine and quality-approved parts used in repairs",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Turnaround",
    desc: "Efficient service so you get back on the road quickly",
  },
];

const howItWorksSteps = [
  {
    step: 1,
    title: "Book Your Service",
    desc: "Schedule online or call us to set your preferred time",
  },
  {
    step: 2,
    title: "Vehicle Inspection",
    desc: "Our experts thoroughly inspect your vehicle on arrival",
  },
  {
    step: 3,
    title: "Expert Repair",
    desc: "Skilled mechanics perform precise repairs with quality parts",
  },
  {
    step: 4,
    title: "Safe Delivery",
    desc: "Your vehicle is returned clean, repaired, and road-ready",
  },
];

const reviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Car Owner",
    rating: 5,
    text: "Auto Zone has been servicing my car for 5 years now. Always honest, always professional. I wouldn't trust anyone else with my vehicle.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Honda City Owner",
    rating: 5,
    text: "Excellent service! They diagnosed a problem three other garages missed. Transparent pricing and quick turnaround. Highly recommended!",
  },
  {
    id: 3,
    name: "Mohammed Ali",
    role: "Hyundai Creta Owner",
    rating: 5,
    text: "Professional staff, clean workshop, fair prices. My car has never run better. Auto Zone is the only place I go for all my car needs.",
  },
];

const serviceTypeOptions = [
  "Engine Diagnostics",
  "Oil Change & Maintenance",
  "Brake Repair",
  "AC Service",
  "Battery Replacement",
  "Tire Services",
  "Car Inspection",
  "General Repair",
  "Other",
];

// ─── Section Components ───────────────────────────────────────────────────────

const heroCredentials = [
  { value: "30+", label: "Years Experience" },
  { value: "10k+", label: "Cars Serviced" },
  { value: "100%", label: "Transparent" },
  { value: "24h", label: "Fast Turnaround" },
];

function HeroSection({ onBookService }: { onBookService: () => void }) {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[640px] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-mechanic-garage.dim_1600x900.jpg')",
          backgroundPosition: "center 30%",
        }}
      />
      {/* Deep navy gradient overlay — heavier on left for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, oklch(0.11 0.05 260 / 0.97) 0%, oklch(0.10 0.04 260 / 0.88) 45%, oklch(0.08 0.02 260 / 0.55) 100%)",
        }}
      />
      {/* Subtle gold vignette on right side */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 85% 50%, oklch(0.72 0.10 75 / 0.07) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-2xl">
          {/* Authority badge */}
          <div className="inline-flex items-center gap-3 hero-cred-strip rounded-full px-5 py-2 mb-10">
            <div className="w-2 h-2 rounded-full bg-az-gold shrink-0" />
            <span className="text-white/90 text-sm font-semibold tracking-wider uppercase">
              Trusted Automotive Service Since 1994
            </span>
          </div>

          {/* Single-impact headline — one unified statement */}
          <h1
            className="font-display font-black text-white leading-[0.92] mb-3"
            style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)" }}
          >
            Professional{" "}
            <span
              className="inline"
              style={{
                color: "oklch(0.78 0.12 78)",
                textShadow: "0 0 60px oklch(0.72 0.10 75 / 0.35)",
              }}
            >
              Car Care
            </span>
            <br />
            <span className="text-white">You Can Trust</span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/65 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-body">
            30+ Years of Experience in Automotive Repair & Maintenance. Expert
            technicians. Honest pricing. Every time.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4 mb-14">
            <Button
              data-ocid="hero.book_service_button"
              onClick={onBookService}
              size="lg"
              className="bg-az-gold hover:bg-az-gold-bright text-az-navy-dark font-bold text-base px-9 h-14 shadow-gold-glow transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_oklch(0.72_0.10_75/0.45)] rounded-xl"
            >
              Book Service
              <ChevronRight className="ml-1 w-5 h-5" />
            </Button>
            <Button
              data-ocid="hero.contact_us_button"
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              className="btn-outline-white text-base px-9 h-14 rounded-xl font-semibold"
            >
              Contact Us
            </Button>
          </div>

          {/* Credibility strip — 4 stats anchored below CTAs */}
          <div className="flex flex-wrap gap-px hero-cred-strip rounded-2xl overflow-hidden w-fit">
            {heroCredentials.map((cred, i) => (
              <div
                key={cred.label}
                className={`flex flex-col items-center justify-center px-7 py-4 ${
                  i < heroCredentials.length - 1
                    ? "border-r border-white/10"
                    : ""
                }`}
              >
                <span
                  className="stat-display text-white"
                  style={{ fontSize: "1.75rem", color: "oklch(0.78 0.12 78)" }}
                >
                  {cred.value}
                </span>
                <span className="text-white/50 text-xs uppercase tracking-widest mt-0.5 whitespace-nowrap">
                  {cred.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-6 h-10 rounded-full border-2 border-white/15 flex items-start justify-center p-1">
          <div className="w-1 h-3 rounded-full bg-white/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

const trustStats = [
  { value: "30+", label: "Years Experience", sub: "Since 1994" },
  { value: "10,000+", label: "Cars Serviced", sub: "& counting" },
  { value: "100%", label: "Transparent Pricing", sub: "No hidden fees" },
  { value: "5★", label: "Customer Rating", sub: "Verified reviews" },
];

function AboutSection() {
  return (
    <>
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-10 h-0.5 bg-az-gold" />
                <span className="text-az-gold text-sm font-bold uppercase tracking-widest">
                  About Auto Zone
                </span>
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl text-az-navy mb-8 leading-tight">
                30 Years of Trusted <br />
                <span className="text-gold-gradient">
                  Automotive Excellence
                </span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                <p>
                  At Auto Zone, we believe that every car deserves expert
                  attention and honest service. With more than 30 years of
                  experience in automobile repair and maintenance, we understand
                  vehicles inside and out. Unlike many service centers that
                  focus only on quick fixes, we focus on long-term reliability
                  and customer trust.
                </p>
                <p>
                  We are also a trusted service provider, meaning we coordinate
                  and send vehicles to specialized partner workshops when
                  certain repairs require advanced equipment or expertise,
                  ensuring your car always receives the best possible care.
                </p>
                <p>
                  Our goal is simple — to keep your car safe, efficient, and
                  running smoothly. We combine experience, modern tools, and
                  genuine care for every vehicle that enters our service
                  network. When you choose Auto Zone, you are choosing
                  experience, transparency, and service you can rely on.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/assets/generated/about-workshop.dim_800x600.jpg"
                  alt="Auto Zone Workshop"
                  className="w-full rounded-2xl object-cover"
                  style={{
                    aspectRatio: "4/3",
                    boxShadow:
                      "0 32px 64px oklch(0.22 0.07 260 / 0.20), 0 8px 24px oklch(0.22 0.07 260 / 0.10)",
                  }}
                />
              </div>
              {/* Geometric accent blocks */}
              <div
                className="absolute -bottom-5 -left-5 w-40 h-40 rounded-2xl -z-10"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.22 0.07 260 / 0.06), oklch(0.22 0.07 260 / 0.02))",
                  border: "1px solid oklch(0.22 0.07 260 / 0.08)",
                }}
              />
              <div
                className="absolute -top-5 -right-5 w-28 h-28 rounded-2xl -z-10"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.10 75 / 0.12), oklch(0.72 0.10 75 / 0.04))",
                  border: "1px solid oklch(0.72 0.10 75 / 0.15)",
                }}
              />
              {/* Experience badge */}
              <div
                className="absolute bottom-6 left-6 px-5 py-4 rounded-xl"
                style={{
                  background: "oklch(0.14 0.05 260 / 0.95)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid oklch(0.72 0.10 75 / 0.30)",
                  boxShadow: "0 8px 32px oklch(0.10 0.04 260 / 0.40)",
                }}
              >
                <div
                  className="stat-display text-az-gold"
                  style={{ fontSize: "2rem" }}
                >
                  30+
                </div>
                <div className="text-white/60 text-xs uppercase tracking-widest mt-0.5">
                  Years of Trust
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Band — full-width navy interstitial */}
      <div className="stats-band py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {trustStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center text-center py-8 md:py-0 px-6"
              >
                <div
                  className="stat-display text-white mb-1"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    color: "oklch(0.80 0.12 78)",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-white/80 font-semibold text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
                <div className="text-white/35 text-xs mt-1 font-body">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function ServicesSection({ onBookService }: { onBookService: () => void }) {
  return (
    <section id="services" className="py-24 bg-az-gray-light">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-az-gold" />
            <span className="text-az-gold text-sm font-bold uppercase tracking-widest">
              What We Offer
            </span>
            <span className="w-10 h-0.5 bg-az-gold" />
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-az-navy mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Comprehensive automotive care under one roof
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              data-ocid={`services.item.${service.id}`}
              className="bg-white rounded-xl overflow-hidden shadow-card-light service-card border border-az-gray-border"
            >
              <div className="h-48 service-card-img">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-az-navy text-lg mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <button
                  type="button"
                  onClick={onBookService}
                  className="group/btn text-az-gold font-semibold text-sm flex items-center gap-1 transition-all hover:text-az-navy"
                >
                  Book Now
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section id="why-us" className="py-24 why-us-bg">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-az-gold" />
            <span className="text-az-gold text-sm font-bold uppercase tracking-widest">
              Our Commitment
            </span>
            <span className="w-10 h-0.5 bg-az-gold" />
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-4">
            Why Choose Auto Zone
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            We deliver premium automotive care backed by decades of expertise
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseItems.map((item, i) => (
            <div
              key={item.title}
              data-ocid={`why.item.${i + 1}`}
              className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-az-gold/20 flex items-center justify-center text-az-gold mb-4">
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-az-gray-light">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-az-gold" />
            <span className="text-az-gold text-sm font-bold uppercase tracking-widest">
              Our Process
            </span>
            <span className="w-10 h-0.5 bg-az-gold" />
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-az-navy mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Simple, transparent, and professional — four steps to complete car
            care
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector line - desktop only */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-az-gold via-az-gray-border to-az-gray-border" />

          {howItWorksSteps.map((step) => (
            <div
              key={step.step}
              data-ocid={`howworks.item.${step.step}`}
              className="flex flex-col items-center text-center relative"
            >
              <div className="w-20 h-20 rounded-full bg-az-navy text-white flex items-center justify-center font-display font-black text-2xl mb-5 shadow-navy-glow relative z-10">
                {step.step}
              </div>
              <h3 className="font-display font-bold text-az-navy text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-az-gold" />
            <span className="text-az-gold text-sm font-bold uppercase tracking-widest">
              Testimonials
            </span>
            <span className="w-10 h-0.5 bg-az-gold" />
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-az-navy mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Trusted by thousands of car owners across the region
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              data-ocid={`reviews.item.${review.id}`}
              className="bg-white rounded-2xl p-8 card-lift relative overflow-hidden"
              style={{
                boxShadow:
                  "0 4px 20px oklch(0.22 0.07 260 / 0.07), 0 1px 4px oklch(0.22 0.07 260 / 0.04)",
                borderLeft: "4px solid oklch(0.72 0.10 75)",
                border: "1px solid oklch(0.88 0.02 240)",
                borderLeftWidth: "4px",
                borderLeftColor: "oklch(0.72 0.10 75)",
              }}
            >
              {/* Large decorative quote */}
              <div
                className="absolute top-4 right-6 font-display font-black leading-none select-none pointer-events-none"
                style={{
                  fontSize: "6rem",
                  color: "oklch(0.22 0.07 260 / 0.04)",
                  lineHeight: 1,
                }}
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: review.rating }, (_, i) => (
                  <Star
                    key={`star-${review.id}-${i}`}
                    className="w-5 h-5 star-gold fill-current"
                  />
                ))}
              </div>

              <p
                className="text-foreground/75 leading-relaxed mb-7 text-sm font-body"
                style={{ fontStyle: "italic" }}
              >
                "{review.text}"
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-az-gray-border">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-display font-black text-base shrink-0"
                  style={{ background: "oklch(0.22 0.07 260)" }}
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-az-navy text-sm">
                    {review.name}
                  </div>
                  <div className="text-muted-foreground text-xs mt-0.5">
                    {review.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { actor } = useActor();
  const [isPending, setIsPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) {
      setError("Unable to connect. Please try again or call us directly.");
      return;
    }
    if (!form.serviceType) {
      setError("Please select a service type.");
      return;
    }

    setIsPending(true);
    setError("");
    try {
      await actor.submitContact(
        form.name,
        form.phone,
        form.email,
        form.message,
        form.serviceType,
      );
      setSubmitted(true);
      toast.success("Message sent! We'll get back to you shortly.");
    } catch {
      const errMsg =
        "Failed to send message. Please try again or contact us directly.";
      setError(errMsg);
      toast.error(errMsg);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-az-gold" />
            <span className="text-az-gold text-sm font-bold uppercase tracking-widest">
              Get In Touch
            </span>
            <span className="w-10 h-0.5 bg-az-gold" />
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-az-navy mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have a question or need a quote? We're ready to help you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-6 mb-8">
              <a
                href="tel:+919225516006"
                className="flex items-center gap-4 p-5 bg-az-gray-light rounded-xl hover:shadow-card-light transition-all group"
              >
                <div className="w-12 h-12 bg-az-navy rounded-xl flex items-center justify-center shrink-0 group-hover:bg-az-navy-light transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-0.5">
                    Phone
                  </div>
                  <div className="font-bold text-az-navy text-lg">
                    +91 9225516006
                  </div>
                </div>
              </a>

              <a
                href="mailto:vinodautozone@gmail.com"
                className="flex items-center gap-4 p-5 bg-az-gray-light rounded-xl hover:shadow-card-light transition-all group"
              >
                <div className="w-12 h-12 bg-az-navy rounded-xl flex items-center justify-center shrink-0 group-hover:bg-az-navy-light transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-0.5">
                    Email
                  </div>
                  <div className="font-bold text-az-navy">
                    vinodautozone@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-az-gray-light rounded-xl">
                <div className="w-12 h-12 bg-az-navy rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-0.5">
                    Location
                  </div>
                  <div className="font-bold text-az-navy">
                    Auto Zone Service Center
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Maharashtra, India
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div
              data-ocid="contact.map_marker"
              className="rounded-xl overflow-hidden border border-az-gray-border shadow-card-light"
              style={{ height: "280px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609948203!2d72.74109994506607!3d19.08252101868562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c55%3A0x6a2c1b0e5b0c5a1a!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1678000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Auto Zone Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-az-gray-light rounded-2xl p-8">
            <h3 className="font-display font-black text-xl text-az-navy mb-6">
              Send Us a Message
            </h3>

            {submitted ? (
              <div
                data-ocid="contact.success_state"
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="font-display font-bold text-xl text-az-navy mb-2">
                  Message Sent!
                </h4>
                <p className="text-muted-foreground">
                  Thank you for reaching out. We'll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label
                    htmlFor="contact-name"
                    className="text-sm font-semibold text-foreground mb-1.5 block"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="contact-name"
                    data-ocid="contact.name_input"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="bg-white border-az-gray-border focus:border-az-navy focus:ring-az-navy"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label
                      htmlFor="contact-phone"
                      className="text-sm font-semibold text-foreground mb-1.5 block"
                    >
                      Phone *
                    </Label>
                    <Input
                      id="contact-phone"
                      data-ocid="contact.phone_input"
                      required
                      type="tel"
                      placeholder="+91 XXXXXXXXXX"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="bg-white border-az-gray-border focus:border-az-navy"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="contact-email"
                      className="text-sm font-semibold text-foreground mb-1.5 block"
                    >
                      Email
                    </Label>
                    <Input
                      id="contact-email"
                      data-ocid="contact.email_input"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="bg-white border-az-gray-border focus:border-az-navy"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-semibold text-foreground mb-1.5 block">
                    Service Type
                  </Label>
                  <Select
                    value={form.serviceType}
                    onValueChange={(v) => handleChange("serviceType", v)}
                  >
                    <SelectTrigger
                      data-ocid="contact.service_select"
                      className="bg-white border-az-gray-border focus:border-az-navy"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypeOptions.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="contact-message"
                    className="text-sm font-semibold text-foreground mb-1.5 block"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="contact-message"
                    data-ocid="contact.message_textarea"
                    required
                    placeholder="Describe your car issue or inquiry..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="bg-white border-az-gray-border focus:border-az-navy resize-none"
                  />
                </div>

                {error && (
                  <div
                    data-ocid="contact.error_state"
                    className="text-red-500 text-sm p-3 bg-red-50 rounded-lg"
                  >
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={isPending}
                  className="w-full bg-az-navy hover:bg-az-navy-light text-white font-bold text-base py-6 transition-all"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection({ onBookService }: { onBookService: () => void }) {
  return (
    <section className="py-20 cta-pattern relative overflow-hidden">
      {/* Subtle diagonal lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 30px, oklch(1 0 0 / 0.3) 30px, oklch(1 0 0 / 0.3) 31px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
          <div className="w-2 h-2 rounded-full bg-az-gold" />
          <span className="text-white/80 text-sm font-medium">
            Professional Service
          </span>
        </div>
        <h2 className="font-display font-black text-4xl md:text-6xl text-white mb-4">
          Book Your Service Today
        </h2>
        <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
          Experience professional car care you can trust. 30+ years of expertise
          at your service.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+919225516006">
            <Button
              data-ocid="cta.call_now_button"
              size="lg"
              className="bg-az-gold hover:bg-az-gold-bright text-az-navy-dark font-bold text-base px-8 py-6 shadow-gold-glow transition-all hover:-translate-y-0.5"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </Button>
          </a>
          <Button
            data-ocid="cta.book_service_button"
            onClick={onBookService}
            size="lg"
            variant="outline"
            className="btn-outline-white text-base px-8 py-6"
          >
            Book Service
          </Button>
          <a href="mailto:vinodautozone@gmail.com">
            <Button
              data-ocid="cta.send_email_button"
              size="lg"
              variant="outline"
              className="btn-outline-white text-base px-8 py-6"
            >
              <Mail className="mr-2 w-5 h-5" />
              Send Email
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  const year = new Date().getFullYear();
  const footerLinks = [
    { label: "Home", href: "#home", ocid: "footer.home_link" },
    { label: "About", href: "#about", ocid: "footer.about_link" },
    { label: "Services", href: "#services", ocid: "footer.services_link" },
    {
      label: "How It Works",
      href: "#how-it-works",
      ocid: "footer.services_link",
    },
    { label: "Reviews", href: "#reviews", ocid: "footer.services_link" },
    { label: "Contact", href: "#contact", ocid: "footer.contact_link" },
    { label: "Privacy Policy", href: "#", ocid: "footer.privacy_policy_link" },
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-az-navy">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-az-gold rounded-lg flex items-center justify-center">
                <span className="text-az-navy-dark font-display font-black text-sm">
                  AZ
                </span>
              </div>
              <div>
                <div className="font-display font-black text-xl text-white">
                  AUTO ZONE
                </div>
                <div className="text-white/40 text-xs">
                  Professional Car Care
                </div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Professional Car Care You Can Trust. 30+ years of serving car
              owners with honesty, expertise, and genuine care.
            </p>
            <div className="flex gap-3">
              <a
                href="tel:+919225516006"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:bg-az-gold hover:text-az-navy transition-all"
                aria-label="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:vinodautozone@gmail.com"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:bg-az-gold hover:text-az-navy transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919225516006"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:bg-az-gold hover:text-az-navy transition-all"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-az-gold" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    data-ocid={link.ocid}
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/50 text-sm hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 text-az-gold/50 group-hover:text-az-gold transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-az-gold" />
              Contact Info
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+919225516006"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-az-gold/70 group-hover:text-az-gold shrink-0" />
                <span className="text-sm">+91 9225516006</span>
              </a>
              <a
                href="mailto:vinodautozone@gmail.com"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-az-gold/70 group-hover:text-az-gold shrink-0" />
                <span className="text-sm">vinodautozone@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/50">
                <MapPin className="w-4 h-4 text-az-gold/70 shrink-0 mt-0.5" />
                <span className="text-sm">
                  Auto Zone Service Center, Maharashtra, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {year} Auto Zone. All Rights Reserved.
          </p>
          <p className="text-white/30 text-xs">
            Built with <span className="text-az-gold/70">♥</span> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FloatingButtonsSection() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="tel:+919225516006"
        data-ocid="floating.call_button"
        className="w-14 h-14 rounded-full bg-az-navy flex items-center justify-center shadow-navy-glow transition-all duration-300 hover:scale-110 hover:bg-az-navy-light"
        aria-label="Call Auto Zone"
        title="Call Us: +91 9225516006"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
      <a
        href="https://wa.me/919225516006"
        data-ocid="floating.whatsapp_button"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full whatsapp-btn flex items-center justify-center shadow-lg transition-all duration-300"
        aria-label="WhatsApp Auto Zone"
        title="WhatsApp Us"
      >
        <SiWhatsapp className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function MainPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Navbar onBookService={() => setBookingOpen(true)} />

      <main>
        <HeroSection onBookService={() => setBookingOpen(true)} />
        <AboutSection />
        <ServicesSection onBookService={() => setBookingOpen(true)} />
        <WhyChooseSection />
        <HowItWorksSection />
        <ReviewsSection />
        <ContactSection />
        <CTASection onBookService={() => setBookingOpen(true)} />
      </main>

      <FooterSection />
      <FloatingButtonsSection />

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
