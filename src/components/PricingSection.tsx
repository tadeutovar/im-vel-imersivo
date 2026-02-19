import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PricingSection = () => {
  const { t } = useLanguage();

  const plans = [
    {
      nameKey: "pricing.plan1.name",
      priceKey: "pricing.plan1.price",
      areaKey: "pricing.plan1.area",
      descKey: "pricing.plan1.desc",
      featureKeys: ["pricing.plan1.f1", "pricing.plan1.f2", "pricing.plan1.f3", "pricing.plan1.f4"],
      popular: false,
    },
    {
      nameKey: "pricing.plan2.name",
      priceKey: "pricing.plan2.price",
      areaKey: "pricing.plan2.area",
      descKey: "pricing.plan2.desc",
      featureKeys: ["pricing.plan2.f1", "pricing.plan2.f2", "pricing.plan2.f3", "pricing.plan2.f4"],
      popular: true,
    },
    {
      nameKey: "pricing.plan3.name",
      priceKey: "pricing.plan3.price",
      areaKey: "pricing.plan3.area",
      descKey: "pricing.plan3.desc",
      featureKeys: ["pricing.plan3.f1", "pricing.plan3.f2", "pricing.plan3.f3", "pricing.plan3.f4"],
      popular: false,
    },
  ];

  return (
    <section id="precos" className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase mb-4">
            {t("pricing.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-5">
            {t("pricing.title")}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {t("pricing.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 max-w-5xl mx-auto border border-border">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative p-10 flex flex-col ${
                index < plans.length - 1 ? "md:border-r border-border" : ""
              } ${index > 0 ? "border-t md:border-t-0 border-border" : ""} ${
                plan.popular ? "bg-foreground" : "bg-background"
              }`}
            >
              {plan.popular && (
                <span className="absolute top-6 right-6 text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground border border-border px-2 py-0.5">
                  {t("pricing.recommended")}
                </span>
              )}

              <div className="mb-8">
                <h3 className={`text-sm font-medium tracking-[0.15em] uppercase mb-6 ${
                  plan.popular ? "text-background/60" : "text-muted-foreground"
                }`}>
                  {t(plan.nameKey)}
                </h3>

                <div className="mb-2">
                  <span className={`text-xs ${plan.popular ? "text-background/50" : "text-muted-foreground"}`}>
                    {t("pricing.fromPrice")}
                  </span>
                  <div className={`text-3xl md:text-4xl font-display font-semibold mt-1 ${
                    plan.popular ? "text-background" : "text-foreground"
                  }`}>
                    {t(plan.priceKey)}
                  </div>
                </div>

                <p className={`text-xs mt-3 tracking-wide ${
                  plan.popular ? "text-background/50" : "text-muted-foreground"
                }`}>
                  {t(plan.areaKey)}
                </p>
              </div>

              <p className={`text-sm leading-relaxed mb-8 ${
                plan.popular ? "text-background/60" : "text-muted-foreground"
              }`}>
                {t(plan.descKey)}
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {plan.featureKeys.map((featureKey, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                      plan.popular ? "text-background/60" : "text-foreground"
                    }`} />
                    <span className={`text-sm ${
                      plan.popular ? "text-background/70" : "text-muted-foreground"
                    }`}>
                      {t(featureKey)}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "premium"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="#contato">{t("pricing.cta")}</a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-xs text-muted-foreground italic">
            {t("pricing.note")}
          </p>
          <p className="text-center text-xs text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t("pricing.footer")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
