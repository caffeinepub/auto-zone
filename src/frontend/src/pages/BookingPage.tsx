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
import { Link } from "@tanstack/react-router";
import {
  Calendar,
  Car,
  CheckCircle,
  ChevronRight,
  Clock,
  Loader2,
  Mail,
  Phone,
  User,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

const serviceTypes = [
  "Car Servicing & Repair",
  "Mechanical & General Maintenance",
  "New Tyre Sales & Tyre Replacement",
  "Old Tyre Buy & Sell",
  "Battery Sales & Battery Exchange",
  "Car Accessories Installation",
  "New & Used Spare Parts",
  "Second-Hand Spare Parts",
  "RTO Documentation & Vehicle Paperwork",
  "Automobile Product Sales",
];

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
];

interface FormState {
  customerName: string;
  phone: string;
  vehicle: string;
  serviceType: string;
  date: string;
  time: string;
  notes: string;
}

const initialForm: FormState = {
  customerName: "",
  phone: "",
  vehicle: "",
  serviceType: "",
  date: "",
  time: "",
  notes: "",
};

export default function BookingPage() {
  const { actor } = useActor();
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState<string>("");

  const today = new Date().toISOString().split("T")[0];

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSelect(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (
      !form.customerName ||
      !form.phone ||
      !form.vehicle ||
      !form.serviceType ||
      !form.date ||
      !form.time
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!actor) {
      toast.error("Service not ready. Please try again in a moment.");
      return;
    }

    setSubmitting(true);
    try {
      const id = await actor.bookService(
        form.customerName,
        form.phone,
        "",
        form.date,
        form.serviceType,
        form.vehicle,
      );
      setBookingId(id.toString());
      setSubmitted(true);
      toast.success("Service booking confirmed!");
    } catch (err) {
      console.error(err);
      toast.error(
        "Failed to submit booking. Please try again or call us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  function handleReset() {
    setForm(initialForm);
    setSubmitted(false);
    setBookingId("");
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
                Service Booking
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-4">
              Book a <span className="text-red-gradient">Service</span>
            </h1>
            <p className="text-az-silver text-lg leading-relaxed">
              Schedule your vehicle service with AUTO ZONE. Fill in the details
              and we'll confirm your appointment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-az-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-az-card border border-az-red/40 rounded-lg p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-az-red/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-az-red" />
                  </div>
                  <h2 className="font-display text-3xl font-black text-white mb-3">
                    Booking Confirmed!
                  </h2>
                  <p className="text-az-silver mb-2">
                    Your service booking has been received successfully.
                  </p>
                  {bookingId && (
                    <div className="inline-flex items-center gap-2 bg-az-surface rounded px-4 py-2 mb-6">
                      <span className="text-az-metallic text-sm">
                        Booking ID:
                      </span>
                      <span className="font-mono text-az-red font-bold text-lg">
                        #{bookingId}
                      </span>
                    </div>
                  )}

                  <div className="bg-az-surface rounded-lg p-5 text-left mb-6 space-y-2">
                    <h3 className="font-display text-lg font-bold text-white mb-3">
                      Booking Summary
                    </h3>
                    {[
                      { label: "Name", value: form.customerName },
                      { label: "Phone", value: form.phone },
                      { label: "Vehicle", value: form.vehicle },
                      { label: "Service", value: form.serviceType },
                      { label: "Date", value: form.date },
                      { label: "Time", value: form.time },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-az-metallic">{row.label}</span>
                        <span className="text-white font-medium">
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="text-az-silver text-sm mb-6">
                    Our team will contact you to confirm the appointment. For
                    urgent needs, call us directly.
                  </p>

                  <div className="flex gap-3 justify-center flex-wrap">
                    <Button
                      variant="outline"
                      className="border-az-surface text-az-silver hover:border-az-red hover:text-az-red"
                      onClick={handleReset}
                    >
                      Book Another Service
                    </Button>
                    <a href="tel:+919225516006">
                      <Button className="bg-az-red hover:bg-az-red-bright text-white font-semibold">
                        <Phone className="mr-2 w-4 h-4" />
                        Call AUTO ZONE
                      </Button>
                    </a>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-az-card border border-az-surface rounded-lg p-6 md:p-8"
                >
                  <h2 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-az-red" />
                    Service Booking Form
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <Label
                        htmlFor="customerName"
                        className="text-az-silver text-sm mb-1.5 flex items-center gap-1.5"
                      >
                        <User className="w-3.5 h-3.5 text-az-red" />
                        Full Name <span className="text-az-red">*</span>
                      </Label>
                      <Input
                        id="customerName"
                        name="customerName"
                        placeholder="Your full name"
                        value={form.customerName}
                        onChange={handleChange}
                        required
                        className="bg-az-surface border-az-surface text-white placeholder:text-az-metallic focus:border-az-red"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-az-silver text-sm mb-1.5 flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-az-red" />
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

                    {/* Vehicle */}
                    <div className="sm:col-span-2">
                      <Label
                        htmlFor="vehicle"
                        className="text-az-silver text-sm mb-1.5 flex items-center gap-1.5"
                      >
                        <Car className="w-3.5 h-3.5 text-az-red" />
                        Vehicle Make & Model{" "}
                        <span className="text-az-red">*</span>
                      </Label>
                      <Input
                        id="vehicle"
                        name="vehicle"
                        placeholder="e.g. Maruti Suzuki Swift 2020, Honda City VX"
                        value={form.vehicle}
                        onChange={handleChange}
                        required
                        className="bg-az-surface border-az-surface text-white placeholder:text-az-metallic focus:border-az-red"
                      />
                    </div>

                    {/* Service Type */}
                    <div className="sm:col-span-2">
                      <Label className="text-az-silver text-sm mb-1.5 flex items-center gap-1.5">
                        <Wrench className="w-3.5 h-3.5 text-az-red" />
                        Service Type <span className="text-az-red">*</span>
                      </Label>
                      <Select
                        value={form.serviceType}
                        onValueChange={(v) => handleSelect("serviceType", v)}
                        required
                      >
                        <SelectTrigger className="bg-az-surface border-az-surface text-white focus:border-az-red w-full">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-az-card border-az-surface">
                          {serviceTypes.map((s) => (
                            <SelectItem
                              key={s}
                              value={s}
                              className="text-az-silver hover:text-white focus:text-white focus:bg-az-surface"
                            >
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Date */}
                    <div>
                      <Label
                        htmlFor="date"
                        className="text-az-silver text-sm mb-1.5 flex items-center gap-1.5"
                      >
                        <Calendar className="w-3.5 h-3.5 text-az-red" />
                        Preferred Date <span className="text-az-red">*</span>
                      </Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        min={today}
                        value={form.date}
                        onChange={handleChange}
                        required
                        className="bg-az-surface border-az-surface text-white focus:border-az-red"
                        style={{ colorScheme: "dark" }}
                      />
                    </div>

                    {/* Time */}
                    <div>
                      <Label className="text-az-silver text-sm mb-1.5 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-az-red" />
                        Preferred Time <span className="text-az-red">*</span>
                      </Label>
                      <Select
                        value={form.time}
                        onValueChange={(v) => handleSelect("time", v)}
                        required
                      >
                        <SelectTrigger className="bg-az-surface border-az-surface text-white focus:border-az-red w-full">
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent className="bg-az-card border-az-surface max-h-48">
                          {timeSlots.map((t) => (
                            <SelectItem
                              key={t}
                              value={t}
                              className="text-az-silver hover:text-white focus:text-white focus:bg-az-surface"
                            >
                              {t}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Notes */}
                    <div className="sm:col-span-2">
                      <Label
                        htmlFor="notes"
                        className="text-az-silver text-sm mb-1.5 block"
                      >
                        Additional Notes / Problem Description
                      </Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        placeholder="Describe any specific issues, symptoms, or requirements..."
                        value={form.notes}
                        onChange={handleChange}
                        rows={4}
                        className="bg-az-surface border-az-surface text-white placeholder:text-az-metallic focus:border-az-red resize-none"
                      />
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-az-surface">
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-az-red hover:bg-az-red-bright text-white font-bold py-3 text-base"
                      size="lg"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting Booking...
                        </>
                      ) : (
                        <>
                          <Calendar className="mr-2 w-5 h-5" />
                          Confirm Booking
                          <ChevronRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                    <p className="text-az-metallic text-xs text-center mt-3">
                      Fields marked <span className="text-az-red">*</span> are
                      required. We'll confirm your booking via phone.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Contact info */}
              <div className="bg-az-card border border-az-surface rounded-lg p-5">
                <h3 className="font-display text-lg font-bold text-white mb-4">
                  Need Immediate Help?
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+919225516006"
                    className="flex items-center gap-3 text-az-silver hover:text-white transition-colors"
                  >
                    <div className="w-9 h-9 rounded bg-az-red flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-az-metallic">Call Now</div>
                      <div className="text-sm font-medium">+91 9225516006</div>
                    </div>
                  </a>
                  <a
                    href="mailto:vinodautozone@gmail.com"
                    className="flex items-center gap-3 text-az-silver hover:text-white transition-colors"
                  >
                    <div className="w-9 h-9 rounded bg-az-surface flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-az-red" />
                    </div>
                    <div>
                      <div className="text-xs text-az-metallic">Email</div>
                      <div className="text-sm font-medium break-all">
                        vinodautozone@gmail.com
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Working hours */}
              <div className="bg-az-card border border-az-surface rounded-lg p-5">
                <h3 className="font-display text-base font-bold text-white mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-az-red" />
                  Working Hours
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
                    { day: "Saturday", time: "9:00 AM – 7:00 PM" },
                    { day: "Sunday", time: "10:00 AM – 4:00 PM" },
                  ].map((row) => (
                    <div key={row.day} className="flex justify-between">
                      <span className="text-az-silver">{row.day}</span>
                      <span className="text-white font-medium">{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services list */}
              <div className="bg-az-card border border-az-surface rounded-lg p-5">
                <h3 className="font-display text-base font-bold text-white mb-3">
                  Available Services
                </h3>
                <ul className="space-y-1.5">
                  {serviceTypes.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-2 text-az-silver text-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-az-red shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
