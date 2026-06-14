import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Code, Shield, Cloud, Zap, Star, Users, Globe, BookOpen, Award, Cpu, MonitorSmartphone, MousePointer2, Rocket, Briefcase, BarChart3, MessageSquare, Database, Layers, Search, Settings, PieChart, Linkedin, Twitter, Facebook, ExternalLink, RefreshCw, Smartphone, Store, Terminal, HeartPulse, Building2, ShoppingBag, CreditCard, LayoutDashboard, Server, Lightbulb, GraduationCap } from "lucide-react";
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
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-gray-950" ref={containerRef}>
      <PublicNavbar />
      
      {/* GLOBAL ECOSYSTEM HERO SECTION */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 overflow-hidden bg-gray-950">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
           <img src="/images/hero_home.jpg" alt="Global Technology" className="w-full h-full object-cover opacity-10" />
           <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-gray-950/80 to-gray-950"></div>
        </motion.div>
        
        {/* Deep Tech Gradients */}
        <div className="absolute top-[-10%] right-[-10%] w-[50rem] h-[50rem] bg-brand-green/10 rounded-full blur-[150px] z-0 animate-pulse duration-[10s]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-emerald-500/10 rounded-full blur-[120px] z-0"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-xs font-bold text-gray-300 mb-8 backdrop-blur-md tracking-widest uppercase"
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
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button size="lg" className="bg-brand-green text-white hover:bg-green-600 h-16 px-10 text-lg rounded-full transition-all hover:scale-105 font-bold shadow-[0_0_30px_rgba(55,182,38,0.3)] group w-full sm:w-auto" asChild>
              <Link href="#ecosystem">
                Explore Ecosystem <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-gray-900 h-16 px-10 text-lg rounded-full transition-all font-bold backdrop-blur-sm w-full sm:w-auto" asChild>
              <Link href="/contact">
                Book Consultation
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION / ORIGIN STORY */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase mb-4">// Origin & Vision</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight leading-tight">One Vision. <br/>Endless Possibilities.</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
                iTech Network Africa established the foundation. Gotecx expands the vision globally.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Together, we are building a technology ecosystem focused on innovation, intelligent systems, digital transformation, and future-ready solutions for organizations around the world. We don't just write code; we engineer the future of business operations.
              </p>
              
              <div className="flex gap-4">
                 <div className="w-16 h-1 bg-brand-green rounded-full"></div>
                 <div className="w-4 h-1 bg-gray-300 rounded-full"></div>
                 <div className="w-4 h-1 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-green/20 to-transparent rounded-[3rem] -z-10 blur-xl"></div>
              <img src="/images/hero_about.jpg" alt="Gotecx Global Vision" className="rounded-[2.5rem] shadow-2xl object-cover h-[500px] w-full border border-gray-100" />
            </div>
          </div>
        </div>
      </section>

      {/* THE GOTECX ECOSYSTEM */}
      <section id="ecosystem" className="py-32 bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase mb-4 block">// Connected Platforms</span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">The Gotecx <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">Ecosystem</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              { title: "Gotecx POS", icon: CreditCard, desc: "Smart retail & business management platform", link: "/pos-demo" },
              { title: "Gotecx AI", icon: Cpu, desc: "Intelligent automation & machine learning APIs", link: "/services" },
              { title: "Client Portal", icon: LayoutDashboard, desc: "Centralized project & resource management", link: "/dashboard" },
              { title: "Digital Store", icon: ShoppingBag, desc: "Marketplace for premium digital assets", link: "/store" },
              { title: "Tech Services", icon: Server, desc: "Custom software & cloud engineering", link: "/services" },
              { title: "Innovation Lab", icon: Lightbulb, desc: "R&D center for emerging technologies", link: "/about" },
            ].map((node, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-brand-green/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/5 group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
                  <node.icon className="w-7 h-7 text-brand-green group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{node.title}</h3>
                <p className="text-gray-400 mb-6 h-10">{node.desc}</p>
                <Link href={node.link} className="flex items-center gap-2 text-brand-green font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS: POS & AI */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Gotecx POS */}
            <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-xl border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-950 rounded-xl flex items-center justify-center text-white font-black text-xl">P</div>
                  <h3 className="text-3xl font-black text-gray-900">Gotecx POS</h3>
                </div>
                <p className="text-brand-green font-bold text-lg mb-4">Smart Business. Simplified.</p>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  A modern business management and point-of-sale platform designed to help businesses manage operations, inventory, sales, reporting, customers, and growth from one intelligent cloud system.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-10">
                  {["Inventory Management", "Sales Tracking", "Customer CRM", "Analytics Dashboard", "Multi-User Access", "Cloud Enabled"].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                      <CheckCircle className="w-4 h-4 text-brand-green" /> {f}
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-gray-950 text-white hover:bg-brand-green rounded-xl h-14 font-bold text-lg" asChild>
                  <Link href="/pos-demo">View Platform Demo</Link>
                </Button>
              </div>
            </div>

            {/* Gotecx AI */}
            <div className="bg-gray-950 rounded-[3rem] p-10 md:p-14 shadow-2xl border border-white/10 relative overflow-hidden group text-white">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-green/20 rounded-full blur-3xl -mr-32 -mb-32"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-950 font-black text-xl">AI</div>
                    <h3 className="text-3xl font-black text-white">Gotecx AI</h3>
                  </div>
                  <span className="px-3 py-1 bg-white/10 text-brand-green text-xs font-bold rounded-full border border-brand-green/30">Innovation Initiative</span>
                </div>
                <p className="text-green-400 font-bold text-lg mb-4">Intelligence For The Modern World.</p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  A next-generation AI initiative focused on helping businesses improve productivity, decision-making, automation, customer engagement, and operational efficiency through intelligent technologies and R&D.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-10">
                  {["Predictive Analytics", "Process Automation", "Machine Learning", "NLP Interfaces", "Smart Decisioning", "API Integration"].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                      <Zap className="w-4 h-4 text-brand-green" /> {f}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-gray-950 rounded-xl h-14 font-bold text-lg" asChild>
                  <Link href="/services">Explore AI Capabilities</Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GLOBAL CAPABILITIES (SOLUTIONS) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase mb-4 block">// Technology Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">Enterprise Solutions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code, title: "Software Engineering", desc: "Custom web, mobile, and enterprise platforms built to scale." },
              { title: "Cloud Technologies", icon: Cloud, desc: "Secure, highly-available infrastructure deployment on AWS & Azure." },
              { title: "Digital Transformation", icon: Layers, desc: "Modernizing legacy systems for the digital-first economy." },
              { title: "Business Automation", icon: Zap, desc: "Streamlining operations through intelligent workflows." },
              { title: "Data Intelligence", icon: Database, desc: "Actionable insights through advanced analytics architectures." },
              { title: "Cybersecurity", icon: Shield, desc: "Enterprise-grade threat protection and compliance." },
              { title: "Enterprise Systems", icon: Server, desc: "Robust ERP and CRM implementations." },
              { title: "IT Consulting", icon: Briefcase, desc: "Strategic technology advisory for global organizations." }
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-gray-900 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE GOTECX */}
      <section className="py-24 bg-gray-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col items-start">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">Why Organizations <br/>Choose Gotecx</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We engineer trust. From startup innovators to government institutions, our partners rely on our enterprise mindset and global vision.
              </p>
              <Button className="bg-brand-green hover:bg-green-600 text-white rounded-full h-14 px-8 font-bold text-lg shadow-lg shadow-brand-green/20 mb-8 lg:mb-0">
                Partner With Us
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {["Innovation First", "Customer Focused", "Reliable Solutions", "Scalable Technology", "Future Ready", "Global Vision", "Professional Support", "Enterprise Mindset"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-900 p-4 rounded-xl border border-gray-800 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0" />
                  <span className="font-bold text-sm tracking-wide text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight">Industries We Empower</h2>
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
               <div key={i} className="bg-white border border-gray-200 rounded-full px-6 py-3 flex items-center gap-3 shadow-sm hover:border-brand-green hover:shadow-md hover:text-brand-green transition-all cursor-pointer font-bold text-gray-700">
                 <ind.icon className="w-5 h-5" />
                 {ind.name}
               </div>
             ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}