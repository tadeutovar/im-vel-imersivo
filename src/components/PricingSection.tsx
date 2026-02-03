import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Básico",
      photos: "1 Foto 360°",
      price: "300",
      pricePerPhoto: "300",
      features: [
        "1 ambiente fotografado",
        "Tour virtual interativo",
        "Link compartilhável",
        "Compatível com todos dispositivos",
        "Entrega em até 3 dias úteis",
      ],
      popular: false,
    },
    {
      name: "Profissional",
      photos: "5 Fotos 360°",
      price: "1.400",
      pricePerPhoto: "280",
      features: [
        "5 ambientes fotografados",
        "Tour virtual integrado",
        "Navegação entre ambientes",
        "Pontos de informação",
        "Link para portais imobiliários",
        "Entrega em até 5 dias úteis",
      ],
      popular: true,
    },
    {
      name: "Premium",
      photos: "10 Fotos 360°",
      price: "2.500",
      pricePerPhoto: "250",
      features: [
        "10 ambientes fotografados",
        "Tour completo do imóvel",
        "Navegação avançada",
        "Planta baixa interativa",
        "Suporte prioritário",
        "Entrega em até 7 dias úteis",
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
            Tabela de Preços
          </h2>
          <p className="text-lg text-muted-foreground">
            Preços transparentes e pacotes pensados para maximizar seu retorno
            sobre o investimento.
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
                    Mais Popular
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
                <p
                  className={`text-sm ${
                    plan.popular
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.photos}
                </p>
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
                  R$ {plan.pricePerPhoto}/foto
                </p>
              </div>

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
          className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto"
        >
          💡 <strong>Dica:</strong> Pacotes maiores oferecem melhor
          custo-benefício. Um tour completo aumenta significativamente o
          interesse dos compradores e acelera a venda do imóvel.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
