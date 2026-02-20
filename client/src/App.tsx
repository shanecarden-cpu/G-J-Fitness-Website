import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Pricing from "@/pages/Pricing";
import Gallery from "@/pages/Gallery";
import NotFound from "@/pages/not-found";

// Import legal pages
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiePolicy from "./pages/legal/CookiePolicy";
import Sitemap from "./pages/legal/Sitemap";
import MembershipAgreement from "./pages/legal/MembershipAgreement";

// Import service pages
import Gym from "./pages/Gym";
import MedicarePrograms from "./pages/MedicarePrograms";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/gallery" component={Gallery} />
        
        {/* Service Pages */}
        <Route path="/gym" component={Gym} />
        <Route path="/medicare-programs" component={MedicarePrograms} />
        
        {/* Legacy URL redirects */}
        <Route path="/contact-us.html">
          {() => {
            window.location.href = "/about#contact";
            return null;
          }}
        </Route>
        
        {/* Legal Pages */}
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/cookie-policy" component={CookiePolicy} />
        <Route path="/sitemap" component={Sitemap} />
        <Route path="/membership-agreement" component={MembershipAgreement} />
        
        <Route component={NotFound} />
      </Switch>
    </Layout>
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
