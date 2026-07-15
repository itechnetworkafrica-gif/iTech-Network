import { useLocation, Link } from "wouter";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, Cpu, Target, Building2, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { motion } from "framer-motion";

export default function IndustriesDynamic() {
  const [location] = useLocation();
  const pathParts = location.split("/").filter(Boolean);
  const rawTitle = pathParts[pathParts.length - 1] || "Industry";
  const title = rawTitle.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900 selection:bg-brand-green/30 selection:text-brand-green">
      <PublicNavbar />
      
      <main className="flex-1">
        {/* Industry Hero - Light Theme */}
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white border-b border-gray-200">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
          
          <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <span className="text-brand-green font-bold text-sm tracking-widest uppercase mb-4 block flex items-center gap-2">
                  <Building2 className="w-4 h-4" /> Gotecx for Industries
                </span>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6 text-gray-950 leading-[1.1]">
                  Empowering <br/><span className="text-brand-green">{title}</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                  Gotecx provides specialized, compliant, and highly secure technology infrastructure tailored specifically to the unique challenges of the {title.toLowerCase()} sector.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/consultation">
                    <Button className="bg-brand-green hover:bg-green-600 text-white rounded-full h-14 px-8 font-bold shadow-lg shadow-brand-green/20 transition-all hover:-translate-y-1">
                      Explore Sector Solutions
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative hidden lg:block h-[500px]"
              >
                <div className="absolute inset-0 bg-gray-100 rounded-[3rem] border border-gray-200 overflow-hidden shadow-2xl flex flex-col">
                  <div className="bg-gray-900 p-4 flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">Industry Portal</div>
                  </div>
                  <div className="flex-1 p-8 grid grid-cols-2 gap-4 bg-gray-50">
                     <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
                        <Briefcase className="w-8 h-8 text-brand-green mb-4" />
                        <h4 className="font-bold text-gray-900 mb-1">Compliance Ready</h4>
                        <p className="text-xs text-gray-500">Meets industry regulations</p>
                     </div>
                     <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
                        <ShieldCheck className="w-8 h-8 text-brand-green mb-4" />
                        <h4 className="font-bold text-gray-900 mb-1">Zero-Trust</h4>
                        <p className="text-xs text-gray-500">Maximum data security</p>
                     </div>
                     <div className="col-span-2 bg-brand-green/10 p-6 rounded-2xl border border-brand-green/20 flex items-center justify-between">
                        <div>
                           <h4 className="font-bold text-gray-900 mb-1">Global Scale</h4>
                           <p className="text-xs text-gray-600">Deploy across multiple regions instantly.</p>
                        </div>
                        <Target className="w-10 h-10 text-brand-green" />
                     </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sector Focus */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
             <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-950 uppercase tracking-tight">Purpose-Built Tools</h2>
              <p className="text-gray-600 text-lg">We don't believe in one-size-fits-all. Our solutions adapt to your operational realities.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { title: "Specialized Infrastructure", desc: "Cloud architecture optimized for your specific workloads and compliance needs." },
                 { title: "Custom Workflows", desc: "Software engineered to match your exact business processes without friction." },
                 { title: "Dedicated Support", desc: "Enterprise SLAs with teams who understand your industry's nuances." }
               ].map((item, idx) => (
                 <div key={idx} className="bg-gray-50 border border-gray-200 rounded-[2rem] p-8 text-center hover:border-brand-green transition-colors group">
                    <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center shadow-sm border border-gray-100 mb-6 group-hover:scale-110 transition-transform">
                       <CheckCircle2 className="w-6 h-6 text-brand-green" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
