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

// New Corporate Pages
import Solutions from "@/pages/public/Solutions";
import Industries from "@/pages/public/Industries";
import Portfolio from "@/pages/public/Portfolio";
import CaseStudies from "@/pages/public/CaseStudies";
import Partners from "@/pages/public/Partners";
import Careers from "@/pages/public/Careers";
import News from "@/pages/public/News";
import FAQ from "@/pages/public/FAQ";
import PrivacyPolicy from "@/pages/public/PrivacyPolicy";
import Terms from "@/pages/public/Terms";
import CookiePolicy from "@/pages/public/CookiePolicy";
import DynamicPage from "@/pages/public/DynamicPage";

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
        
        {/* New Corporate Routes */}
        <Route path="/solutions" component={Solutions} />
        <Route path="/industries" component={Industries} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/partners" component={Partners} />
        <Route path="/careers" component={Careers} />
        <Route path="/news" component={News} />
        <Route path="/faq" component={FAQ} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms" component={Terms} />
        <Route path="/cookie-policy" component={CookiePolicy} />

        {/* Dynamic Pages for the huge navigation tree */}
        <Route path="/solutions/:slug" component={DynamicPage} />
        <Route path="/products/:slug" component={DynamicPage} />
        <Route path="/services/:slug" component={DynamicPage} />
        <Route path="/industries/:slug" component={DynamicPage} />
        <Route path="/support/:slug" component={DynamicPage} />
        <Route path="/:slug" component={DynamicPage} />

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
