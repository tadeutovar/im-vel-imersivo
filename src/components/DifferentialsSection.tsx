import { motion } from "framer-motion";
import { Shield, Cpu, Users, Award } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Cpu,
      title: "Tecnologia de Ponta",
      description:
        "Utilizamos câmeras e equipamentos profissionais de última geração para garantir imagens com altíssima resolução e nitidez.",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description:
        "Profissionais com anos de experiência no mercado imobiliário, entendendo as necessidades específicas de corretores e imobiliárias.",
    },
    {
      icon: Award,
      title: "Resultados Comprovados",
      description:
        "Nossos clientes relatam aumento significativo nas visualizações e maior taxa de conversão em visitas presenciais qualificadas.",
    },
    {
      icon: Shield,
      title: "Garantia de Qualidade",
      description:
        "Se não estiver satisfeito com o resultado, refazemos a captação sem custo adicional. Seu sucesso é nossa prioridade.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-gold/20 text-gold-light px-4 py-2 rounded-full text-sm font-medium mb-4">
            Nossos Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Por Que Nos Escolher?
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Combinamos tecnologia, experiência e comprometimento para entregar
            resultados que fazem diferença nos seus negócios.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-display font-semibold text-primary-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-primary-foreground/20"
        >
          {[
            { value: "500+", label: "Tours Entregues" },
            { value: "98%", label: "Clientes Satisfeitos" },
            { value: "150+", label: "Corretores Atendidos" },
            { value: "3 Anos", label: "De Experiência" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gold mb-1">
                {stat.value}
              </div>
              <div className="text-primary-foreground/70 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
