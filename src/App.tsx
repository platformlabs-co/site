
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Scroll handler component to handle hash links
const ScrollToAnchor = () => {
  const location = useLocation();
  
  useEffect(() => {
    // If hash is present in the URL
    if (location.hash) {
      // Get the element by id (without the # character)
      const element = document.getElementById(location.hash.slice(1));
      
      // If element exists, scroll to it
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]); // Re-run this effect when location changes
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToAnchor />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
