import type { Language } from "@/types/learning";

/**
 * Supported languages in Lingua.
 * Add new languages here to make them available throughout the app.
 */
export const LANGUAGES: Language[] = [
  {
    id: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "https://flagcdn.io/flags/4x3/es.svg",
    difficulty: "beginner",
    totalUnits: 5,
  },
  {
    id: "fr",
    name: "French",
    nativeName: "Français",
    flag: "https://flagcdn.io/flags/4x3/fr.svg",
    difficulty: "beginner",
    totalUnits: 5,
  },
  {
    id: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "https://flagcdn.io/flags/4x3/de.svg",
    difficulty: "intermediate",
    totalUnits: 4,
  },
  {
    id: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "https://flagcdn.io/flags/4x3/jp.svg",
    difficulty: "advanced",
    totalUnits: 4,
  },
  {
    id: "it",
    name: "Italian",
    nativeName: "Italiano",
    flag: "https://flagcdn.io/flags/4x3/it.svg",
    difficulty: "beginner",
    totalUnits: 4,
  },
  {
    id: "pt",
    name: "Portuguese",
    nativeName: "Português",
    flag: "https://flagcdn.io/flags/4x3/pt.svg",
    difficulty: "beginner",
    totalUnits: 4,
  },
  {
    id: "no",
    name: "Norwegian",
    nativeName: "Norsk",
    flag: "https://flagcdn.io/flags/4x3/no.svg",
    difficulty: "intermediate",
    totalUnits: 3,
  },
  {
    id: "ko",
    name: "Korean",
    nativeName: "한국어",
    flag: "https://flagcdn.io/flags/4x3/kr.svg",
    difficulty: "advanced",
    totalUnits: 3,
  },
];

export function getLanguageById(id: string): Language | undefined {
  return LANGUAGES.find((lang) => lang.id === id);
}
