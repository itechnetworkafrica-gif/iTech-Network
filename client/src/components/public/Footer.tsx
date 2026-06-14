import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight, Building, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-24 pb-8 relative overflow-hidden border-t border-white/10">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Newsletter Banner */}
        <div className="bg-gradient-to-r from-brand-green to-emerald-700 rounded-3xl p-10 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden border border-white/20">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="relative z-10 max-w-xl">
            <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">Join The Ecosystem</h3>
            <p className="text-green-50 font-medium">Subscribe for enterprise tech insights, Gotecx platform updates, and global innovation news.</p>
          </div>
          <div className="w-full md:w-auto relative z-10 flex gap-2">
            <input 
              type="email" 
              placeholder="Enterprise Email Address" 
              className="bg-gray-900/50 backdrop-blur-md border border-white/20 text-white placeholder:text-green-100/70 px-6 py-4 rounded-full w-full md:w-80 focus:outline-none focus:border-white focus:bg-gray-900/80 transition-all font-medium"
            />
            <Button size="icon" className="bg-white text-brand-green hover:bg-gray-100 rounded-full h-[58px] w-[58px] shrink-0 shadow-lg">
              <ArrowRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <img src="/images/itech-logo.png" alt="iTech Network Africa Logo" className="h-10 w-auto bg-white p-1 rounded-xl shadow-lg" />
                <img src="/images/gotecx-logo.png" alt="Gotecx Logo" className="h-10 w-auto bg-white p-1.5 rounded-xl shadow-lg" />
                <span className="font-black text-3xl tracking-tighter text-white uppercase">GOTEC<span className="text-brand-green">X</span></span>
              </div>
              <span className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mt-2">Global Technology Ecosystem</span>
              <span className="text-[10px] font-bold text-brand-green tracking-wider uppercase">Powered by iTech Network Africa</span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Engineering the future of global enterprise. We build scalable platforms, intelligent systems, and transformative technology solutions for organizations worldwide.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white hover:border-brand-green transition-all hover:-translate-y-1"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white hover:border-brand-green transition-all hover:-translate-y-1"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white hover:border-brand-green transition-all hover:-translate-y-1"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h3 className="text-sm font-black tracking-widest uppercase mb-6 text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span> Quick Links
            </h3>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><Link href="/" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> About Us</Link></li>
              <li><Link href="/services" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Services</Link></li>
              <li><Link href="/pricing" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Pricing</Link></li>
              <li><Link href="/faq" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> FAQ</Link></li>
            </ul>
          </div>

          {/* Enterprise */}
          <div>
            <h3 className="text-sm font-black tracking-widest uppercase mb-6 text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span> Enterprise
            </h3>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><Link href="/solutions" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Solutions</Link></li>
              <li><Link href="/industries" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Industries</Link></li>
              <li><Link href="/portfolio" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Portfolio</Link></li>
              <li><Link href="/case-studies" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Case Studies</Link></li>
              <li><Link href="/partners" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Partners</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-black tracking-widest uppercase mb-6 text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span> Connect
            </h3>
            <ul className="space-y-5 text-sm text-gray-400">
              <li><Link href="/contact" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Contact Us</Link></li>
              <li><Link href="/team" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Leadership</Link></li>
              <li><Link href="/careers" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> Careers</Link></li>
              <li><Link href="/news" className="hover:text-brand-green transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3"/> News & Insights</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
          <p className="flex items-center gap-2">
            © {new Date().getFullYear()} GOTECX Global Ecosystem. <span className="hidden md:inline">|</span> Powered by iTech Network Africa.
          </p>
          <div className="flex gap-6 uppercase tracking-wider">
            <Link href="/privacy-policy" className="hover:text-brand-green transition-colors flex items-center gap-1"><Shield className="w-3 h-3"/> Privacy</Link>
            <Link href="/terms" className="hover:text-brand-green transition-colors">Terms</Link>
            <Link href="/cookie-policy" className="hover:text-brand-green transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
