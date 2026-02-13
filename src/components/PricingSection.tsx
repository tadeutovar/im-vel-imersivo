import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PricingSection = () => {
  const { t } = useLanguage();

  const plans = [
    {
      nameKey: "pricing.plan1.name",
      price: "300",
      descKey: "pricing.plan1.desc",
      featureKeys: ["pricing.plan1.f1", "pricing.plan1.f2", "pricing.plan1.f3", "pricing.plan1.f4"],
      popular: false,
      totalPrice: undefined as string | undefined,
    },
    {
      nameKey: "pricing.plan2.name",
      price: "270",
      descKey: "pricing.plan2.desc",
      featureKeys: ["pricing.plan2.f1", "pricing.plan2.f2", "pricing.plan2.f3", "pricing.plan2.f4"],
      popular: true,
      totalPrice: "1.350",
    },
    {
      nameKey: "pricing.plan3.name",
      price: "250",
      descKey: "pricing.plan3.desc",
      featureKeys: ["pricing.plan3.f1", "pricing.plan3.f2", "pricing.plan3.f3", "pricing.plan3.f4"],
      popular: false,
      totalPrice: "2.500",
    },
  ];

  return (
    <section id="precos" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block text-accent text-xs font-medium tracking-[0.3em] uppercase mb-4">
            {t("pricing.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-5">
            {t("pricing.title")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("pricing.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative p-10 ${
                plan.popular
                  ? "bg-foreground text-background"
                  : "bg-background"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-px bg-accent" />
              )}

              <div className="mb-8">
                <h3
                  className={`text-base font-medium tracking-wide uppercase mb-6 ${
                    plan.popular ? "text-accent" : "text-accent"
                  }`}
                >
                  {t(plan.nameKey)}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-xs ${plan.popular ? "text-background/60" : "text-muted-foreground"}`}>
                    R$
                  </span>
                  <span className={`text-4xl font-display font-semibold ${plan.popular ? "text-background" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                </div>
                <p className={`text-xs mt-1 ${plan.popular ? "text-background/50" : "text-muted-foreground"}`}>
                  {t("pricing.perTour")}
                </p>
                {plan.totalPrice && (
                  <p className={`text-xs mt-1 ${plan.popular ? "text-background/40" : "text-muted-foreground/70"}`}>
                    {t("pricing.total")}: R$ {plan.totalPrice}
                  </p>
                )}
              </div>

              <p className={`text-sm mb-8 leading-relaxed ${plan.popular ? "text-background/70" : "text-muted-foreground"}`}>
                {t(plan.descKey)}
              </p>

              <ul className="space-y-3 mb-10">
                {plan.featureKeys.map((featureKey, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? "text-accent" : "text-accent"}`} />
                    <span className={`text-sm ${plan.popular ? "text-background/80" : "text-muted-foreground"}`}>
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

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto"
        >
          {t("pricing.footer")}
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
