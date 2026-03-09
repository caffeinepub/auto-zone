import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  Eye,
  EyeOff,
  Loader2,
  Lock,
  LogOut,
  MessageSquare,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { Booking, Contact } from "../backend";

const ADMIN_PASSWORD = "autozone2024";
const SESSION_KEY = "az_admin_auth";

interface AdminDashboardProps {
  onBack: () => void;
}

function AdminLogin({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "1");
      onSuccess();
    } else {
      setError("Incorrect password. Please try again.");
      setShake(true);
      setPassword("");
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-az-gray-light flex items-center justify-center px-4">
      <div
        className={`bg-white rounded-2xl shadow-card-light border border-az-gray-border w-full max-w-sm p-8 ${
          shake ? "animate-[shake_0.4s_ease-in-out]" : ""
        }`}
        style={
          {
            "--shake-anim": "shake",
          } as React.CSSProperties
        }
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-navy-glow"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.22 0.07 260), oklch(0.28 0.08 260))",
            }}
          >
            <Lock className="w-7 h-7 text-az-gold" />
          </div>
          <h1 className="font-display font-black text-az-navy text-2xl text-center">
            Admin Access
          </h1>
          <p className="text-muted-foreground text-sm text-center mt-1">
            Enter the admin password to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Input
              data-ocid="admin.password_input"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              className="pr-10 border-az-gray-border focus:border-az-navy focus:ring-az-navy/20"
              autoFocus
            />
            <button
              type="button"
              data-ocid="admin.toggle_password"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-az-navy transition-colors"
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>

          {error && (
            <p
              data-ocid="admin.login_error_state"
              className="text-red-500 text-sm font-medium text-center"
            >
              {error}
            </p>
          )}

          <Button
            data-ocid="admin.login_button"
            type="submit"
            className="w-full bg-az-navy hover:bg-az-navy-dark text-white font-semibold py-2.5"
          >
            Unlock Dashboard
          </Button>
        </form>
      </div>

      {/* Shake keyframe */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          15%       { transform: translateX(-6px); }
          30%       { transform: translateX(6px); }
          45%       { transform: translateX(-5px); }
          60%       { transform: translateX(5px); }
          75%       { transform: translateX(-3px); }
          90%       { transform: translateX(3px); }
        }
        .animate-\[shake_0\.4s_ease-in-out\] {
          animation: shake 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default function AdminDashboard({ onBack }: AdminDashboardProps) {
  const { actor, isFetching } = useActor();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === "1",
  );

  useEffect(() => {
    if (!isAuthenticated) return;
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
  }, [actor, isFetching, isAuthenticated]);

  if (!isAuthenticated) {
    return <AdminLogin onSuccess={() => setIsAuthenticated(true)} />;
  }

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
  };

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
          <Button
            data-ocid="admin.logout_button"
            onClick={handleLogout}
            variant="ghost"
            size="sm"
            className="text-white/60 hover:text-white hover:bg-white/10 gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
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
