import type { Unit } from "@/types/learning";
import {
  ES_UNIT1_LESSON1,
  ES_UNIT1_LESSON2,
  ES_UNIT1_LESSON3,
  ES_UNIT1_LESSON4,
  ES_UNIT1_LESSON5,
  ES_UNIT1_LESSON6,
  ES_UNIT2_LESSON1,
  ES_UNIT2_LESSON2,
  ES_UNIT2_LESSON3,
  ES_UNIT2_LESSON4,
  ES_UNIT2_LESSON5,
  ES_UNIT2_LESSON6,
  FR_UNIT1_LESSON1,
  FR_UNIT1_LESSON2,
  FR_UNIT1_LESSON3,
  FR_UNIT1_LESSON4,
  FR_UNIT1_LESSON5,
  FR_UNIT1_LESSON6,
  FR_UNIT2_LESSON1,
  FR_UNIT2_LESSON2,
  FR_UNIT2_LESSON3,
  FR_UNIT2_LESSON4,
  FR_UNIT2_LESSON5,
  FR_UNIT2_LESSON6,
} from "@/data/lessons";

/**
 * All learning units grouped by language.
 * Add new units here and reference their lessons from lessons.ts.
 */
export const UNITS: Unit[] = [
  // ── Spanish ──────────────────────────────────────────────────────────────
  {
    id: "es-unit-1",
    title: "Basic Greetings",
    description: "Learn how to say hello, goodbye, and introduce yourself.",
    languageId: "es",
    level: 1,
    imageUrl: "https://picsum.photos/seed/greetings/800/440",
    lessons: [
      ES_UNIT1_LESSON1,
      ES_UNIT1_LESSON2,
      ES_UNIT1_LESSON3,
      ES_UNIT1_LESSON4,
      ES_UNIT1_LESSON5,
      ES_UNIT1_LESSON6,
    ],
  },
  {
    id: "es-unit-2",
    title: "Numbers & Colors",
    description: "Count to ten and name the most common colors.",
    languageId: "es",
    level: 2,
    imageUrl: "https://picsum.photos/seed/colorful/800/440",
    lessons: [
      ES_UNIT2_LESSON1,
      ES_UNIT2_LESSON2,
      ES_UNIT2_LESSON3,
      ES_UNIT2_LESSON4,
      ES_UNIT2_LESSON5,
      ES_UNIT2_LESSON6,
    ],
  },

  // ── French ───────────────────────────────────────────────────────────────
  {
    id: "fr-unit-1",
    title: "Basic Greetings",
    description: "Learn how to say hello, goodbye, and introduce yourself in French.",
    languageId: "fr",
    level: 1,
    imageUrl: "https://picsum.photos/seed/paris/800/440",
    lessons: [
      FR_UNIT1_LESSON1,
      FR_UNIT1_LESSON2,
      FR_UNIT1_LESSON3,
      FR_UNIT1_LESSON4,
      FR_UNIT1_LESSON5,
      FR_UNIT1_LESSON6,
    ],
  },
  {
    id: "fr-unit-2",
    title: "Numbers & Colors",
    description: "Count to ten and learn colors in French.",
    languageId: "fr",
    level: 2,
    imageUrl: "https://picsum.photos/seed/counting/800/440",
    lessons: [
      FR_UNIT2_LESSON1,
      FR_UNIT2_LESSON2,
      FR_UNIT2_LESSON3,
      FR_UNIT2_LESSON4,
      FR_UNIT2_LESSON5,
      FR_UNIT2_LESSON6,
    ],
  },
];

/** Get all units for a specific language, sorted by level. */
export function getUnitsByLanguage(languageId: string): Unit[] {
  return UNITS.filter((unit) => unit.languageId === languageId).sort(
    (a, b) => a.level - b.level
  );
}

/** Get a single unit by its ID. */
export function getUnitById(unitId: string): Unit | undefined {
  return UNITS.find((unit) => unit.id === unitId);
}

/** Get a single lesson by its ID, searching across all units. */
export function getLessonById(lessonId: string) {
  for (const unit of UNITS) {
    const lesson = unit.lessons.find((l) => l.id === lessonId);
    if (lesson) return { lesson, unit };
  }
  return undefined;
}
