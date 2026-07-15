import { useLocation, Link } from "wouter";
import { ArrowRight, CheckCircle2, MonitorSmartphone, Code2, Rocket, Cloud, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { motion } from "framer-motion";

export default function ProductsDynamic() {
  const [location] = useLocation();
  const pathParts = location.split("/").filter(Boolean);
  const rawTitle = pathParts[pathParts.length - 1] || "Product";
  const title = rawTitle.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900 selection:bg-brand-green/30 selection:text-brand-green">
      <PublicNavbar />
      
      <main className="flex-1">
        {/* Modern Bright Hero */}
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gray-50">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/5 blur-3xl transform skew-x-12 translate-x-1/4"></div>
          
          <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="text-brand-green font-bold text-sm tracking-widest uppercase mb-4 block">Gotecx Products</span>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6 text-gray-950 leading-[1.1]">
                  Gotecx <span className="text-brand-green">{title}</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                  Next-generation tools designed for high-performance teams. Modernize your workflow with the most powerful {title.toLowerCase()} ecosystem on the market.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/request-demo">
                    <Button className="bg-gray-950 hover:bg-gray-800 text-white rounded-full h-14 px-8 font-bold shadow-xl transition-all hover:-translate-y-1">
                      Start Free Trial
                    </Button>
                  </Link>
                  <Link href="/contact-sales">
                    <Button variant="outline" className="border-gray-200 text-gray-900 hover:bg-gray-100 rounded-full h-14 px-8 font-bold transition-all">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-2 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-gray-100 rounded-2xl aspect-video w-full flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 to-transparent"></div>
                    <MonitorSmartphone className="w-32 h-32 text-gray-900 opacity-20" />
                    <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-gray-900">System Ready</div>
                        <div className="text-xs text-gray-500">Deployment successful</div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center shadow-md">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Features Grid - Light Theme */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-950 uppercase tracking-tight">Everything you need</h2>
              <p className="text-gray-600 text-lg">A complete suite of tools working together in perfect harmony.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Cloud, title: "Cloud Native", desc: "Access your workspace from anywhere, anytime with 99.99% uptime." },
                { icon: Rocket, title: "Lightning Fast", desc: "Built on edge infrastructure for sub-millisecond response times." },
                { icon: Code2, title: "Developer API", desc: "Extend and customize the platform with our robust GraphQL API." }
              ].map((feature, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-950 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Callout */}
        <section className="py-24 bg-gray-950 text-white overflow-hidden relative">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">Seamlessly Integrates with your workflow</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Gotecx {title} doesn't force you to change how you work. It connects directly with the enterprise tools you already use, creating a unified source of truth.
                </p>
                <Link href="/consultation">
                  <Button className="bg-brand-green hover:bg-green-600 text-white rounded-full h-14 px-8 font-bold flex items-center gap-2 group shadow-xl shadow-brand-green/20">
                    Explore Integrations
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl aspect-square flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center border border-white/5">
                      <div className="text-2xl font-black text-gray-500">API</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
