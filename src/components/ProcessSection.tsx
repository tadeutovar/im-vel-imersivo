import { motion } from "framer-motion";
import {
  CalendarCheck,
  Camera,
  Palette,
  Layers,
  Share2,
} from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: CalendarCheck,
      step: "01",
      title: "Agendamento",
      description:
        "Agendamento da visita no imóvel em data e horário combinados.",
    },
    {
      icon: Camera,
      step: "02",
      title: "Captação",
      description:
        "Captação das imagens 360° utilizando equipamento próprio.",
    },
    {
      icon: Palette,
      step: "03",
      title: "Edição",
      description:
        "Edição profissional das imagens para correção de cor, luz e alinhamento.",
    },
    {
      icon: Layers,
      step: "04",
      title: "Criação do Tour",
      description: "Criação do tour virtual interativo.",
    },
    {
      icon: Share2,
      step: "05",
      title: "Entrega",
      description: "Entrega do link pronto para divulgação.",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-gold/10 text-gold-dark px-4 py-2 rounded-full text-sm font-medium mb-4">
            Processo
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Como Funciona o Processo
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça as etapas para obter seu tour virtual 360°.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Step Circle */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-card rounded-full border-4 border-gold flex items-center justify-center shadow-gold">
                  <step.icon className="w-8 h-8 text-gold-dark" />
                </div>

                {/* Step Number */}
                <span className="inline-block text-sm font-bold text-gold mb-2">
                  PASSO {step.step}
                </span>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto"
        >
          Todo o processo é pensado para ser simples, rápido e eficiente para o
          cliente.
        </motion.p>
      </div>
    </section>
  );
};

export default ProcessSection;
