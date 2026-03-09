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
import { useActor } from "@/hooks/useActor";
import { CheckCircle, Loader2, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

const serviceTypes = [
  "Engine Diagnostics",
  "Oil Change & Maintenance",
  "Brake Repair",
  "AC Service",
  "Battery Replacement",
  "Tire Services",
  "Car Inspection",
  "General Car Repair",
  "Other",
];

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const { actor } = useActor();
  const [isPending, setIsPending] = useState(false);
  const [bookingId, setBookingId] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    date: "",
    serviceType: "",
  });

  if (!open) return null;

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) {
      toast.error("Unable to connect to service. Please try again.");
      return;
    }
    if (!form.serviceType) {
      toast.error("Please select a service type.");
      return;
    }

    setIsPending(true);
    try {
      const id = await actor.bookService(
        form.name,
        form.phone,
        form.email,
        form.date,
        form.serviceType,
        form.vehicle,
      );
      setBookingId(id.toString());
    } catch {
      toast.error("Booking failed. Please try again or call us directly.");
    } finally {
      setIsPending(false);
    }
  };

  const handleClose = () => {
    setBookingId(null);
    setForm({
      name: "",
      phone: "",
      email: "",
      vehicle: "",
      date: "",
      serviceType: "",
    });
    onClose();
  };

  return (
    <dialog
      open
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-transparent border-0 w-full h-full max-w-full max-h-full"
      aria-modal="true"
    >
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-default w-full h-full"
        onClick={handleClose}
        onKeyDown={(e) => {
          if (e.key === "Escape") handleClose();
        }}
        aria-label="Close modal"
        tabIndex={-1}
      />

      {/* Modal */}
      <div
        data-ocid="booking.modal"
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="bg-az-navy px-6 py-5 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display font-black text-xl text-white">
                Book a Service
              </h2>
              <p className="text-white/60 text-sm mt-0.5">
                Fill in the details and we'll confirm your booking
              </p>
            </div>
            <button
              type="button"
              data-ocid="booking.close_button"
              onClick={handleClose}
              className="text-white/60 hover:text-white transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {bookingId ? (
            <div data-ocid="booking.success_state" className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="font-display font-black text-xl text-az-navy mb-2">
                Booking Confirmed!
              </h3>
              <p className="text-muted-foreground mb-2">
                Your booking reference:{" "}
                <span className="font-bold text-az-navy">#{bookingId}</span>
              </p>
              <p className="text-muted-foreground text-sm mb-6">
                We'll contact you shortly to confirm your appointment. For
                urgent queries, call us at +91 9225516006.
              </p>
              <Button
                onClick={handleClose}
                className="bg-az-navy hover:bg-az-navy-light text-white font-semibold"
              >
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label
                  htmlFor="booking-name"
                  className="text-sm font-semibold text-foreground mb-1.5 block"
                >
                  Full Name *
                </Label>
                <Input
                  id="booking-name"
                  data-ocid="booking.name_input"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="border-az-gray-border focus:border-az-navy focus:ring-az-navy"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label
                    htmlFor="booking-phone"
                    className="text-sm font-semibold text-foreground mb-1.5 block"
                  >
                    Phone *
                  </Label>
                  <Input
                    id="booking-phone"
                    data-ocid="booking.phone_input"
                    required
                    type="tel"
                    placeholder="+91 XXXXXXXXXX"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="border-az-gray-border focus:border-az-navy focus:ring-az-navy"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="booking-email"
                    className="text-sm font-semibold text-foreground mb-1.5 block"
                  >
                    Email
                  </Label>
                  <Input
                    id="booking-email"
                    data-ocid="booking.email_input"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="border-az-gray-border focus:border-az-navy focus:ring-az-navy"
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="booking-vehicle"
                  className="text-sm font-semibold text-foreground mb-1.5 block"
                >
                  Vehicle Make & Model *
                </Label>
                <Input
                  id="booking-vehicle"
                  data-ocid="booking.vehicle_input"
                  required
                  placeholder="e.g. Maruti Swift 2022"
                  value={form.vehicle}
                  onChange={(e) => handleChange("vehicle", e.target.value)}
                  className="border-az-gray-border focus:border-az-navy focus:ring-az-navy"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label
                    htmlFor="booking-date"
                    className="text-sm font-semibold text-foreground mb-1.5 block"
                  >
                    Preferred Date *
                  </Label>
                  <Input
                    id="booking-date"
                    data-ocid="booking.date_input"
                    required
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={form.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    className="border-az-gray-border focus:border-az-navy focus:ring-az-navy"
                  />
                </div>
                <div>
                  <Label className="text-sm font-semibold text-foreground mb-1.5 block">
                    Service Type *
                  </Label>
                  <Select
                    value={form.serviceType}
                    onValueChange={(v) => handleChange("serviceType", v)}
                  >
                    <SelectTrigger
                      data-ocid="booking.service_select"
                      className="border-az-gray-border focus:border-az-navy"
                    >
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                type="submit"
                data-ocid="booking.submit_button"
                disabled={isPending}
                className="w-full bg-az-navy hover:bg-az-navy-light text-white font-bold text-base py-6 mt-2 transition-all"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Booking...
                  </>
                ) : (
                  "Confirm Booking"
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </dialog>
  );
}
