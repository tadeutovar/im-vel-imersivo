import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Tour Virtual Completo",
      price: "300",
      priceLabel: "por tour",
      description:
        "Captação das imagens 360°, edição profissional, criação do tour virtual interativo e entrega do link pronto para uso.",
      features: [
        "Captação das imagens 360°",
        "Edição profissional",
        "Tour virtual interativo",
        "Link pronto para uso",
      ],
      popular: false,
    },
    {
      name: "Pacote com 5 Tours Virtuais",
      price: "270",
      priceLabel: "por tour",
      description:
        "Conjunto de cinco tours virtuais completos, com todas as etapas incluídas e valor reduzido por unidade.",
      features: [
        "5 tours virtuais completos",
        "Captação e edição incluídas",
        "Links individuais por imóvel",
        "Valor reduzido por unidade",
      ],
      popular: true,
    },
    {
      name: "Pacote com 10 Tours Virtuais",
      price: "250",
      priceLabel: "por tour",
      totalPrice: "2.500",
      description:
        "Pacote econômico para quem deseja padronizar vários imóveis com apresentação profissional.",
      features: [
        "10 tours virtuais completos",
        "Captação e edição incluídas",
        "Links individuais por imóvel",
        "Melhor custo-benefício",
      ],
      popular: false,
    },
  ];

  return (
    <section id="precos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-gold/10 text-gold-dark px-4 py-2 rounded-full text-sm font-medium mb-4">
            Investimento
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Planos e Investimento
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos planos simples e transparentes, com valores definidos por
            tour virtual completo, garantindo previsibilidade e excelente
            custo-benefício.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-gradient-hero border-2 border-gold shadow-gold scale-105"
                  : "bg-card border border-border shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-gradient-gold px-4 py-1 rounded-full text-sm font-bold text-accent-foreground">
                    <Star className="w-4 h-4" />
                    Recomendado
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3
                  className={`text-xl font-display font-bold mb-2 ${
                    plan.popular ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span
                    className={`text-sm ${
                      plan.popular
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    R$
                  </span>
                  <span
                    className={`text-4xl font-display font-bold ${
                      plan.popular ? "text-gold" : "text-foreground"
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>
                <p
                  className={`text-sm mt-1 ${
                    plan.popular
                      ? "text-primary-foreground/60"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.priceLabel}
                </p>
                {plan.totalPrice && (
                  <p
                    className={`text-xs mt-1 ${
                      plan.popular
                        ? "text-primary-foreground/50"
                        : "text-muted-foreground/70"
                    }`}
                  >
                    Total: R$ {plan.totalPrice}
                  </p>
                )}
              </div>

              <p
                className={`text-sm mb-6 text-center ${
                  plan.popular
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 shrink-0 mt-0.5 ${
                        plan.popular ? "text-gold" : "text-gold-dark"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.popular
                          ? "text-primary-foreground/90"
                          : "text-muted-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "gold" : "navy"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="#contato">Solicitar Orçamento</a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-muted-foreground mt-10 max-w-3xl mx-auto bg-card border border-border rounded-xl p-6"
        >
          Todos os planos incluem captação, edição das imagens, criação do tour
          virtual e entrega de link compatível com portais imobiliários, redes
          sociais e WhatsApp.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
