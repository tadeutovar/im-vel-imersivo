import { motion } from "framer-motion";
import {
  Eye,
  Clock,
  Award,
  TrendingUp,
  Globe,
  Smartphone,
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Mais Interesse e Engajamento",
      description:
        "Anúncios com tours virtuais recebem até 3x mais visualizações e mantêm os visitantes por mais tempo.",
    },
    {
      icon: Clock,
      title: "Economia de Tempo",
      description:
        "Reduza visitas presenciais desnecessárias. Compradores já chegam decididos após explorar o imóvel online.",
    },
    {
      icon: Award,
      title: "Diferenciação Profissional",
      description:
        "Destaque-se da concorrência com apresentações de alto nível que transmitem profissionalismo.",
    },
    {
      icon: TrendingUp,
      title: "Maior Percepção de Valor",
      description:
        "A experiência imersiva aumenta a valorização percebida do imóvel pelos compradores.",
    },
    {
      icon: Globe,
      title: "Disponibilidade 24 Horas",
      description:
        "Seus clientes podem visitar o imóvel a qualquer hora, de qualquer lugar do mundo.",
    },
    {
      icon: Smartphone,
      title: "Multi-plataforma",
      description:
        "Funciona perfeitamente em celulares, tablets e computadores, sem instalação.",
    },
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
            Por Que Escolher
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Por Que Usar um Tour Virtual 360°?
          </h2>
          <p className="text-lg text-muted-foreground">
            Entenda como a tecnologia 360° transforma a apresentação dos seus
            imóveis e acelera suas vendas.
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
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
