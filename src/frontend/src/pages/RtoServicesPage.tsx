import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  AlertCircle,
  ArrowRight,
  BadgeCheck,
  CheckCircle,
  ChevronRight,
  Clock,
  FileText,
  Phone,
  Shield,
  Users,
} from "lucide-react";

const rtoServices = [
  {
    title: "New Vehicle Registration",
    desc: "Complete new vehicle registration process with all necessary documents. We handle the entire process from form filling to RC collection.",
  },
  {
    title: "Transfer of Ownership",
    desc: "Smooth transfer of ownership for both buyer and seller. We manage all documentation to complete the transfer hassle-free.",
  },
  {
    title: "RC Renewal / Duplicate RC",
    desc: "Renewal of expired Registration Certificates (RC) and application for duplicate RC in case of loss or damage.",
  },
  {
    title: "Fitness Certificate",
    desc: "Arrange vehicle fitness certificates required for commercial vehicles and older private vehicles.",
  },
  {
    title: "NOC (No Objection Certificate)",
    desc: "Obtain No Objection Certificate when moving a vehicle to another state or for insurance/loan purposes.",
  },
  {
    title: "Hypothecation Addition/Removal",
    desc: "Adding or removing hypothecation (bank/lender details) from your vehicle's RC for loan or clearance purposes.",
  },
  {
    title: "Change of Address in RC",
    desc: "Update your residential address in the Registration Certificate when you move to a new location.",
  },
  {
    title: "Vehicle Class Amendment",
    desc: "Changes and amendments to vehicle classification and permitted use as per RTO requirements.",
  },
  {
    title: "Road Tax & Green Tax",
    desc: "Calculation and payment of road tax, one-time tax, and green tax for vehicles.",
  },
  {
    title: "Lost/Damaged Documents",
    desc: "Help with recovering or obtaining duplicates of lost or damaged RC, driving license, and other vehicle documents.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share Your Documents",
    desc: "Visit us or send us a list of required documents. Our team will verify and compile everything needed.",
  },
  {
    step: "02",
    title: "Document Preparation",
    desc: "We prepare all forms, applications, and supporting documents correctly to avoid any rejections.",
  },
  {
    step: "03",
    title: "RTO Submission",
    desc: "Our experienced team submits your application to the RTO office and follows up on your behalf.",
  },
  {
    step: "04",
    title: "Collect Your Documents",
    desc: "Once processed, we notify you and hand over the completed documents. Simple and stress-free!",
  },
];

const requiredDocs = [
  "Original RC Book",
  "Insurance Certificate",
  "PAN Card / Aadhaar Card",
  "Address Proof",
  "Recent Passport Photos",
  "Purchase Invoice (for new registration)",
  "NOC (if applicable)",
  "Bank NOC (for hypothecation removal)",
];

export default function RtoServicesPage() {
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
                RTO Services
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-4">
              RTO Documentation &{" "}
              <span className="text-red-gradient">Paperwork</span>
            </h1>
            <p className="text-az-silver text-lg leading-relaxed">
              Hassle-free handling of all your vehicle registration, transfer,
              and RTO documentation needs.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-az-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-az-red" />
                <span className="text-az-red text-sm font-semibold uppercase tracking-widest">
                  What is RTO
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-6">
                Understanding RTO Documentation
              </h2>
              <p className="text-az-silver leading-relaxed mb-4">
                The Regional Transport Office (RTO) is the government body
                responsible for all vehicle-related documentation in India.
                Dealing with RTO paperwork can be complex, time-consuming, and
                confusing — that's where AUTO ZONE comes in.
              </p>
              <p className="text-az-silver leading-relaxed mb-6">
                Our experienced team handles all RTO-related documentation
                efficiently, saving you time and the frustration of navigating
                bureaucratic processes. From simple address changes to complex
                ownership transfers, we manage it all.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    icon: <Clock className="w-5 h-5" />,
                    label: "Fast Processing",
                  },
                  {
                    icon: <Shield className="w-5 h-5" />,
                    label: "100% Accurate",
                  },
                  { icon: <Users className="w-5 h-5" />, label: "Expert Team" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-az-card border border-az-surface rounded p-3 text-center"
                  >
                    <div className="text-az-red flex justify-center mb-2">
                      {item.icon}
                    </div>
                    <div className="text-az-silver text-xs">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-az-card border border-az-surface rounded-lg p-6">
              <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-az-red" />
                Common Documents Required
              </h3>
              <ul className="space-y-2">
                {requiredDocs.map((doc) => (
                  <li
                    key={doc}
                    className="flex items-center gap-2 text-az-silver text-sm py-2 border-b border-az-surface last:border-0"
                  >
                    <CheckCircle className="w-4 h-4 text-az-red shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-az-red/10 border border-az-red/30 rounded">
                <p className="text-az-silver text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-az-red shrink-0 mt-0.5" />
                  Documents required vary by service type. Contact us for a
                  precise list based on your specific need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RTO Services List */}
      <section className="py-20 bg-az-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-az-red" />
              <span className="text-az-red text-sm font-semibold uppercase tracking-widest">
                Services Offered
              </span>
              <span className="w-8 h-0.5 bg-az-red" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white">
              RTO Services We Handle
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rtoServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-az-card border border-az-surface rounded-lg p-5 card-hover"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-az-red flex items-center justify-center text-white text-xs font-mono font-bold shrink-0">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-az-silver text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-az-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-az-red" />
              <span className="text-az-red text-sm font-semibold uppercase tracking-widest">
                How It Works
              </span>
              <span className="w-8 h-0.5 bg-az-red" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white">
              Our Simple Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-az-card border border-az-surface rounded-lg p-6 card-hover h-full">
                  <div className="font-mono text-4xl font-black text-az-red/20 mb-4 leading-none">
                    {step.step}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-az-silver text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-az-red" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-az-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-4">
            Need RTO Help? We've Got You Covered.
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Don't deal with RTO hassles yourself. Let our experts handle it
            quickly and correctly.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-az-red hover:bg-az-silver-light font-black text-base px-8"
              >
                Send an Enquiry
              </Button>
            </Link>
            <a href="tel:+919225516006">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us Directly
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
