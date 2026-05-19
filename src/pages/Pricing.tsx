import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

type Region = "BR" | "EU";

const Pricing = () => {
  const [region, setRegion] = useState<Region>("EU");
  const isEU = region === "EU";
  const currency = isEU ? "€" : "R$";

  const freeItems = [
    "Mini tour de demonstração 360°",
    "Publicado online durante 10 dias",
    "Sem contrato",
    "Sem compromisso",
    "Com o logotipo da Visitar Studio",
    "Desativação automática ao final do período de teste",
  ];

  const productionItems = [
    "Captura profissional das imagens 360°",
    "Edição e tratamento das imagens",
    "Montagem completa do tour virtual",
    "Inserção de hotspots e navegação interativa",
    "Publicação na plataforma da Visitar Studio",
    "Integração com website através de link ou iframe",
    "Publicação no Google Street View (opcional)",
  ];

  const plans = [
    {
      title: "Plano Mensal",
      subtitle: "Sem fidelidade",
      price: `${currency}27`,
      period: "/mês",
      support: null as string | null,
      features: [
        "Sem compromisso de permanência",
        "Cancelamento a qualquer momento com 30 dias de aviso prévio",
        "Inclui hospedagem, manutenção e suporte técnico",
        "Atualizações básicas e monitoramento",
      ],
      note: null as string | null,
      highlighted: false,
    },
    {
      title: "Plano Anual com Pagamento Mensal",
      subtitle: "Compromisso mínimo de 12 meses",
      price: `${currency}18`,
      period: "/mês",
      support: `Total anual equivalente a ${currency}216`,
      features: [
        "Inclui todos os serviços do Plano Mensal",
        "Desconto de 33% em relação ao plano sem fidelidade",
      ],
      note: "Em caso de cancelamento antes de completar os 12 meses, será cobrada uma penalidade equivalente a 50% do valor das mensalidades restantes.",
      highlighted: true,
    },
    {
      title: "Plano Anual",
      subtitle: "Pagamento antecipado",
      price: `${currency}199`,
      period: "/ano",
      support: `Equivalente a ${currency}16,58/mês`,
      features: [
        "Inclui todos os serviços do Plano Mensal",
        "Melhor relação custo-benefício",
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
                Investimento
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-6 leading-[1.1]"
              >
                Investimento
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-lg text-muted-foreground mb-6 font-light leading-relaxed"
              >
                Valores para tours virtuais e experiências digitais da Visitar Studio.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm text-muted-foreground/80 font-light leading-relaxed max-w-xl mx-auto"
              >
                Todos os projetos incluem captação profissional, edição e entrega
                otimizada para compartilhamento online.
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

        {/* Mini Tour Gratuito */}
        <section className="py-20 md:py-28 bg-section-alt">
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
                  Demonstração
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
                  Mini Tour Promocional Gratuito
                </h2>
                <p className="text-sm text-muted-foreground mb-10">
                  10 dias de demonstração sem custo
                </p>
                <ul className="space-y-4 mb-10">
                  {freeItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-foreground mt-0.5 stroke-[1.5] shrink-0" />
                      <span className="text-sm text-foreground/80 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border pt-8">
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    Ideal para que o cliente veja o próprio negócio em um tour
                    virtual real antes de contratar.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Taxa Inicial de Produção */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase mb-6">
                  Produção
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
                  Taxa Inicial de Produção
                </h2>
                <p className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
                  A partir de {currency}99
                </p>
                <p className="text-sm text-muted-foreground mb-10 leading-relaxed max-w-2xl">
                  O valor da produção varia de acordo com o tamanho, a
                  complexidade e o tempo necessário para a captação do espaço.
                </p>
                <div className="border-t border-border pt-10">
                  <ul className="space-y-4">
                    {productionItems.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-foreground mt-0.5 stroke-[1.5] shrink-0" />
                        <span className="text-sm text-foreground/80 leading-relaxed">
                          {item}
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
        <section className="py-20 md:py-28 bg-section-alt">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-20"
            >
              <span className="inline-block text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase mb-4">
                Hospedagem
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-5">
                Planos de Hospedagem
              </h2>
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
                      Recomendado
                    </span>
                  )}
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {plan.title}
                  </h3>
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
          </div>
        </section>

        {/* Observação importante */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <span className="inline-block text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase mb-6">
                Observação importante
              </span>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                Os tours permanecem hospedados na infraestrutura da Visitar
                Studio e estarão disponíveis somente enquanto o serviço estiver
                ativo e com os pagamentos em dia. Em caso de cancelamento ou
                inadimplência, o tour poderá ser desativado.
              </p>
            </motion.div>
          </div>
        </section>

        <ContactSection variant="alt" />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
