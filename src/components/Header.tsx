import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/visitare-logo1.png";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "#beneficios", label: t("nav.benefits") },
    { href: "#como-funciona", label: t("nav.howItWorks") },
    { href: "#portfolio", label: t("nav.portfolio") },
    { href: "#precos", label: t("nav.pricing") },
    { href: "#faq", label: t("nav.faq") },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo Visitare Studio"
              className="w-10 h-10 object-contain"
            />
            <span className="font-display font-semibold text-xl text-foreground tracking-wide hidden sm:block">
              Visitare Studio
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSelector />
            <Button variant="premium" size="default" className="hidden sm:flex" asChild>
              <a href="#contato">{t("nav.cta")}</a>
            </Button>

            <button
              className="lg:hidden p-2 hover:bg-secondary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden py-6 border-t border-border"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide uppercase py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="premium" size="lg" className="mt-4" asChild>
                <a href="#contato">{t("nav.cta")}</a>
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
