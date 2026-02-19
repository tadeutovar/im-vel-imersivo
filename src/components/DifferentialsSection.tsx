import { motion } from "framer-motion";
import { Eye, Settings, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DifferentialsSection = () => {
  const { t } = useLanguage();

  const commitments = [
    { icon: Eye, titleKey: "diff.1.title", descKey: "diff.1.desc" },
    { icon: Settings, titleKey: "diff.2.title", descKey: "diff.2.desc" },
    { icon: Target, titleKey: "diff.3.title", descKey: "diff.3.desc" },
  ];

  return (
    <section className="py-28 md:py-36 bg-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block text-background/40 text-xs font-medium tracking-[0.3em] uppercase mb-4">
            {t("diff.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-background mb-5">
            {t("diff.title")}
          </h2>
          <p className="text-background/50 leading-relaxed text-sm">
            {t("diff.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16 max-w-4xl mx-auto">
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <item.icon className="w-5 h-5 text-background/50 mx-auto mb-5 stroke-[1.5]" />
              <h3 className="text-base font-display font-semibold text-background mb-3">
                {t(item.titleKey)}
              </h3>
              <p className="text-sm text-background/40 leading-relaxed">
                {t(item.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
