import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import AdminDashboard from "./pages/AdminDashboard";
import MainPage from "./pages/MainPage";

export default function App() {
  const [currentHash, setCurrentHash] = useState(() => window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const showAdmin = currentHash === "#admin";

  return (
    <div className="min-h-screen bg-background">
      {showAdmin ? (
        <AdminDashboard
          onBack={() => {
            window.location.hash = "";
          }}
        />
      ) : (
        <MainPage />
      )}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "oklch(1 0 0)",
            border: "1px solid oklch(0.88 0.02 240)",
            color: "oklch(0.12 0.02 260)",
          },
        }}
      />
    </div>
  );
}
