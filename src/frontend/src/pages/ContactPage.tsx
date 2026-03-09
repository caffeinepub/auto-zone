import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

interface FormState {
  customerName: string;
  phone: string;
  email: string;
  message: string;
}

const initialForm: FormState = {
  customerName: "",
  phone: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const { actor } = useActor();
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [enquiryId, setEnquiryId] = useState<string>("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.customerName || !form.phone || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!actor) {
      toast.error("Service not ready. Please try again in a moment.");
      return;
    }

    setSubmitting(true);
    try {
      const id = await actor.submitContact(
        form.customerName,
        form.phone,
        form.email,
        form.message,
        "",
      );
      setEnquiryId(id.toString());
      setSubmitted(true);
      toast.success("Enquiry submitted successfully!");
    } catch (err) {
      console.error(err);
      toast.error(
        "Failed to submit enquiry. Please try again or call us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  function handleReset() {
    setForm(initialForm);
    setSubmitted(false);
    setEnquiryId("");
  }

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
                Contact
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-4">
              Get In <span className="text-red-gradient">Touch</span>
            </h1>
            <p className="text-az-silver text-lg leading-relaxed">
              We're here to help. Reach out via phone, WhatsApp, email, or fill
              in the enquiry form.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="py-20 bg-az-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-black text-white mb-8">
                Contact Information
              </h2>

              <div className="space-y-5 mb-10">
                <a
                  href="tel:+919225516006"
                  className="flex items-center gap-4 p-4 bg-az-card border border-az-surface rounded-lg hover:border-az-red transition-colors group"
                >
                  <div className="w-12 h-12 rounded bg-az-red flex items-center justify-center text-white shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-az-metallic text-xs uppercase tracking-wide mb-0.5">
                      Phone / Call Now
                    </div>
                    <div className="text-white font-semibold text-lg">
                      +91 9225516006
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:vinodautozone@gmail.com"
                  className="flex items-center gap-4 p-4 bg-az-card border border-az-surface rounded-lg hover:border-az-red transition-colors group"
                >
                  <div className="w-12 h-12 rounded bg-az-surface flex items-center justify-center text-az-red shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-az-metallic text-xs uppercase tracking-wide mb-0.5">
                      Email
                    </div>
                    <div className="text-white font-medium">
                      vinodautozone@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919225516006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-az-card border border-az-surface rounded-lg hover:border-green-500 transition-colors group"
                >
                  <div className="w-12 h-12 rounded bg-green-600 flex items-center justify-center text-white shrink-0">
                    <SiWhatsapp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-az-metallic text-xs uppercase tracking-wide mb-0.5">
                      WhatsApp
                    </div>
                    <div className="text-white font-medium">+91 9225516006</div>
                    <div className="text-az-silver text-xs">
                      Click to open WhatsApp chat
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-az-card border border-az-surface rounded-lg">
                  <div className="w-12 h-12 rounded bg-az-surface flex items-center justify-center text-az-red shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-az-metallic text-xs uppercase tracking-wide mb-0.5">
                      Working Hours
                    </div>
                    <div className="text-white font-medium">
                      Mon – Sat: 9:00 AM – 7:00 PM
                    </div>
                    <div className="text-az-silver text-sm">
                      Sunday: 10:00 AM – 4:00 PM
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick action buttons */}
              <div className="flex gap-3">
                <a href="tel:+919225516006" className="flex-1">
                  <Button className="w-full bg-az-red hover:bg-az-red-bright text-white font-semibold">
                    <Phone className="mr-2 w-4 h-4" />
                    Call Now
                  </Button>
                </a>
                <a
                  href="https://wa.me/919225516006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold">
                    <SiWhatsapp className="mr-2 w-4 h-4" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Enquiry Form */}
            <div>
              <h2 className="font-display text-2xl font-black text-white mb-8">
                Customer Enquiry Form
              </h2>

              {submitted ? (
                <div className="bg-az-card border border-green-500/30 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    Enquiry Submitted!
                  </h3>
                  <p className="text-az-silver text-sm mb-2">
                    Thank you for contacting AUTO ZONE. Your enquiry has been
                    received.
                  </p>
                  {enquiryId && (
                    <p className="text-az-metallic text-xs mb-6">
                      Reference ID:{" "}
                      <span className="font-mono text-az-red">
                        #{enquiryId}
                      </span>
                    </p>
                  )}
                  <p className="text-az-silver text-sm mb-6">
                    We'll get back to you within 24 hours, or you can call us
                    directly for immediate assistance.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <Button
                      variant="outline"
                      className="border-az-surface text-az-silver hover:border-az-red hover:text-az-red"
                      onClick={handleReset}
                    >
                      Submit Another
                    </Button>
                    <a href="tel:+919225516006">
                      <Button className="bg-az-red hover:bg-az-red-bright text-white">
                        <Phone className="mr-2 w-4 h-4" />
                        Call Now
                      </Button>
                    </a>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-az-card border border-az-surface rounded-lg p-6 space-y-5"
                >
                  <div>
                    <Label
                      htmlFor="customerName"
                      className="text-az-silver text-sm mb-1.5 block"
                    >
                      Full Name <span className="text-az-red">*</span>
                    </Label>
                    <Input
                      id="customerName"
                      name="customerName"
                      placeholder="Enter your full name"
                      value={form.customerName}
                      onChange={handleChange}
                      required
                      className="bg-az-surface border-az-surface text-white placeholder:text-az-metallic focus:border-az-red"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-az-silver text-sm mb-1.5 block"
                    >
                      Phone Number <span className="text-az-red">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="bg-az-surface border-az-surface text-white placeholder:text-az-metallic focus:border-az-red"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-az-silver text-sm mb-1.5 block"
                    >
                      Email Address <span className="text-az-red">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="bg-az-surface border-az-surface text-white placeholder:text-az-metallic focus:border-az-red"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-az-silver text-sm mb-1.5 block"
                    >
                      Message <span className="text-az-red">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe your enquiry, vehicle details, or any questions..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-az-surface border-az-surface text-white placeholder:text-az-metallic focus:border-az-red resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-az-red hover:bg-az-red-bright text-white font-bold py-3"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="mr-2 w-4 h-4" />
                        Send Enquiry
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Placeholder */}
      <section className="py-12 bg-az-surface border-t border-az-surface">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-black text-white mb-6">
            Visit Us at AUTO ZONE
          </h2>
          <div className="rounded-lg overflow-hidden border border-az-surface relative">
            {/* Styled dark map placeholder */}
            <div
              className="w-full h-72 md:h-96 flex flex-col items-center justify-center relative"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.10 0 0) 0%, oklch(0.12 0 0) 100%)",
              }}
            >
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(oklch(0.4 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.4 0 0) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Road lines */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute left-1/4 top-0 bottom-0 w-12 bg-az-surface" />
                <div className="absolute left-0 right-0 top-1/3 h-8 bg-az-surface" />
                <div className="absolute right-1/3 top-0 bottom-0 w-8 bg-az-surface opacity-50" />
              </div>

              {/* Location pin */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-az-red flex items-center justify-center mb-3 shadow-red-glow animate-pulse-red">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="bg-az-black/90 border border-az-surface rounded-lg px-6 py-3 text-center">
                  <h3 className="font-display text-white font-bold text-lg">
                    AUTO ZONE
                  </h3>
                  <p className="text-az-silver text-sm">
                    Automobile Service Center
                  </p>
                  <p className="text-az-metallic text-xs mt-1">
                    +91 9225516006 | vinodautozone@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-az-metallic text-sm mt-3 text-center">
            For exact location, please call us at{" "}
            <a href="tel:+919225516006" className="text-az-red hover:underline">
              +91 9225516006
            </a>{" "}
            and we'll guide you.
          </p>
        </div>
      </section>
    </div>
  );
}
