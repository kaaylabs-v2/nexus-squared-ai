import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import ProductEducation from "./pages/ProductEducation";
import ProductEnterprise from "./pages/ProductEnterprise";
import ProductEcommerce from "./pages/ProductEcommerce";
import ProductHealthcare from "./pages/ProductHealthcare";
import PricingPage from "./pages/PricingPage";
import Company from "./pages/Company";
import Platform from "./pages/Platform";
import RequestDemo from "./pages/RequestDemo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="nexus-ui-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />

                {/* Canonical routes */}
                <Route path="/platform" element={<Platform />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/solutions/education" element={<ProductEducation />} />
                <Route path="/solutions/enterprise" element={<ProductEnterprise />} />
                <Route path="/solutions/ecommerce" element={<ProductEcommerce />} />
                <Route path="/solutions/healthcare" element={<ProductHealthcare />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/company" element={<Company />} />
                <Route path="/request-demo" element={<RequestDemo />} />

                {/* 301-style client redirects from old paths */}
                <Route path="/what-is-nexus" element={<Navigate to="/platform" replace />} />
                <Route path="/products" element={<Navigate to="/solutions" replace />} />
                <Route path="/products/education" element={<Navigate to="/solutions/education" replace />} />
                <Route path="/products/enterprise" element={<Navigate to="/solutions/enterprise" replace />} />
                <Route path="/products/ecommerce" element={<Navigate to="/solutions/ecommerce" replace />} />
                <Route path="/products/healthcare" element={<Navigate to="/solutions/healthcare" replace />} />
                <Route path="/industries" element={<Navigate to="/solutions" replace />} />
                <Route path="/verticals" element={<Navigate to="/solutions" replace />} />
                <Route path="/about" element={<Navigate to="/company" replace />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
