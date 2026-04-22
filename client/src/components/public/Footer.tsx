import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sidebar text-white pt-16 pb-8 border-t border-sidebar-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">iT</span>
              </div>
              <span className="font-bold text-xl tracking-tight">iTech Network</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses through innovative technology solutions and world-class digital education.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-brand-green transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-green transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-green transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-green transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-green">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/"><a className="hover:text-white transition-colors">Home</a></Link></li>
              <li><Link href="/about"><a className="hover:text-white transition-colors">About Us</a></Link></li>
              <li><Link href="/services"><a className="hover:text-white transition-colors">Our Services</a></Link></li>
              <li><Link href="/pricing"><a className="hover:text-white transition-colors">Pricing Plans</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-white transition-colors">Contact</a></Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-green">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-white transition-colors">IT Consultancy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-green">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-green shrink-0" />
                <span>123 Tech Boulevard, Innovation District,<br />Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-green shrink-0" />
                <span>+254 700 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-green shrink-0" />
                <span>hello@itech.africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 iTech Network Africa. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
