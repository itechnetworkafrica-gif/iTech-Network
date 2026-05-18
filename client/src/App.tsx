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
import ClientServices from "@/pages/Services";

// Public Pages
import Home from "@/pages/public/Home";
import About from "@/pages/public/About";
import Services from "@/pages/public/Services";
import Pricing from "@/pages/public/Pricing";
import Contact from "@/pages/public/Contact";
import VerifyCertificate from "@/pages/public/VerifyCertificate";
import Team from "@/pages/public/Team";
import Booking from "@/pages/public/Booking";
import Store from "@/pages/public/Store";
import POSDemo from "@/pages/public/POSDemo";

import FloatingActions from "@/components/public/FloatingActions";
import Chatbot from "@/components/public/Chatbot";
import "./lib/i18n";

function Router() {
  return (
    <>
      <FloatingActions />
      <Chatbot />
      <Switch>
        {/* Public Routes */}
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/contact" component={Contact} />
        <Route path="/team" component={Team} />
        <Route path="/booking" component={Booking} />
        <Route path="/store" component={Store} />
        <Route path="/pos-demo" component={POSDemo} />
        <Route path="/verify-certificate" component={VerifyCertificate} />

        {/* Dashboard Routes - Flattened for reliability */}
        <Route path="/dashboard">
          <Layout>
            <Dashboard />
          </Layout>
        </Route>
        <Route path="/dashboard/services">
          <Layout>
            <ClientServices />
          </Layout>
        </Route>
        <Route path="/dashboard/integrations">
          <Layout>
            <Integrations />
          </Layout>
        </Route>
        <Route path="/dashboard/reports">
          <Layout>
            <Reports />
          </Layout>
        </Route>
        <Route path="/dashboard/settings">
          <Layout>
            <Settings />
          </Layout>
        </Route>
        
        {/* Fallback for main router */}
        <Route component={NotFound} />
      </Switch>
    </>
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
