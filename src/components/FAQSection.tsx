import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O que é um tour virtual 360°?",
      answer:
        "É uma experiência interativa que permite ao visitante navegar pelos ambientes do imóvel de forma virtual, como se estivesse caminhando pelo local.",
    },
    {
      question: "Em quais dispositivos o tour funciona?",
      answer:
        "O tour funciona em celulares, tablets e computadores, sem necessidade de instalar aplicativos.",
    },
    {
      question: "Onde posso divulgar meu tour virtual?",
      answer:
        "O link pode ser utilizado em portais imobiliários, sites, redes sociais e WhatsApp.",
    },
    {
      question: "Quanto tempo leva para receber o tour pronto?",
      answer:
        "O prazo médio de entrega é informado no momento do agendamento.",
    },
    {
      question: "Preciso estar presente durante a captação?",
      answer:
        "Não é obrigatório, desde que o acesso ao imóvel esteja liberado.",
    },
    {
      question: "Quais tipos de imóveis podem receber tour virtual?",
      answer:
        "Residenciais, comerciais, apartamentos, casas, salas, lojas e imóveis em geral.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Dúvidas
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre nosso serviço de tours virtuais 360°.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
