import { Button } from "@/components/ui/button";
import { CheckCircle, Building2, Globe, Rocket, Briefcase, BarChart3, HeartPulse, Store, GraduationCap, Quote, ShieldCheck, Zap, Layers, ArrowRight, Activity, Cpu } from "lucide-react";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const testimonials = [
    {
      quote: "Gotecx transformed our legacy infrastructure into a scalable, high-performance ecosystem. Their enterprise architecture is simply unmatched.",
      author: "Sarah Jenkins",
      role: "CTO, Global Finance Corp",
      image: "https://i.pravatar.cc/150?img=32"
    },
    {
      quote: "The level of engineering precision and zero-trust security they delivered allowed us to scale our operations across three continents without a single breach.",
      author: "Michael Chang",
      role: "VP of Engineering, SecureTech",
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      quote: "Deploying Gotecx AI and POS solutions increased our retail efficiency by 300%. The analytics dashboard gives us real-time insights we never had before.",
      author: "Elena Rodriguez",
      role: "Operations Director, RetailNova",
      image: "https://i.pravatar.cc/150?img=5"
    }
  ];

  const stats = [
    { label: "Uptime SLA", value: "99.999%" },
    { label: "Global Nodes", value: "120+" },
    { label: "Data Processed", value: "50PB+" },
    { label: "Enterprise Clients", value: "500+" }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-gray-950 selection:bg-brand-green/30 selection:text-brand-green" ref={containerRef}>
      <PublicNavbar />
      
      {/* GLOBAL ECOSYSTEM HERO SECTION */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 overflow-hidden bg-gray-950">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-gray-950/40 via-gray-950/80 to-gray-950"></div>
        </motion.div>
        
        {/* Deep Tech Gradients */}
        <div className="absolute top-[-10%] right-[-10%] w-[50rem] h-[50rem] bg-brand-green/10 rounded-full blur-[150px] z-0 animate-pulse duration-[10s]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-emerald-500/10 rounded-full blur-[120px] z-0"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-xs font-bold text-gray-300 mb-8 backdrop-blur-md tracking-widest uppercase shadow-[0_0_30px_rgba(55,182,38,0.15)]"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-green mr-3 animate-ping"></span>
            Global Technology Ecosystem
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 tracking-tighter uppercase"
          >
            Build. Connect.<br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">
              Scale. Transform.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Gotecx develops intelligent software, AI-powered solutions, digital platforms, and transformative technologies that help organizations innovate, operate efficiently, and grow without limits.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Link href="/consultation">
              <Button className="w-full sm:w-auto bg-brand-green hover:bg-green-600 text-white rounded-full h-14 px-10 font-black text-sm uppercase tracking-widest shadow-[0_0_40px_rgba(55,182,38,0.3)] transition-all hover:scale-105">
                Start Building
              </Button>
            </Link>
            <Link href="/request-demo">
              <Button variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white hover:text-gray-900 rounded-full h-14 px-10 font-black text-sm uppercase tracking-widest transition-all backdrop-blur-sm group">
                View Demo <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 bg-brand-green/5 border-y border-white/5 relative z-20 overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
               {stats.map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-center px-4"
                  >
                     <div className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tighter">{stat.value}</div>
                     <div className="text-brand-green text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* WHY CHOOSE GOTECX */}
      <section className="py-32 bg-gray-950 text-white overflow-hidden relative border-b border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <span className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase block mb-4">// Enterprise Architecture</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">Why Organizations <br/>Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">Gotecx</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light max-w-xl">
                We engineer trust. From startup innovators to government institutions, our partners rely on our enterprise mindset, zero-trust security, and global operational vision.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-10">
                {[
                  { title: "Innovation First", icon: Cpu },
                  { title: "Zero-Trust Security", icon: ShieldCheck },
                  { title: "Infinite Scalability", icon: Layers },
                  { title: "Real-Time Analytics", icon: Activity }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-gray-900/50 p-5 rounded-2xl border border-white/5 hover:border-brand-green/30 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                      <item.icon className="w-5 h-5 text-brand-green" />
                    </div>
                    <span className="font-bold text-sm tracking-wide text-gray-200 uppercase">{item.title}</span>
                  </div>
                ))}
              </div>

              <Link href="/consultation">
                <Button className="bg-brand-green hover:bg-green-600 text-white rounded-full h-14 px-8 font-black text-sm tracking-widest uppercase shadow-[0_0_30px_rgba(55,182,38,0.2)] transition-all hover:scale-105">
                  Consult An Architect
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[600px] w-full hidden lg:block"
            >
               {/* Abstract Tech Graphic */}
               <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 to-transparent rounded-[3rem] blur-2xl"></div>
               <div className="absolute inset-4 rounded-[3rem] border border-white/10 bg-gray-900/80 backdrop-blur-xl overflow-hidden shadow-2xl p-8 flex flex-col">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
                     <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                     </div>
                     <div className="text-[10px] text-brand-green font-mono uppercase tracking-widest">System Status: Optimal</div>
                  </div>

                  <div className="flex-1 grid grid-cols-2 gap-4">
                     <div className="bg-gray-950 rounded-2xl border border-white/5 p-6 flex flex-col justify-between group hover:border-brand-green/50 transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-brand-green/10 rounded-full blur-xl"></div>
                        <Activity className="w-8 h-8 text-brand-green mb-4 relative z-10" />
                        <div className="relative z-10">
                           <div className="text-3xl font-black text-white">12M+</div>
                           <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Requests / Sec</div>
                        </div>
                     </div>
                     <div className="bg-gray-950 rounded-2xl border border-white/5 p-6 flex flex-col justify-between group hover:border-brand-green/50 transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl"></div>
                        <ShieldCheck className="w-8 h-8 text-brand-green mb-4 relative z-10" />
                        <div className="relative z-10">
                           <div className="text-3xl font-black text-white">100%</div>
                           <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Threat Mitigation</div>
                        </div>
                     </div>
                     <div className="col-span-2 bg-gray-950 rounded-2xl border border-white/5 p-6 flex items-center justify-between group hover:border-brand-green/50 transition-all">
                        <div>
                           <div className="text-xl font-black text-white mb-1 uppercase tracking-tight">Global Network</div>
                           <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Active deployment across 40 regions</div>
                        </div>
                        <Globe className="w-12 h-12 text-brand-green/30 group-hover:text-brand-green transition-colors" />
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-gray-900 border-b border-white/5 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         
         <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
            <div className="text-center mb-20">
              <span className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase block mb-4">// Client Success</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Trusted by Industry Leaders</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {testimonials.map((t, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="bg-gray-950 border border-white/10 rounded-[2rem] p-8 md:p-10 relative group hover:border-brand-green/40 transition-colors shadow-xl"
                  >
                     <Quote className="w-12 h-12 text-brand-green/20 absolute top-8 right-8 group-hover:text-brand-green/40 transition-colors" />
                     
                     <p className="text-gray-300 text-lg leading-relaxed mb-10 relative z-10 min-h-[140px]">"{t.quote}"</p>
                     
                     <div className="flex items-center gap-4 relative z-10 border-t border-white/10 pt-6">
                        <img src={t.image} alt={t.author} className="w-14 h-14 rounded-full border-2 border-brand-green/50 object-cover" />
                        <div>
                           <h4 className="font-black text-white tracking-wide uppercase text-sm">{t.author}</h4>
                           <p className="text-brand-green text-xs font-bold uppercase tracking-widest">{t.role}</p>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-32 bg-gray-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase block mb-4">// Sectors</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Industries We Empower</h2>
            <p className="text-gray-400 text-lg font-light">Delivering highly specialized, vertically-integrated technology solutions.</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4 max-w-5xl mx-auto">
             {[
               { icon: Building2, name: "Government" },
               { icon: GraduationCap, name: "Education" },
               { icon: HeartPulse, name: "Healthcare" },
               { icon: Store, name: "Retail" },
               { icon: Globe, name: "NGOs" },
               { icon: BarChart3, name: "Financial Services" },
               { icon: Rocket, name: "Transportation" },
               { icon: Briefcase, name: "SMBs" }
             ].map((ind, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.05 }}
               >
                 <Link href={`/industries/${ind.name.toLowerCase()}`}>
                   <div className="bg-gray-900 border border-white/10 rounded-full px-8 py-4 flex items-center gap-3 shadow-lg hover:border-brand-green hover:bg-brand-green/5 hover:-translate-y-1 transition-all cursor-pointer font-black text-sm uppercase tracking-widest text-gray-300 group">
                     <ind.icon className="w-5 h-5 text-brand-green group-hover:scale-110 transition-transform" />
                     {ind.name}
                   </div>
                 </Link>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 bg-brand-green relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-gray-950 uppercase tracking-tighter mb-6">Ready to scale your enterprise?</h2>
            <p className="text-gray-900 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10">Join the thousands of businesses running their operations on Gotecx.</p>
            <Link href="/consultation">
               <Button className="bg-gray-950 hover:bg-gray-900 text-white rounded-full h-16 px-12 font-black text-sm uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-all">
                 Initialize Deployment
               </Button>
            </Link>
         </div>
      </section>

      <Footer />
    </div>
  );
}
