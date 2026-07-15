import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarDays, CheckCircle2, ArrowRight } from "lucide-react";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";

export default function Consultation() {
  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-brand-green/30 selection:text-brand-green">
      <PublicNavbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase block mb-6">
                // Strategy Session
              </span>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                Expert <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">Consultation</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl font-light">
                Discuss your business challenges with our senior architects. Get actionable insights and an enterprise roadmap tailored to your goals.
              </p>

              <div className="space-y-6">
                {[
                  "System architecture review",
                  "Digital transformation strategy",
                  "Security and compliance audit",
                  "Cost optimization planning"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-brand-green" />
                    </div>
                    <span className="text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-900 rounded-[2.5rem] p-8 md:p-12 border border-white/10 relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-[80px] pointer-events-none"></div>
               
               <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-8">
                    <div className="w-14 h-14 bg-white/5 border border-white/20 rounded-2xl flex items-center justify-center">
                      <CalendarDays className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight">Book Session</h3>
                      <p className="text-gray-400 text-sm font-medium mt-1">Free 45-minute discovery call.</p>
                    </div>
                  </div>

                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">First Name</label>
                        <Input placeholder="Jane" className="bg-white/5 border-white/10 focus:border-brand-green text-white h-12 rounded-xl px-4" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Last Name</label>
                        <Input placeholder="Doe" className="bg-white/5 border-white/10 focus:border-brand-green text-white h-12 rounded-xl px-4" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Work Email</label>
                      <Input type="email" placeholder="jane@company.com" className="bg-white/5 border-white/10 focus:border-brand-green text-white h-12 rounded-xl px-4" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Consultation Topic</label>
                      <select className="w-full bg-white/5 border border-white/10 focus:border-brand-green text-white h-12 rounded-xl px-4 outline-none appearance-none cursor-pointer">
                        <option value="" className="text-gray-900">Select main topic...</option>
                        <option value="cloud" className="text-gray-900">Cloud Migration</option>
                        <option value="software" className="text-gray-900">Custom Software Dev</option>
                        <option value="ai" className="text-gray-900">AI Implementation</option>
                        <option value="security" className="text-gray-900">Cybersecurity Audit</option>
                        <option value="other" className="text-gray-900">Other Business Challenge</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Brief Description</label>
                      <Textarea placeholder="What challenges are you currently facing?" className="bg-white/5 border-white/10 focus:border-brand-green text-white min-h-[100px] rounded-xl px-4 py-3 resize-none" />
                    </div>

                    <div className="pt-6">
                      <Button className="w-full bg-brand-green hover:bg-green-600 text-white h-14 rounded-xl font-bold uppercase tracking-widest shadow-xl shadow-brand-green/20 group transition-all">
                        Request Availability
                        <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </form>
               </div>
            </motion.div>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
