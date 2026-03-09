import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useActor } from "@/hooks/useActor";
import {
  ArrowLeft,
  CalendarCheck,
  ClipboardList,
  Loader2,
  MessageSquare,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { Booking, Contact } from "../backend";

interface AdminDashboardProps {
  onBack: () => void;
}

export default function AdminDashboard({ onBack }: AdminDashboardProps) {
  const { actor, isFetching } = useActor();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!actor || isFetching) return;

    setLoading(true);
    setError("");

    Promise.all([actor.getAllBookings(), actor.getAllContacts()])
      .then(([fetchedBookings, fetchedContacts]) => {
        setBookings(fetchedBookings);
        setContacts(fetchedContacts);
      })
      .catch(() => {
        setError("Failed to load data. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [actor, isFetching]);

  return (
    <div className="min-h-screen bg-az-gray-light">
      {/* Header */}
      <header className="bg-az-navy shadow-[0_2px_20px_oklch(0.10_0.04_260/0.30)]">
        <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              data-ocid="admin.back_button"
              onClick={onBack}
              variant="ghost"
              size="sm"
              className="text-white/70 hover:text-white hover:bg-white/10 gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Website
            </Button>
            <div className="w-px h-6 bg-white/20" />
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-az-gold rounded-lg flex items-center justify-center shrink-0">
                <span className="text-az-navy-dark font-display font-black text-xs leading-none">
                  AZ
                </span>
              </div>
              <div>
                <div className="font-display font-black text-white text-lg leading-none">
                  Admin Dashboard
                </div>
                <div className="text-white/40 text-xs mt-0.5">
                  Auto Zone Management
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-10">
        {/* Loading */}
        {loading && (
          <div
            data-ocid="admin.loading_state"
            className="flex flex-col items-center justify-center py-32 gap-4"
          >
            <Loader2 className="w-10 h-10 text-az-navy animate-spin" />
            <p className="text-muted-foreground font-medium">
              Loading dashboard data...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div
            data-ocid="admin.error_state"
            className="text-center py-20 text-red-500 bg-red-50 rounded-xl border border-red-200 p-8"
          >
            <p className="font-semibold text-lg mb-2">Something went wrong</p>
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Content */}
        {!loading && !error && (
          <>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-white rounded-2xl p-6 shadow-card-light border border-az-gray-border flex items-center gap-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.22 0.07 260), oklch(0.28 0.08 260))",
                  }}
                >
                  <CalendarCheck className="w-7 h-7 text-az-gold" />
                </div>
                <div>
                  <div
                    className="font-display font-black text-az-navy"
                    style={{ fontSize: "2.25rem", lineHeight: 1 }}
                  >
                    {bookings.length}
                  </div>
                  <div className="text-muted-foreground text-sm font-semibold mt-1 uppercase tracking-wide">
                    Appointments Booked
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-card-light border border-az-gray-border flex items-center gap-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.72 0.10 75), oklch(0.78 0.12 78))",
                  }}
                >
                  <MessageSquare className="w-7 h-7 text-az-navy-dark" />
                </div>
                <div>
                  <div
                    className="font-display font-black text-az-navy"
                    style={{ fontSize: "2.25rem", lineHeight: 1 }}
                  >
                    {contacts.length}
                  </div>
                  <div className="text-muted-foreground text-sm font-semibold mt-1 uppercase tracking-wide">
                    Customer Enquiries
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="appointments">
              <TabsList className="bg-white border border-az-gray-border shadow-card-light mb-6 h-auto p-1 rounded-xl">
                <TabsTrigger
                  data-ocid="admin.appointments_tab"
                  value="appointments"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold data-[state=active]:bg-az-navy data-[state=active]:text-white data-[state=active]:shadow-navy-glow transition-all"
                >
                  <ClipboardList className="w-4 h-4" />
                  Appointments Booked
                  <span
                    className="ml-1 min-w-[1.25rem] h-5 rounded-full text-xs flex items-center justify-center px-1.5 font-bold"
                    style={{
                      background: "oklch(0.78 0.12 78 / 0.25)",
                      color: "oklch(0.55 0.09 75)",
                    }}
                  >
                    {bookings.length}
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  data-ocid="admin.enquiries_tab"
                  value="enquiries"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold data-[state=active]:bg-az-navy data-[state=active]:text-white data-[state=active]:shadow-navy-glow transition-all"
                >
                  <Users className="w-4 h-4" />
                  Customer Enquiries
                  <span
                    className="ml-1 min-w-[1.25rem] h-5 rounded-full text-xs flex items-center justify-center px-1.5 font-bold"
                    style={{
                      background: "oklch(0.78 0.12 78 / 0.25)",
                      color: "oklch(0.55 0.09 75)",
                    }}
                  >
                    {contacts.length}
                  </span>
                </TabsTrigger>
              </TabsList>

              {/* Appointments Tab */}
              <TabsContent value="appointments">
                <div className="bg-white rounded-2xl shadow-card-light border border-az-gray-border overflow-hidden">
                  <div className="px-6 py-4 border-b border-az-gray-border">
                    <h2 className="font-display font-bold text-az-navy text-lg flex items-center gap-2">
                      <CalendarCheck className="w-5 h-5 text-az-gold" />
                      Service Appointments
                    </h2>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      All service bookings submitted through the website
                    </p>
                  </div>

                  {bookings.length === 0 ? (
                    <div
                      data-ocid="admin.empty_state"
                      className="flex flex-col items-center justify-center py-20 px-6 text-center"
                    >
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                        style={{ background: "oklch(0.22 0.07 260 / 0.07)" }}
                      >
                        <CalendarCheck className="w-8 h-8 text-az-navy/40" />
                      </div>
                      <p className="font-display font-bold text-az-navy text-lg mb-1">
                        No appointments yet
                      </p>
                      <p className="text-muted-foreground text-sm max-w-sm">
                        Service bookings made through the website will appear
                        here once customers start booking.
                      </p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <Table data-ocid="admin.bookings_table">
                        <TableHeader>
                          <TableRow className="bg-az-gray-light border-b border-az-gray-border hover:bg-az-gray-light">
                            <TableHead className="text-az-navy font-bold text-xs uppercase tracking-wider w-12">
                              #
                            </TableHead>
                            <TableHead className="text-az-navy font-bold text-xs uppercase tracking-wider">
                              Name
                            </TableHead>
                            <TableHead className="text-az-navy font-bold text-xs uppercase tracking-wider">
                              Phone
                            </TableHead>
                            <TableHead className="text-az-navy font-bold text-xs uppercase tracking-wider">
                              Email
                            </TableHead>
                            <TableHead className="text-az-navy font-bold text-xs uppercase tracking-wider">
                              Vehicle
                            </TableHead>
                            <TableHead className="text-az-navy font-bold text-xs uppercase tracking-wider">
                              Service Type
                            </TableHead>
                            <TableHead className="text-az-navy font-bold text-xs uppercase tracking-wider">
                              Date
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {bookings.map((booking, index) => (
                            <TableRow
                              key={`booking-${booking.id.toString()}`}
                              data-ocid={`admin.bookings.row.${index + 1}`}
                              className="border-b border-az-gray-border hover:bg-az-gray-light/60 transition-colors"
                            >
                              <TableCell className="text-muted-foreground text-sm font-mono">
                                {index + 1}
                              </TableCell>
                              <TableCell className="font-semibold text-az-navy text-sm">
                                {booking.name}
                              </TableCell>
                              <TableCell>
                                <a
                                  href={`tel:${booking.phone}`}
                                  className="text-sm text-az-navy hover:text-az-gold transition-colors font-medium"
                                >
                                  {booking.phone}
                                </a>
                              </TableCell>
                              <TableCell>
                                <a
                                  href={`mailto:${booking.email}`}
                                  className="text-sm text-az-navy hover:text-az-gold transition-colors"
                                >
                                  {booking.email || (
                                    <span className="text-muted-foreground">
                                      —
                                    </span>
                                  )}
                                </a>
                              </TableCell>
                              <TableCell className="text-sm text-foreground/80">
                                {booking.vehicle || (
                                  <span className="text-muted-foreground">
                                    —
                                  </span>
                                )}
                              </TableCell>
                              <TableCell>
                                <span
                                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold"
                                  style={{
                                    background: "oklch(0.22 0.07 260 / 0.08)",
                                    color: "oklch(0.22 0.07 260)",
                                  }}
                                >
                                  {booking.serviceType}
                                </span>
                              </TableCell>
                              <TableCell className="text-sm text-foreground/80 whitespace-nowrap">
                                {booking.date}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* Enquiries Tab */}
              <TabsContent value="enquiries">
                <div className="bg-white rounded-2xl shadow-card-light border border-az-gray-border overflow-hidden">
                  <div className="px-6 py-4 border-b border-az-gray-border">
                    <h2 className="font-display font-bold text-az-navy text-lg flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-az-gold" />
                      Customer Enquiries
                    </h2>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      All messages submitted through the contact form
                    </p>
                  </div>

                  {contacts.length === 0 ? (
                    <div
                      data-ocid="admin.empty_state"
                      className="flex flex-col items-center justify-center py-20 px-6 text-center"
                    >
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                        style={{ background: "oklch(0.22 0.07 260 / 0.07)" }}
                      >
                        <MessageSquare className="w-8 h-8 text-az-navy/40" />
                      </div>
                      <p className="font-display font-bold text-az-navy text-lg mb-1">
                        No enquiries yet
                      </p>
                      <p className="text-muted-foreground text-sm max-w-sm">
                        Customer messages submitted through the contact form
                        will appear here.
                      </p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <Table data-ocid="admin.contacts_table">
                        <TableHeader>
                          <TableRow className="bg-az-gray-light border-b border-az-gray-border hover:bg-az-gray-light">
                            <TableHead className="text-az-navy font-bold text-xs uppercase tracking-wider w-12">
                              #
                            </TableHead>
                            <TableHead className="text-az-navy font-bold text-xs uppercase tracking-wider">
                              Name
                            </TableHead>
                            <TableHead className="text-az-navy font-bold text-xs uppercase tracking-wider">
                              Phone
                            </TableHead>
                            <TableHead className="text-az-navy font-bold text-xs uppercase tracking-wider">
                              Email
                            </TableHead>
                            <TableHead className="text-az-navy font-bold text-xs uppercase tracking-wider">
                              Service Type
                            </TableHead>
                            <TableHead className="text-az-navy font-bold text-xs uppercase tracking-wider min-w-[200px]">
                              Message
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {contacts.map((contact, index) => (
                            <TableRow
                              key={`contact-${contact.id.toString()}`}
                              data-ocid={`admin.contacts.row.${index + 1}`}
                              className="border-b border-az-gray-border hover:bg-az-gray-light/60 transition-colors"
                            >
                              <TableCell className="text-muted-foreground text-sm font-mono">
                                {index + 1}
                              </TableCell>
                              <TableCell className="font-semibold text-az-navy text-sm">
                                {contact.name}
                              </TableCell>
                              <TableCell>
                                <a
                                  href={`tel:${contact.phone}`}
                                  className="text-sm text-az-navy hover:text-az-gold transition-colors font-medium"
                                >
                                  {contact.phone}
                                </a>
                              </TableCell>
                              <TableCell>
                                <a
                                  href={`mailto:${contact.email}`}
                                  className="text-sm text-az-navy hover:text-az-gold transition-colors"
                                >
                                  {contact.email || (
                                    <span className="text-muted-foreground">
                                      —
                                    </span>
                                  )}
                                </a>
                              </TableCell>
                              <TableCell>
                                <span
                                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold"
                                  style={{
                                    background: "oklch(0.72 0.10 75 / 0.15)",
                                    color: "oklch(0.45 0.09 75)",
                                  }}
                                >
                                  {contact.serviceType || "General"}
                                </span>
                              </TableCell>
                              <TableCell className="text-sm text-foreground/75 max-w-xs">
                                <p className="line-clamp-2 leading-relaxed">
                                  {contact.message || (
                                    <span className="text-muted-foreground">
                                      No message
                                    </span>
                                  )}
                                </p>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </>
        )}
      </main>
    </div>
  );
}
