import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t, language } = useLanguage();
  const phone = language === "pt" ? "+5521973596255" : "+447590124405";
  const phoneDisplay = language === "pt" ? "(21) 97359-6255" : "+44 7590 124405";
  const waLink = `https://wa.me/${phone.replace(/\+/g, "")}?`;

  return (
    <section id="contato" className="py-28 md:py-36 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-block text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase mb-4">
            {t("cta.badge")}
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-5">
            {t("cta.title")}
          </h2>

          <p className="text-muted-foreground mb-12 leading-relaxed text-sm">
            {t("cta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="xl" asChild>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                {t("cta.whatsapp")}
              </a>
            </Button>
            <Button variant="premium" size="xl" asChild>
              <a href="mailto:contact@visitarstudio.com">
                <Mail className="w-4 h-4" />
                {t("cta.email")}
              </a>
            </Button>
          </div>

          <div className="w-12 h-px bg-border mx-auto mb-10" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {phoneDisplay}
            </a>
            <a
              href="mailto:contact@visitarstudio.com"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              contact@visitarstudio.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
