import type { Unit } from "@/types/learning";
import {
  ES_UNIT1_LESSON1,
  ES_UNIT1_LESSON2,
  ES_UNIT2_LESSON1,
  FR_UNIT1_LESSON1,
  FR_UNIT1_LESSON2,
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
    lessons: [ES_UNIT1_LESSON1, ES_UNIT1_LESSON2],
  },
  {
    id: "es-unit-2",
    title: "Numbers & Colors",
    description: "Count to ten and name the most common colors.",
    languageId: "es",
    level: 2,
    lessons: [ES_UNIT2_LESSON1],
  },

  // ── French ───────────────────────────────────────────────────────────────
  {
    id: "fr-unit-1",
    title: "Basic Greetings",
    description: "Learn how to say hello, goodbye, and introduce yourself in French.",
    languageId: "fr",
    level: 1,
    lessons: [FR_UNIT1_LESSON1, FR_UNIT1_LESSON2],
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
