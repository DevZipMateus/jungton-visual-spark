import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ArquiteturaEngenharia from "./pages/ArquiteturaEngenharia";
import SupermercadosVarejo from "./pages/SupermercadosVarejo";
import SaudeBemEstar from "./pages/SaudeBemEstar";
import EmpresasNegocios from "./pages/EmpresasNegocios";
import Blog from "./pages/Blog";

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
          <Route path="/arquitetura-engenharia" element={<ArquiteturaEngenharia />} />
          <Route path="/supermercados-varejo" element={<SupermercadosVarejo />} />
          <Route path="/saude-bem-estar" element={<SaudeBemEstar />} />
          <Route path="/empresas-negocios" element={<EmpresasNegocios />} />
          <Route path="/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
