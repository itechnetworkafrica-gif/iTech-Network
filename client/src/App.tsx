import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Layout from "@/components/layout/Layout";

// Dashboard Pages
import Dashboard from "@/pages/Dashboard";
import Integrations from "@/pages/Integrations";
import Reports from "@/pages/Reports";
import Settings from "@/pages/Settings";

// Public Pages
import Home from "@/pages/public/Home";
import About from "@/pages/public/About";
import Services from "@/pages/public/Services";
import Pricing from "@/pages/public/Pricing";
import Contact from "@/pages/public/Contact";

import "./lib/i18n";

function Router() {
  return (
    <Switch>
      {/* Public Routes */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/contact" component={Contact} />

      {/* Dashboard Routes - Nested */}
      <Route path="/dashboard/:path*">
        {(params) => (
          <Layout>
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/dashboard/integrations" component={Integrations} />
              <Route path="/dashboard/reports" component={Reports} />
              <Route path="/dashboard/settings" component={Settings} />
              {/* Fallback within dashboard */}
              <Route component={NotFound} />
            </Switch>
          </Layout>
        )}
      </Route>
      
      {/* Fallback for main router */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
