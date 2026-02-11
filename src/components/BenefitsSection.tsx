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
    <section id="beneficios" className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t("benefits.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {t("benefits.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("benefits.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-gold/30"
            >
              <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {t(benefit.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
