import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Interior de imóvel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent text-xs font-medium tracking-[0.3em] uppercase mb-8">
              {t("hero.badge")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-semibold text-primary-foreground mb-6 leading-[1.1]"
          >
            {t("hero.title.part1")}
            <span className="text-accent">{t("hero.title.highlight")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-primary-foreground/70 mb-10 max-w-xl font-light leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contato">
                {t("hero.cta.primary")}
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#portfolio">
                <Play className="w-4 h-4" />
                {t("hero.cta.secondary")}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border border-primary-foreground/30 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-primary-foreground/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
