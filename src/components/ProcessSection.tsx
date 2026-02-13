import { motion } from "framer-motion";
import {
  CalendarCheck,
  Camera,
  Palette,
  Layers,
  Share2,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProcessSection = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: CalendarCheck, step: "01", titleKey: "process.1.title", descKey: "process.1.desc" },
    { icon: Camera, step: "02", titleKey: "process.2.title", descKey: "process.2.desc" },
    { icon: Palette, step: "03", titleKey: "process.3.title", descKey: "process.3.desc" },
    { icon: Layers, step: "04", titleKey: "process.4.title", descKey: "process.4.desc" },
    { icon: Share2, step: "05", titleKey: "process.5.title", descKey: "process.5.desc" },
  ];

  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block text-accent text-xs font-medium tracking-[0.3em] uppercase mb-4">
            {t("process.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-5">
            {t("process.title")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("process.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-0 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative text-center px-4 py-8"
            >
              <div className="text-accent text-xs tracking-[0.2em] font-medium mb-4">
                {step.step}
              </div>

              <step.icon className="w-6 h-6 text-foreground mx-auto mb-4 stroke-[1.5]" />

              <h3 className="text-base font-display font-semibold text-foreground mb-2">
                {t(step.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(step.descKey)}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-0 w-8 h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-16 max-w-xl mx-auto"
        >
          {t("process.footer")}
        </motion.p>
      </div>
    </section>
  );
};

export default ProcessSection;
