import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PricingSection = () => {
  const { t } = useLanguage();

  const features = [
    "pricing.include.1",
    "pricing.include.2",
    "pricing.include.3",
    "pricing.include.4",
    "pricing.include.5",
    "pricing.include.6",
  ];

  return (
    <section id="precos" className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase mb-4">
              {t("pricing.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-5">
              {t("pricing.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm mb-12">
              {t("pricing.subtitle")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="border border-border p-10 md:p-14 text-left"
          >
            <ul className="space-y-4 mb-10">
              {features.map((key, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-4 h-4 shrink-0 mt-0.5 text-foreground" />
                  <span className="text-sm text-muted-foreground">{t(key)}</span>
                </li>
              ))}
            </ul>

            <Button variant="premium" size="lg" className="w-full" asChild>
              <a href="#contato">{t("pricing.cta")}</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
