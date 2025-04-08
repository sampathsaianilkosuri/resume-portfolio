import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { ActiveSectionProvider } from "@/hooks/use-active-section";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ActiveSectionProvider>
      <App />
      <Toaster />
    </ActiveSectionProvider>
  </QueryClientProvider>
);
