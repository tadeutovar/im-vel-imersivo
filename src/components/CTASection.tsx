import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-card rounded-3xl p-8 md:p-12 border border-border shadow-lg text-center">
            <span className="inline-block bg-gold/10 text-gold-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
              Entre em Contato
            </span>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Agendar meu Tour Virtual
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato para saber mais sobre nossos serviços de tour
              virtual 360° e receber um orçamento personalizado para o seu
              projeto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button variant="hero" size="xl" asChild>
                <a
                  href="https://wa.me/5521988840669?text=Ol%C3%A1!%20Vi%20os%20planos%20no%20site%20e%20gostaria%20de%20confirmar%20o%20melhor%20para%20meu%20im%C3%B3vel%20e%20verificar%20disponibilidade."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="navy" size="xl" asChild>
                <a href="mailto:contato@visitarestudio.com.br">
                  <Mail className="w-5 h-5" />
                  Enviar E-mail
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
              <a
                href="tel:+5521988840669"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone className="w-5 h-5 text-gold" />
                (21) 98884-0669
              </a>
              <span className="hidden sm:block">•</span>
              <a
                href="mailto:contato@visitarestudio.com.br"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5 text-gold" />
                contato@visitarestudio.com.br
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
