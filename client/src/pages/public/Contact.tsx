import { Button } from "@/components/ui/button";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Mail, Phone, MapPin, Send, MessageSquare, Globe2, Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white">
      <PublicNavbar />
      
      <section className="pt-40 pb-32 md:pt-48 md:pb-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-xs font-bold text-gray-300 mb-8 backdrop-blur-md uppercase tracking-widest">
            <span className="flex h-2 w-2 rounded-full bg-brand-green mr-3 animate-ping"></span>
            Global Communications
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 uppercase tracking-tighter leading-none drop-shadow-2xl">
            Partner With <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-500">Gotecx</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Ready to transform your digital infrastructure? Connect with our enterprise experts today and let's build the future together.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white text-gray-900 border-t border-white/10 rounded-t-[3rem] -mt-10 relative z-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Info Card */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase mb-4">// Direct Channels</p>
                <h3 className="text-4xl font-black uppercase tracking-tight mb-8">Enterprise Directory</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 flex items-start gap-5 group hover:border-brand-green/50 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-brand-green transition-colors shadow-sm">
                    <Building2 className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-black text-xl mb-1 uppercase tracking-tight">Corporate HQ</p>
                    <p className="text-gray-500 leading-relaxed font-medium">Monrovia, Liberia<br />Global Technology Center</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 flex items-start gap-5 group hover:border-brand-green/50 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-brand-green transition-colors shadow-sm">
                    <Mail className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-black text-xl mb-1 uppercase tracking-tight">Email Communications</p>
                    <p className="text-gray-500 leading-relaxed font-medium">connect@gotecx.global<br />enterprise@gotecx.global</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 flex items-start gap-5 group hover:border-brand-green/50 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-brand-green transition-colors shadow-sm">
                    <Phone className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-black text-xl mb-1 uppercase tracking-tight">Global Support</p>
                    <p className="text-gray-500 leading-relaxed font-medium">+231 555 770 641<br />Mon-Fri, 08:00 - 18:00 GMT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="lg:col-span-3 bg-gray-950 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden border border-white/10 text-white">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/20 rounded-full blur-[80px] pointer-events-none"></div>
               
               <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-8">
                  <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black uppercase tracking-tight">Project Inquiry</h3>
                    <p className="text-gray-400 font-medium">Enterprise response time: <span className="text-brand-green">&lt; 4 hours</span></p>
                  </div>
                </div>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                      <Input id="name" placeholder="John Doe" className="bg-white/5 border-white/10 focus:border-brand-green focus:bg-white/10 text-white h-14 rounded-xl px-5 transition-all placeholder:text-gray-600" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-widest">Corporate Email</label>
                      <Input id="email" type="email" placeholder="name@company.com" className="bg-white/5 border-white/10 focus:border-brand-green focus:bg-white/10 text-white h-14 rounded-xl px-5 transition-all placeholder:text-gray-600" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                      <Input id="phone" placeholder="+1..." className="bg-white/5 border-white/10 focus:border-brand-green focus:bg-white/10 text-white h-14 rounded-xl px-5 transition-all placeholder:text-gray-600" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-xs font-bold text-gray-400 uppercase tracking-widest">Company Name</label>
                      <Input id="company" placeholder="Organization Inc." className="bg-white/5 border-white/10 focus:border-brand-green focus:bg-white/10 text-white h-14 rounded-xl px-5 transition-all placeholder:text-gray-600" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-bold text-gray-400 uppercase tracking-widest">Primary Interest</label>
                    <select id="subject" className="w-full bg-white/5 border border-white/10 focus:border-brand-green focus:bg-white/10 text-white h-14 rounded-xl px-5 transition-all outline-none appearance-none">
                      <option value="" className="text-gray-900">Select a solution area...</option>
                      <option value="software" className="text-gray-900">Enterprise Software Development</option>
                      <option value="ai" className="text-gray-900">Gotecx AI Integration</option>
                      <option value="pos" className="text-gray-900">Gotecx POS Deployment</option>
                      <option value="cloud" className="text-gray-900">Cloud Architecture</option>
                      <option value="other" className="text-gray-900">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-widest">Project Details</label>
                    <Textarea id="message" placeholder="Please describe your technical requirements or business challenges..." className="min-h-[160px] bg-white/5 border-white/10 focus:border-brand-green focus:bg-white/10 text-white rounded-xl p-5 transition-all resize-none placeholder:text-gray-600" />
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <Button className="w-full bg-brand-green hover:bg-green-600 text-white h-16 text-sm font-black uppercase tracking-widest rounded-xl shadow-xl shadow-brand-green/20 transition-all hover:-translate-y-1">
                      Transmit Inquiry <Send className="w-5 h-5 ml-3" />
                    </Button>
                  </div>
                </form>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-32 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
             <span className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase block mb-4">// Operational Reach</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">Worldwide Infrastructure</h2>
            <p className="text-gray-500 text-lg">Operating across multiple time zones to provide uninterrupted engineering support and server reliability.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 text-center hover:border-brand-green/50 hover:shadow-2xl transition-all group">
              <div className="w-20 h-20 bg-gray-50 rounded-2xl mx-auto flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors">
                <Globe2 className="w-10 h-10 text-gray-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase">West Africa</h3>
              <p className="text-gray-500 font-medium">Monrovia, Liberia<br />Global Technology Center</p>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 text-center hover:border-brand-green/50 hover:shadow-2xl transition-all group">
              <div className="w-20 h-20 bg-gray-50 rounded-2xl mx-auto flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors">
                <Globe2 className="w-10 h-10 text-gray-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase">East Africa</h3>
              <p className="text-gray-500 font-medium">Nairobi, Kenya<br />Development Hub</p>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 text-center hover:border-brand-green/50 hover:shadow-2xl transition-all group">
              <div className="w-20 h-20 bg-gray-50 rounded-2xl mx-auto flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors">
                <Globe2 className="w-10 h-10 text-gray-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase">North America</h3>
              <p className="text-gray-500 font-medium">Delaware, USA<br />Partner Operations</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
