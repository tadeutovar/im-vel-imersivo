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
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <span className="font-display font-semibold text-xl text-background tracking-wide">
              {t("footer.brand")}
            </span>
            <p className="text-background/50 text-sm mt-4 max-w-sm leading-relaxed">
              {t("footer.desc")}
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-background/40 hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5 stroke-[1.5]" />
              </a>
              <a
                href="#"
                className="text-background/40 hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5 stroke-[1.5]" />
              </a>
              <a
                href="#"
                className="text-background/40 hover:text-accent transition-colors"
              >
                <Facebook className="w-5 h-5 stroke-[1.5]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-background/60 mb-4">
              {t("footer.nav")}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/40 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-background/60 mb-4">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3 text-sm text-background/40">
              <li>
                <a
                  href="tel:+5521988840669"
                  className="hover:text-accent transition-colors"
                >
                  (21) 98884-0669
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@visitarestudio.com.br"
                  className="hover:text-accent transition-colors"
                >
                  contato@visitarestudio.com.br
                </a>
              </li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/30 text-xs">
            © {currentYear} Visitare Studio. {t("footer.rights")}
          </p>
          <div className="flex gap-6 text-xs">
            <a
              href="#"
              className="text-background/30 hover:text-accent transition-colors"
            >
              {t("footer.privacy")}
            </a>
            <a
              href="#"
              className="text-background/30 hover:text-accent transition-colors"
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
