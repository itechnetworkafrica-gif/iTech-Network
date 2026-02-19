import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Badge } from "@/components/ui/badge";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Essential tools for small projects and individuals.",
      features: [
        "Access to basic dashboard",
        "1 Active Project",
        "Weekly automated report (Lite)",
        "Community Support",
        "1 GB Storage"
      ],
      cta: "Get Started",
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "Perfect for freelancers and growing startups.",
      features: [
        "Everything in Free",
        "5 Active Projects",
        "Full detailed reports",
        "Email & Chat Support",
        "Integrations (Jira, Trello)",
        "10 GB Storage"
      ],
      cta: "Start Pro Trial",
      popular: false,
      color: "border-brand-teal"
    },
    {
      name: "Pro +",
      price: "$79",
      period: "/month",
      description: "Advanced features for scaling teams and agencies.",
      features: [
        "Everything in Pro",
        "Unlimited Projects",
        "White-label Reports",
        "Priority 24/7 Support",
        "Advanced Analytics",
        "Custom Integrations",
        "100 GB Storage"
      ],
      cta: "Upgrade to Pro +",
      popular: true,
      color: "border-brand-orange"
    },
    {
      name: "Advance Pro +",
      price: "Custom",
      description: "Enterprise-grade solutions for large organizations.",
      features: [
        "Everything in Pro +",
        "Dedicated Account Manager",
        "On-premise Deployment",
        "SLA Guarantees",
        "Custom AI Model Training",
        "Audit Logs & Compliance",
        "Unlimited Storage"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "border-gray-900"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <PublicNavbar />
      
      {/* Header */}
      <div className="bg-brand-teal pt-32 pb-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Flexible Plans for Every Stage</h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your business needs. Scale up or down at any time.
          </p>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="container mx-auto px-4 md:px-8 py-16 -mt-10 relative z-20">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 flex flex-col ${plan.color} ${plan.popular ? 'transform md:-translate-y-4 ring-4 ring-brand-orange/20' : ''}`}
            >
              {plan.popular && (
                <div className="bg-brand-orange text-white text-center text-sm font-bold py-1.5 uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="p-8 flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-6 h-10">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-500">{plan.period}</span>}
                </div>

                <Button 
                  className={`w-full h-12 rounded-xl text-base font-semibold mb-8 ${
                    plan.popular 
                      ? "bg-brand-orange hover:bg-orange-600 text-white shadow-lg shadow-orange-200" 
                      : "bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {plan.cta}
                </Button>

                <div className="space-y-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Features</p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`mt-0.5 rounded-full p-0.5 ${plan.popular ? 'bg-orange-100 text-brand-orange' : 'bg-teal-50 text-brand-teal'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-brand-teal font-mono text-sm tracking-[0.3em] uppercase mb-4">// Enterprise Ready</p>
                <h2 className="text-4xl md:text-6xl font-black text-brand-teal uppercase italic tracking-tighter leading-none mb-8">Custom <br />Scale Solutions</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  Need something specifically tailored for your organization? We provide white-glove engineering services for large-scale African enterprises.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="bg-brand-teal text-white rounded-full px-12 h-16 font-black uppercase italic tracking-widest text-sm hover:scale-105 transition-transform">
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
                    <h4 className="font-bold text-xl text-brand-teal mb-2 group-hover:text-brand-orange transition-colors">{item.title}</h4>
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
