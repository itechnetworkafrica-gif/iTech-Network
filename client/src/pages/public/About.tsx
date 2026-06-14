import { Button } from "@/components/ui/button";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { CheckCircle, Users, Target, Lightbulb, ArrowRight, Linkedin, Twitter, Github, Rocket, Shield, Cpu, Globe, Building2, Map, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white overflow-hidden">
      <PublicNavbar />
      
      {/* Header Banner */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-xs font-bold text-gray-300 mb-8 backdrop-blur-md tracking-widest uppercase"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-green mr-3 animate-ping"></span>
            About The Ecosystem
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter uppercase"
          >
            Powering Global <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">Digital Transformation</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            iTech Network Africa established the foundation. Gotecx expands the vision. Together, we are building a world-class technology ecosystem that drives enterprise growth, intelligent automation, and borderless innovation.
          </motion.p>
        </div>
      </section>

      {/* The Gotecx & iTech Network Relationship */}
      <section className="py-24 bg-white text-gray-900 relative">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase mb-4">// Company Story</p>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-8">One Foundation.<br/>Global Scale.</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Founded by a group of passionate technologists, <strong className="text-gray-900">iTech Network Africa</strong> began with a clear mission: to provide high-quality engineering and bridge the digital divide in Africa.
                </p>
                <p>
                  As our solutions grew in complexity and demand, we realized our technology had the power to compete on a global scale. This led to the birth of <strong className="text-gray-900">Gotecx</strong> — our flagship global technology ecosystem.
                </p>
                <p>
                  Today, iTech Network Africa serves as the foundational parent company, while Gotecx represents our suite of scalable platforms, AI solutions, smart POS systems, and enterprise software designed for the global market.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-green/20 blur-3xl rounded-full transform rotate-45"></div>
              <div className="bg-gray-950 p-10 rounded-[3rem] relative z-10 border border-white/10 shadow-2xl text-white">
                <div className="space-y-8">
                  <div className="border-b border-white/10 pb-8">
                    <span className="text-brand-green font-bold text-sm tracking-widest uppercase mb-2 block">The Parent</span>
                    <h3 className="text-3xl font-black mb-2">iTech Network Africa</h3>
                    <p className="text-gray-400">The founding organization. Focused on regional infrastructure, education, and foundational engineering.</p>
                  </div>
                  <div className="pt-2">
                    <span className="text-brand-green font-bold text-sm tracking-widest uppercase mb-2 block">The Ecosystem</span>
                    <h3 className="text-3xl font-black mb-2 flex items-center gap-3">
                      GOTEC<span className="text-brand-green">X</span>
                    </h3>
                    <p className="text-gray-400">The global brand. Providing scalable enterprise software, AI, POS, and connected digital solutions to businesses worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 group hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors">
                <Target className="w-8 h-8 text-brand-green group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To engineer intelligent, scalable, and secure digital platforms that empower businesses to automate operations, engage customers, and grow without geographical limitations.
              </p>
            </div>
            
            <div className="bg-gray-950 p-10 rounded-[2.5rem] shadow-2xl border border-white/10 group hover:-translate-y-2 transition-transform text-white">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To become the world's most trusted and interconnected technology ecosystem, originating from Africa and powering the digital infrastructure of the global economy.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 group hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors">
                <ShieldCheck className="w-8 h-8 text-brand-green group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase">Core Values</h3>
              <ul className="space-y-3 text-gray-600 font-medium">
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-green" /> Engineering Excellence</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-green" /> Global Mindset</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-green" /> Uncompromising Security</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-green" /> Relentless Innovation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Businesses Choose Us */}
      <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase mb-4 block">// Competitive Advantage</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Why Enterprises <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">Choose Gotecx</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { icon: Cpu, title: "Intelligent Architecture", desc: "Our systems are built with AI-ready foundations, ensuring your business stays ahead of the curve." },
              { title: "Enterprise Scalability", icon: Rocket, desc: "From localized tools to global platforms handling millions of requests seamlessly." },
              { title: "Unified Ecosystem", icon: Lightbulb, desc: "A connected suite of products (POS, AI, Portals) that talk to each other perfectly." },
              { title: "World-Class Security", icon: Shield, desc: "Military-grade encryption and compliance standards embedded in every line of code." }
            ].map((adv, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors group">
                <adv.icon className="w-10 h-10 text-brand-green mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{adv.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Growth Strategy & Future Roadmap */}
      <section className="py-32 bg-brand-green text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-8">The Future <br/>Roadmap</h2>
              <p className="text-green-50 text-lg leading-relaxed mb-8">
                Gotecx is executing a multi-year global expansion strategy. We are aggressively investing in R&D, artificial intelligence, and decentralized infrastructure to build the next generation of business tools.
              </p>
              <ul className="space-y-6">
                {[
                  "Phase 1: Establishing the Gotecx connected product ecosystem (POS, Portals).",
                  "Phase 2: Launching Gotecx AI enterprise automation agents.",
                  "Phase 3: Expanding data centers and cloud infrastructure globally.",
                  "Phase 4: Open API architecture for global developer integration."
                ].map((phase, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white text-brand-green flex items-center justify-center shrink-0 font-black text-sm">
                      {idx + 1}
                    </div>
                    <span className="text-white font-medium mt-1">{phase}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-black/20 blur-2xl rounded-full transform rotate-12"></div>
              <div className="bg-gray-950 p-12 rounded-[3rem] relative z-10 border border-white/10 shadow-2xl">
                 <Map className="w-16 h-16 text-brand-green mb-8" />
                 <h3 className="text-3xl font-black mb-4">Global Strategy</h3>
                 <p className="text-gray-400 leading-relaxed mb-8">
                   We build from Africa, for the world. Our engineering standards are international, our design is world-class, and our products are built to solve universal business challenges.
                 </p>
                 <Button className="w-full bg-white text-gray-950 hover:bg-gray-200 rounded-full h-14 font-black uppercase tracking-widest text-sm transition-transform hover:-translate-y-1" asChild>
                   <Link href="/services">View Global Solutions</Link>
                 </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
