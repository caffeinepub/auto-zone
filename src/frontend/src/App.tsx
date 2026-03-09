import { Toaster } from "@/components/ui/sonner";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <MainPage />
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
