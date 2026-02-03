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
        "Um tour virtual 360° é uma experiência interativa que permite que visitantes explorem um imóvel de forma imersiva, navegando pelos ambientes como se estivessem fisicamente presentes. Utilizamos fotografias esféricas de alta resolução que podem ser visualizadas em qualquer dispositivo.",
    },
    {
      question: "Em quais plataformas posso usar o tour?",
      answer:
        "O tour virtual pode ser utilizado em praticamente qualquer plataforma: portais imobiliários como ZAP, OLX e VivaReal, seu próprio site, WhatsApp, redes sociais (Instagram, Facebook, LinkedIn) e e-mail marketing. Fornecemos um link único que funciona em todos esses canais.",
    },
    {
      question: "O tour funciona em celular e computador?",
      answer:
        "Sim! Nossos tours virtuais são totalmente responsivos e funcionam perfeitamente em smartphones, tablets e computadores, sem necessidade de instalação de aplicativos. A experiência é otimizada para cada tipo de dispositivo.",
    },
    {
      question: "Quanto tempo leva para o tour ficar pronto?",
      answer:
        "O prazo de entrega varia conforme o pacote: tours básicos são entregues em até 3 dias úteis, pacotes profissionais em até 5 dias úteis, e pacotes premium em até 7 dias úteis. Para projetos urgentes, consulte nossa disponibilidade para entrega expressa.",
    },
    {
      question: "Preciso estar presente no dia da captação?",
      answer:
        "Não é obrigatório, mas recomendamos. Sua presença pode ajudar a garantir que todos os ambientes importantes sejam fotografados e que o imóvel esteja preparado da melhor forma. Se preferir, podemos combinar a entrega das chaves com portaria ou imobiliária.",
    },
    {
      question: "Para quais tipos de imóveis o serviço é indicado?",
      answer:
        "Nosso serviço atende todos os tipos de imóveis: apartamentos, casas, coberturas, lofts, salas comerciais, galpões, terrenos com construções, empreendimentos na planta com decorados, e até espaços para eventos. Quanto maior e mais complexo o imóvel, maior o benefício do tour virtual.",
    },
    {
      question: "O tour tem prazo de validade?",
      answer:
        "Não! Uma vez criado, o tour virtual fica disponível indefinidamente. Você pode usar o mesmo link quantas vezes quiser, em quantas plataformas desejar, sem custos adicionais ou prazo de expiração.",
    },
    {
      question: "Posso atualizar o tour após mudanças no imóvel?",
      answer:
        "Sim, oferecemos serviço de atualização. Se você fizer reformas ou alterações significativas no imóvel, podemos realizar uma nova captação para manter o tour atualizado. Entre em contato para verificar condições especiais para atualizações.",
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
