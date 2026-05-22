import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// import ChatWidget from "@/components/ChatWidget";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductEducation from "./pages/ProductEducation";
import ProductEnterprise from "./pages/ProductEnterprise";
import ProductEcommerce from "./pages/ProductEcommerce";
import ProductHealthcare from "./pages/ProductHealthcare";
import Verticals from "./pages/Verticals";
import PricingPage from "./pages/PricingPage";
import About from "./pages/About";
import WhatIsNexusPage from "./pages/WhatIsNexusPage";
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
              <Route path="/what-is-nexus" element={<WhatIsNexusPage />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/education" element={<ProductEducation />} />
              <Route path="/products/enterprise" element={<ProductEnterprise />} />
              <Route path="/products/ecommerce" element={<ProductEcommerce />} />
              <Route path="/products/healthcare" element={<ProductHealthcare />} />
              <Route path="/verticals" element={<Verticals />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/request-demo" element={<RequestDemo />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          {/* <ChatWidget /> */}
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </ThemeProvider>
);

export default App;
