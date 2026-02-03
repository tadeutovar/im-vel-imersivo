import { motion } from "framer-motion";
import { CalendarCheck, Camera, Layers, Share2 } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: CalendarCheck,
      step: "01",
      title: "Agendamento",
      description:
        "Entre em contato e agende a visita ao imóvel no melhor horário para você.",
    },
    {
      icon: Camera,
      step: "02",
      title: "Captação Profissional",
      description:
        "Nossa equipe realiza a captação das fotos 360° com equipamento de alta qualidade.",
    },
    {
      icon: Layers,
      step: "03",
      title: "Criação do Tour",
      description:
        "Desenvolvemos o tour virtual interativo com navegação fluida e recursos avançados.",
    },
    {
      icon: Share2,
      step: "04",
      title: "Entrega e Uso",
      description:
        "Receba o link do tour pronto para usar em portais, WhatsApp, redes sociais e sites.",
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
            Processo Simples
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground">
            Um processo simplificado para que você tenha seu tour virtual pronto
            em poucos dias.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
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
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
