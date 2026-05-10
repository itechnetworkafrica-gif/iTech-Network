import { Button } from "@/components/ui/button";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Code, Server, Database, Smartphone, ShieldCheck, PenTool, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks (React, Next.js) for high performance and scalability.",
      features: ["Custom UI/UX Design", "Responsive Layouts", "SEO Optimization", "CMS Integration", "E-commerce Solutions", "Progressive Web Apps (PWAs)"],
      image: "/images/hero_services.jpg"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.",
      features: ["iOS & Android", "React Native / Flutter", "App Store Submission", "Maintenance & Support", "User Authentication", "Push Notifications"],
      image: "/images/service_mobile.jpg"
    },
    {
      icon: Server,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure setup, migration, and management on AWS, Azure, or Google Cloud.",
      features: ["Cloud Migration", "DevOps Automation", "Serverless Architecture", "Cost Optimization", "Disaster Recovery", "24/7 Monitoring"],
      image: "/images/service_cloud.jpg"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your raw data into actionable insights with our comprehensive data analytics and visualization services.",
      features: ["Business Intelligence", "Data Visualization", "Predictive Analytics", "Big Data Solutions", "Data Warehousing", "ETL Processes"],
      image: "/images/feature_2.jpg"
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity",
      description: "Protect your business from digital threats with our advanced security assessments and implementation services.",
      features: ["Security Audits", "Penetration Testing", "Compliance (GDPR/Data Prot)", "Security Training", "Incident Response", "Network Security"],
      image: "/images/service_security.jpg"
    },
    {
      icon: Search,
      title: "Digital Marketing",
      description: "Increase visibility, attract more customers, and grow your online presence with powerful marketing strategies.",
      features: ["Social Media Management", "Content Creation", "Paid Ads Setup (FB/IG)", "Video Ads Creation", "Brand Awareness Strategy", "Performance Reports"],
      image: "/images/feature_2.jpg"
    },
    {
      icon: PenTool,
      title: "Graphic Design",
      description: "Create strong, attractive, and consistent visual branding for businesses, NGOs, and individuals.",
      features: ["Logo & Brand Identity", "Business Flyers & Posters", "Social Media Designs", "Product Packaging", "Brochures & Catalogs", "Consistent Brand Kit"],
      image: "/images/feature_1.jpg"
    },
    {
      icon: Users,
      title: "IT Consultancy",
      description: "Make the right technology decisions, improve systems, and build efficient digital infrastructure.",
      features: ["System Assessment", "Digital Transformation", "Network Setup", "Cybersecurity Awareness", "Data Management", "Tech Project Planning"],
      image: "/images/service_consulting.jpg"
    },
    {
      icon: Zap,
      title: "Corporate Training",
      description: "Upskill your workforce with hands-on, practical technology training programs led by industry experts.",
      features: ["Software Development", "Cloud Architecture", "Agile Methodologies", "Cybersecurity Awareness", "Data Science Basics", "Custom Workshops"],
      image: "/images/hero_about.jpg"
    },
    {
      icon: Database,
      title: "Artificial Intelligence",
      description: "Leverage AI and Machine Learning to automate processes, gain insights, and create smarter applications.",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Maintenance", "Chatbots & Assistants", "AI Strategy Consulting"],
      image: "/images/service_ai.jpg"
    },
    {
      icon: ShieldCheck,
      title: "Blockchain Solutions",
      description: "Secure, transparent, and decentralized blockchain applications for modern enterprise operations.",
      features: ["Smart Contracts", "DeFi Applications", "Supply Chain Tracking", "Identity Verification", "Custom Tokenization", "Web3 Integration"],
      image: "/images/service_blockchain.jpg"
    },
    {
      icon: Smartphone,
      title: "Internet of Things (IoT)",
      description: "Connect and manage your physical devices to gather real-time data and optimize operations.",
      features: ["Device Integration", "Real-time Monitoring", "Edge Computing", "IoT Security", "Smart City Solutions", "Industrial IoT"],
      image: "/images/service_iot.jpg"
    },
    {
      icon: Server,
      title: "Enterprise Systems (ERP)",
      description: "Comprehensive resource planning solutions to unify your business processes and data.",
      features: ["Custom ERP Development", "System Integration", "Workflow Automation", "Legacy Modernization", "CRM Systems", "HR Management"],
      image: "/images/service_erp.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <PublicNavbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 bg-brand-green text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero_services.jpg" alt="Background" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            We deliver end-to-end technology solutions to help your business innovate, scale, and succeed in the digital age.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden flex flex-col border border-gray-100 animate-in fade-in slide-in-from-bottom-12" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="h-56 w-full relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 flex items-center gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center shadow-lg shrink-0 group-hover:rotate-12 transition-transform duration-500">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight group-hover:text-green-300 transition-colors">{service.title}</h3>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col bg-white">
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-700 font-medium bg-gray-50 rounded-lg p-2 group-hover:bg-green-50/50 transition-colors">
                        <div className="w-1.5 h-1.5 bg-brand-green rounded-full mr-3 shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-transparent text-brand-green hover:bg-brand-green hover:text-white border-2 border-brand-green/20 hover:border-brand-green font-bold transition-all rounded-xl h-12 shadow-none hover:shadow-lg hover:shadow-brand-green/20" asChild>
                    <Link href="/contact">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase italic tracking-tighter">How We Work</h2>
            <div className="w-24 h-1.5 bg-brand-green mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Our agile development process ensures transparency, quality, and timely delivery of your projects.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-green/50 to-transparent z-0"></div>

            {[
              { step: "01", title: "Discovery", desc: "We analyze your requirements and business goals." },
              { step: "02", title: "Design", desc: "We create wireframes and visual designs for approval." },
              { step: "03", title: "Development", desc: "We build your solution using the latest technologies." },
              { step: "04", title: "Delivery", desc: "We launch your project and provide ongoing support." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center group">
                <div className="w-24 h-24 bg-gray-900 rounded-2xl border border-white/10 group-hover:border-brand-green/50 flex items-center justify-center mx-auto mb-8 text-3xl font-black text-brand-green shadow-xl group-hover:-translate-y-2 transition-all duration-500 rotate-45 group-hover:rotate-0">
                  <span className="-rotate-45 group-hover:rotate-0 transition-transform duration-500">{item.step}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-green transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed px-4 group-hover:text-gray-300 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="w-24 h-1.5 bg-brand-green mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg">Find answers to common questions about our services and process.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-gray-50 border border-gray-100 rounded-xl px-6 data-[state=open]:bg-white data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-brand-green hover:no-underline">How long does a typical project take?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2 pb-6">
                Project timelines vary significantly based on complexity and scope. A standard corporate website might take 4-6 weeks, while a custom enterprise web application could take 3-6 months. We provide detailed timeline estimates during the Discovery phase before any commitment.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-gray-50 border border-gray-100 rounded-xl px-6 data-[state=open]:bg-white data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-brand-green hover:no-underline">Do you provide ongoing maintenance and support?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2 pb-6">
                Yes, we offer comprehensive post-launch support and maintenance packages. This includes security updates, performance monitoring, bug fixes, and feature enhancements to ensure your digital assets continue to operate flawlessly over time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-gray-50 border border-gray-100 rounded-xl px-6 data-[state=open]:bg-white data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-brand-green hover:no-underline">What is your pricing model?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2 pb-6">
                We offer flexible pricing models to suit different needs. For well-defined projects, we use a fixed-price model based on the agreed scope. For ongoing development or projects with evolving requirements, we offer time-and-materials or dedicated team retainer options.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-gray-50 border border-gray-100 rounded-xl px-6 data-[state=open]:bg-white data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-brand-green hover:no-underline">Can you integrate with our existing systems?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2 pb-6">
                Absolutely. Our engineering team has extensive experience building custom APIs and middleware to integrate new solutions with legacy systems, third-party services, and existing enterprise software architectures like SAP, Oracle, or Salesforce.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Tech Stack CTA - NEW BLOCK */}
      <section className="py-24 bg-brand-green relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="bg-gray-950 rounded-[3rem] p-12 md:p-20 text-center space-y-8 shadow-2xl">
            <p className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase">// Ready to Scale?</p>
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.9]">
              Let's Engineer Your <br />Digital Future
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Whether you need a custom enterprise solution or a rapid MVP, our team is ready to deliver excellence.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 pt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-brand-green text-white rounded-full px-12 h-16 font-black uppercase italic tracking-widest text-sm hover:scale-105 transition-transform w-full md:w-auto">
                  Start Project
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-12 h-16 font-black uppercase italic tracking-widest text-sm w-full md:w-auto">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
