import { Button } from "@/components/ui/button";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Code, Server, Database, Smartphone, ShieldCheck, PenTool, ChevronDown, ChevronUp, Search, Users, Zap, CheckCircle2, ArrowRight, Cog, Cpu, Building2, MonitorSmartphone } from "lucide-react";
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
  const services = [
    {
      id: "enterprise-software",
      icon: Code,
      title: "Enterprise Software Engineering",
      description: "Custom, scalable software solutions architected for large organizations to automate complex workflows and drive efficiency.",
      longDescription: "We engineer high-performance, enterprise-grade software applications tailored to your operational needs. Utilizing robust frameworks and microservices architectures, we ensure your digital infrastructure is resilient, secure, and capable of scaling infinitely as your enterprise grows.",
      features: ["Microservices Architecture", "Custom ERP & CRM", "Legacy System Modernization", "API Development & Integration", "High-Availability Systems", "Automated Testing & CI/CD"],
      image: "/images/hero_services.jpg",
      benefits: ["Streamlined Operations", "Unrestricted Scalability", "Reduced Technical Debt"],
      industries: ["Finance", "Healthcare", "Government", "Logistics"]
    },
    {
      id: "ai-solutions",
      icon: Cpu,
      title: "Gotecx AI Solutions",
      description: "Intelligent machine learning models and AI integrations to automate decision making and enhance customer experiences.",
      longDescription: "Leverage the power of Artificial Intelligence to transform your business. The Gotecx AI division builds predictive models, natural language processing tools, and intelligent automation systems that learn from your data to drive smarter, faster business decisions.",
      features: ["Predictive Analytics", "NLP & Chatbots", "Process Automation", "Computer Vision", "Data Mining", "AI API Integrations"],
      image: "/images/feature_2.jpg",
      benefits: ["Data-Driven Decisions", "Reduced Operational Costs", "24/7 Intelligent Automation"],
      industries: ["Retail", "Customer Service", "Manufacturing", "Finance"]
    },
    {
      id: "cloud",
      icon: Server,
      title: "Cloud Architecture & DevOps",
      description: "Secure, auto-scaling cloud infrastructure design, migration, and management on AWS, Azure, or Google Cloud.",
      longDescription: "Modernize your IT infrastructure with our comprehensive enterprise cloud solutions. We help large organizations migrate, manage, and optimize complex workloads on leading cloud platforms, ensuring maximum uptime, impenetrable security, and rigorous cost management.",
      features: ["Cloud Migration Strategy", "Infrastructure as Code (IaC)", "Serverless Architecture", "Kubernetes & Docker", "Disaster Recovery", "24/7 Performance Monitoring"],
      image: "/images/service_cloud.jpg",
      benefits: ["99.99% Uptime", "Dynamic Auto-Scaling", "Optimized IT Spend"],
      industries: ["Enterprise", "SaaS", "E-commerce", "Media"]
    },
    {
      id: "pos-automation",
      icon: MonitorSmartphone,
      title: "Gotecx POS & Automation",
      description: "Smart retail, inventory, and business management systems designed to handle multi-location operations.",
      longDescription: "Gotecx POS is our flagship business management ecosystem. More than just a point of sale, it's a complete business automation suite handling multi-branch inventory, real-time sales analytics, customer relationships, and staff management from a single cloud dashboard.",
      features: ["Multi-Store Management", "Real-time Inventory Sync", "Advanced Sales Analytics", "Offline Mode Capability", "Staff Access Controls", "Integrated Payments"],
      image: "/images/service_mobile.jpg",
      benefits: ["Complete Operational Visibility", "Inventory Shrinkage Reduction", "Enhanced Checkout Speed"],
      industries: ["Retail", "Hospitality", "Supermarkets", "Franchises"]
    },
    {
      id: "cybersecurity",
      icon: ShieldCheck,
      title: "Enterprise Cybersecurity",
      description: "Military-grade security assessments, threat protection, and compliance implementation for critical systems.",
      longDescription: "In an era of sophisticated digital threats, protecting your enterprise data is paramount. We provide rigorous cybersecurity solutions, from deep penetration testing and vulnerability assessments to implementing zero-trust architectures and ensuring global regulatory compliance.",
      features: ["Zero-Trust Architecture", "Penetration Testing", "Compliance (GDPR/ISO)", "Threat Intelligence", "Incident Response Protocols", "Security Auditing"],
      image: "/images/service_security.jpg",
      benefits: ["Mitigated Financial Risk", "Regulatory Compliance Assured", "Protected Brand Reputation"],
      industries: ["Banking", "Government", "Healthcare", "Legal"]
    },
    {
      id: "digital-transformation",
      icon: Cog,
      title: "Digital Transformation Consulting",
      description: "Strategic technology advisory to guide legacy businesses into modern, digital-first operational models.",
      longDescription: "Navigate the complex transition to digital with our expert enterprise consultants. We partner with executive teams to align technology investments with business goals, redesigning outdated processes, selecting appropriate tech stacks, and managing organizational change.",
      features: ["Tech Stack Auditing", "Workflow Digitalization", "Change Management", "Vendor Selection", "IT Strategy Roadmapping", "Digital Maturity Assessment"],
      image: "/images/service_consulting.jpg",
      benefits: ["Future-Proofed Business Model", "Increased Market Agility", "Optimized Resource Allocation"],
      industries: ["Manufacturing", "Traditional Retail", "Education", "Real Estate"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white overflow-hidden">
      <PublicNavbar />
      
      {/* Dynamic Header */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-xs font-bold text-gray-300 mb-8 backdrop-blur-md uppercase tracking-widest"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-green mr-3"></span>
            Global Enterprise Solutions
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter uppercase leading-none"
          >
            Architecting <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">The Future</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            Gotecx delivers end-to-end, highly scalable technology solutions designed to help large organizations innovate, secure their infrastructure, and dominate in the digital economy.
          </motion.p>
        </div>
      </section>

      {/* Advanced Services Grid */}
      <section className="py-24 bg-white text-gray-900 relative rounded-t-[3rem] -mt-10 z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={service.id} 
                className="bg-gray-50 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative border border-gray-100 flex flex-col overflow-hidden"
              >
                {/* Content */}
                <div className="p-8 md:p-10 flex-grow flex flex-col bg-white">
                  <div className="w-16 h-16 bg-gray-950 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-green transition-colors duration-500 shadow-xl">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight">{service.title}</h3>
                  <p className="text-gray-500 mb-8 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs font-bold text-gray-700 bg-gray-50 rounded-xl p-3 group-hover:bg-brand-green/5 transition-colors border border-gray-100">
                        <CheckCircle2 className="w-4 h-4 text-brand-green mr-3 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gray-950 text-white hover:bg-brand-green transition-colors rounded-2xl h-14 font-bold text-sm uppercase tracking-wider group/btn">
                        Explore Solution <ArrowRight className="w-4 h-4 ml-3 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl rounded-[2rem] p-0 overflow-hidden border-0 bg-white shadow-2xl">
                      <div className="grid md:grid-cols-2 h-full">
                        <div className="relative hidden md:block bg-gray-950 p-12 text-white flex flex-col justify-center">
                           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-green/20 to-transparent"></div>
                           <div className="relative z-10">
                             <service.icon className="w-16 h-16 text-brand-green mb-8" />
                             <h2 className="text-4xl font-black text-white leading-tight mb-6 uppercase tracking-tight">{service.title}</h2>
                             <div className="flex flex-wrap gap-2">
                               {service.industries.map((ind, idx) => (
                                 <span key={idx} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold tracking-wider uppercase text-gray-300">
                                   {ind}
                                 </span>
                               ))}
                             </div>
                           </div>
                        </div>
                        <div className="p-8 md:p-12 bg-white flex flex-col justify-center">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-black md:hidden mb-4 uppercase">{service.title}</DialogTitle>
                            <DialogDescription className="text-base text-gray-600 leading-relaxed pt-2">
                              {service.longDescription}
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="mt-8 space-y-8">
                            <div>
                              <h4 className="font-black text-gray-900 mb-4 uppercase tracking-widest text-xs">Enterprise Capabilities</h4>
                              <div className="grid grid-cols-1 gap-3">
                                {service.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center text-sm font-bold text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
                                    <CheckCircle2 className="w-5 h-5 text-brand-green mr-3 shrink-0" />
                                    {feature}
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-black text-gray-900 mb-4 uppercase tracking-widest text-xs">Business Impact</h4>
                              <ul className="space-y-3">
                                {service.benefits.map((benefit, idx) => (
                                  <li key={idx} className="flex items-center text-sm font-bold text-brand-green bg-brand-green/5 p-3 rounded-xl border border-brand-green/10">
                                    <Zap className="w-5 h-5 mr-3 shrink-0" />
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="mt-10">
                            <Link href="/contact">
                              <Button className="w-full bg-brand-green text-white hover:bg-green-600 rounded-2xl h-14 font-black uppercase tracking-widest text-sm shadow-xl shadow-brand-green/20">
                                Request Enterprise Proposal
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-32 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
             <span className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase block mb-4">// Execution Methodology</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">The Gotecx <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">Framework</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We employ a rigorous, data-driven engineering process tailored for enterprise-scale deployments. We ensure security, compliance, and flawless execution from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategic Discovery", desc: "Deep requirements analysis, technical feasibility, and alignment with corporate goals." },
              { step: "02", title: "System Architecture", desc: "Designing secure, scalable microservices, database schemas, and cloud topologies." },
              { step: "03", title: "Agile Engineering", desc: "Iterative development cycles with continuous integration, strict code reviews, and automated QA." },
              { step: "04", title: "Scale & Optimize", desc: "Zero-downtime deployment, security auditing, and continuous performance monitoring." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-brand-green/50 transition-colors">
                <div className="text-6xl font-black text-white/5 absolute -top-2 -right-2 group-hover:text-brand-green/10 transition-colors">{item.step}</div>
                <h3 className="text-2xl font-bold mb-4 mt-6 text-white group-hover:text-brand-green transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
