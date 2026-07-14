import { useLocation, Link } from "wouter";
import { ArrowRight, CheckCircle, BarChart3, ShieldCheck, Zap, Globe, Layers, Cpu, Cloud, Building, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";

export default function DynamicPage() {
  const [location] = useLocation();
  
  // Convert path like /solutions/retail to "Retail" or "Retail Solutions"
  const pathParts = location.split("/").filter(Boolean);
  const rawTitle = pathParts[pathParts.length - 1] || "Page";
  
  const title = rawTitle.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  const category = pathParts.length > 1 ? pathParts[0].toUpperCase() : "GOTECX ENTERPRISE";

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col font-sans text-white">
      <PublicNavbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-48 pb-32 overflow-hidden bg-gray-950">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-[150px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none"></div>
          
          <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-green text-xs font-bold tracking-widest uppercase mb-8 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              {category}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{title}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              Discover how Gotecx's {title.toLowerCase()} empowers global enterprises to scale, innovate, and lead in the digital era. Built with precision and powered by iTech Network Africa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/consultation">
                <Button className="w-full sm:w-auto bg-brand-green hover:bg-green-600 text-white rounded-full h-14 px-8 font-bold shadow-lg shadow-brand-green/20 transition-all hover:scale-105">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/request-demo">
                <Button variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white hover:text-gray-900 rounded-full h-14 px-8 font-bold transition-all backdrop-blur-sm">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-gray-900/50 border-y border-white/5 relative z-20">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-12">
                <div className="bg-gray-950 rounded-[3rem] p-8 md:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-green/5 rounded-full blur-[80px] pointer-events-none"></div>
                  
                  <h2 className="text-3xl md:text-4xl font-black mb-8 relative z-10 flex items-center gap-4 uppercase tracking-tight">
                    <Layers className="text-brand-green w-10 h-10" />
                    Overview
                  </h2>
                  <div className="space-y-6 text-gray-400 leading-relaxed relative z-10 text-lg">
                    <p>
                      Our approach to {title.toLowerCase()} is designed specifically for scale, security, and sustained high performance. We integrate cutting-edge technology with industry best practices to deliver world-class solutions that drive measurable business outcomes.
                    </p>
                    <p>
                      As part of the Gotecx Global Technology Ecosystem, this offering leverages our deep expertise in artificial intelligence, robust cloud infrastructure, and comprehensive digital transformation strategies to provide unmatched value to our global partners and enterprise clients.
                    </p>
                    <p>
                      Whether you're modernizing legacy systems or building from the ground up, our framework ensures you remain competitive, agile, and secure in an increasingly complex digital landscape.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-black uppercase tracking-tight mt-12 mb-6">Core Capabilities</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: "Enterprise-Grade Security", desc: "Built to exceed industry compliance standards with zero-trust architecture.", icon: ShieldCheck },
                    { title: "Scalable Infrastructure", desc: "Cloud-native foundations that grow seamlessly with your organizational needs.", icon: BarChart3 },
                    { title: "24/7 Global Support", desc: "Dedicated expert teams providing continuous monitoring and rapid response.", icon: Globe },
                    { title: "Seamless Integration", desc: "Flawlessly connects with your existing tech stack and operational workflows.", icon: Zap }
                  ].map((feature, idx) => (
                    <div key={idx} className="bg-gray-950 border border-white/5 hover:border-brand-green/30 p-8 rounded-3xl flex flex-col gap-4 transition-all hover:shadow-[0_0_30px_rgba(55,182,38,0.1)] group">
                      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-brand-green group-hover:text-white transition-colors">
                        <feature.icon className="text-brand-green group-hover:text-white w-7 h-7 transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-2 text-xl">{feature.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-8">
                {/* How it Works / Process */}
                <div className="bg-gray-950 p-8 rounded-[2rem] border border-white/10 shadow-xl">
                  <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                    <Code className="text-brand-green w-5 h-5" /> The Process
                  </h3>
                  <div className="space-y-6">
                    {[
                      "Discovery & Architecture", 
                      "System Engineering", 
                      "Deployment & Scaling", 
                      "Continuous Optimization"
                    ].map((step, i) => (
                      <div key={i} className="flex gap-4 relative">
                        {i !== 3 && <div className="absolute top-8 left-4 w-0.5 h-10 bg-white/10"></div>}
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-brand-green/30 flex items-center justify-center text-brand-green font-bold text-sm shrink-0 z-10">
                          {i + 1}
                        </div>
                        <div className="pt-1 text-gray-300 font-medium">{step}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-green/20 to-emerald-900/20 p-8 rounded-[2rem] border border-brand-green/30 backdrop-blur-sm shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/40 blur-[50px] rounded-full"></div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10 text-white">Start Your Project</h3>
                  <p className="text-green-50/90 mb-8 text-sm leading-relaxed relative z-10">
                    Connect with our enterprise architecture team to discuss how we can drive your business forward.
                  </p>
                  <div className="relative z-10 flex flex-col gap-4">
                    <Link href="/consultation">
                      <Button className="w-full bg-white hover:bg-gray-100 text-brand-green rounded-full h-14 font-bold shadow-lg transition-all text-base">
                        Book Strategy Call
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="bg-gray-950 p-8 rounded-[2rem] border border-white/10 shadow-xl">
                  <h3 className="text-xl font-bold mb-6">Need Help?</h3>
                  <ul className="space-y-3 text-sm font-medium">
                    <li>
                      <Link href="/contact" className="text-gray-400 hover:text-brand-green flex items-center gap-3 transition-colors p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        Contact Support Team
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="text-gray-400 hover:text-brand-green flex items-center gap-3 transition-colors p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        View Knowledge Base
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Bottom CTA */}
        <section className="py-24 bg-gray-950 text-center relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">Ready to leverage <span className="text-brand-green">{title}?</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">Join the world's most innovative organizations building on the Gotecx ecosystem.</p>
            <Link href="/consultation">
              <Button size="lg" className="bg-brand-green hover:bg-green-600 text-white rounded-full px-10 h-16 font-bold shadow-xl text-lg">
                Get Started Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}