import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-urca.jpeg";
import portfolio2 from "@/assets/portfolio-bcn.jpg";
import portfolio3 from "@/assets/portfolio-praiadabarra2.jpeg";
import portfolio4 from "@/assets/portfolio-fendi-home.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const PortfolioSection = ({ variant = "alt" }: { variant?: "alt" | "default" }) => {
  const { t } = useLanguage();

  const projects = [
    {
      image: portfolio4,
      titleKey: "portfolio.project4.title",
      location: "London, England",
      typeKey: "portfolio.type.residential",
      link: "https://tour.visitarstudio.com/london-fendi-home"
    },
    {
      image: portfolio2,
      titleKey: "portfolio.project2.title",
      location: "Barcelona, Spain",
      typeKey: "portfolio.type.residential",
      link: "https://tour.visitarstudio.com/montgat-house-001"
    },
    {
      image: portfolio3,
      titleKey: "portfolio.project3.title",
      location: "Rio de de Janeiro, Brazil",
      typeKey: "portfolio.type.residential",
      link: "https://tour.visitarstudio.com/rj-exemplo-01"
    },
    {
      image: portfolio1,
      titleKey: "portfolio.project1.title",
      location: "Rio de Janeiro, Brazil",
      typeKey: "portfolio.type.residential",
      link: "https://tour.visitarstudio.com/casa-urca-001"
    },
    
  ];

  return (
    <section id="portfolio" className={`py-28 md:py-36 ${variant === "alt" ? "bg-section-alt" : "bg-background"}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase mb-4">
            {t("portfolio.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-5">
            {t("portfolio.title")}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {t("portfolio.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <a 
                key={index}
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden mb-5">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <span className="text-muted-foreground text-xs tracking-[0.2em] uppercase">
                    {t(project.typeKey)}
                  </span>
                  <h3 className="text-base font-display font-semibold text-foreground mt-1">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.location}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors mt-1" />
              </div>
            </motion.div>
            </a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button variant="premium" size="lg" asChild>
            <a href="#contact">
              {t("portfolio.cta")}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
