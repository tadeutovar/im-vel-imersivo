import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const PortfolioSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      image: portfolio1,
      titleKey: "portfolio.project1.title",
      location: "Jardins, São Paulo",
      typeKey: "portfolio.type.residential",
    },
    {
      image: portfolio2,
      titleKey: "portfolio.project2.title",
      location: "Alphaville, SP",
      typeKey: "portfolio.type.residential",
    },
    {
      image: portfolio3,
      titleKey: "portfolio.project3.title",
      location: "Moema, São Paulo",
      typeKey: "portfolio.type.residential",
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t("portfolio.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("portfolio.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-card shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-gold text-sm font-medium mb-1">
                  {t(project.typeKey)}
                </span>
                <h3 className="text-xl font-display font-semibold text-primary-foreground mb-1">
                  {t(project.titleKey)}
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  {project.location}
                </p>
                <Button
                  variant="gold"
                  size="sm"
                  className="w-fit"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t("portfolio.viewTour")}
                </Button>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-card p-4 group-hover:translate-y-full transition-transform duration-300">
                <h3 className="font-display font-semibold text-foreground">
                  {t(project.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="navy" size="lg" asChild>
            <a href="#contato">
              {t("portfolio.cta")}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
