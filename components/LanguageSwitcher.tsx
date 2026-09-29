"use client";

import { useEffect, useState } from "react";

type Language = "en" | "ne";

type Props = {
  onChange?: (language: Language) => void;
};

export default function LanguageSwitcher({ onChange }: Props) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("rb-language");
    if (saved === "ne" || saved === "en") {
      setLanguage(saved);
      document.documentElement.lang = saved;
      onChange?.(saved);
    }
  }, [onChange]);

  function selectLanguage(nextLanguage: Language) {
    if (nextLanguage === language) return;
    setLanguage(nextLanguage);
    window.localStorage.setItem("rb-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
    window.dispatchEvent(
      new CustomEvent<Language>("rb-language-change", {
        detail: nextLanguage,
      }),
    );
    onChange?.(nextLanguage);
  }

  return (
    <div className="language-switcher" aria-label="Choose language">
      <button
        type="button"
        className={language === "en" ? "active" : ""}
        aria-pressed={language === "en"}
        onClick={() => selectLanguage("en")}
      >
        EN
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        className={language === "ne" ? "active" : ""}
        aria-label="Nepali"
        aria-pressed={language === "ne"}
        onClick={() => selectLanguage("ne")}
      >
        ने
      </button>
    </div>
  );
}
