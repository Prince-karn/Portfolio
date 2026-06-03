import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUp, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Logo from "./Logo";
import { GithubIcon, LinkedinIcon } from "./Icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="relative text-white pt-16 sm:pt-24 pb-10 sm:pb-12 px-4 sm:px-6 overflow-hidden border-t border-white/5 bg-grid-pattern" style={{ background: "linear-gradient(to bottom, #070b16, #0d1430, #040710)" }}>
      {/* Animated Floating Orbs */}
      <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#FF6B00]/9 blur-[120px] pointer-events-none animate-float-light z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-green-500/8 blur-[110px] pointer-events-none animate-float-light-delayed z-0" />
      <div className="absolute top-[40%] right-[25%] w-[300px] h-[300px] rounded-full bg-indigo-500/7 blur-[90px] pointer-events-none animate-float-light-slow z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-12 pb-12 md:pb-16 border-b border-white/5">
          
          {/* Column 1: Logo & Slogan */}
          <div className="sm:col-span-2 md:col-span-5 space-y-5 md:space-y-6">
            <a href="#home" className="inline-block group">
              <Logo size="small" animated={true} className="transition-transform duration-300 group-hover:scale-105" />
            </a>
            <p className="text-gray-400 text-sm font-light max-w-sm leading-relaxed">
              {t.footer.description}
            </p>
            
            {/* Social Icons Links */}
            <div className="flex gap-3.5 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#FF6B00]/10 border border-white/5 hover:border-[#FF6B00]/30 text-gray-400 hover:text-[#FF6B00] flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#FF6B00]/10 border border-white/5 hover:border-[#FF6B00]/30 text-gray-400 hover:text-[#FF6B00] flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4 md:space-y-5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] font-bold">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-mono flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF6B00] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Global Hubs */}
          <div className="sm:col-span-2 md:col-span-4 space-y-4 md:space-y-5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-green-500 font-bold">
              {t.footer.hubs}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF6B00] mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold text-gray-200">{t.footer.indiaHub}</p>
                  <p className="text-xs text-gray-500 font-light mt-0.5">{t.footer.devHQ}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold text-gray-200">{t.footer.belgiumHub}</p>
                  <p className="text-xs text-gray-500 font-light mt-0.5">{t.footer.clientOps}</p>
                </div>
              </div>

              <a
                href="mailto:hello@404currynotfound.com"
                className="flex items-center gap-2 text-sm text-[#FF6B00] hover:underline pt-2 font-mono break-all"
              >
                <Mail className="w-4 h-4" />
                <span>hello@404currynotfound.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4 md:gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <p>© {currentYear} 404 Curry not Found. {t.footer.allRights}</p>
            <span className="hidden sm:inline text-white/10">|</span>
            <div className="flex items-center gap-4">
              <a href="#about" className="hover:text-[#FF6B00] transition-colors">{t.footer.privacy}</a>
              <a href="#contact" className="hover:text-green-500 transition-colors">{t.footer.terms}</a>
            </div>
          </div>

          {/* Made in India badge & Scroll to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 font-mono">
              <span>Made with</span>
              <span className="text-[#FF6B00]">🍛</span>
              <span>&amp;</span>
              <span className="text-green-500">&lt;/&gt;</span>
              <span>in India.</span>
            </div>

            <button
              onClick={handleScrollToTop}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-[#FF6B00]/10 border border-white/5 hover:border-[#FF6B00]/30 text-gray-400 hover:text-[#FF6B00] flex items-center justify-center transition-all duration-300"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
