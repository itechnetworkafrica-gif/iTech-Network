import { Button } from "@/components/ui/button";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Code, Server, Database, Smartphone, ShieldCheck, PenTool, ChevronDown, ChevronUp, Search, Users, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
      id: "web-dev",
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks for high performance and scalability.",
      longDescription: "We engineer high-performance web applications tailored to your business needs. Utilizing the latest frameworks like React and Next.js, we ensure your digital presence is not only visually stunning but also technically robust, SEO optimized, and built to scale effortlessly as your business grows.",
      features: ["Custom UI/UX Design", "Responsive Layouts", "SEO Optimization", "CMS Integration", "E-commerce Solutions", "Progressive Web Apps (PWAs)"],
      image: "/images/hero_services.jpg",
      benefits: ["Increased Conversion Rates", "Lightning Fast Load Times", "Seamless Multi-device Experience"]
    },
    {
      id: "mobile-dev",
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.",
      longDescription: "Reach your audience wherever they are with our custom mobile applications. We specialize in both native and cross-platform development (React Native, Flutter), delivering intuitive, high-performance apps that keep users engaged and drive loyalty.",
      features: ["iOS & Android", "React Native / Flutter", "App Store Submission", "Maintenance & Support", "User Authentication", "Push Notifications"],
      image: "/images/service_mobile.jpg",
      benefits: ["Direct Customer Engagement", "Offline Capabilities", "Enhanced Brand Visibility"]
    },
    {
      id: "cloud",
      icon: Server,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure setup, migration, and management on AWS, Azure, or Google Cloud.",
      longDescription: "Modernize your IT infrastructure with our comprehensive cloud solutions. We help you migrate, manage, and optimize your workloads on leading cloud platforms, ensuring maximum uptime, impenetrable security, and significant cost savings.",
      features: ["Cloud Migration", "DevOps Automation", "Serverless Architecture", "Cost Optimization", "Disaster Recovery", "24/7 Monitoring"],
      image: "/images/service_cloud.jpg",
      benefits: ["Infinite Scalability", "Reduced Operational Costs", "Automated Workflows"]
    },
    {
      id: "data",
      icon: Database,
      title: "Data Analytics",
      description: "Transform your raw data into actionable insights with our comprehensive data analytics and visualization services.",
      longDescription: "Unlock the true potential of your data. We build sophisticated analytics pipelines and intuitive dashboards that translate complex datasets into clear, actionable business intelligence, empowering you to make data-driven decisions with confidence.",
      features: ["Business Intelligence", "Data Visualization", "Predictive Analytics", "Big Data Solutions", "Data Warehousing", "ETL Processes"],
      image: "/images/feature_2.jpg",
      benefits: ["Data-Driven Decisions", "Identify Market Trends", "Operational Efficiency"]
    },
    {
      id: "security",
      icon: ShieldCheck,
      title: "Cybersecurity",
      description: "Protect your business from digital threats with our advanced security assessments and implementation services.",
      longDescription: "In an increasingly connected world, protecting your digital assets is paramount. We provide enterprise-grade cybersecurity solutions, from rigorous penetration testing to implementing robust security protocols, ensuring your business and customer data remain impenetrable.",
      features: ["Security Audits", "Penetration Testing", "Compliance (GDPR/Data Prot)", "Security Training", "Incident Response", "Network Security"],
      image: "/images/service_security.jpg",
      benefits: ["Risk Mitigation", "Regulatory Compliance", "Customer Trust"]
    },
    {
      id: "marketing",
      icon: Search,
      title: "Digital Marketing",
      description: "Increase visibility, attract more customers, and grow your online presence with powerful marketing strategies.",
      longDescription: "Dominate your market with our data-driven digital marketing strategies. We combine creative content with precision targeting across social media, search engines, and email to maximize your ROI and turn audiences into loyal customers.",
      features: ["Social Media Management", "Content Creation", "Paid Ads Setup (FB/IG)", "Video Ads Creation", "Brand Awareness Strategy", "Performance Reports"],
      image: "/images/feature_2.jpg",
      benefits: ["High ROI Campaigns", "Targeted Audience Reach", "Brand Authority"]
    },
    {
      id: "design",
      icon: PenTool,
      title: "Graphic Design",
      description: "Create strong, attractive, and consistent visual branding for businesses, NGOs, and individuals.",
      longDescription: "Your brand is your visual voice. Our creative team designs compelling, modern identities that resonate with your target audience. From memorable logos to complete corporate branding kits, we ensure your brand stands out in a crowded marketplace.",
      features: ["Logo & Brand Identity", "Business Flyers & Posters", "Social Media Designs", "Product Packaging", "Brochures & Catalogs", "Consistent Brand Kit"],
      image: "/images/feature_1.jpg",
      benefits: ["Professional Image", "Brand Recognition", "Cohesive Identity"]
    },
    {
      id: "consulting",
      icon: Users,
      title: "IT Consultancy",
      description: "Make the right technology decisions, improve systems, and build efficient digital infrastructure.",
      longDescription: "Navigate the complex tech landscape with our expert consultants. We partner with you to align your technology strategy with your business goals, optimizing processes, selecting the right tools, and driving successful digital transformation.",
      features: ["System Assessment", "Digital Transformation", "Network Setup", "Cybersecurity Awareness", "Data Management", "Tech Project Planning"],
      image: "/images/service_consulting.jpg",
      benefits: ["Strategic Alignment", "Technology Optimization", "Future-proof Planning"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white overflow-hidden">
      <PublicNavbar />
      
      {/* Dynamic Header */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gray-950 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
          <motion.div 
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 via-transparent to-emerald-500/20"
          ></motion.div>
        </div>
        
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 z-0"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-300 mb-8 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-green mr-2"></span>
            Enterprise Solutions
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
          >
            Our <span className="text-brand-green">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            We deliver end-to-end technology solutions to help your business innovate, scale, and succeed in the digital age.
          </motion.p>
        </div>
      </section>

      {/* Advanced Services Grid */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={service.id} 
                className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 group relative border border-gray-100 flex flex-col overflow-hidden"
              >
                {/* Image Header */}
                <div className="h-48 w-full relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-green/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">{service.title}</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8 flex-grow flex flex-col bg-white">
                  <p className="text-gray-500 mb-6 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-700 font-medium bg-gray-50 rounded-xl p-2.5 group-hover:bg-brand-green/5 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-brand-green mr-3 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Dialog for "Learn More" */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gray-950 text-white hover:bg-brand-green transition-colors rounded-xl h-12 font-bold group/btn">
                        Explore Service <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl rounded-[2rem] p-0 overflow-hidden border-0 bg-white">
                      <div className="grid md:grid-cols-5 h-full">
                        <div className="md:col-span-2 relative hidden md:block">
                          <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-brand-green/60 mix-blend-multiply"></div>
                          <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <service.icon className="w-12 h-12 text-white mb-4" />
                            <h2 className="text-3xl font-black text-white leading-tight">{service.title}</h2>
                          </div>
                        </div>
                        <div className="md:col-span-3 p-8 md:p-10">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold md:hidden mb-2">{service.title}</DialogTitle>
                            <DialogDescription className="text-base text-gray-600 leading-relaxed pt-2">
                              {service.longDescription}
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="mt-8 space-y-6">
                            <div>
                              <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-xs">Core Features</h4>
                              <div className="grid grid-cols-2 gap-3">
                                {service.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center text-sm text-gray-700">
                                    <CheckCircle2 className="w-4 h-4 text-brand-green mr-2 shrink-0" />
                                    {feature}
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="bg-brand-green/5 rounded-2xl p-6 border border-brand-green/10">
                              <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-xs">Business Benefits</h4>
                              <ul className="space-y-2">
                                {service.benefits.map((benefit, idx) => (
                                  <li key={idx} className="flex items-center text-sm font-medium text-brand-green">
                                    <Zap className="w-4 h-4 mr-2" />
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="mt-8 pt-6 border-t border-gray-100">
                            <Link href="/contact">
                              <Button className="w-full bg-brand-green text-white hover:bg-green-600 rounded-full h-12 font-bold shadow-lg shadow-brand-green/20">
                                Request a Proposal
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

      {/* Advanced Process Section */}
      <section className="py-32 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
             <span className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase block mb-4">// Execution Strategy</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">Deliver</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Our agile development process ensures transparency, quality, and timely delivery of your enterprise projects.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 lg:gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-white/10 z-0">
               <motion.div 
                 initial={{ width: "0%" }}
                 whileInView={{ width: "100%" }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, delay: 0.5 }}
                 className="h-full bg-brand-green shadow-[0_0_10px_rgba(55,182,38,0.8)]"
               ></motion.div>
            </div>

            {[
              { step: "01", title: "Discovery", desc: "Deep requirements analysis and strategic alignment." },
              { step: "02", title: "Architecture", desc: "System design, wireframing, and tech stack selection." },
              { step: "03", title: "Engineering", desc: "Agile sprints, code reviews, and continuous integration." },
              { step: "04", title: "Deployment", desc: "Rigorous testing, secure rollout, and scale." }
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                key={i} 
                className="relative z-10 text-center group"
              >
                <div className="w-36 h-36 mx-auto relative mb-8">
                  {/* Hexagon Shape */}
                  <div className="absolute inset-0 bg-gray-900 border border-white/20 group-hover:border-brand-green/50 transition-colors duration-500 flex items-center justify-center transform group-hover:scale-105" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                    <span className="text-4xl font-black text-brand-green font-mono">{item.step}</span>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-brand-green/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-green transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed px-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="py-24 bg-brand-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
           <motion.div
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl max-w-5xl mx-auto"
           >
             <h2 className="text-4xl md:text-6xl font-black text-gray-950 mb-6 tracking-tight">Ready to build something <span className="text-brand-green italic">extraordinary?</span></h2>
             <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">Let's discuss how our technology solutions can drive your business forward.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link href="/contact">
                 <Button size="lg" className="bg-gray-950 text-white hover:bg-gray-800 rounded-full h-16 px-10 text-lg font-bold shadow-xl w-full sm:w-auto transition-transform hover:scale-105">
                   Schedule a Consultation
                 </Button>
               </Link>
             </div>
           </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
