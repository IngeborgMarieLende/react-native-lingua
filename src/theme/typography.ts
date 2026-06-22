/**
 * Lingua Design System — Typography Tokens
 *
 * Font family names match the asset file names loaded via expo-font.
 * Font size and line height values mirror the design spec exactly.
 */

export const FontFamily = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export const FontSize = {
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 16,
  bodyLg: 16,
  bodyMd: 14,
  bodySm: 13,
  caption: 11,
} as const;

/**
 * Line height multipliers as defined in the design spec.
 * Multiply by the font size to get the absolute line height in px.
 */
export const LineHeightMultiplier = {
  tight: 1.2,   // H1
  snug: 1.3,    // H2, H3
  normal: 1.4,  // H4, Caption
  relaxed: 1.6, // Body Large, Body Medium, Body Small
} as const;

/**
 * Pre-computed absolute line heights (px) for every text style.
 */
export const LineHeight = {
  h1: FontSize.h1 * LineHeightMultiplier.tight,    // 38.4
  h2: FontSize.h2 * LineHeightMultiplier.snug,     // 31.2
  h3: FontSize.h3 * LineHeightMultiplier.snug,     // 26
  h4: FontSize.h4 * LineHeightMultiplier.normal,   // 22.4
  bodyLg: FontSize.bodyLg * LineHeightMultiplier.relaxed, // 25.6
  bodyMd: FontSize.bodyMd * LineHeightMultiplier.relaxed, // 22.4
  bodySm: FontSize.bodySm * LineHeightMultiplier.relaxed, // 20.8
  caption: FontSize.caption * LineHeightMultiplier.normal, // 15.4
} as const;

export type FontFamilyKey = keyof typeof FontFamily;
export type FontSizeKey = keyof typeof FontSize;
