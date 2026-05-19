import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { useLanguage } from "@/contexts/LanguageContext";

type Region = "BR" | "EU";

const pricing = {
  BR: {
    residential: { price: "R$ 1.490" },
    production: { price: "R$ 99" },
    plans: {
      monthly: { price: "R$ 27" },
      annualMonthly: { price: "R$ 18", total: "R$ 216" },
      annual: { price: "R$ 199", equivalent: "R$ 16,58" },
    },
  },
  EU: {
    residential: { price: "490 €" },
    production: { price: "99 €" },
    plans: {
      monthly: { price: "27 €" },
      annualMonthly: { price: "18 €", total: "216 €" },
      annual: { price: "199 €", equivalent: "16,58 €" },
    },
  },
} as const;

const residentialFeatures = [
  "pricingPage.residential.feature.1",
  "pricingPage.residential.feature.2",
  "pricingPage.residential.feature.3",
  "pricingPage.residential.feature.4",
  "pricingPage.residential.feature.5",
  "pricingPage.residential.feature.6",
  "pricingPage.residential.feature.7",
];

const freeItems = [
  "pricingPage.demo.feature.1",
  "pricingPage.demo.feature.2",
  "pricingPage.demo.feature.3",
  "pricingPage.demo.feature.4",
  "pricingPage.demo.feature.5",
  "pricingPage.demo.feature.6",
];

const productionItems = [
  "pricingPage.production.feature.1",
  "pricingPage.production.feature.2",
  "pricingPage.production.feature.3",
  "pricingPage.production.feature.4",
  "pricingPage.production.feature.5",
  "pricingPage.production.feature.6",
  "pricingPage.production.feature.7",
];

const Pricing = () => {
  const { t } = useLanguage();
  const [region, setRegion] = useState<Region>("EU");
  const p = pricing[region];
  const format = (key: string, values: Record<string, string>) =>
    Object.entries(values).reduce(
      (text, [name, value]) => text.replace(`{${name}}`, value),
      t(key)
    );

  const plans = [
    {
      title: t("pricingPage.plans.monthly.title"),
      subtitle: t("pricingPage.plans.monthly.subtitle"),
      price: p.plans.monthly.price,
      period: t("pricingPage.period.month"),
      support: null as string | null,
      features: [
        t("pricingPage.plans.monthly.feature.1"),
        t("pricingPage.plans.monthly.feature.2"),
        t("pricingPage.plans.monthly.feature.3"),
        t("pricingPage.plans.monthly.feature.4"),
      ],
      note: null as string | null,
      highlighted: false,
    },
    {
      title: t("pricingPage.plans.annualMonthly.title"),
      subtitle: t("pricingPage.plans.annualMonthly.subtitle"),
      price: p.plans.annualMonthly.price,
      period: t("pricingPage.period.month"),
      support: format("pricingPage.plans.annualMonthly.total", {
        amount: p.plans.annualMonthly.total,
      }),
      features: [
        t("pricingPage.plans.shared.monthlyIncluded"),
        t("pricingPage.plans.annualMonthly.feature.1"),
      ],
      note: t("pricingPage.plans.annualMonthly.note"),
      highlighted: true,
    },
    {
      title: t("pricingPage.plans.annual.title"),
      subtitle: t("pricingPage.plans.annual.subtitle"),
      price: p.plans.annual.price,
      period: t("pricingPage.period.year"),
      support: format("pricingPage.plans.annual.equivalent", {
        amount: p.plans.annual.equivalent,
      }),
      features: [
        t("pricingPage.plans.shared.monthlyIncluded"),
        t("pricingPage.plans.annual.feature.1"),
      ],
      note: null,
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-20 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase mb-8"
              >
                {t("pricingPage.hero.badge")}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-6 leading-[1.1]"
              >
                {t("pricingPage.hero.title")}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-lg text-muted-foreground mb-6 font-light leading-relaxed"
              >
                {t("pricingPage.hero.subtitle")}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm text-muted-foreground/80 font-light leading-relaxed max-w-xl mx-auto"
              >
                {t("pricingPage.hero.note")}
              </motion.p>
            </div>

            {/* Region selector */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center mt-12"
            >
              <div className="inline-flex border border-border">
                {(["BR", "EU"] as Region[]).map((r) => (
                  <button
                    key={r}
                    onClick={() => setRegion(r)}
                    className={`px-6 py-3 text-xs tracking-[0.2em] uppercase transition-colors ${
                      region === r
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {r === "BR" ? "Brasil 🇧🇷" : "Europa 🇪🇺"}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Residential */}
        <section className="py-20 md:py-28 bg-section-alt">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="inline-block text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase mb-4">
                {t("pricingPage.residential.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-5">
                {t("pricingPage.residential.title")}
              </h2>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                {t("pricingPage.residential.subtitle")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-background border border-border p-10 md:p-14">
                <div className="text-center mb-10">
                  <span className="text-4xl md:text-5xl font-display font-semibold text-foreground">
                    {p.residential.price}
                  </span>
                  <p className="text-xs text-muted-foreground mt-3 tracking-[0.2em] uppercase">
                    {t("pricingPage.residential.priceLabel")}
                  </p>
                </div>
                <div className="border-t border-border pt-10">
                  <ul className="space-y-4">
                    {residentialFeatures.map((key) => (
                      <li key={key} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-foreground mt-0.5 stroke-[1.5] shrink-0" />
                        <span className="text-sm text-foreground/80 leading-relaxed">
                          {t(key)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-border pt-8 mt-10">
                  <p className="text-xs text-muted-foreground italic leading-relaxed">
                    {t("pricingPage.residential.note")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Business header */}
        <section className="pt-20 md:pt-28 pb-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <span className="inline-block text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase mb-4">
                {t("pricingPage.business.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-5">
                {t("pricingPage.business.title")}
              </h2>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                {t("pricingPage.business.subtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mini Tour Gratuito */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-background border border-border p-10 md:p-14"
              >
                <span className="inline-block text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase mb-6">
                  {t("pricingPage.demo.badge")}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
                  {t("pricingPage.demo.title")}
                </h3>
                <p className="text-sm text-muted-foreground mb-10">
                  {t("pricingPage.demo.subtitle")}
                </p>
                <ul className="space-y-4 mb-10">
                  {freeItems.map((key) => (
                    <li key={key} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-foreground mt-0.5 stroke-[1.5] shrink-0" />
                      <span className="text-sm text-foreground/80 leading-relaxed">
                        {t(key)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border pt-8">
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    {t("pricingPage.demo.note")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Taxa Inicial de Produção */}
        <section className="py-20 md:py-28 bg-section-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase mb-6">
                  {t("pricingPage.production.badge")}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
                  {t("pricingPage.production.title")}
                </h3>
                <p className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
                  {format("pricingPage.production.from", { amount: p.production.price })}
                </p>
                <p className="text-sm text-muted-foreground mb-10 leading-relaxed max-w-2xl">
                  {t("pricingPage.production.subtitle")}
                </p>
                <div className="border-t border-border pt-10">
                  <ul className="space-y-4">
                    {productionItems.map((key) => (
                      <li key={key} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-foreground mt-0.5 stroke-[1.5] shrink-0" />
                        <span className="text-sm text-foreground/80 leading-relaxed">
                          {t(key)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Planos de Hospedagem */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-20"
            >
              <span className="inline-block text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase mb-4">
                {t("pricingPage.hosting.badge")}
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-5">
                {t("pricingPage.hosting.title")}
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-px bg-border max-w-6xl mx-auto">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`bg-background p-10 md:p-12 flex flex-col ${
                    plan.highlighted ? "md:-my-4 md:py-14 ring-1 ring-foreground relative z-10" : ""
                  }`}
                >
                  {plan.highlighted && (
                    <span className="inline-block text-foreground text-[10px] font-medium tracking-[0.3em] uppercase mb-4">
                      {t("pricingPage.plans.recommended")}
                    </span>
                  )}
                  <h4 className="text-lg font-display font-semibold text-foreground mb-2">
                    {plan.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-8 tracking-wide uppercase">
                    {plan.subtitle}
                  </p>
                  <div className="mb-2">
                    <span className="text-4xl font-display font-semibold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground ml-1">
                      {plan.period}
                    </span>
                  </div>
                  {plan.support && (
                    <p className="text-xs text-muted-foreground mb-8">
                      {plan.support}
                    </p>
                  )}
                  <div className="border-t border-border pt-8 mt-6 flex-1">
                    <ul className="space-y-4">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-foreground mt-0.5 stroke-[1.5] shrink-0" />
                          <span className="text-sm text-foreground/80 leading-relaxed">
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {plan.note && (
                    <p className="text-xs text-muted-foreground italic leading-relaxed border-t border-border pt-6 mt-8">
                      {plan.note}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs text-muted-foreground text-center max-w-2xl mx-auto mt-16 leading-relaxed"
            >
              {t("pricingPage.hosting.note")}
            </motion.p>
          </div>
        </section>

        <ContactSection variant="alt" />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
