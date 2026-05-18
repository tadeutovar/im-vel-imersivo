import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Star, Eye, Award, Clock, Smartphone, Home, Briefcase, Users, Layout, Building, MessageCircle, Sofa } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";
import heroBg from "@/assets/hero-bg.jpg";

const Imoveis = () => {
  const { t, language } = useLanguage();
  const phone = language === "pt" ? "+5521973596255" : "+447590124405";
  const waLink = `https://wa.me/${phone.replace(/\+/g, "")}`;

  const benefits = [
    { icon: Star, key: 1 },
    { icon: Eye, key: 2 },
    { icon: Clock, key: 3 },
    { icon: Award, key: 4 },
    { icon: Building2, key: 5 },
    { icon: Smartphone, key: 6 },
  ];

  const segments = [
    { icon: Home, key: 1 },
    { icon: Briefcase, key: 2 },
    { icon: Users, key: 3 },
    { icon: Layout, key: 4 },
    { icon: Building, key: 5 },
    { icon: Sofa, key: 6 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-16 md:pt-20">
          <div className="relative w-full h-[40vh] md:h-[55vh] overflow-hidden">
            <img src={heroBg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-foreground/10" />
          </div>
          <div className="bg-background">
            <div className="container mx-auto px-4 py-16 md:py-24">
              <div className="max-w-3xl">
                <motion.span
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase mb-8"
                >
                  {t("im.hero.badge")}
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-7xl font-display font-semibold text-foreground mb-6 leading-[1.1]"
                >
                  {t("im.hero.title")}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl font-light leading-relaxed"
                >
                  {t("im.hero.subtitle")}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Button variant="hero" size="xl" asChild>
                    <a href={waLink} target="_blank" rel="noopener noreferrer">
                      {t("im.hero.cta")}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="py-28 md:py-36 bg-section-alt">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-20"
            >
              <span className="inline-block text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase mb-4">
                {t("im.benefits.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-5">
                {t("im.benefits.title")}
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {benefits.map((b, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-background p-10"
                >
                  <b.icon className="w-5 h-5 text-foreground mb-6 stroke-[1.5]" />
                  <h3 className="text-base font-display font-semibold text-foreground mb-3">
                    {t(`im.b.${b.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`im.b.${b.key}.desc`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Segments */}
        <section id="segments" className="py-28 md:py-36 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-20"
            >
              <span className="inline-block text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase mb-4">
                {t("im.segments.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-5">
                {t("im.segments.title")}
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border max-w-6xl mx-auto">
              {segments.map((s, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-background p-10"
                >
                  <s.icon className="w-5 h-5 text-foreground mb-6 stroke-[1.5]" />
                  <h3 className="text-base font-display font-semibold text-foreground mb-3">
                    {t(`im.s.${s.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`im.s.${s.key}.desc`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <PortfolioSection />

        {/* Final CTA */}
        <section className="py-28 md:py-36 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-5">
                {t("im.cta.title")}
              </h2>
              <p className="text-muted-foreground mb-12 leading-relaxed text-sm">
                {t("im.cta.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <a href={waLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    {t("im.cta.whatsapp")}
                  </a>
                </Button>
                <Button variant="premium" size="xl" asChild>
                  <a href="mailto:contact@visitarstudio.com">
                    {t("im.cta.quote")}
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Imoveis;
