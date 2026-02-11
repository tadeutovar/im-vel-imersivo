import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQSection = () => {
  const { t } = useLanguage();

  const faqKeys = [1, 2, 3, 4, 5, 6];

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
            {t("faq.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("faq.subtitle")}
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
            {faqKeys.map((num) => (
              <AccordionItem
                key={num}
                value={`item-${num}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-5">
                  {t(`faq.${num}.q`)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {t(`faq.${num}.a`)}
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
