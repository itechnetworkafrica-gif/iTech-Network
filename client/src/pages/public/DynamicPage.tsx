import { useLocation, Link } from "wouter";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, Cpu, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { motion } from "framer-motion";

export default function DynamicPage() {
  const [location] = useLocation();
  
  const pathParts = location.split("/").filter(Boolean);
  const rawTitle = pathParts[pathParts.length - 1] || "Page";
  
  const title = rawTitle.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  const category = pathParts.length > 1 ? pathParts[0].toUpperCase() : "GOTECX ENTERPRISE";

  const features = [
    { title: "Enterprise Scalability", desc: "Designed to grow infinitely with your organization's demands.", icon: Layers },
    { title: "Zero-Trust Security", desc: "Military-grade encryption and compliance at every layer.", icon: ShieldCheck },
    { title: "High-Performance Compute", desc: "Optimized for sub-millisecond latency and maximum throughput.", icon: Cpu },
    { title: "Seamless Integration", desc: "Deploy rapidly alongside your existing infrastructure stack.", icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col font-sans text-white selection:bg-brand-green/30 selection:text-brand-green">
      <PublicNavbar />
      
      <main className="flex-1">
        {/* Enterprise Hero */}
        <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden bg-gray-950">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[150px] pointer-events-none"></div>
          
          <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-green text-[10px] font-black tracking-[0.2em] uppercase mb-8 backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
              {category} / {title}
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                  <span className="text-white">{title}</span><br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">Architecture</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-xl leading-relaxed font-light mb-10">
                  Gotecx delivers next-generation {title.toLowerCase()} capabilities designed to modernize your infrastructure and drive exponential growth.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/consultation">
                    <Button className="bg-brand-green hover:bg-green-600 text-white rounded-full h-14 px-8 font-bold shadow-lg shadow-brand-green/20 transition-all hover:scale-105 uppercase tracking-widest text-xs">
                      Initialize Deployment
                    </Button>
                  </Link>
                  <Link href="/request-demo">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full h-14 px-8 font-bold transition-all backdrop-blur-sm uppercase tracking-widest text-xs">
                      View Documentation
                    </Button>
                  </Link>
                </div>
              </motion.div>
              
              {/* Abstract Hero Graphic */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative hidden lg:block h-[500px]"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute inset-4 border border-white/10 rounded-3xl backdrop-blur-sm bg-gray-900/50 p-8 flex flex-col gap-4 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">sys.deploy({title.toLowerCase()})</span>
                  </div>
                  <div className="flex-1 rounded-xl bg-gray-950 border border-white/5 p-6 flex flex-col justify-center items-center text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <Cpu className="w-20 h-20 text-brand-green/50 mb-6 group-hover:scale-110 group-hover:text-brand-green transition-all duration-500" />
                    <h3 className="text-xl font-black uppercase text-white tracking-widest mb-2">System Active</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Awaiting configuration parameters</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Premium Bento Grid Features */}
        <section className="py-24 bg-gray-950 border-t border-white/5 relative z-20">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase block mb-4">// Core Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">Engineered for Excellence</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-gray-900 border border-white/10 rounded-[2rem] p-8 hover:border-brand-green/50 transition-colors group ${idx === 0 || idx === 3 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-brand-green/20 group-hover:border-brand-green/30 transition-colors">
                    <feat.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-3 text-white">{feat.title}</h3>
                  <p className="text-gray-400 font-medium">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deep Dive Section / Split Content */}
        <section className="py-32 bg-gray-900 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 relative">
                  <div className="absolute inset-0 bg-brand-green/20 mix-blend-overlay z-10"></div>
                  <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" alt="Tech Abstract" className="w-full h-full object-cover filter grayscale opacity-50" />
                  
                  {/* Floating UI Elements */}
                  <div className="absolute top-10 right-10 bg-gray-950/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl z-20">
                    <div className="flex items-center gap-4 mb-2">
                      <Target className="w-5 h-5 text-brand-green" />
                      <span className="font-bold text-sm tracking-widest uppercase">Efficiency</span>
                    </div>
                    <span className="text-4xl font-black text-white">+300%</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase block mb-4">// Strategic Advantage</span>
                <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight">Transforming The Way You Operate</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
                  By integrating {title.toLowerCase()} into your existing infrastructure, we eliminate operational bottlenecks and create scalable pathways for revenue generation. Our proprietary methodology ensures a seamless transition with zero downtime.
                </p>
                
                <ul className="space-y-4 mb-10">
                  {[
                    "Rapid deployment with automated provisioning",
                    "Continuous monitoring and proactive threat mitigation",
                    "Dedicated enterprise support and SLA guarantees"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0" />
                      <span className="text-gray-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/consultation">
                  <Button className="bg-transparent border border-brand-green text-brand-green hover:bg-brand-green hover:text-white rounded-full h-14 px-8 font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-2 group">
                    Speak To An Architect
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Bottom CTA */}
        <section className="py-32 bg-gray-950 text-center relative overflow-hidden border-t border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[150px] pointer-events-none"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">Ready to deploy <br/><span className="text-brand-green">{title}?</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg md:text-xl font-light">Join the world's most innovative organizations building on the Gotecx global ecosystem.</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link href="/consultation">
                  <Button className="bg-brand-green hover:bg-green-600 text-white rounded-full px-10 h-16 font-bold shadow-xl shadow-brand-green/20 text-sm uppercase tracking-widest">
                    Initialize Setup
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white/10 bg-white/5 text-white hover:bg-white hover:text-gray-900 rounded-full px-10 h-16 font-bold text-sm uppercase tracking-widest">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
