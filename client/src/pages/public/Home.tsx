import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Code, Shield, Cloud, Zap, Star, Users, Globe, BookOpen, Award, Cpu, MonitorSmartphone, MousePointer2, Rocket, Briefcase, BarChart3, MessageSquare, Database, Layers, Search, Settings, PieChart, Linkedin, Twitter, Facebook, ExternalLink, RefreshCw, Smartphone } from "lucide-react";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-white" ref={containerRef}>
      <PublicNavbar />
      
      {/* Modern Minimal Hero Section with Parallax */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gray-950">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
           <img src="/images/hero_home.jpg" alt="Background" className="w-full h-full object-cover opacity-20" />
           <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/80 to-gray-950"></div>
        </motion.div>
        
        {/* Soft Modern Gradients */}
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-brand-green/20 rounded-full blur-[120px] z-0 animate-pulse duration-[8s]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-emerald-500/20 rounded-full blur-[100px] z-0"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left pt-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center rounded-full border border-brand-green/30 bg-brand-green/10 px-4 py-2 text-sm font-semibold text-brand-green mb-8 shadow-[0_0_20px_rgba(55,182,38,0.15)] backdrop-blur-sm"
              >
                <span className="flex h-2 w-2 rounded-full bg-brand-green mr-2 animate-ping"></span>
                Africa's Premier Tech Ecosystem
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight"
              >
                Engineer the <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400 relative inline-block">
                  Future Today.
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed font-light"
              >
                We build scalable enterprise software, engineer robust cloud infrastructure, and train the next generation of African tech leaders.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <Button size="lg" className="bg-brand-green text-white hover:bg-green-600 h-14 px-8 text-base rounded-full transition-all hover:scale-105 font-bold shadow-[0_0_20px_rgba(55,182,38,0.4)] group" asChild>
                  <Link href="/services">
                    Explore Solutions <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white h-14 px-8 text-base rounded-full transition-all font-bold backdrop-blur-sm" asChild>
                  <Link href="/contact">
                    Talk to an Expert
                  </Link>
                </Button>
              </motion.div>
            </div>
            
            {/* 3D-like Floating Elements */}
            <div className="relative hidden lg:block h-[600px] w-full perspective-1000">
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  rotateX: [0, 5, 0],
                  rotateY: [0, -5, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="absolute right-0 top-10 w-3/4 h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-20 bg-gray-900"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 to-transparent z-10 mix-blend-overlay"></div>
                <img src="/images/hero_home.jpg" alt="Dashboard" className="w-full h-full object-cover opacity-80" />
                
                {/* Mock UI overlay */}
                <div className="absolute inset-x-4 bottom-4 h-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 flex gap-4 z-20">
                   <div className="w-16 h-full bg-brand-green/80 rounded-xl flex items-center justify-center">
                     <BarChart3 className="w-8 h-8 text-white" />
                   </div>
                   <div className="flex-1 flex flex-col justify-center">
                     <div className="h-3 w-1/2 bg-white/40 rounded-full mb-2"></div>
                     <div className="h-2 w-3/4 bg-white/20 rounded-full mb-2"></div>
                     <div className="h-2 w-1/4 bg-brand-green rounded-full"></div>
                   </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ 
                  y: [0, 20, 0],
                  rotateZ: [0, -2, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute left-0 bottom-10 w-2/3 h-[300px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-30 bg-black"
              >
                 <div className="p-6 h-full flex flex-col">
                   <div className="flex items-center gap-3 mb-6">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   </div>
                   <div className="flex-1 font-mono text-sm text-brand-green/80 space-y-2">
                     <p>const system = await Core.initialize();</p>
                     <p>system.deploy({'{'} target: 'cloud', scale: 'auto' {'}'});</p>
                     <p className="text-white">&gt; Deployment successful. All systems operational.</p>
                     <p className="text-gray-500 animate-pulse">_</p>
                   </div>
                 </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Feature Strip */}
      <div className="bg-brand-green py-6 relative overflow-hidden flex border-y border-green-800">
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap items-center gap-12 px-6"
        >
          {Array(4).fill(0).map((_, i) => (
            <div key={i} className="flex items-center gap-12 text-white font-black text-2xl uppercase italic tracking-widest">
              <span>Enterprise Software</span>
              <Star className="w-6 h-6 fill-white text-white" />
              <span>Cloud Architecture</span>
              <Star className="w-6 h-6 fill-white text-white" />
              <span>Cybersecurity</span>
              <Star className="w-6 h-6 fill-white text-white" />
              <span>AI Integration</span>
              <Star className="w-6 h-6 fill-white text-white" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Complex Services Showcase */}
      <section className="py-32 bg-gray-50 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-green font-mono text-sm tracking-[0.2em] uppercase mb-4 block">// Core Competencies</span>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight">
                Architecting the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-600">Digital Vanguard.</span>
              </h2>
            </div>
            <p className="text-gray-500 text-lg max-w-md leading-relaxed">
              We deliver comprehensive technology stacks designed for scale, security, and unparalleled performance.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Large Featured Service */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="lg:col-span-2 bg-gray-950 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group min-h-[400px] flex flex-col justify-between"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/20 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none transition-transform duration-1000 group-hover:scale-150"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                  <Code className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Enterprise Application Engineering</h3>
                <p className="text-gray-400 text-lg max-w-xl mb-8 leading-relaxed">
                  Bespoke, scalable software solutions architected to automate workflows, drive efficiency, and solve complex business challenges. Built with modern, resilient tech stacks.
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between mt-auto">
                <div className="flex gap-4">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium backdrop-blur-md border border-white/5">React</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium backdrop-blur-md border border-white/5">Node.js</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium backdrop-blur-md border border-white/5">PostgreSQL</span>
                </div>
                <Link href="/services" className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-5 h-5 text-white" />
                </Link>
              </div>
            </motion.div>

            {/* Smaller Service Cards */}
            <div className="flex flex-col gap-6">
              <motion.div whileHover={{ y: -5 }} className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl shadow-gray-200/50 flex-1 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-green/10 transition-colors">
                    <Cloud className="w-6 h-6 text-gray-900 group-hover:text-brand-green transition-colors" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">Cloud Infrastructure</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">Secure, auto-scaling cloud architectures deployed on AWS, Azure, or GCP for maximum uptime.</p>
                </div>
                <Link href="/services" className="text-brand-green font-bold text-sm flex items-center gap-2 mt-6 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="bg-brand-green rounded-[2.5rem] p-8 shadow-xl shadow-brand-green/30 flex-1 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">Cybersecurity</h3>
                  <p className="text-green-50 leading-relaxed text-sm">Enterprise-grade threat protection, compliance auditing, and secure network implementations.</p>
                </div>
                <Link href="/services" className="text-white font-bold text-sm flex items-center gap-2 mt-6 group-hover:gap-3 transition-all relative z-10">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Animated Process Section */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">The iTech <span className="text-brand-green">Methodology</span></h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">A rigorous, data-driven approach to product development that guarantees results.</p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Connecting Line */}
              <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 hidden md:block"></div>

              {[
                { icon: Search, title: "01. Discovery & Analysis", desc: "Deep dive into business requirements, user research, and technical feasibility.", side: "left" },
                { icon: Layers, title: "02. System Architecture", desc: "Designing scalable database schemas, infrastructure topology, and UI/UX wireframes.", side: "right" },
                { icon: Code, title: "03. Agile Engineering", desc: "Iterative development cycles with continuous integration and automated testing.", side: "left" },
                { icon: Rocket, title: "04. Deployment & Scale", desc: "Secure rollout, performance monitoring, and ongoing optimization.", side: "right" }
              ].map((step, idx) => (
                <div key={idx} className={`relative flex items-center justify-between mb-16 md:mb-24 ${step.side === 'left' ? 'md:flex-row-reverse' : ''}`}>
                   
                   {/* Center Node */}
                   <div className="absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-brand-green rounded-full z-10 hidden md:flex items-center justify-center shadow-[0_0_15px_rgba(55,182,38,0.3)]">
                     <div className="w-3 h-3 bg-brand-green rounded-full animate-ping"></div>
                   </div>

                   {/* Content */}
                   <div className="w-full md:w-[45%]">
                     <motion.div 
                       initial={{ opacity: 0, x: step.side === 'left' ? -50 : 50 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true, margin: "-100px" }}
                       transition={{ duration: 0.7 }}
                       className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-brand-green/30 transition-all group"
                     >
                       <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors">
                         <step.icon className="w-6 h-6 text-brand-green group-hover:text-white" />
                       </div>
                       <h3 className="text-2xl font-black text-gray-900 mb-3">{step.title}</h3>
                       <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                     </motion.div>
                   </div>
                   
                   {/* Empty space for the other side on desktop */}
                   <div className="hidden md:block w-[45%]"></div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* Interactive Metric blocks */}
      <section className="py-24 bg-gray-950 text-white relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, label: "System Uptime", value: "99.9%", desc: "Guaranteed SLA" },
              { icon: Users, label: "Active Users", value: "2M+", desc: "Across our platforms" },
              { icon: RefreshCw, label: "Deployments", value: "500+", desc: "Successful rollouts" },
              { icon: Shield, label: "Data Breaches", value: "0", desc: "Uncompromised security" },
            ].map((metric, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 text-center group hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 mx-auto bg-brand-green/20 rounded-full flex items-center justify-center mb-6 text-brand-green group-hover:scale-110 transition-transform">
                  <metric.icon className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{metric.value}</div>
                <div className="text-brand-green font-bold text-lg mb-1">{metric.label}</div>
                <div className="text-gray-400 text-sm">{metric.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="bg-gradient-to-br from-brand-green to-emerald-600 rounded-[3rem] p-12 md:p-20 text-center space-y-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px] -mr-20 -mt-20"></div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight relative z-10 tracking-tight">
              Ready to Transform Your <br className="hidden md:block" />Digital Infrastructure?
            </h2>
            <p className="text-green-50 text-xl max-w-2xl mx-auto relative z-10 font-medium">
              Join the hundreds of forward-thinking enterprises that trust iTech Network to engineer their growth.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 pt-8 relative z-10">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-10 h-14 font-black uppercase tracking-widest text-sm hover:scale-105 transition-all w-full md:w-auto shadow-xl">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Logos Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <img src="https://cddsrxtfashivrcuirgf.supabase.co/storage/v1/object/public/images/Starz%20Logo.webp" alt="Starz" className="h-10 w-auto" />
            <img src="https://cddsrxtfashivrcuirgf.supabase.co/storage/v1/object/public/images/dmg%20Logo.jpeg" alt="DMC" className="h-10 w-auto" />
            <img src="https://cddsrxtfashivrcuirgf.supabase.co/storage/v1/object/public/images/proaffordable-cleaning-logo.png" alt="Pro-Clean" className="h-10 w-auto" />
            <img src="https://cddsrxtfashivrcuirgf.supabase.co/storage/v1/object/public/images/new%20liberia%20logo.jpeg" alt="New Liberia" className="h-10 w-auto" />
            <img src="https://cddsrxtfashivrcuirgf.supabase.co/storage/v1/object/public/images/ai%20tech%20logo.webp" alt="A1 Tech" className="h-10 w-auto" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}