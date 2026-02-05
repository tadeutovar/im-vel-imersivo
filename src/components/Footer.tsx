import { Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
                Visitare Studio
              </span>
            </div>
            <p className="text-primary-foreground/70 max-w-sm mb-4">
              Especialistas em tours virtuais e fotografias 360° para o mercado
              imobiliário. Transforme a apresentação dos seus imóveis.
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
              Navegação
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Benefícios", href: "#beneficios" },
                { label: "Como Funciona", href: "#como-funciona" },
                { label: "Portfólio", href: "#portfolio" },
                { label: "Preços", href: "#precos" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
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
              Contato
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
            © {currentYear} Visitare Studio. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-gold transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-primary-foreground/50 hover:text-gold transition-colors"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
