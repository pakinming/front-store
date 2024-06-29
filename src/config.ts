export type Locale = (typeof locales)[number];

export const locales = ['th', 'en'] as const;
export const defaultLocale: Locale = 'th';