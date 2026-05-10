import { Button } from "@/components/ui/button";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Mail, Phone, MapPin, Send, MessageSquare, Globe2, Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <PublicNavbar />
      
      <section className="pt-40 pb-32 bg-gray-950 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">// Contact Us</p>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase italic tracking-tighter drop-shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000">Get in Touch</h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Ready to transform your digital infrastructure? Connect with our enterprise experts today and let's build the future together.
          </p>
        </div>
      </section>

      <section className="py-20 -mt-20 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Contact Info Card */}
            <Card className="lg:col-span-1 bg-white border-0 shadow-2xl h-full rounded-3xl overflow-hidden group">
              <div className="h-2 w-full bg-gradient-to-r from-brand-green to-emerald-400"></div>
              <CardContent className="p-8 md:p-10 space-y-8">
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tight">Headquarters</h3>
                  <div className="space-y-8">
                    <div className="flex items-start gap-5 group/item">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 group-hover/item:bg-brand-green group-hover/item:text-white transition-colors duration-300">
                        <Building2 className="w-6 h-6 text-brand-green group-hover/item:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 mb-1">Corporate Office</p>
                        <p className="text-gray-500 text-sm leading-relaxed">iTech Network Africa<br />Monrovia, Liberia</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5 group/item">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 group-hover/item:bg-brand-green group-hover/item:text-white transition-colors duration-300">
                        <Mail className="w-6 h-6 text-brand-green group-hover/item:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 mb-1">Email Directory</p>
                        <p className="text-gray-500 text-sm leading-relaxed">info@itechnetwork.africa<br />support@itechnetwork.africa</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5 group/item">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 group-hover/item:bg-brand-green group-hover/item:text-white transition-colors duration-300">
                        <Phone className="w-6 h-6 text-brand-green group-hover/item:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 mb-1">Global Support</p>
                        <p className="text-gray-500 text-sm leading-relaxed">+231 555 770 641<br />Mon-Fri, 8am-6pm GMT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Form Card */}
            <Card className="lg:col-span-2 bg-white border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-brand-green" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Project Inquiry</h3>
                </div>
                <p className="text-gray-500 mb-10 text-lg ml-13">Submit your requirements and our enterprise team will respond within 24 hours.</p>
                
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                      <Input id="name" placeholder="Enter your full name" className="bg-gray-50 border-gray-100 focus:border-brand-green focus:ring-brand-green/20 h-14 rounded-xl px-5 text-lg transition-all" />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Business Email</label>
                      <Input id="email" type="email" placeholder="name@company.com" className="bg-gray-50 border-gray-100 focus:border-brand-green focus:ring-brand-green/20 h-14 rounded-xl px-5 text-lg transition-all" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="phone" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Phone Number</label>
                      <Input id="phone" placeholder="+231..." className="bg-gray-50 border-gray-100 focus:border-brand-green focus:ring-brand-green/20 h-14 rounded-xl px-5 text-lg transition-all" />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="company" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Company Name</label>
                      <Input id="company" placeholder="Your organization" className="bg-gray-50 border-gray-100 focus:border-brand-green focus:ring-brand-green/20 h-14 rounded-xl px-5 text-lg transition-all" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="subject" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Inquiry Type</label>
                    <select id="subject" className="w-full bg-gray-50 border border-gray-100 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 h-14 rounded-xl px-5 text-lg transition-all outline-none text-gray-700">
                      <option value="">Select a subject...</option>
                      <option value="software">Custom Software Development</option>
                      <option value="cloud">Cloud Infrastructure</option>
                      <option value="security">Cybersecurity Audit</option>
                      <option value="training">Corporate Training</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Project Details</label>
                    <Textarea id="message" placeholder="Please describe your requirements in detail..." className="min-h-[180px] bg-gray-50 border-gray-100 focus:border-brand-green focus:ring-brand-green/20 rounded-xl p-5 text-lg transition-all resize-none" />
                  </div>

                  <Button className="w-full bg-brand-green hover:bg-green-600 text-white h-16 text-lg font-black uppercase tracking-widest rounded-xl shadow-xl shadow-brand-green/20 transition-all hover:-translate-y-1">
                    Submit Inquiry <Send className="w-5 h-5 ml-3" />
                  </Button>
                </form>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">Our Global Network</h2>
            <div className="w-24 h-1.5 bg-brand-green mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 text-center hover:border-brand-green/50 transition-colors">
              <Globe2 className="w-10 h-10 text-brand-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">West Africa</h3>
              <p className="text-gray-500">Monrovia, Liberia<br />Regional HQ</p>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 text-center hover:border-brand-green/50 transition-colors">
              <Globe2 className="w-10 h-10 text-brand-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">East Africa</h3>
              <p className="text-gray-500">Nairobi, Kenya<br />Development Center</p>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 text-center hover:border-brand-green/50 transition-colors">
              <Globe2 className="w-10 h-10 text-brand-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">North America</h3>
              <p className="text-gray-500">Delaware, USA<br />Partner Office</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
