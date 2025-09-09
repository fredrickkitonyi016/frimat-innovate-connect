import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import CustomSoftwareDevelopment from "./pages/services/CustomSoftwareDevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import CloudSolutions from "./pages/services/CloudSolutions";
import Cybersecurity from "./pages/services/Cybersecurity";
import DataAnalytics from "./pages/services/DataAnalytics";
import AiMachineLearning from "./pages/services/AiMachineLearning";
import DigitalTransformation from "./pages/services/DigitalTransformation";
import ItConsulting from "./pages/services/ItConsulting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services/custom-software-development" element={<CustomSoftwareDevelopment />} />
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/ai-machine-learning" element={<AiMachineLearning />} />
          <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/services/it-consulting" element={<ItConsulting />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
