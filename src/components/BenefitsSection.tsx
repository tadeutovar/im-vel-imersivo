import { motion } from "framer-motion";
import {
  Eye,
  Clock,
  Award,
  TrendingUp,
  Globe,
  Smartphone,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: Eye, titleKey: "benefits.1.title", descKey: "benefits.1.desc" },
    { icon: Clock, titleKey: "benefits.2.title", descKey: "benefits.2.desc" },
    { icon: Award, titleKey: "benefits.3.title", descKey: "benefits.3.desc" },
    { icon: TrendingUp, titleKey: "benefits.4.title", descKey: "benefits.4.desc" },
    { icon: Globe, titleKey: "benefits.5.title", descKey: "benefits.5.desc" },
    { icon: Smartphone, titleKey: "benefits.6.title", descKey: "benefits.6.desc" },
  ];

  return (
    <section id="beneficios" className="py-28 md:py-36 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase mb-4">
            {t("benefits.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-5">
            {t("benefits.title")}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {t("benefits.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-background p-10 group"
            >
              <benefit.icon className="w-5 h-5 text-foreground mb-6 stroke-[1.5]" />
              <h3 className="text-base font-display font-semibold text-foreground mb-3">
                {t(benefit.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(benefit.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
