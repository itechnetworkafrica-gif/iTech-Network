import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, HeartPulse, ShieldCheck, ShoppingCart, Truck, GraduationCap, ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function Industries() {
  const industries = [
    {
      title: "Finance & Banking",
      icon: Building,
      desc: "Ultra-secure, high-frequency transaction systems and compliance-ready architectures for modern fintech and traditional banking.",
      features: ["PCI-DSS Compliance", "Real-time Fraud Detection", "Blockchain Integrations"]
    },
    {
      title: "Healthcare & MedTech",
      icon: HeartPulse,
      desc: "HIPAA-compliant data pipelines, telemedicine platforms, and AI-driven patient analytics designed to save lives and streamline care.",
      features: ["EHR/EMR Integrations", "Telehealth Infrastructure", "Predictive Diagnostics"]
    },
    {
      title: "Government & Defense",
      icon: ShieldCheck,
      desc: "Zero-trust networks and resilient public sector platforms built for national security and citizen engagement.",
      features: ["FedRAMP Readiness", "Encrypted Data Silos", "Public Service Portals"]
    },
    {
      title: "Retail & E-Commerce",
      icon: ShoppingCart,
      desc: "High-volume transactional platforms, automated inventory (Gotecx POS), and personalized AI shopping experiences.",
      features: ["Omnichannel Architecture", "Supply Chain AI", "Global Payment Gateways"]
    },
    {
      title: "Logistics & Supply Chain",
      icon: Truck,
      desc: "IoT fleet tracking, route optimization algorithms, and warehouse automation systems for global distribution networks.",
      features: ["Real-time Tracking APIs", "Warehouse Automation", "Predictive Maintenance"]
    },
    {
      title: "Education & EdTech",
      icon: GraduationCap,
      desc: "Scalable learning management systems (LMS) and virtual classrooms handling millions of concurrent global learners.",
      features: ["Video Streaming Infrastructure", "Student Analytics", "Interactive Portals"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-950">
      <PublicNavbar />
      
      {/* Hero Section */}
      <section className="pt-48 pb-20 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[100px] -mr-40 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 uppercase tracking-tighter leading-none">
                Sectors <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">We Elevate</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                Gotecx deploys world-class technology infrastructure across diverse global sectors, combining deep industry knowledge with uncompromising engineering standards.
              </p>
            </div>
            <div className="shrink-0 pb-2">
              <Link href="/consultation">
                <Button size="lg" className="bg-brand-green hover:bg-green-600 text-white rounded-full px-8 h-14 font-bold">
                  Discuss Your Sector <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {industries.map((ind, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-xl hover:shadow-2xl hover:border-brand-green/30 transition-all duration-300 group flex flex-col h-full">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-green transition-colors">
                  <ind.icon className="w-8 h-8 text-gray-950 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{ind.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed flex-1">{ind.desc}</p>
                
                <div className="mt-auto">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-950 mb-4 flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-brand-green"></span> Key Capabilities
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {ind.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 font-medium">
                        <ChevronRight className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/industries/${ind.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                    <Button variant="outline" className="w-full rounded-xl border-gray-200 hover:border-brand-green hover:bg-brand-green/5 text-gray-950 font-bold group-hover:bg-gray-950 group-hover:text-white transition-all">
                      View Architecture
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-950 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">Don't see your sector?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Our core engineering principles—security, scale, and intelligence—apply across every domain. Let's build something unprecedented.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-brand-green hover:bg-green-600 text-white rounded-full px-10 h-16 font-bold shadow-lg">
              Contact Engineering Team
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}