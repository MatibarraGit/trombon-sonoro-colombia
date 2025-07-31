import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Recursos from "./pages/Recursos";
import Historia from "./pages/Historia";
import Cumbia from "./pages/Cumbia";
import Currulao from "./pages/Currulao";
import Pasillo from "./pages/Pasillo";
import Joropo from "./pages/Joropo";
import Obra from "./pages/Obra";
import { Navigation } from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/cumbia" element={<Cumbia />} />
          <Route path="/currulao" element={<Currulao />} />
          <Route path="/pasillo" element={<Pasillo />} />
          <Route path="/joropo" element={<Joropo />} />
          <Route path="/obra" element={<Obra />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
