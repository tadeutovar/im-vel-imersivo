import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const offices = [
  {
    flag: "🇧🇷",
    locationKey: "contact.brazil",
    phone: "+55 21 97359-6255",
    phoneClean: "5521973596255",
  },
  {
    flag: "🇪🇸",
    locationKey: "contact.spain",
    phone: "+34 628 458 903",
    phoneClean: "34628458903",
  },
  {
    flag: "🇬🇧",
    locationKey: "contact.uk",
    phone: "+44 7590 124405",
    phoneClean: "447590124405",
  },
];

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-28 md:py-36 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase mb-4">
            {t("contact.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-5">
            {t("contact.title")}
          </h2>
        </motion.div>

        <div className="max-w-md mx-auto space-y-12">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-sm text-muted-foreground mb-2">
                <span className="mr-2">{office.flag}</span>
                {t(office.locationKey)}
              </p>
              <div className="flex items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${office.phoneClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground text-sm hover:opacity-60 transition-opacity"
                >
                  {office.phone}
                </a>
                <a
                  href={`tel:+${office.phoneClean}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 stroke-[1.5]" />
                </a>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-center pt-4"
          >
            <a
              href="mailto:contact@visitarstudio.com"
              className="text-foreground text-sm hover:opacity-60 transition-opacity inline-flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 stroke-[1.5]" />
              contact@visitarstudio.com
            </a>
            <p className="text-xs text-muted-foreground mt-6">
              {t("contact.availability")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
