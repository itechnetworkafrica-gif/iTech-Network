import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Menu, X, Globe } from "lucide-react";
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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center transform rotate-3">
              <span className="text-white font-bold text-xl">iT</span>
            </div>
            <span className={`font-bold text-xl tracking-tight ${scrolled ? "text-foreground" : "text-white"}`}>
              iTech Network
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={`text-sm font-medium transition-colors hover:text-brand-orange ${
                  location === link.href
                    ? "text-brand-orange"
                    : scrolled
                    ? "text-foreground"
                    : "text-white/90"
                }`}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
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
              className={`font-semibold ${
                scrolled
                  ? "bg-brand-teal text-white hover:bg-brand-teal/90"
                  : "bg-white text-brand-teal hover:bg-gray-100"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className="text-foreground font-medium py-2 border-b border-gray-100 block"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Link href="/dashboard">
            <Button className="w-full bg-brand-teal text-white mt-2">Client Portal</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
