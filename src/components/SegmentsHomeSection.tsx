import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import portfolioFendi from "@/assets/portfolio-fendi-home.jpeg";
import portfolioBcn from "@/assets/portfolio-bcn.jpg";

const SegmentsHomeSection = () => {
  const { t } = useLanguage();

  const cards = [
    {
      image: portfolioBcn,
      titleKey: "home.seg.card1.title",
      descKey: "home.seg.card1.desc",
      ctaKey: "home.seg.card1.cta",
      to: "/imoveis",
    },
    {
      image: portfolioFendi,
      titleKey: "home.seg.card2.title",
      descKey: "home.seg.card2.desc",
      ctaKey: "home.seg.card2.cta",
      to: "/negocios",
    },
  ];

  return (
    <section className="py-28 md:py-36 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase mb-4">
            {t("home.seg.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-5">
            {t("home.seg.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={card.to} className="group block">
                <div className="aspect-[4/3] overflow-hidden mb-6">
                  <img
                    src={card.image}
                    alt={t(card.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-3">
                      {t(card.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md mb-5">
                      {t(card.descKey)}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-foreground border-b border-foreground/30 pb-1 group-hover:border-foreground transition-colors">
                      {t(card.ctaKey)}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentsHomeSection;
