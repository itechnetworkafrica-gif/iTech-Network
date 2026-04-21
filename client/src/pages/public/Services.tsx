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
      features: ["Custom UI/UX Design", "Responsive Layouts", "SEO Optimization", "CMS Integration", "E-commerce Solutions", "Progressive Web Apps (PWAs)"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.",
      features: ["iOS & Android", "React Native / Flutter", "App Store Submission", "Maintenance & Support", "User Authentication", "Push Notifications"]
    },
    {
      icon: Server,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure setup, migration, and management on AWS, Azure, or Google Cloud.",
      features: ["Cloud Migration", "DevOps Automation", "Serverless Architecture", "Cost Optimization", "Disaster Recovery", "24/7 Monitoring"]
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your raw data into actionable insights with our comprehensive data analytics and visualization services.",
      features: ["Business Intelligence", "Data Visualization", "Predictive Analytics", "Big Data Solutions", "Data Warehousing", "ETL Processes"]
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity",
      description: "Protect your business from digital threats with our advanced security assessments and implementation services.",
      features: ["Security Audits", "Penetration Testing", "Compliance (GDPR/Data Prot)", "Security Training", "Incident Response", "Network Security"]
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      description: "User-centric design services that create intuitive, engaging, and beautiful digital products.",
      features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing", "Design Systems", "Accessibility Audits"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <PublicNavbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 bg-brand-teal text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/flyer_4.jpg" alt="Background" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            We deliver end-to-end technology solutions to help your business innovate, scale, and succeed in the digital age.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-brand-orange hover:-translate-y-2 group relative overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
                
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors relative z-10 shadow-inner">
                  <service.icon className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed relative z-10 min-h-[80px]">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8 relative z-10">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-brand-teal rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link href="/contact">
                  <Button className="w-full bg-gray-50 text-brand-teal hover:bg-brand-teal hover:text-white border border-brand-teal/20 font-semibold transition-all relative z-10">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How We Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our agile development process ensures transparency, quality, and timely delivery of your projects.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-800 z-0"></div>

            {[
              { step: "01", title: "Discovery", desc: "We analyze your requirements and business goals." },
              { step: "02", title: "Design", desc: "We create wireframes and visual designs for approval." },
              { step: "03", title: "Development", desc: "We build your solution using the latest technologies." },
              { step: "04", title: "Delivery", desc: "We launch your project and provide ongoing support." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-24 h-24 bg-gray-800 rounded-full border-4 border-gray-900 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-brand-orange shadow-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        {/* ... existing code ... */}
      </section>

      {/* Tech Stack CTA - NEW BLOCK */}
      <section className="py-24 bg-brand-orange relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="bg-gray-950 rounded-[3rem] p-12 md:p-20 text-center space-y-8 shadow-2xl">
            <p className="text-brand-orange font-mono text-sm tracking-[0.3em] uppercase">// Ready to Scale?</p>
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.9]">
              Let's Engineer Your <br />Digital Future
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Whether you need a custom enterprise solution or a rapid MVP, our team is ready to deliver excellence.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 pt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-brand-orange text-white rounded-full px-12 h-16 font-black uppercase italic tracking-widest text-sm hover:scale-105 transition-transform w-full md:w-auto">
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
