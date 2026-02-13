import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section id="contato" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-block text-accent text-xs font-medium tracking-[0.3em] uppercase mb-4">
            {t("cta.badge")}
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-5">
            {t("cta.title")}
          </h2>

          <p className="text-muted-foreground mb-12 leading-relaxed">
            {t("cta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://wa.me/5521988840669?text=Ol%C3%A1!%20Vi%20os%20planos%20no%20site%20e%20gostaria%20de%20confirmar%20o%20melhor%20para%20meu%20im%C3%B3vel%20e%20verificar%20disponibilidade."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                {t("cta.whatsapp")}
              </a>
            </Button>
            <Button variant="premium" size="xl" asChild>
              <a href="mailto:contato@visitarestudio.com.br">
                <Mail className="w-4 h-4" />
                {t("cta.email")}
              </a>
            </Button>
          </div>

          <div className="w-16 h-px bg-border mx-auto mb-10" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <a
              href="tel:+5521988840669"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" />
              (21) 98884-0669
            </a>
            <a
              href="mailto:contato@visitarestudio.com.br"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4 text-accent" />
              contato@visitarestudio.com.br
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
