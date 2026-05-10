import { Button } from "@/components/ui/button";
import { Check, Star, Plus } from "lucide-react";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export default function Pricing() {
  const plans = [
    {
      name: "NGO Digital Package",
      price: "Flexible",
      description: "Complete digital transformation for NGOs to improve visibility and impact.",
      features: [
        "Professional NGO Website",
        "Official Email Setup",
        "NGO Branding & Identity",
        "Social Media Management",
        "Online Donation Forms",
        "Project & Event Flyers",
        "Digital Data Systems",
        "Basic ICT Training"
      ],
      addons: [
        "Mobile App Development",
        "Cloud Management Systems",
        "POS & Financial Tracking",
        "AI Reporting Tools"
      ],
      cta: "Get Started",
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Business Digital Package",
      price: "Flexible",
      description: "Solutions designed to help businesses grow, operate efficiently, and increase sales.",
      features: [
        "Professional Business Website",
        "Business Email & Branding",
        "E-commerce / Online Store",
        "Digital POS System",
        "Customer Management System",
        "Marketing & Flyer Designs",
        "Social Media Setup",
        "Basic ICT Training"
      ],
      addons: [
        "Business Mobile App",
        "Advanced POS Reporting",
        "Cloud Management System",
        "Online Payment Integration"
      ],
      cta: "Get Started",
      popular: true,
      color: "border-brand-green"
    },
    {
      name: "High School Digital Package",
      price: "Flexible",
      description: "Improve administration, learning systems, communication, and overall school management.",
      features: [
        "School Website Development",
        "Student Registration System",
        "Online Result Management",
        "School Portal (Student/Staff/Parent)",
        "Digital Attendance System",
        "Exam & Grade Management",
        "School Branding & Social Media",
        "ICT Training for Teachers"
      ],
      addons: [
        "School Communication App",
        "E-learning Platform",
        "SMS Notification System",
        "Advanced Database System"
      ],
      cta: "Get Started",
      popular: false,
      color: "border-emerald-500"
    },
    {
      name: "University Digital Package",
      price: "Flexible",
      description: "Advanced solutions for academic management, student services, and institutional efficiency.",
      features: [
        "University Website Development",
        "Admission & Application System",
        "Student & Staff Portals",
        "Course Registration & LMS",
        "Digital Exam & Result System",
        "Admin Data Dashboard",
        "Notices & Events Management",
        "ICT Training for Staff"
      ],
      addons: [
        "Campus Mobile App",
        "Tuition Payment Integration",
        "SMS/Email Notification System",
        "Virtual Classroom Setup"
      ],
      cta: "Get Started",
      popular: false,
      color: "border-gray-900"
    },
    {
      name: "Digital Marketing",
      price: "Flexible",
      description: "Increase visibility, attract more customers, and grow your online presence.",
      features: [
        "Social Media Management",
        "Content Creation & Branding",
        "Paid Ads Setup (FB/IG)",
        "Business Promotion Campaigns",
        "Graphic Design for Marketing",
        "Video Ads Creation",
        "Page Optimization",
        "Performance Reports"
      ],
      addons: [
        "Influencer Marketing",
        "Traffic Boosting Campaigns",
        "Full Rebranding Package",
        "Email Marketing Setup"
      ],
      cta: "Get Started",
      popular: false,
      color: "border-brand-green"
    },
    {
      name: "Graphic Design",
      price: "Flexible",
      description: "Create strong, attractive, and consistent visual branding for your business.",
      features: [
        "Logo & Brand Identity",
        "Flyers, Posters & Banners",
        "Social Media Designs",
        "Business Cards & Letterheads",
        "Event & Program Designs",
        "Product Packaging Design",
        "Billboard & Large Formats",
        "Brand Kit (Colors/Fonts)"
      ],
      addons: [
        "Full Brand Identity",
        "Monthly Social Media Designs",
        "Video Motion Graphics",
        "Rebranding Services"
      ],
      cta: "Get Started",
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "IT Consultancy",
      price: "Flexible",
      description: "Make the right technology decisions and build efficient digital infrastructure.",
      features: [
        "ICT System Assessment",
        "Digital Transformation Plan",
        "Software/Hardware Advisory",
        "Network & Infrastructure Setup",
        "Cybersecurity Strategies",
        "Data Management Solutions",
        "IT Support Strategy",
        "Project Planning"
      ],
      addons: [
        "Full System Implementation",
        "Staff ICT Training",
        "Monthly IT Advisory",
        "Custom Software Guidance"
      ],
      cta: "Get Started",
      popular: false,
      color: "border-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <PublicNavbar />
      
      {/* Header */}
      <div className="bg-gray-950 pt-32 pb-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] bg-brand-green/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center rounded-full border border-brand-green/30 bg-brand-green/10 px-4 py-2 text-sm font-semibold text-brand-green backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(55,182,38,0.2)]">
            <span className="flex h-2.5 w-2.5 rounded-full bg-brand-green mr-3"></span>
            Transparent Pricing
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Flexible Plans for <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">Every Stage</span></h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Choose the plan that fits your business needs. Scale up or down at any time with our enterprise-grade architecture.
          </p>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="container mx-auto px-4 md:px-8 py-16 -mt-16 relative z-20">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border-t-[6px] flex flex-col ${plan.color} ${plan.popular ? 'transform md:-translate-y-8 ring-4 ring-brand-green/30 relative z-10' : 'transform hover:-translate-y-2 transition-transform duration-500'} ${i === plans.length - 1 && plans.length % 3 !== 0 ? "xl:col-start-2 xl:col-span-1" : ""}`}
            >
              {plan.popular && (
                <div className="bg-brand-green text-white text-center text-xs font-black py-2 uppercase tracking-[0.2em] shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <h3 className="text-3xl font-black text-gray-900 mb-3">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-8 h-12 leading-relaxed">{plan.description}</p>
                
                <div className="mb-10">
                  <span className="text-5xl font-black text-gray-900 tracking-tighter">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 font-medium">{plan.period}</span>}
                </div>

                <div className="mt-auto">
                  <Link href="/contact">
                    <Button 
                      className={`w-full h-14 rounded-xl text-base font-bold mb-10 group overflow-hidden relative ${
                        plan.popular 
                          ? "bg-brand-green hover:bg-green-700 text-white shadow-[0_10px_30px_rgba(55,182,38,0.3)] hover:scale-105 transition-all duration-300" 
                          : "bg-gray-50 text-gray-900 hover:bg-brand-green hover:text-white border border-gray-200 hover:border-brand-green hover:scale-105 transition-all duration-300 shadow-sm"
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {plan.cta} {plan.popular && <Star className="w-4 h-4 fill-current" />}
                      </span>
                    </Button>
                  </Link>

                  <div className="space-y-4 border-t border-gray-100 pt-8">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em]">Core Features</p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className={`mt-0.5 rounded-full p-1 shrink-0 ${plan.popular ? 'bg-green-100 text-brand-green' : 'bg-gray-100 text-gray-500'}`}>
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </div>
                        <span className="text-sm font-medium text-gray-600">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.addons && plan.addons.length > 0 && (
                      <>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em] pt-4">Optional Add-ons</p>
                        {plan.addons.map((addon, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <div className="mt-0.5 rounded-full p-1 shrink-0 bg-blue-50 text-blue-500">
                              <Plus className="w-3 h-3" strokeWidth={3} />
                            </div>
                            <span className="text-sm font-medium text-gray-600">{addon}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ or Trust Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase mb-4">// Enterprise Ready</p>
                <h2 className="text-4xl md:text-6xl font-black text-brand-green uppercase italic tracking-tighter leading-none mb-8">Custom <br />Scale Solutions</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  Need something specifically tailored for your organization? We provide white-glove engineering services for large-scale African enterprises.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="bg-brand-green text-white rounded-full px-12 h-16 font-black uppercase italic tracking-widest text-sm hover:scale-105 transition-transform">
                    Talk to an Expert
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "24/7 SLA", desc: "Guaranteed uptime and support." },
                  { title: "On-Premise", desc: "Secure local data hosting." },
                  { title: "Custom AI", desc: "Trained on your business data." },
                  { title: "Unlimited", desc: "No caps on users or storage." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                    <h4 className="font-bold text-xl text-brand-green mb-2 group-hover:text-brand-green transition-colors">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
