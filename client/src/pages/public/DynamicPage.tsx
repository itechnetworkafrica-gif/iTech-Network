import { useLocation, Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DynamicPage() {
  const [location] = useLocation();
  
  // Convert path like /solutions/retail to "Retail" or "Retail Solutions"
  const pathParts = location.split("/").filter(Boolean);
  const rawTitle = pathParts[pathParts.length - 1] || "Page";
  
  const title = rawTitle.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  const category = pathParts.length > 1 ? pathParts[0].toUpperCase() : "GOTECX ENTERPRISE";

  return (
    <div className="min-h-screen bg-gray-950 pt-32 pb-24 text-white font-sans">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-green text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            {category}
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Discover how Gotecx's {title.toLowerCase()} empowers global enterprises to scale, innovate, and lead in the digital era. Powered by iTech Network Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-green/5 rounded-full blur-[80px] pointer-events-none"></div>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our approach to {title.toLowerCase()} is designed for scale, security, and performance. We integrate cutting-edge technology with industry best practices to deliver world-class solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                As part of the Gotecx Global Technology Ecosystem, this offering leverages our deep expertise in AI, cloud computing, and digital transformation to provide unmatched value to our partners and clients.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Enterprise-Grade Security", 
                "Scalable Infrastructure", 
                "24/7 Global Support", 
                "Seamless Integration"
              ].map((feature, idx) => (
                <div key={idx} className="bg-white/5 border border-white/5 p-6 rounded-2xl flex items-start gap-4">
                  <CheckCircle className="text-brand-green w-6 h-6 shrink-0" />
                  <div>
                    <h3 className="font-bold text-white mb-2">{feature}</h3>
                    <p className="text-sm text-gray-400">Built to exceed industry standards and organizational requirements.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-brand-green/20 to-emerald-900/20 p-8 rounded-3xl border border-brand-green/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform?</h3>
              <p className="text-green-50/80 mb-8 text-sm leading-relaxed">
                Connect with our enterprise team to discuss how {title} can drive your business forward.
              </p>
              <Link href="/consultation">
                <Button className="w-full bg-brand-green hover:bg-green-600 text-white rounded-full h-12 font-bold mb-4">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/request-demo">
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-gray-900 rounded-full h-12 font-bold">
                  Request Demo
                </Button>
              </Link>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
              <h3 className="text-lg font-bold mb-4">Need Help?</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-brand-green flex items-center gap-2 transition-colors">
                    <ArrowRight className="w-4 h-4" /> Contact Support
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-gray-400 hover:text-brand-green flex items-center gap-2 transition-colors">
                    <ArrowRight className="w-4 h-4" /> Knowledge Base
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}