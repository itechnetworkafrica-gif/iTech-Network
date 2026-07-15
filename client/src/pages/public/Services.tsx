import { Button } from "@/components/ui/button";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Code, Server, Database, Smartphone, ShieldCheck, PenTool, ChevronDown, Search, Users, Zap, CheckCircle2, ArrowRight, Cpu, Building2, MonitorSmartphone, Layers } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    {
      id: "enterprise-software",
      icon: Code,
      title: "Enterprise Software Engineering",
      description: "Custom, scalable software solutions architected for large organizations to automate complex workflows.",
      longDescription: "We engineer high-performance, enterprise-grade software applications tailored to your operational needs. Utilizing robust frameworks and microservices architectures, we ensure your digital infrastructure is resilient, secure, and capable of scaling infinitely as your enterprise grows.",
      features: ["Microservices Architecture", "Custom ERP & CRM", "Legacy System Modernization", "API Development & Integration", "High-Availability Systems"],
      benefits: ["Streamlined Operations", "Unrestricted Scalability", "Reduced Technical Debt"],
    },
    {
      id: "ai-solutions",
      icon: Cpu,
      title: "Gotecx AI Solutions",
      description: "Intelligent machine learning models and AI integrations to automate decision making.",
      longDescription: "Leverage the power of Artificial Intelligence to transform your business. The Gotecx AI division builds predictive models, natural language processing tools, and intelligent automation systems that learn from your data to drive smarter, faster business decisions.",
      features: ["Predictive Analytics", "NLP & Chatbots", "Process Automation", "Computer Vision", "AI API Integrations"],
      benefits: ["Data-Driven Decisions", "Reduced Operational Costs", "24/7 Intelligent Automation"],
    },
    {
      id: "cloud",
      icon: Server,
      title: "Cloud Architecture & DevOps",
      description: "Secure, auto-scaling cloud infrastructure design, migration, and management on top platforms.",
      longDescription: "Modernize your IT infrastructure with our comprehensive enterprise cloud solutions. We help large organizations migrate, manage, and optimize complex workloads on leading cloud platforms, ensuring maximum uptime, impenetrable security, and rigorous cost management.",
      features: ["Cloud Migration Strategy", "Infrastructure as Code (IaC)", "Serverless Architecture", "Kubernetes & Docker", "Disaster Recovery"],
      benefits: ["99.99% Uptime", "Dynamic Auto-Scaling", "Optimized IT Spend"],
    },
    {
      id: "pos-automation",
      icon: MonitorSmartphone,
      title: "Gotecx POS & Automation",
      description: "Smart retail, inventory, and business management systems designed to handle multi-location operations.",
      longDescription: "Gotecx POS is our flagship business management ecosystem. More than just a point of sale, it's a complete business automation suite handling multi-branch inventory, real-time sales analytics, customer relationships, and staff management from a single cloud dashboard.",
      features: ["Multi-Branch Management", "Real-Time Inventory Sync", "Offline Mode Capability", "Advanced Analytics", "Customer Loyalty Engine"],
      benefits: ["Unified Operations", "Data-Backed Growth", "Eliminated Stockouts"],
    },
    {
      id: "cybersecurity",
      icon: ShieldCheck,
      title: "Zero-Trust Cybersecurity",
      description: "Enterprise-grade security protocols, compliance auditing, and continuous threat monitoring.",
      longDescription: "Protect your corporate assets with our military-grade cybersecurity framework. We implement zero-trust architectures, conduct rigorous penetration testing, and provide 24/7 proactive monitoring to ensure your data remains uncompromised in an evolving threat landscape.",
      features: ["Zero-Trust Implementation", "Penetration Testing", "Compliance Auditing (GDPR/HIPAA)", "Endpoint Protection", "Automated Threat Response"],
      benefits: ["Risk Mitigation", "Regulatory Compliance", "Asset Protection"],
    },
    {
      id: "digital-platforms",
      icon: Layers,
      title: "Digital Platform Development",
      description: "Immersive web and mobile platforms designed for high user engagement and retention.",
      longDescription: "We build digital platforms that serve millions of users without breaking a sweat. From high-conversion enterprise portals to award-winning mobile applications (iOS/Android), our platforms are designed with an obsession for performance and UX.",
      features: ["Progressive Web Apps", "Native iOS/Android", "High-Fidelity UI/UX", "GraphQL Architectures", "Headless CMS Integrations"],
      benefits: ["Global Audience Reach", "Maximized Engagement", "Premium Brand Perception"],
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white overflow-hidden selection:bg-brand-green/30 selection:text-brand-green">
      <PublicNavbar />
      
      {/* Dynamic Modern Hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden bg-gray-950">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-xs font-bold text-gray-300 mb-8 backdrop-blur-md uppercase tracking-widest">
                <span className="flex h-2 w-2 rounded-full bg-brand-green mr-3 animate-ping"></span>
                Services Portfolio
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-6">
                Engineering <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">The Future</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-lg pb-2 border-l-2 border-brand-green pl-6"
            >
              We provide world-class technological infrastructure and digital solutions designed to help enterprises scale aggressively and operate with zero friction.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Accordion / Expandable Services Grid */}
      <section className="py-24 bg-gray-900 border-y border-white/5 relative z-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => {
              const isActive = activeService === service.id;
              
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-gray-950 border transition-all duration-500 overflow-hidden ${
                    isActive ? "border-brand-green/50 rounded-[3rem] shadow-[0_0_40px_rgba(55,182,38,0.1)] col-span-1 md:col-span-2" : "border-white/5 rounded-[2rem] hover:border-white/20"
                  }`}
                >
                  <div 
                    className="p-8 md:p-10 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                    onClick={() => setActiveService(isActive ? null : service.id)}
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${isActive ? "bg-brand-green text-white" : "bg-white/5 border border-white/10 text-brand-green"}`}>
                        <service.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-2">{service.title}</h3>
                        <p className={`text-gray-400 font-medium transition-all ${isActive ? "hidden" : "block"}`}>{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="shrink-0 flex items-center justify-end">
                      <Button variant={isActive ? "default" : "outline"} className={`rounded-full uppercase tracking-widest text-xs font-bold ${isActive ? "bg-brand-green hover:bg-green-600 text-white shadow-lg shadow-brand-green/20" : "border-white/20 text-white hover:bg-white hover:text-gray-900"}`}>
                        {isActive ? "Close Details" : "Explore More"}
                      </Button>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="px-8 pb-10 pt-4 md:px-10 border-t border-white/5 grid lg:grid-cols-2 gap-12 mt-4">
                          <div>
                            <span className="text-brand-green font-mono text-xs tracking-[0.2em] uppercase block mb-4">// Solution Overview</span>
                            <p className="text-gray-300 leading-relaxed text-lg mb-8 font-light">
                              {service.longDescription}
                            </p>
                            
                            <div className="flex flex-col gap-4">
                              <Link href="/consultation">
                                <Button className="w-full bg-brand-green hover:bg-green-600 text-white rounded-xl h-14 font-black uppercase tracking-widest text-sm transition-transform hover:-translate-y-1">
                                  Request Consultation <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                          
                          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8">
                            <h4 className="text-xl font-black uppercase tracking-tight text-white mb-6">Key Capabilities</h4>
                            <ul className="space-y-4 mb-8">
                              {service.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                                  <span className="text-gray-300 font-medium text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            
                            <h4 className="text-xl font-black uppercase tracking-tight text-white mb-6">Enterprise Benefits</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.benefits.map((benefit, bIdx) => (
                                <span key={bIdx} className="bg-brand-green/10 text-brand-green border border-brand-green/20 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest">
                                  {benefit}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Execution Framework */}
      <section className="py-32 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
             <span className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase block mb-4">// Execution Methodology</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">The Gotecx <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">Framework</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              We employ a rigorous, data-driven engineering process tailored for enterprise-scale deployments.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Discovery", desc: "Requirements analysis & technical feasibility." },
              { step: "02", title: "Architecture", desc: "Designing secure, scalable schemas & topologies." },
              { step: "03", title: "Engineering", desc: "Iterative development with automated QA." },
              { step: "04", title: "Deployment", desc: "Zero-downtime launch & continuous monitoring." }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:bg-brand-green transition-colors">
                <div className="text-5xl font-black text-white/5 absolute -top-4 -right-4 group-hover:text-white/20 transition-colors">{item.step}</div>
                <h3 className="text-2xl font-black mb-3 mt-4 text-white uppercase tracking-tight">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/80 transition-colors font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
