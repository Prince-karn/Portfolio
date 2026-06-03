import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLang, setShowLang] = useState(false);
  
  const { language, setLanguage, t } = useLanguage();
  const dropdownRef = useRef(null);

  // Detect scroll to style navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close language dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowLang(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const languages = [
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "nl", label: "NL", flag: "🇳🇱" },
    { code: "fr", label: "FR", flag: "🇫🇷" },
    { code: "de", label: "DE", flag: "🇩🇪" },
    { code: "es", label: "ES", flag: "🇪🇸" },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  return (
    <>
      {/* Full-width, slim semi-transparent Fixed Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 px-6 md:px-12 flex justify-between items-center border-b ${
          isScrolled
            ? "backdrop-blur-md bg-slate-950/40 border-[#FF6B00]/15 shadow-[0_2px_15px_rgba(0,0,0,0.3)] py-1.5"
            : "bg-transparent border-transparent py-3"
        }`}
      >
        {/* Compact Logo representing 404 Curry not Found */}
        <a href="#home" className="flex items-center group py-0.5">
          <Logo size="small" animated={true} className="transition-transform duration-350 group-hover:scale-105" />
        </a>

        {/* Desktop Links with good spacing */}
        <ul className="hidden md:flex items-center gap-10 text-[12px] md:text-[12.5px] font-semibold tracking-wider">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-[#FF6B00] transition-colors duration-200 relative py-1 group font-mono"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Global Connection Badge, Language Selector & Mobile Menu CTA */}
        <div className="flex items-center gap-3.5">
          <div className="hidden lg:flex items-center gap-2 bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] px-3.5 py-1.5 rounded-full text-[10px] md:text-[10.5px] font-mono">
            <Globe className="w-3.5 h-3.5 animate-spin-slow" />
            <span>{t.nav.badge}</span>
          </div>

          {/* Language Selector Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowLang(!showLang)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white hover:border-[#FF6B00]/30 transition-all font-mono text-[11px] md:text-xs select-none"
            >
              <span>{currentLang.flag}</span>
              <span className="hidden sm:inline">{currentLang.label}</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showLang ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {showLang && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-32 rounded-2xl glass-panel border border-white/10 shadow-2xl py-1.5 z-50 overflow-hidden"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLang(false);
                      }}
                      className={`w-full flex items-center gap-2.5 px-4 py-2 text-left text-xs font-mono text-gray-300 hover:text-[#FF6B00] hover:bg-[#FF6B00]/5 transition-colors ${
                        language === lang.code ? "text-[#FF6B00] bg-[#FF6B00]/5 font-bold" : ""
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#contact" className="hidden md:block">
            <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B00] to-orange-600 text-white text-[11px] md:text-xs font-bold hover:shadow-[0_0_15px_rgba(255,107,0,0.35)] hover:scale-105 transition-all duration-200">
              {t.nav.cta}
            </button>
          </a>

          {/* Mobile Hamburguer Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Width Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.12 }}
            className={`fixed left-0 w-full z-40 bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 flex flex-col items-center py-4 px-6 gap-3.5 md:hidden shadow-2xl ${
              isScrolled ? "top-[68px]" : "top-[78px]"
            }`}
          >
            <ul className="flex flex-col items-center gap-2.5 w-full">
              {navLinks.map((link, idx) => (
                <li key={idx} className="w-full text-center">
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-200 hover:text-[#FF6B00] transition-colors block py-0.5 w-full font-mono text-[13px]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Inline Language Selector */}
            <div className="flex gap-2 border-t border-white/5 pt-3.5 w-full justify-center">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`px-3 py-1.5 rounded-xl border text-[11px] font-mono flex items-center gap-1.5 transition-all ${
                    language === lang.code
                      ? "bg-[#FF6B00]/10 border-[#FF6B00] text-[#FF6B00] font-bold"
                      : "bg-white/5 border-white/5 text-gray-300"
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>

            <a href="#contact" onClick={() => setIsOpen(false)} className="w-full max-w-[150px] mt-1">
              <button className="w-full py-2 rounded-full bg-gradient-to-r from-[#FF6B00] to-orange-600 text-white text-xs font-bold hover:shadow-[0_0_8px_rgba(255,107,0,0.2)] transition-all">
                {t.nav.cta}
              </button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 12s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;