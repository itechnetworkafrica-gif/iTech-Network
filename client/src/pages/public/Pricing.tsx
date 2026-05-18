import { Button } from "@/components/ui/button";
import { Check, Star, Plus, ArrowRight, Zap, Shield, Globe, Clock, MessageSquare, CreditCard } from "lucide-react";
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
      name: "STARTER Package",
      price: "$150",
      period: "USD",
      description: "Perfect for individuals and small businesses getting started online. Renewal: $85/Yr.",
      features: [
        "Free Domain Name",
        "1 Year Hosting",
        "SSL Security Certificate",
        "Mobile Responsive Design",
        "Modern Website Design",
        "Fast Loading Website",
        "1 Company Email",
        "3 Professional Web Pages",
        "Contact Form Integration",
        "WhatsApp Integration",
        "Social Media Integration",
        "Basic SEO Setup",
        "Google Maps Integration",
        "Website Launch Support",
        "Technical Support"
      ],
      cta: "Get Started",
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "BUSINESS Package",
      price: "$350",
      period: "USD",
      description: "Ideal for growing businesses needing a professional digital presence. Renewal: $150/Yr.",
      features: [
        "Free Domain Name",
        "1 Year Premium Hosting",
        "SSL Security Certificate",
        "Mobile Responsive Design",
        "Premium Website Design",
        "Fast Loading Website",
        "2 Company Emails",
        "Up To 8 Professional Web Pages",
        "Contact Form Integration",
        "WhatsApp Integration",
        "Social Media Integration",
        "Advanced SEO Setup",
        "Blog/News Section",
        "Image Gallery & Sliders",
        "Technical Support"
      ],
      cta: "Get Started",
      popular: true,
      color: "border-brand-green"
    },
    {
      name: "PRO Package",
      price: "$800",
      period: "USD",
      description: "Advanced solution with custom design and premium features. Renewal: $200/Yr.",
      features: [
        "Free Domain Name",
        "1 Year Premium Hosting",
        "SSL Security Certificate",
        "Fully Custom Website Design",
        "Advanced Mobile Responsive Design",
        "Ultra Fast Website Performance",
        "10 Company Emails",
        "Up To 15 Professional Web Pages",
        "Advanced Contact Forms",
        "WhatsApp & Live Chat Integration",
        "Social Media Integration",
        "Advanced SEO Optimization",
        "Blog & Portfolio Sections",
        "Custom Animations & Effects",
        "Priority Technical Support"
      ],
      cta: "Get Started",
      popular: false,
      color: "border-gray-900"
    },
    {
      name: "CORPORATE Package",
      price: "$1,000",
      period: "USD",
      description: "Enterprise-grade solution for large organizations and corporations. Renewal: $300/Yr.",
      features: [
        "Free Domain Name",
        "1 Year Corporate Hosting",
        "Premium SSL Security Certificate",
        "Enterprise Website Design",
        "Advanced Mobile Responsive Design",
        "High-Speed Website Performance",
        "Unlimited Company Emails",
        "Up To 25 Professional Web Pages",
        "Advanced Contact & Inquiry Forms",
        "WhatsApp & Live Chat Integration",
        "Full Social Media Integration",
        "Premium SEO Optimization",
        "Custom Dashboard Features",
        "Advanced Security Protection",
        "Dedicated Technical Support"
      ],
      cta: "Get Started",
      popular: false,
      color: "border-brand-green"
    },
    {
      name: "NGO/NON PROFIT",
      price: "$400",
      period: "USD",
      description: "Specialized package tailored for NGOs and Non-Profit organizations. Renewal: $160/Yr.",
      features: [
        "Free Domain Name",
        "1 Year Hosting",
        "SSL Security Certificate",
        "Mobile Responsive Design",
        "Professional NGO Website Design",
        "Fast Loading Website",
        "Up to 10 Company Emails",
        "Up to 12 Professional Web Pages",
        "Donation/Support Integration",
        "Contact Form Integration",
        "WhatsApp & Social Media Integration",
        "Event & Announcement Section",
        "Volunteer Registration Form",
        "Blog/News Section",
        "Basic SEO & Security Setup",
        "Technical Support"
      ],
      cta: "Get Started",
      popular: false,
      color: "border-blue-500"
    },
    {
      name: "E-COMMERCE Package",
      price: "$650",
      period: "USD",
      description: "Complete online store solution for selling products and services. Renewal: $160/Yr.",
      features: [
        "Free Domain Name & 1 Year Hosting",
        "SSL Security Certificate",
        "Pro E-Commerce Website Design",
        "Mobile Responsive Design",
        "Up to 10 Product Pages",
        "Product Listing & Mgmt System",
        "Shopping Cart Integration",
        "Payment Gateway Integration",
        "Order Management System",
        "Discount & Coupon Features",
        "Inventory Tracking Setup",
        "Contact Form & WhatsApp Integration",
        "Social Media Integration",
        "Basic SEO & Security Setup",
        "Technical Support"
      ],
      cta: "Get Started",
      popular: false,
      color: "border-orange-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 overflow-hidden">
      <PublicNavbar />
      
      {/* Dynamic Header */}
      <div className="bg-gray-950 pt-40 pb-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-brand-green/20 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-brand-green/30 bg-brand-green/10 px-4 py-2 text-sm font-semibold text-brand-green backdrop-blur-md mb-8 shadow-[0_0_30px_rgba(55,182,38,0.2)]"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-brand-green mr-3 animate-ping"></span>
            Transparent Pricing
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
          >
            Flexible Plans for <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">Every Stage</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Choose the plan that fits your business needs. Scale up or down at any time with our enterprise-grade architecture.
          </motion.p>
          
          {/* Billing Toggle Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 inline-flex items-center p-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10"
          >
            <button 
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${billingCycle === "monthly" ? "bg-white text-gray-900 shadow-md" : "text-gray-400 hover:text-white"}`}
            >
              Monthly Billing
            </button>
            <button 
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${billingCycle === "yearly" ? "bg-brand-green text-white shadow-md shadow-brand-green/20" : "text-gray-400 hover:text-white"}`}
            >
              Annual Billing <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Value Proposition Cards */}
      <section className="py-12 relative z-20 -mt-10">
         <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Shield, title: "Secure Infrastructure", desc: "Enterprise-grade security included standard on all plans." },
                { icon: Zap, title: "Lightning Fast", desc: "Optimized global CDN delivery for blazing fast load times." },
                { icon: Globe, title: "99.9% Uptime SLA", desc: "Reliable hosting architecture you can depend on." }
              ].map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex items-center gap-4 hover:border-brand-green/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-green/10 transition-colors">
                    <item.icon className="w-6 h-6 text-gray-900 group-hover:text-brand-green transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
         </div>
      </section>

      {/* Pricing Grid */}
      <div className="container mx-auto px-4 md:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i} 
              className={`bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border-t-[6px] flex flex-col group ${plan.color} ${plan.popular ? 'transform md:-translate-y-4 ring-4 ring-brand-green/30 relative z-10 shadow-[0_20px_50px_rgba(55,182,38,0.15)]' : 'hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500'} ${i === plans.length - 1 && plans.length % 3 !== 0 ? "xl:col-start-2 xl:col-span-1" : ""}`}
            >
              {plan.popular && (
                <div className="bg-brand-green text-white text-center text-xs font-black py-2 uppercase tracking-[0.2em] shadow-md flex items-center justify-center gap-2">
                  <Star className="w-3 h-3 fill-current" /> Most Popular Choice
                </div>
              )}
              
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <h3 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">{plan.name}</h3>
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
                        className={`w-full h-14 rounded-xl text-base font-bold mb-10 overflow-hidden relative transition-all duration-300 ${
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
                    <DialogContent className="sm:max-w-[500px] rounded-[2rem] p-8 border-0 shadow-2xl">
                      <DialogHeader className="mb-6">
                        <DialogTitle className="text-3xl font-black text-gray-900">Configure {plan.name}</DialogTitle>
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
                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Phone / WhatsApp</label>
                            <Input placeholder="+231..." required className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-brand-green/20" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Project Details (Optional)</label>
                          <Textarea placeholder="Tell us briefly about your business or project..." className="bg-gray-50 border-gray-200 resize-none h-28 rounded-xl focus:ring-brand-green/20 p-4" />
                        </div>
                        
                        <div className="pt-6 flex flex-col gap-3 border-t border-gray-100">
                          <Button type="submit" className="w-full bg-brand-green hover:bg-green-600 text-white h-14 rounded-xl font-bold text-lg shadow-[0_10px_30px_rgba(55,182,38,0.2)] hover:-translate-y-1 transition-transform flex items-center justify-center gap-2">
                            <CreditCard className="w-5 h-5" /> Pay {plan.price} Now
                          </Button>
                          <Button type="button" variant="outline" className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 h-14 rounded-xl font-bold">
                            <MessageSquare className="w-4 h-4 mr-2" /> Submit Inquiry Only
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>

                  <div className="space-y-4 border-t border-gray-100 pt-8">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mb-6">Core Features Included</p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-4 group/item">
                        <div className={`mt-0.5 rounded-full p-1 shrink-0 transition-colors ${plan.popular ? 'bg-brand-green/10 text-brand-green group-hover/item:bg-brand-green group-hover/item:text-white' : 'bg-gray-100 text-gray-500 group-hover/item:bg-gray-200 group-hover/item:text-gray-900'}`}>
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </div>
                        <span className="text-sm font-medium text-gray-600 group-hover/item:text-gray-900 transition-colors">{feature}</span>
                      </div>
                    ))}
                    
                    {/* Mock Addons */}
                    <div className="pt-6 mt-6 border-t border-gray-50">
                       <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mb-4">Available Add-ons</p>
                       <div className="flex items-start gap-4 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                          <div className="mt-0.5 rounded-full p-1 shrink-0 bg-blue-50 text-blue-500">
                            <Plus className="w-3 h-3" strokeWidth={3} />
                          </div>
                          <div>
                            <span className="text-sm font-bold text-gray-900 block">Dedicated Server</span>
                            <span className="text-xs text-gray-500">+$50/mo</span>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Advanced Enterprise CTA */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-gray-950 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-green/20 via-transparent to-transparent opacity-50 blur-[50px]"></div>
            
            <div className="relative z-10">
              <p className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase mb-4">// Enterprise Ready</p>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-8">Need a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">Custom Built</span><br/>Solution?</h2>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto font-light">
                For large-scale African enterprises requiring complex architectures, bespoke software development, or massive cloud migrations, we provide dedicated engineering teams and white-glove service.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                {[
                  { title: "24/7 SLA", desc: "Guaranteed uptime" },
                  { title: "On-Premise", desc: "Secure local hosting" },
                  { title: "Custom AI", desc: "Trained on your data" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
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
