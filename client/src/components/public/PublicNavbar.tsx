import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Menu, X, Search, ChevronDown, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PublicNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [location] = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setExpandedSection(null);
  };

  const menuData = [
    {
      title: "Home",
      links: [
        { name: "Home", href: "/" },
        { name: "Request Demo", href: "/request-demo" },
        { name: "Schedule Consultation", href: "/consultation" },
        { name: "Contact Sales", href: "/contact-sales" },
      ]
    },
    {
      title: "About",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Story", href: "/our-story" },
        { name: "Vision & Mission", href: "/vision-mission" },
        { name: "Founder Message", href: "/founder-message" },
        { name: "Leadership", href: "/team" },
        { name: "Company Timeline", href: "/timeline" },
        { name: "Global Presence", href: "/global-presence" },
        { name: "Why Gotecx", href: "/why-gotecx" },
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Business Solutions", href: "/solutions/business" },
        { name: "Retail Solutions", href: "/solutions/retail" },
        { name: "Restaurant Solutions", href: "/solutions/restaurant" },
        { name: "Healthcare Solutions", href: "/solutions/healthcare" },
        { name: "Education Solutions", href: "/solutions/education" },
        { name: "NGO Solutions", href: "/solutions/ngo" },
        { name: "Government Solutions", href: "/solutions/government" },
        { name: "Enterprise Solutions", href: "/solutions/enterprise" },
        { name: "SME Solutions", href: "/solutions/sme" },
        { name: "Technology Solutions", href: "/solutions/technology" },
        { name: "AI Solutions", href: "/solutions/ai" },
        { name: "Automation Solutions", href: "/solutions/automation" },
        { name: "Cloud Solutions", href: "/solutions/cloud" },
        { name: "Cybersecurity", href: "/solutions/cybersecurity" },
        { name: "Data Analytics", href: "/solutions/data" },
        { name: "Digital Transformation", href: "/solutions/transformation" },
      ]
    },
    {
      title: "Products",
      links: [
        { name: "Gotecx POS", href: "/pos-demo" },
        { name: "Product Features", href: "/products/features" },
        { name: "Product Documentation", href: "/products/docs" },
        { name: "Product Roadmap", href: "/products/roadmap" },
        { name: "Request Demo", href: "/request-demo" },
        { name: "Future Products", href: "/products/future" },
        { name: "Gotecx AI", href: "/products/ai", badge: "Coming Soon" },
        { name: "Gotecx CRM", href: "/products/crm", badge: "Coming Soon" },
        { name: "Gotecx ERP", href: "/products/erp", badge: "Coming Soon" },
        { name: "Gotecx Analytics", href: "/products/analytics", badge: "Coming Soon" },
        { name: "Gotecx Cloud", href: "/products/cloud", badge: "Coming Soon" },
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
        { name: "Enterprise Technology Consulting", href: "/services/enterprise-consulting" },
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
        { name: "Guides & E-books", href: "/guides" },
        { name: "FAQs", href: "/faq" },
        { name: "Knowledge Base", href: "/knowledge-base" },
        { name: "Downloads", href: "/downloads" },
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
        { name: "Schedule Consultation", href: "/consultation" },
        { name: "Contact Sales", href: "/contact-sales" },
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Request Demo", href: "/request-demo" },
        { name: "Become a Partner", href: "/become-partner" },
        { name: "Join Our Team", href: "/careers" },
        { name: "Phone: +231 776 836 689", href: "tel:+231776836689" },
        { name: "Email: itechnetworkafrica@gmail.com", href: "mailto:itechnetworkafrica@gmail.com" },
      ]
    }
  ];

  return (
    <>
    <header className="fixed top-0 w-full z-40 flex flex-col transition-all duration-300">
      {/* Top Utility Bar (Above Header) */}
      <div className={`w-full bg-brand-green/10 text-brand-green text-xs py-2 transition-all duration-300 border-b border-brand-green/20 ${scrolled ? "h-0 opacity-0 overflow-hidden py-0 border-transparent" : "opacity-100"}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer text-[10px] tracking-widest uppercase font-bold text-gray-300">
              <span className="text-brand-green">Powered by</span> iTech Network Africa
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-bold animate-pulse text-[10px] sm:text-xs tracking-widest uppercase hidden sm:block">Global Technology Ecosystem</span>
            <div className="flex items-center gap-3">
              <Link href="/support/contact" className="hover:text-white transition-colors">Support</Link>
              <span className="text-brand-green/50">|</span>
              <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
              <span className="text-brand-green/50">|</span>
              <Link href="/partners" className="hover:text-white transition-colors">Partners</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
        <nav
          className={`w-full transition-all duration-300 ${
            scrolled ? "bg-gray-950/95 backdrop-blur-xl shadow-lg border-b border-white/5 py-4" : "bg-transparent py-5"
          }`}
        >
          <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
            {/* Logo & Menu Trigger */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-brand-green group-hover:text-white transition-all group-hover:scale-105 shadow-lg">
                  <Menu className="w-5 h-5" />
                </div>
                <span className="text-white font-bold tracking-widest uppercase hidden sm:block group-hover:text-brand-green transition-colors">Menu</span>
              </button>

              <Link href="/">
                <div className="flex items-center gap-4 cursor-pointer group">
                  <div className="relative flex items-center justify-center bg-white p-1.5 rounded-xl shadow-lg">
                    <img src="/images/gotecx-logo.png" alt="Gotecx Logo" className="h-8 md:h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="hidden lg:flex flex-col">
                     <span className="font-black text-2xl tracking-tighter leading-none text-white">
                       GOTEC<span className="text-brand-green">X</span>
                     </span>
                     <span className="text-[9px] text-gray-400 tracking-[0.2em] font-bold uppercase mt-0.5">Powered by iTech Network Africa</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 items-center gap-2 text-gray-400 focus-within:ring-1 focus-within:ring-brand-green focus-within:border-brand-green transition-all cursor-text w-64">
                <Search className="w-4 h-4 shrink-0" />
                <input 
                  type="text" 
                  placeholder="Search Gotecx..." 
                  className="bg-transparent border-none outline-none text-sm text-white w-full placeholder:text-gray-500"
                />
              </div>

              {/* Mobile Get Started */}
              <Link href="/consultation">
                <Button
                  className="flex sm:hidden bg-brand-green hover:bg-green-600 text-white rounded-full font-bold shadow-lg shadow-brand-green/20 border-none text-xs h-8 px-4"
                >
                  Get Started
                </Button>
              </Link>

              <Link href="/consultation">
                <Button
                  className="hidden sm:flex bg-brand-green hover:bg-green-600 text-white rounded-full font-bold shadow-lg shadow-brand-green/20 border-none"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Slide-out Navigation Overlay & Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-gray-950/80 backdrop-blur-sm z-50"
            />

            {/* Sidebar */}
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-full lg:w-[600px] bg-gray-950 border-r border-white/10 z-50 flex flex-col shadow-2xl overflow-hidden"
            >
              {/* Sidebar Header */}
              <div className="p-6 md:p-8 flex justify-between items-center border-b border-white/10 relative">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-brand-green/10 rounded-full blur-[60px] pointer-events-none"></div>
                
                <div className="flex flex-col relative z-10">
                  <img src="/images/gotecx-logo.png" alt="Gotecx Logo" className="h-10 w-auto object-contain self-start bg-white p-1 rounded-lg mb-3" />
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.15em]">Powered by iTech Network Africa</span>
                </div>
                
                <div className="flex items-center gap-3 relative z-10">
                  <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <Search className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={closeMenu}
                    className="w-10 h-10 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Accordion Menu */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="p-6 md:p-8 flex flex-col gap-2">
                  {menuData.map((section, idx) => {
                    const isExpanded = expandedSection === section.title;
                    
                    return (
                      <div key={idx} className="border-b border-white/5 pb-2 last:border-0">
                        <button
                          onClick={() => toggleSection(section.title)}
                          className={`w-full flex justify-between items-center py-4 text-left transition-colors ${
                            isExpanded ? "text-brand-green" : "text-white hover:text-gray-300"
                          }`}
                        >
                          <span className="text-xl md:text-2xl font-bold uppercase tracking-tight">{section.title}</span>
                          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                        </button>
                        
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-1 pb-6 pt-2">
                                {section.links.map((link, linkIdx) => (
                                  <Link 
                                    key={linkIdx} 
                                    href={link.href}
                                    onClick={closeMenu}
                                    className={`flex items-center gap-3 py-2.5 px-4 rounded-xl transition-all group ${
                                      location === link.href ? "bg-white/10 text-white font-bold" : "text-gray-400 hover:text-white hover:bg-white/5"
                                    }`}
                                  >
                                    <ArrowRight className={`w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all ${
                                      location === link.href ? "opacity-100 ml-0 text-brand-green" : "text-brand-green"
                                    }`} />
                                    <span>{link.name}</span>
                                    {link.badge && (
                                      <span className="ml-auto text-[9px] font-black uppercase tracking-wider bg-brand-green/20 text-brand-green px-2 py-0.5 rounded-full">
                                        {link.badge}
                                      </span>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Sidebar Footer */}
              <div className="p-6 md:p-8 bg-gray-900 border-t border-white/10 relative z-10 flex flex-col gap-4">
                <Link href="/consultation">
                  <Button className="w-full bg-brand-green hover:bg-green-600 text-white rounded-full font-bold h-12 uppercase tracking-wide">
                    Schedule Consultation
                  </Button>
                </Link>
                <div className="flex justify-between items-center text-xs font-medium text-gray-500">
                  <span>© Gotecx {new Date().getFullYear()}</span>
                  <div className="flex items-center gap-3">
                    <button className="hover:text-white transition-colors">EN</button>
                    <span>|</span>
                    <button className="hover:text-white transition-colors">FR</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      {/* Add global styles for scrollbar in menu */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}} />
    </>
  );
}
