import { Button } from "@/components/ui/button";
import { Check, Star, Plus, ArrowRight, Zap, Shield, Globe, Clock, MessageSquare, CreditCard, LayoutDashboard, Database, Server } from "lucide-react";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Link } from "wouter";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  const plans = [
    {
      name: "ESSENTIAL",
      price: "$2,500",
      period: "USD/mo",
      description: "For startups and mid-sized companies beginning their digital transformation journey.",
      features: [
        "Core Business Applications",
        "Standard Cloud Hosting (AWS/Azure)",
        "Gotecx POS Standard License",
        "Basic Data Analytics Dashboard",
        "Standard Security Protocols",
        "99.9% Uptime SLA",
        "Email & Chat Support (9-5)",
        "Monthly System Audits"
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "ENTERPRISE",
      price: "$7,500",
      period: "USD/mo",
      description: "Comprehensive technology stack for scaling organizations requiring advanced architecture.",
      features: [
        "Advanced Custom Software Development",
        "High-Availability Cloud Architecture",
        "Gotecx AI Integration Modules",
        "Gotecx POS Enterprise License",
        "Predictive Data Analytics",
        "Zero-Trust Security Implementation",
        "99.99% Uptime SLA",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "Weekly Strategy Consultations"
      ],
      cta: "Deploy Enterprise",
      popular: true,
      color: "border-brand-green"
    },
    {
      name: "GLOBAL SCALE",
      price: "Custom",
      period: "",
      description: "Bespoke technology infrastructure and white-glove engineering for global corporations.",
      features: [
        "Unlimited Custom Engineering Sprints",
        "Multi-Region Global Cloud Deployment",
        "Custom Machine Learning Models",
        "Full Ecosystem API Access",
        "Real-Time Threat Intelligence",
        "99.999% Uptime SLA",
        "On-Premise Deployment Options",
        "Embedded Engineering Team",
        "Dedicated CTO Advisory",
        "Board-Level Reporting"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "border-gray-900"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-950 overflow-hidden">
      <PublicNavbar />
      
      {/* Dynamic Header */}
      <div className="pt-40 pb-32 md:pt-48 md:pb-40 text-center text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-brand-green/20 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-xs font-bold text-gray-300 mb-8 backdrop-blur-md uppercase tracking-widest shadow-[0_0_30px_rgba(55,182,38,0.2)]"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-green mr-3 animate-ping"></span>
            Enterprise Licensing
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter uppercase leading-none"
          >
            Scale Without <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">Limits</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            Transparent, predictable enterprise licensing for the Gotecx Technology Ecosystem. Access world-class engineering and infrastructure customized to your operational scale.
          </motion.p>
          
          {/* Billing Toggle Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 inline-flex items-center p-2 bg-gray-900/50 backdrop-blur-md rounded-full border border-white/10"
          >
            <button 
              onClick={() => setBillingCycle("monthly")}
              className={`px-8 py-3.5 rounded-full text-sm font-bold transition-all ${billingCycle === "monthly" ? "bg-white text-gray-900 shadow-md" : "text-gray-400 hover:text-white"}`}
            >
              Monthly Billing
            </button>
            <button 
              onClick={() => setBillingCycle("yearly")}
              className={`px-8 py-3.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${billingCycle === "yearly" ? "bg-brand-green text-white shadow-md shadow-brand-green/20" : "text-gray-400 hover:text-white"}`}
            >
              Annual Billing <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="container mx-auto px-4 md:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 justify-center max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i} 
              className={`bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-t-[8px] flex flex-col group ${plan.color} ${plan.popular ? 'transform md:-translate-y-4 ring-4 ring-brand-green/30 relative z-10 shadow-[0_30px_60px_rgba(55,182,38,0.2)]' : 'hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-500'}`}
            >
              {plan.popular && (
                <div className="bg-brand-green text-white text-center text-xs font-black py-3 uppercase tracking-[0.2em] shadow-md flex items-center justify-center gap-2">
                  <Star className="w-3.5 h-3.5 fill-current" /> Recommended Enterprise Setup
                </div>
              )}
              
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-black text-gray-900 mb-3 uppercase tracking-tight">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-8 h-12 leading-relaxed">{plan.description}</p>
                
                <div className="mb-10 flex items-end gap-2">
                  <span className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 font-bold mb-2">/{billingCycle === "yearly" ? "yr" : "mo"}</span>}
                </div>

                <div className="mt-auto">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        onClick={() => setSelectedPlan(plan.name)}
                        className={`w-full h-14 rounded-xl text-sm font-black uppercase tracking-widest mb-10 overflow-hidden relative transition-all duration-300 ${
                          plan.popular 
                            ? "bg-gray-950 hover:bg-brand-green text-white shadow-xl hover:shadow-brand-green/30 hover:-translate-y-1" 
                            : "bg-gray-50 text-gray-900 hover:bg-gray-900 hover:text-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1"
                        }`}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {plan.cta} <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px] rounded-[2rem] p-8 border-0 shadow-2xl bg-white">
                      <DialogHeader className="mb-6">
                        <DialogTitle className="text-3xl font-black text-gray-900 uppercase">Configure {plan.name}</DialogTitle>
                        <DialogDescription className="text-gray-500 text-base mt-2">
                          Excellent choice. Fill out this form to begin the setup process or proceed directly to payment.
                        </DialogDescription>
                      </DialogHeader>
                      <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Payment integration would trigger here."); }}>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                          <Input placeholder="John Doe" required className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-brand-green/20" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
                            <Input type="email" placeholder="john@company.com" required className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-brand-green/20" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Phone Number</label>
                            <Input placeholder="+1..." required className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-brand-green/20" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Project Details (Optional)</label>
                          <Textarea placeholder="Tell us briefly about your enterprise requirements..." className="bg-gray-50 border-gray-200 resize-none h-28 rounded-xl focus:ring-brand-green/20 p-4" />
                        </div>
                        
                        <div className="pt-6 flex flex-col gap-3 border-t border-gray-100">
                          <Button type="submit" className="w-full bg-brand-green hover:bg-green-600 text-white h-14 rounded-xl font-black uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(55,182,38,0.2)] hover:-translate-y-1 transition-transform flex items-center justify-center gap-2">
                            <CreditCard className="w-5 h-5" /> Pay {plan.price} Now
                          </Button>
                          <Button type="button" variant="outline" className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 h-14 rounded-xl font-bold uppercase tracking-widest text-xs">
                            <MessageSquare className="w-4 h-4 mr-2" /> Submit Inquiry Only
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>

                  <div className="space-y-4 border-t border-gray-100 pt-8">
                    <p className="text-xs font-black text-gray-900 uppercase tracking-[0.15em] mb-6">Enterprise Capabilities Included</p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-4 group/item">
                        <div className={`mt-0.5 rounded-full p-1 shrink-0 transition-colors ${plan.popular ? 'bg-brand-green/10 text-brand-green group-hover/item:bg-brand-green group-hover/item:text-white' : 'bg-gray-100 text-gray-500 group-hover/item:bg-gray-200 group-hover/item:text-gray-900'}`}>
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </div>
                        <span className="text-sm font-medium text-gray-600 group-hover/item:text-gray-900 transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Advanced Enterprise CTA */}
      <section className="py-24 bg-white relative mt-20 rounded-t-[3rem] z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-br from-gray-950 to-gray-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-green/20 via-transparent to-transparent opacity-50 blur-[50px]"></div>
            
            <div className="relative z-10">
              <p className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase mb-4">// Gotecx Partnership</p>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-8">Need a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">Custom Built</span><br/>Ecosystem?</h2>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto font-light">
                For large-scale global enterprises requiring complex architectures, bespoke software development, or massive cloud migrations, we provide dedicated engineering teams and white-glove service.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                {[
                  { icon: Globe, title: "Global Infrastructure", desc: "Multi-region deployment capabilities" },
                  { icon: Server, title: "On-Premise Ready", desc: "Secure local hosting available" },
                  { icon: Database, title: "Custom AI Models", desc: "Trained securely on your data" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col items-center">
                    <item.icon className="w-8 h-8 text-brand-green mb-4" />
                    <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-sm">{item.title}</h4>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <Button size="lg" className="bg-brand-green hover:bg-green-600 text-white rounded-full px-12 h-16 font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-[0_0_30px_rgba(55,182,38,0.3)] w-full sm:w-auto">
                  Contact Enterprise Sales
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
