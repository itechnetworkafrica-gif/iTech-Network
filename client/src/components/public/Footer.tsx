import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight, Building, Globe, Shield, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const footerData = [
    {
      title: "About Gotecx",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Story", href: "/our-story" },
        { name: "Vision & Mission", href: "/vision-mission" },
        { name: "Founder Message", href: "/founder-message" },
        { name: "Leadership", href: "/team" },
        { name: "Company Timeline", href: "/timeline" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
        { name: "Global Presence", href: "/global-presence" },
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Retail Solutions", href: "/solutions/retail" },
        { name: "Restaurant Solutions", href: "/solutions/restaurant" },
        { name: "Healthcare Solutions", href: "/solutions/healthcare" },
        { name: "Education Solutions", href: "/solutions/education" },
        { name: "NGO Solutions", href: "/solutions/ngo" },
        { name: "Government Solutions", href: "/solutions/government" },
        { name: "Enterprise Solutions", href: "/solutions/enterprise" },
        { name: "SME Solutions", href: "/solutions/sme" },
        { name: "AI Solutions", href: "/solutions/ai" },
        { name: "Cloud Solutions", href: "/solutions/cloud" },
        { name: "Digital Transformation", href: "/solutions/transformation" },
        { name: "Automation Solutions", href: "/solutions/automation" },
      ]
    },
    {
      title: "Products",
      links: [
        { name: "Gotecx POS", href: "/pos-demo" },
        { name: "Product Features", href: "/products/features" },
        { name: "Documentation", href: "/products/docs" },
        { name: "Product Roadmap", href: "/products/roadmap" },
        { name: "Request Demo", href: "/request-demo" },
        { name: "Gotecx AI", href: "/products/ai" },
        { name: "Gotecx CRM", href: "/products/crm" },
        { name: "Gotecx ERP", href: "/products/erp" },
        { name: "Gotecx Analytics", href: "/products/analytics" },
        { name: "Gotecx Cloud", href: "/products/cloud" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Website Development", href: "/services/website" },
        { name: "Mobile App Development", href: "/services/mobile" },
        { name: "Software Development", href: "/services/software" },
        { name: "Cloud Solutions", href: "/services/cloud" },
        { name: "AI Solutions", href: "/services/ai" },
        { name: "Cybersecurity", href: "/services/cybersecurity" },
        { name: "Digital Marketing", href: "/services/marketing" },
        { name: "Branding & Design", href: "/services/branding" },
        { name: "Business Automation", href: "/services/automation" },
        { name: "IT Consulting", href: "/services/consulting" },
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Retail", href: "/industries/retail" },
        { name: "Healthcare", href: "/industries/healthcare" },
        { name: "Education", href: "/industries/education" },
        { name: "Government", href: "/industries/government" },
        { name: "NGOs", href: "/industries/ngos" },
        { name: "Hospitality", href: "/industries/hospitality" },
        { name: "Banking", href: "/industries/banking" },
        { name: "Manufacturing", href: "/industries/manufacturing" },
        { name: "Telecommunications", href: "/industries/telecom" },
        { name: "Logistics", href: "/industries/logistics" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Whitepapers", href: "/whitepapers" },
        { name: "Documentation", href: "/docs" },
        { name: "Guides", href: "/guides" },
        { name: "Knowledge Base", href: "/knowledge-base" },
        { name: "Downloads", href: "/downloads" },
        { name: "FAQs", href: "/faq" },
        { name: "Support Center", href: "/support" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Leadership", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
        { name: "Success Stories", href: "/success-stories" },
        { name: "Events", href: "/events" },
        { name: "Media Center", href: "/media" },
        { name: "News & Announcements", href: "/news" },
        { name: "Investors", href: "/investors" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Support", href: "/support/contact" },
        { name: "Submit Ticket", href: "/support/ticket" },
        { name: "Product Help Center", href: "/support/help" },
        { name: "Community Forum", href: "/support/forum" },
        { name: "Contact Sales", href: "/contact-sales" },
        { name: "Schedule Consultation", href: "/consultation" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Cookie Policy", href: "/cookie-policy" },
        { name: "Acceptable Use Policy", href: "/acceptable-use" },
        { name: "Disclaimer", href: "/disclaimer" },
        { name: "Accessibility Statement", href: "/accessibility" },
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-950 text-white pt-24 pb-8 relative overflow-hidden border-t border-white/10 mt-auto">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* FOOTER HERO SECTION & NEWSLETTER */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-20">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">Empowering Businesses <br/><span className="text-brand-green">Through Technology</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Gotecx, powered by iTech Network Africa, delivers innovative technology solutions that help businesses, organizations, governments, NGOs, startups, SMEs, and enterprises grow, automate, and scale globally.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-brand-green/20 rounded-full blur-[60px] pointer-events-none"></div>
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Stay Connected With Gotecx</h3>
            <p className="text-gray-400 mb-6 relative z-10">Get the latest insights on global technology innovation.</p>
            
            <div className="flex flex-col sm:flex-row gap-3 relative z-10">
              <input 
                type="email" 
                placeholder="Enterprise Email Address" 
                className="bg-black/50 border border-white/20 text-white placeholder:text-gray-500 px-6 py-4 rounded-xl w-full focus:outline-none focus:border-brand-green focus:bg-black/80 transition-all"
              />
              <Button className="bg-brand-green hover:bg-green-600 text-white rounded-xl h-[58px] px-8 shadow-lg shrink-0 font-bold whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4 relative z-10">By subscribing, you agree to our <Link href="/privacy-policy" className="underline hover:text-white">Privacy Policy</Link>.</p>
          </div>
        </div>

        {/* ACCORDION SECTIONS (Mobile) / HYBRID COLUMNS (Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 lg:gap-y-12 mb-20 border-y border-white/10 py-12">
          {footerData.map((section, idx) => (
            <div key={idx} className="border-b border-white/5 lg:border-none last:border-none pb-4 lg:pb-0">
              {/* Mobile Accordion Header */}
              <button 
                onClick={() => toggleSection(section.title)}
                className="lg:hidden w-full flex justify-between items-center py-2 text-left"
              >
                <h3 className="text-sm font-black tracking-widest uppercase text-white">{section.title}</h3>
                <ChevronDown className={`w-4 h-4 text-brand-green transition-transform duration-300 ${expandedSection === section.title ? "rotate-180" : ""}`} />
              </button>

              {/* Desktop Header */}
              <h3 className="hidden lg:block text-sm font-black tracking-widest uppercase mb-6 text-white">{section.title}</h3>

              {/* Links Content */}
              <AnimatePresence>
                {(expandedSection === section.title || typeof window !== 'undefined' && window.innerWidth >= 1024) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden lg:!h-auto lg:!opacity-100"
                  >
                    <ul className="space-y-3 text-sm text-gray-400 font-medium pt-2 lg:pt-0">
                      {section.links.map((link, linkIdx) => (
                        <li key={linkIdx}>
                          <Link href={link.href} className="hover:text-brand-green transition-colors block py-1">
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* BRAND & CONTACT SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-6">
              <img src="/images/gotecx-logo.png" alt="Gotecx Logo" className="h-12 w-auto bg-white p-2 rounded-xl shadow-lg" />
              <img src="/images/itech-logo.png" alt="iTech Network Africa Logo" className="h-12 w-auto bg-white p-1.5 rounded-xl shadow-lg" />
            </div>
            <div>
              <span className="text-xs font-bold text-brand-green tracking-[0.2em] uppercase block mb-1">Powered by iTech Network Africa</span>
              <span className="text-sm text-gray-400 block">Founded in Monrovia, Liberia</span>
              <span className="text-sm text-gray-400 block mt-2">Founder & Executive Director: <strong>Wilmot Kerkulah</strong></span>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:items-end">
            <div className="flex flex-wrap gap-4">
              <Link href="/contact-sales">
                <Button className="bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20">Contact Sales</Button>
              </Link>
              <Link href="/request-demo">
                <Button className="bg-brand-green hover:bg-green-600 text-white rounded-full">Request Demo</Button>
              </Link>
              <Link href="/become-partner">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-gray-900 rounded-full">Become a Partner</Button>
              </Link>
              <Link href="/careers">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-gray-900 rounded-full">Join Our Team</Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-gray-300">
              <a href="tel:+231776836689" className="flex items-center gap-2 hover:text-brand-green transition-colors">
                <Phone className="w-5 h-5 text-brand-green" /> +231 776 836 689
              </a>
              <a href="mailto:itechnetworkafrica@gmail.com" className="flex items-center gap-2 hover:text-brand-green transition-colors">
                <Mail className="w-5 h-5 text-brand-green" /> itechnetworkafrica@gmail.com
              </a>
            </div>
            
            <div className="flex gap-4">
              <span className="text-white font-bold mr-2 self-center">Follow Us</span>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white hover:border-brand-green hover:shadow-[0_0_15px_rgba(55,182,38,0.5)] transition-all hover:-translate-y-1"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white hover:border-brand-green hover:shadow-[0_0_15px_rgba(55,182,38,0.5)] transition-all hover:-translate-y-1"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white hover:border-brand-green hover:shadow-[0_0_15px_rgba(55,182,38,0.5)] transition-all hover:-translate-y-1"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white hover:border-brand-green hover:shadow-[0_0_15px_rgba(55,182,38,0.5)] transition-all hover:-translate-y-1"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium text-gray-500">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>© {new Date().getFullYear()} Gotecx. All Rights Reserved.</p>
            <p>Powered by iTech Network Africa.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 uppercase tracking-wider">
            <Link href="/privacy-policy" className="hover:text-brand-green transition-colors flex items-center gap-1">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-green transition-colors">Terms & Conditions</Link>
            <Link href="/cookie-policy" className="hover:text-brand-green transition-colors">Cookie Policy</Link>
            <Link href="/accessibility" className="hover:text-brand-green transition-colors">Accessibility</Link>
            <Link href="/sitemap" className="hover:text-brand-green transition-colors">Sitemap</Link>
          </div>
        </div>

        {/* Floating Back to Top Button */}
        <button 
          onClick={scrollToTop}
          className="absolute bottom-8 right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-brand-green hover:border-brand-green transition-all shadow-lg hover:-translate-y-2 group"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      </div>
    </footer>
  );
}
