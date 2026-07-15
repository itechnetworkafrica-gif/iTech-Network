import { useLocation, Link } from "wouter";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, Cpu, Target, LifeBuoy, BookOpen, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { motion } from "framer-motion";

export default function SupportDynamic() {
  const [location] = useLocation();
  const pathParts = location.split("/").filter(Boolean);
  const rawTitle = pathParts[pathParts.length - 1] || "Support";
  const title = rawTitle.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col font-sans text-white selection:bg-brand-green/30 selection:text-brand-green">
      <PublicNavbar />
      
      <main className="flex-1">
        {/* Support Hero - Dark Theme */}
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gray-950 text-center">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-8 shadow-xl">
                <LifeBuoy className="w-8 h-8 text-brand-green" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6 text-white leading-[1.1]">
                {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">Center</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
                World-class assistance and enterprise documentation for the Gotecx ecosystem. We are here to ensure your operations never stop.
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-full p-2 flex items-center max-w-xl mx-auto shadow-2xl backdrop-blur-md">
                 <input type="text" placeholder="Search knowledge base..." className="bg-transparent border-none outline-none text-white px-6 w-full placeholder:text-gray-500" />
                 <Button className="bg-brand-green hover:bg-green-600 text-white rounded-full font-bold px-8">Search</Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-24 bg-gray-900 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               <div className="bg-gray-950 border border-white/10 rounded-3xl p-8 hover:border-brand-green/50 transition-colors group">
                  <BookOpen className="w-10 h-10 text-brand-green mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">Documentation</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">Detailed technical guides, API references, and deployment manuals for all Gotecx products.</p>
                  <Link href="/products/docs" className="text-brand-green text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                     Read Docs <ArrowRight className="w-4 h-4" />
                  </Link>
               </div>

               <div className="bg-gray-950 border border-white/10 rounded-3xl p-8 hover:border-brand-green/50 transition-colors group">
                  <MessageSquare className="w-10 h-10 text-brand-green mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">Priority Ticketing</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">Submit technical issues directly to our engineering response team for immediate resolution.</p>
                  <Link href="/contact" className="text-brand-green text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                     Open Ticket <ArrowRight className="w-4 h-4" />
                  </Link>
               </div>

               <div className="bg-gray-950 border border-white/10 rounded-3xl p-8 hover:border-brand-green/50 transition-colors group">
                  <ShieldCheck className="w-10 h-10 text-brand-green mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">System Status</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">Real-time monitoring of global Gotecx services, node latency, and infrastructure health.</p>
                  <Link href="#" className="text-brand-green text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                     View Status <ArrowRight className="w-4 h-4" />
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
