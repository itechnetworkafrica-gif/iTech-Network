import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Menu, X, Globe, Phone, Mail, MapPin, ChevronRight, LayoutDashboard, ShoppingBag, CreditCard, Users, Briefcase, Cpu, Code, Building, Lightbulb, GraduationCap, Server, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function PublicNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [location] = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Company", 
      isDropdown: true,
      items: [
        { name: "About Us", href: "/about", icon: Building, desc: "Our global mission" },
        { name: "Our Story", href: "/about#story", icon: Globe, desc: "How we started" },
        { name: "Leadership", href: "/team", icon: Users, desc: "Meet our executives" },
        { name: "Global Strategy", href: "/about#strategy", icon: Briefcase, desc: "Our worldwide approach" },
      ]
    },
    { 
      name: "Gotecx", 
      isDropdown: true,
      items: [
        { name: "About Gotecx", href: "/about", icon: Cpu, desc: "The technology ecosystem" },
        { name: "Innovation Lab", href: "/services#lab", icon: Lightbulb, desc: "R&D and future tech" },
        { name: "Ecosystem", href: "/#ecosystem", icon: LayoutDashboard, desc: "Our interconnected platforms" },
      ]
    },
    { 
      name: "Solutions", 
      isDropdown: true,
      items: [
        { name: "Enterprise Software", href: "/services", icon: Code, desc: "Custom development" },
        { name: "Cloud Services", href: "/services", icon: Server, desc: "Infrastructure and scaling" },
        { name: "Digital Transformation", href: "/services", icon: Zap, desc: "Modernize your business" },
      ]
    },
    { 
      name: "Products", 
      isDropdown: true,
      items: [
        { name: "Gotecx POS", href: "/pos-demo", icon: CreditCard, desc: "Smart retail system" },
        { name: "Gotecx AI", href: "/services", icon: Cpu, desc: "Intelligent automation" },
        { name: "Client Portal", href: "/dashboard", icon: LayoutDashboard, desc: "Manage your projects" },
        { name: "Digital Store", href: "/store", icon: ShoppingBag, desc: "Tech assets & templates" },
      ]
    },
    { name: "Partners", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="fixed top-0 w-full z-50 flex flex-col transition-all duration-300">
      {/* Top Utility Bar */}
      <div className={`w-full bg-gray-950 text-gray-300 text-xs py-2 transition-all duration-300 ${scrolled ? "h-0 opacity-0 overflow-hidden py-0" : "opacity-100"}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6 hidden sm:flex">
            <div className="flex items-center gap-2 hover:text-brand-green transition-colors cursor-pointer text-[10px] tracking-wider uppercase font-bold text-gray-400">
              <span className="text-brand-green">Powered by</span> iTech Network Africa
            </div>
          </div>
          <div className="flex items-center gap-4 w-full justify-between sm:w-auto sm:justify-end">
            <span className="font-bold text-brand-green animate-pulse text-xs tracking-widest uppercase">Global Technology Ecosystem</span>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-white transition-colors hidden md:block">Support</a>
              <span className="text-gray-700 hidden md:block">|</span>
              <a href="#" className="hover:text-white transition-colors hidden md:block">Careers</a>
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
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="relative flex items-center justify-center bg-white p-1.5 rounded-xl shadow-lg">
                <img src="/images/gotecx-logo.png" alt="Gotecx Logo" className="h-8 md:h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-brand-green/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="hidden sm:flex flex-col">
                 <span className={`font-black text-2xl tracking-tighter leading-none ${scrolled ? "text-white" : "text-white"}`}>
                   GOTEC<span className="text-brand-green">X</span>
                 </span>
                 <span className="text-[9px] text-gray-400 tracking-[0.2em] font-bold uppercase mt-0.5">Global Ecosystem</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav - Modern Tech Slider */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.isDropdown && setActiveMenu(link.name)}
                onMouseLeave={() => link.isDropdown && setActiveMenu(null)}
              >
                {link.isDropdown ? (
                  <button
                    className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-colors flex items-center gap-1.5 ${
                      activeMenu === link.name
                        ? "text-brand-green bg-white/10"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === link.name ? "rotate-90" : "rotate-0"}`} />
                    
                    {/* Active indicator pill */}
                    {activeMenu === link.name && (
                      <motion.div 
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-white/5 rounded-full border border-white/10 -z-10"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                  </button>
                ) : (
                  <Link 
                    href={link.href!}
                    className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-colors block ${
                      location === link.href
                        ? "text-brand-green bg-brand-green/10"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                    {location === link.href && (
                      <motion.div 
                        layoutId="nav-indicator"
                        className="absolute inset-0 border-b-2 border-brand-green rounded-full -z-10 bg-brand-green/5"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.isDropdown && (
                  <AnimatePresence>
                    {activeMenu === link.name && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[320px]"
                      >
                        <div className="bg-gray-950 rounded-2xl shadow-2xl border border-white/10 p-2 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-b from-brand-green/10 to-transparent pointer-events-none"></div>
                          {link.items?.map((item) => (
                            <Link key={item.name} href={item.href}>
                              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors border border-white/10">
                                  <item.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                </div>
                                <div>
                                  <div className="font-bold text-white text-sm group-hover:text-brand-green transition-colors">{item.name}</div>
                                  <div className="text-xs text-gray-500 leading-tight mt-0.5">{item.desc}</div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact">
              <Button
                variant="outline"
                className="font-bold rounded-full border border-white/20 text-white hover:bg-white hover:text-gray-900 bg-white/5 backdrop-blur-sm transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]"
              >
                Book Consultation
              </Button>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 hover:text-white rounded-full border border-transparent hover:border-white/10"
                >
                  <Globe className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-xl bg-gray-950 border-white/10 text-white">
                <DropdownMenuItem onClick={() => changeLanguage("en")} className="font-medium cursor-pointer rounded-lg focus:bg-brand-green/20 focus:text-brand-green">English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("fr")} className="font-medium cursor-pointer rounded-lg focus:bg-brand-green/20 focus:text-brand-green">Français</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 rounded-full backdrop-blur-sm border transition-colors ${
              scrolled 
                ? "text-white border-white/20 bg-white/5" 
                : "text-white border-white/20 bg-black/20"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Tech Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-gray-950 z-40 flex flex-col"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-green/20 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="p-6 flex justify-between items-center relative z-10 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="bg-white p-1.5 rounded-lg">
                  <img src="/images/gotecx-logo.png" alt="Logo" className="h-6 w-auto" />
                </div>
                <span className="font-black text-xl text-white tracking-tight">GOTEC<span className="text-brand-green">X</span></span>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-gray-400 hover:text-white bg-white/10 p-2.5 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6 relative z-10">
              {navLinks.map((link, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name} 
                  className="border-b border-white/5 pb-4 last:border-0"
                >
                  {link.isDropdown ? (
                    <div className="space-y-4">
                      <div className="text-brand-green text-xs font-black uppercase tracking-widest">{link.name}</div>
                      <div className="grid grid-cols-1 gap-3">
                        {link.items?.map(item => (
                          <Link 
                            key={item.name} 
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl active:bg-brand-green/20 transition-colors border border-white/5"
                          >
                            <div className="w-10 h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 border border-brand-green/20">
                              <item.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-white font-bold">{item.name}</div>
                              <div className="text-gray-400 text-xs">{item.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={link.href!}
                      className="flex items-center justify-between text-white font-bold text-2xl py-2 group"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-6 h-6 text-brand-green opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
            
            <div className="p-6 border-t border-white/10 space-y-4 bg-black relative z-10">
              <Link href="/contact">
                <Button className="w-full bg-brand-green hover:bg-green-700 text-white rounded-full font-bold h-14 text-lg">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
