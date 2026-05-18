import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-24 pb-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Newsletter Banner */}
        <div className="bg-brand-green rounded-3xl p-10 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="relative z-10 max-w-xl">
            <h3 className="text-3xl font-black text-white mb-2">Join our Tech Community</h3>
            <p className="text-green-50">Subscribe to our newsletter for the latest tech insights, company updates, and exclusive resources.</p>
          </div>
          <div className="w-full md:w-auto relative z-10 flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/10 border border-white/20 text-white placeholder:text-green-100 px-6 py-4 rounded-full w-full md:w-80 focus:outline-none focus:border-white focus:bg-white/20 transition-all"
            />
            <Button size="icon" className="bg-white text-brand-green hover:bg-gray-100 rounded-full h-[58px] w-[58px] shrink-0">
              <ArrowRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/images/logo-new.png" alt="iTech Network Africa Logo" className="h-12 w-auto bg-white p-1 rounded-xl" />
              <span className="font-black text-2xl tracking-tight text-white">iTech Network</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering African businesses through innovative technology solutions, custom software engineering, and world-class digital education.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white transition-all hover:-translate-y-1"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white transition-all hover:-translate-y-1"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white transition-all hover:-translate-y-1"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white transition-all hover:-translate-y-1"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-green"></span> Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> About Us</Link></li>
              <li><Link href="/services" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Our Services</Link></li>
              <li><Link href="/pricing" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Pricing Plans</Link></li>
              <li><Link href="/team" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Leadership Team</Link></li>
              <li><Link href="/verify-certificate" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Verify Certificate</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-green"></span> Solutions
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/store" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Digital Marketplace</Link></li>
              <li><Link href="/pos-demo" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Smart POS</Link></li>
              <li><Link href="/booking" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Book a Consultation</Link></li>
              <li><Link href="/dashboard" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Client Portal</Link></li>
              <li><Link href="/services" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Custom Software</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-green"></span> Contact
            </h3>
            <ul className="space-y-5 text-sm text-gray-400">
              <li className="flex items-start gap-4 bg-white/5 p-3 rounded-xl border border-white/5">
                <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <span>Monrovia, Liberia<br />Corporate Headquarters</span>
              </li>
              <li className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5">
                <Phone className="w-5 h-5 text-brand-green shrink-0" />
                <span>+231 555 770 641</span>
              </li>
              <li className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5">
                <Mail className="w-5 h-5 text-brand-green shrink-0" />
                <span>info@itechnetwork.africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p className="font-medium text-gray-400">© {new Date().getFullYear()} iTech Network Africa. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-green transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-green transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-green transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
