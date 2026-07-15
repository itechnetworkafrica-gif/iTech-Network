import { useLocation, Link } from "wouter";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, Cpu, Target, Settings, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { motion } from "framer-motion";

export default function ServicesDynamic() {
  const [location] = useLocation();
  const pathParts = location.split("/").filter(Boolean);
  const rawTitle = pathParts[pathParts.length - 1] || "Service";
  const title = rawTitle.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col font-sans text-white selection:bg-brand-green/30 selection:text-brand-green">
      <PublicNavbar />
      
      <main className="flex-1">
        {/* Abstract Tech Hero */}
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gray-900">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[150px] pointer-events-none"></div>
          
          <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-8 shadow-xl">
                <Wrench className="w-10 h-10 text-brand-green" />
              </div>
              <span className="text-brand-green font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Gotecx Specialized Service</span>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-8 text-white leading-[1.1]">
                Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">{title}</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Comprehensive, end-to-end {title.toLowerCase()} services engineered for scale, reliability, and unparalleled performance. We build the systems that build your business.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link href="/consultation">
                  <Button className="bg-brand-green hover:bg-green-600 text-white rounded-full h-14 px-10 font-bold shadow-xl transition-all hover:scale-105 uppercase tracking-widest text-xs">
                    Engage Our Team
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Flow - Unique Layout */}
        <section className="py-24 bg-gray-950 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">Our Engagement Model</h2>
              <p className="text-gray-400 text-lg">A structured, proven methodology to deliver world-class solutions.</p>
            </div>
            
            <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2"></div>
              
              <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative z-10">
                {[
                  { step: "01", title: "Audit & Analysis", desc: "Deep dive into your current architecture and business goals." },
                  { step: "02", title: "Strategic Design", desc: "Crafting a scalable blueprint tailored to your exact needs." },
                  { step: "03", title: "Execution", desc: "Agile, transparent deployment by elite engineering teams." },
                  { step: "04", title: "Ongoing Support", desc: "24/7 monitoring, maintenance, and continuous optimization." }
                ].map((item, idx) => (
                  <div key={idx} className="relative pl-8 md:pl-0 md:text-center group">
                    <div className="absolute left-[-5px] md:left-1/2 top-0 md:top-[-20px] md:-translate-x-1/2 w-3 h-3 rounded-full bg-brand-green shadow-[0_0_10px_rgba(55,182,38,0.8)]"></div>
                    <div className="bg-gray-900 border border-white/5 rounded-2xl p-6 md:mt-8 hover:border-brand-green/30 transition-colors">
                      <div className="text-4xl font-black text-white/5 absolute top-2 right-4 group-hover:text-brand-green/10 transition-colors">{item.step}</div>
                      <h3 className="text-xl font-bold text-white mb-2 relative z-10">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed relative z-10">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Grid */}
        <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gray-950 border border-white/10 rounded-[3rem] p-12 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-3xl font-black uppercase mb-4 tracking-tight">Need a custom approach?</h3>
                <p className="text-gray-400 mb-8 max-w-md">Our architects can design a tailored solution that fits perfectly within your existing ecosystem.</p>
                <Link href="/consultation">
                  <Button className="bg-white text-gray-950 hover:bg-gray-200 rounded-full h-12 px-8 font-bold uppercase tracking-widest text-xs">
                    Talk to an Expert
                  </Button>
                </Link>
              </div>
              
              <div className="bg-brand-green rounded-[3rem] p-12 relative overflow-hidden text-gray-950 group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <h3 className="text-3xl font-black uppercase mb-4 tracking-tight">Ready to start?</h3>
                <p className="text-gray-900/80 mb-8 max-w-md font-medium">Deploy our {title.toLowerCase()} services quickly with our standard enterprise packages.</p>
                <Link href="/request-demo">
                  <Button className="bg-gray-950 text-white hover:bg-gray-800 rounded-full h-12 px-8 font-bold uppercase tracking-widest text-xs shadow-xl">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
