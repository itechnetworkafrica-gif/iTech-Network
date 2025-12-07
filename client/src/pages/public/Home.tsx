import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Code, Shield, Cloud, Zap } from "lucide-react";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <PublicNavbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background with Orange Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange via-orange-500 to-orange-600 -z-20"></div>
        
        {/* Abstract Shapes/Overlay */}
        <div className="absolute inset-0 opacity-20 -z-10">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-teal rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/4"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight drop-shadow-sm">
              Innovating Africa's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-100">Digital Future</span>
            </h1>
            <p className="text-lg md:text-xl text-orange-50 mb-8 max-w-2xl leading-relaxed">
              We provide cutting-edge technology solutions, comprehensive digital training, and enterprise-grade tools to empower businesses and individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/services">
                <Button size="lg" className="bg-brand-teal text-white hover:bg-teal-700 h-14 px-8 text-lg rounded-full shadow-xl transition-transform hover:scale-105">
                  Explore Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-white text-brand-teal border-2 border-brand-teal hover:bg-gray-50 h-14 px-8 text-lg rounded-full shadow-lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Abstract Element */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full pointer-events-none">
          {/* This would ideally be a 3D element or illustration */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-teal text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Clients Served", value: "500+" },
              { label: "Projects Delivered", value: "1.2k" },
              { label: "Team Members", value: "50+" },
              { label: "Countries", value: "12" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white">{stat.value}</div>
                <div className="text-teal-100 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-teal mb-4">Our Core Services</h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to drive growth and efficiency for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Code, 
                title: "Custom Software Dev", 
                desc: "Tailor-made software solutions designed to meet your specific business requirements." 
              },
              { 
                icon: Cloud, 
                title: "Cloud Infrastructure", 
                desc: "Scalable and secure cloud solutions to modernize your IT operations." 
              },
              { 
                icon: Shield, 
                title: "Cybersecurity", 
                desc: "Robust security measures to protect your digital assets and sensitive data." 
              },
              { 
                icon: Zap, 
                title: "Digital Transformation", 
                desc: "Strategic guidance to digitize your workflows and improve operational efficiency." 
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors">
                  <service.icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <Link href="/services">
                  <a className="text-brand-teal font-semibold flex items-center hover:text-brand-orange transition-colors">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-brand-orange relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-orange-50 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have elevated their operations with iTech Network Africa.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-brand-orange hover:bg-gray-100 font-bold px-10 h-14 rounded-full text-lg shadow-xl">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
