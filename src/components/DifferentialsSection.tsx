import { motion } from "framer-motion";
import { Eye, Settings, Target } from "lucide-react";

const DifferentialsSection = () => {
  const commitments = [
    {
      icon: Eye,
      title: "Qualidade Visual",
      description:
        "Trabalhamos com foco em qualidade visual, padronização e entrega de materiais que valorizem o imóvel.",
    },
    {
      icon: Settings,
      title: "Tecnologia e Organização",
      description:
        "Utilizamos tecnologia de captura 360° e fluxo de trabalho organizado para garantir consistência em cada projeto.",
    },
    {
      icon: Target,
      title: "Apresentação Profissional",
      description:
        "Nosso objetivo é oferecer uma apresentação profissional que eleve a percepção de valor do imóvel.",
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
            Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Nosso Compromisso
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Qualidade, organização e profissionalismo em cada projeto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {commitments.map((item, index) => (
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
      </div>
    </section>
  );
};

export default DifferentialsSection;
