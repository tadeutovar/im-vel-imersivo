import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-16 md:pt-20">
      {/* 360 Tour Hero */}
      <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <iframe
          src="https://kuula.co/share/LhRLp?logo=1&info=1&fs=0&vr=0&sd=1&autorotate=0.1&thumbs=1&alpha=0.60"
          className="w-full h-full border-0"
          allow="xr-spatial-tracking; gyroscope; accelerometer"
          allowFullScreen
          scrolling="no"
          title="Tour Virtual 360"
        ></iframe>
      </div>

      {/* Text content below the image */}
      <div className="bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase mb-8">
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-display font-semibold text-foreground mb-6 leading-[1.1]"
            >
              {t("hero.title.part1")}
              <span className="text-foreground">{t("hero.title.highlight")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl font-light leading-relaxed"
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4"
            >
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
              >
                {t("hero.cta.tour")}
                <ArrowRight className="w-3 h-3" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
