import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/i18n/translations";

const languages: { code: Language; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-sm">
      {languages.map((lang, index) => (
        <span key={lang.code} className="flex items-center">
          <button
            onClick={() => setLanguage(lang.code)}
            className={`px-1.5 py-0.5 rounded transition-colors font-medium ${
              language === lang.code
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && (
            <span className="text-muted-foreground/40">|</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default LanguageSelector;
