
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import WhyJoin from "./pages/WhyJoin";
import Training from "./pages/Training";
import Health from "./pages/Health";
import BMICalculator from "./pages/BMICalculator";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Certifications from "./pages/Certifications";
import NotFound from "./pages/NotFound";
import GlobalPopups from "./components/GlobalPopups";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-join" element={<WhyJoin />} />
          <Route path="/training" element={<Training />} />
          <Route path="/health" element={<Health />} />
          <Route path="/services" element={<Services />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <GlobalPopups />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
