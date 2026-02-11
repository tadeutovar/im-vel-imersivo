import { Instagram, Linkedin, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const navLinks = [
    { label: t("nav.benefits"), href: "#beneficios" },
    { label: t("nav.howItWorks"), href: "#como-funciona" },
    { label: t("nav.portfolio"), href: "#portfolio" },
    { label: t("nav.pricing"), href: "#precos" },
    { label: t("nav.faq"), href: "#faq" },
  ];

  return (
    <footer className="bg-navy-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">360</span>
              </div>
              <span className="font-display font-bold text-xl text-primary-foreground">
                {t("footer.brand")}
              </span>
            </div>
            <p className="text-primary-foreground/70 max-w-sm mb-4">
              {t("footer.desc")}
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">
              {t("footer.nav")}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <a
                  href="tel:+5521988840669"
                  className="hover:text-gold transition-colors"
                >
                  (21) 98884-0669
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@visitarestudio.com.br"
                  className="hover:text-gold transition-colors"
                >
                  contato@visitarestudio.com.br
                </a>
              </li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Visitare Studio. {t("footer.rights")}
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-gold transition-colors"
            >
              {t("footer.privacy")}
            </a>
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-gold transition-colors"
            >
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
