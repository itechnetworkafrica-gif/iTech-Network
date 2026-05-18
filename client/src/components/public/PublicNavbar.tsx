import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Menu, X, Globe, Phone, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function PublicNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40); // Increased because of the top bar
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
    { name: "Verify Cert", href: "/verify-certificate" },
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
            <div className="flex items-center gap-2 hover:text-brand-green transition-colors cursor-pointer">
              <Phone className="w-3 h-3 text-brand-green" /> +231 555 770 641
            </div>
            <div className="flex items-center gap-2 hover:text-brand-green transition-colors cursor-pointer">
              <Mail className="w-3 h-3 text-brand-green" /> info@itechnetwork.africa
            </div>
            <div className="flex items-center gap-2 hover:text-brand-green transition-colors cursor-pointer">
              <MapPin className="w-3 h-3 text-brand-green" /> Monrovia, Liberia
            </div>
          </div>
          <div className="flex items-center gap-4 w-full justify-between sm:w-auto sm:justify-end">
            <span className="font-bold text-brand-green animate-pulse">NEW: African Tech Innovation Lab Now Open</span>
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
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src="/images/logo-new.png" alt="iTech Network Africa Logo" className="h-10 w-auto" />
              <span className={`font-bold text-xl tracking-tight hidden sm:block ${scrolled ? "text-foreground" : "text-white"}`}>
                iTech Network
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-bold transition-colors hover:text-brand-green ${
                  location === link.href
                    ? "text-brand-green"
                    : scrolled
                    ? "text-gray-700"
                    : "text-white/90"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <Button
                variant="outline"
                className={`font-semibold rounded-full border-2 ${
                  scrolled
                    ? "border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-brand-green bg-transparent"
                }`}
              >
                Speak with Expert
              </Button>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={scrolled ? "text-foreground" : "text-white hover:bg-white/10 hover:text-white"}
                >
                  <Globe className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage("en")}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("fr")}>Français</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("es")}>Español</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/dashboard">
              <Button
                className={`font-semibold rounded-full px-6 ${
                  scrolled
                    ? "bg-brand-green text-white hover:bg-brand-green/90"
                    : "bg-white text-brand-green hover:bg-gray-100"
                }`}
              >
                Client Portal
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Right Slide */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
      <div 
        className={`md:hidden fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-100 bg-gray-950">
          <span className="font-bold text-xl tracking-tight text-white">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white bg-white/10 p-2 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2 bg-white">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-gray-50 last:border-0">
              <Link 
                href={link.href}
                className="flex items-center justify-between text-gray-800 font-bold py-4 px-2 hover:text-brand-green transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span>{link.name}</span>
                <span className="text-brand-green text-xl font-light">+</span>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="p-6 border-t border-gray-100 space-y-4 bg-gray-50">
          <Link href="/contact">
            <Button variant="outline" className="w-full border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white rounded-full font-bold h-12">
              Speak with Expert
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button className="w-full bg-brand-green text-white rounded-full font-bold shadow-lg shadow-brand-green/20 h-12">
              Client Portal
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
