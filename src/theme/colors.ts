/**
 * Lingua Design System — Color Tokens
 *
 * Single source of truth for all brand, semantic, and neutral colors.
 * Use these constants in JS/TS logic; use the CSS custom properties in
 * NativeWind class names (e.g. `text-lingua-purple`, `bg-success`).
 */

export const Colors = {
  // ── Primary ──────────────────────────────────────────────────────────────
  linguaPurple: "#6C4EF5",
  linguaDeepPurple: "#5B3BF6",
  linguaBlue: "#4D8BFF",
  linguaGreen: "#21C16B",

  // ── Semantic ─────────────────────────────────────────────────────────────
  success: "#21C16B",
  warning: "#FFC800",
  streak: "#FF8A00",
  error: "#FF4D4F",
  info: "#4D8BFF",

  // ── Neutrals ─────────────────────────────────────────────────────────────
  textPrimary: "#0D132B",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  surface: "#F6F7FB",
  background: "#FFFFFF",
} as const;

export type ColorKey = keyof typeof Colors;
