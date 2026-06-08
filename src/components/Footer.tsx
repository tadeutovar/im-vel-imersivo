import { Instagram, Linkedin, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();
  const phone = language === "pt" ? "+5521973596255" : "+447590124405";
  const phoneDisplay = language === "pt" ? "(21) 97359-6255" : "+44 7590 124405";

  const navLinks = [
    { label: t("nav.benefits"), href: "#beneficios" },
    { label: t("nav.howItWorks"), href: "#como-funciona" },
    { label: t("nav.portfolio"), href: "#portfolio" },
    { label: t("nav.pricing"), href: "#precos" },
    { label: t("nav.faq"), href: "#faq" },
  ];

  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <span className="font-display font-semibold text-xl text-foreground tracking-wide">
              {t("footer.brand")}
            </span>
            <p className="text-foreground/40 text-sm mt-4 max-w-sm leading-relaxed">
              {t("footer.desc")}
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-foreground/30 hover:text-foreground/70 transition-colors"
              >
                <Instagram className="w-4 h-4 stroke-[1.5]" />
              </a>
              <a
                href="#"
                className="text-foreground/30 hover:text-foreground/70 transition-colors"
              >
                <Linkedin className="w-4 h-4 stroke-[1.5]" />
              </a>
              <a
                href="#"
                className="text-foreground/30 hover:text-foreground/70 transition-colors"
              >
                <Facebook className="w-4 h-4 stroke-[1.5]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-4">
              {t("footer.nav")}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/30 hover:text-foreground/70 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-4">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3 text-sm text-foreground/30">
              <li>
                <a
                  href={`tel:${phone}`}
                  className="hover:text-foreground/70 transition-colors"
                >
                  {phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@visitarstudio.com"
                  className="hover:text-foreground/70 transition-colors"
                >
                  contact@visitarstudio.com
                </a>
              </li>
              
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/30 text-xs">
            © {currentYear} Visitar Studio. {t("footer.rights")}
          </p>
          <div className="flex gap-6 text-xs">
            <a
              href="#"
              className="text-foreground/20 hover:text-foreground/50 transition-colors"
            >
              {t("footer.privacy")}
            </a>
            <a
              href="#"
              className="text-foreground/20 hover:text-foreground/50 transition-colors"
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
