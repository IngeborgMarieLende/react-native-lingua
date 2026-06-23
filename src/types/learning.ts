/**
 * Lingua — Learning Content Type System
 *
 * Core types for languages, units, lessons, and activities.
 * All data is hardcoded and typed here — extend by adding entries to the data files.
 */

// ─────────────────────────────────────────────────────────────────────────────
// Language
// ─────────────────────────────────────────────────────────────────────────────

export type DifficultyLevel = "beginner" | "intermediate" | "advanced";

export interface Language {
  id: string;
  name: string;
  nativeName: string;
  flag: string; // emoji flag
  difficulty: DifficultyLevel;
  totalUnits: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Vocabulary & Phrases
// ─────────────────────────────────────────────────────────────────────────────

export interface VocabularyItem {
  id: string;
  word: string;
  translation: string;
  pronunciation: string;
  exampleSentence: string;
  exampleTranslation: string;
}

export interface Phrase {
  id: string;
  text: string;
  translation: string;
  pronunciation: string;
  context: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Activities
// ─────────────────────────────────────────────────────────────────────────────

export type ActivityType =
  | "multiple-choice"
  | "fill-in-blank"
  | "listen-and-repeat"
  | "translate"
  | "match-pairs";

export interface Activity {
  id: string;
  type: ActivityType;
  question: string;
  options?: string[];
  correctAnswer: string;
  hint?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// AI Teacher
// ─────────────────────────────────────────────────────────────────────────────

export interface AITeacherPrompt {
  systemPrompt: string;
  introMessage: string;
  lessonContext: string;
  targetLanguage: string;
  nativeLanguage: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Lesson
// ─────────────────────────────────────────────────────────────────────────────

export type LessonType = "vocabulary" | "phrases" | "audio" | "chat" | "video";

export interface LessonGoal {
  type: "complete-activities" | "learn-vocabulary" | "practice-phrases";
  description: string;
  targetCount: number;
}

export interface Lesson {
  id: string;
  title: string;
  type: LessonType;
  description: string;
  goal: LessonGoal;
  vocabulary: VocabularyItem[];
  phrases: Phrase[];
  activities: Activity[];
  aiTeacherPrompt?: AITeacherPrompt;
  xpReward: number;
  estimatedMinutes: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Unit
// ─────────────────────────────────────────────────────────────────────────────

export interface Unit {
  id: string;
  title: string;
  description: string;
  languageId: string;
  level: number;
  lessons: Lesson[];
}
