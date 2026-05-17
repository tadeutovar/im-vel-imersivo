import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/visitarstudio-logo-removebg.png";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language } = useLanguage();
  const phone = language === "pt" ? "+5521973596255" : "+447590124405";
  const waLink = `https://wa.me/${phone.replace(/\+/g, "")}`;

  const navLinks = [
    { href: "/imoveis", label: t("nav.imoveis"), type: "route" as const },
    { href: "/negocios", label: t("nav.negocios"), type: "route" as const },
    { href: "/#precos", label: t("nav.pricing"), type: "anchor" as const },
    { href: "/#faq", label: t("nav.faq"), type: "anchor" as const },
    { href: "/#contact", label: t("nav.contact"), type: "anchor" as const },
  ];

  const renderLink = (link: typeof navLinks[number], onClick?: () => void) => {
    const className =
      "text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide uppercase";
    if (link.type === "route") {
      return (
        <Link key={link.href} to={link.href} className={className} onClick={onClick}>
          {link.label}
        </Link>
      );
    }
    return (
      <a key={link.href} href={link.href} className={className} onClick={onClick}>
        {link.label}
      </a>
    );
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo Visitar Studio"
              className="w-10 h-10 object-contain"
            />
            <span className="font-display font-semibold text-xl text-foreground tracking-wide hidden sm:block">
              Visitar Studio
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => renderLink(link))}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSelector />
            <Button variant="premium" size="default" className="hidden sm:flex" asChild>
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                {t("nav.cta")}
              </a>
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
              {navLinks.map((link) => renderLink(link, () => setIsMenuOpen(false)))}
              <Button variant="premium" size="lg" className="mt-4" asChild>
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  {t("nav.cta")}
                </a>
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
