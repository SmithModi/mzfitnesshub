
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";


import BMICalculator from "./pages/BMICalculator";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Certifications from "./pages/Certifications";
import NotFound from "./pages/NotFound";
import GlobalPopups from "./components/GlobalPopups";
import ScrollToTop from "./components/ScrollToTop";
import Gymnasium from "./pages/Gymnasium";
import StrengthTraining from "./pages/services/StrengthTraining";
import CardioTraining from "./pages/services/CardioTraining";
import PersonalTraining from "./pages/services/PersonalTraining";
import GroupClasses from "./pages/services/GroupClasses";
import FloorTraining from "./pages/FloorTraining";
import FunctionalTraining from "./pages/services/FunctionalTraining";
import CrossFit from "./pages/services/CrossFit";
import Yoga from "./pages/services/Yoga";
import Zumba from "./pages/services/Zumba";
import FloorStrengthTraining from "./pages/services/FloorStrengthTraining";
import Physio from "./pages/Physio";
import PainManagement from "./pages/services/PainManagement";
import RehabExercises from "./pages/services/RehabExercises";
import Consulting from "./pages/services/Consulting";
import HomeVisits from "./pages/services/HomeVisits";
import Wellness from "./pages/Wellness";
import FacialTreatment from "./pages/services/FacialTreatment";
import Polishing from "./pages/services/Polishing";
import MarmTherapy from "./pages/services/MarmTherapy";
import BodyShaping from "./pages/services/BodyShaping";
import LaserTreatment from "./pages/services/LaserTreatment";

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


          <Route path="/services" element={<Services />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/contact" element={<Contact />} />

          {/* Gymnasium Services Routes */}
          <Route path="/gymnasium-in-rajkot" element={<Gymnasium />} />
          <Route path="/strength-training-in-rajkot" element={<StrengthTraining />} />
          <Route path="/cardio-training-in-rajkot" element={<CardioTraining />} />
          <Route path="/personal-training-in-rajkot" element={<PersonalTraining />} />
          <Route path="/group-classes-in-rajkot" element={<GroupClasses />} />

          {/* Floor Training Services Routes */}
          <Route path="/floor-training-in-rajkot" element={<FloorTraining />} />
          <Route path="/functional-training-in-rajkot" element={<FunctionalTraining />} />
          <Route path="/crossfit-in-rajkot" element={<CrossFit />} />
          <Route path="/yoga-in-rajkot" element={<Yoga />} />
          <Route path="/zumba-in-rajkot" element={<Zumba />} />
          <Route path="/floor-strength-training-in-rajkot" element={<FloorStrengthTraining />} />

          {/* Physio Services Routes */}
          <Route path="/physio-in-rajkot" element={<Physio />} />
          <Route path="/pain-management-in-rajkot" element={<PainManagement />} />
          <Route path="/rehab-exercises-in-rajkot" element={<RehabExercises />} />
          <Route path="/consulting-in-rajkot" element={<Consulting />} />
          <Route path="/home-visits-in-rajkot" element={<HomeVisits />} />

          {/* Wellness Services Routes */}
          <Route path="/wellness-in-rajkot" element={<Wellness />} />
          <Route path="/facial-treatment-in-rajkot" element={<FacialTreatment />} />
          <Route path="/polishing-in-rajkot" element={<Polishing />} />
          <Route path="/marm-therapy-in-rajkot" element={<MarmTherapy />} />
          <Route path="/body-shaping-in-rajkot" element={<BodyShaping />} />
          <Route path="/laser-treatment-in-rajkot" element={<LaserTreatment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <GlobalPopups />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
