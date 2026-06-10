import uk from "./uk";
import en from "./en";
import ru from "./ru";

export const locales = {
  UA: uk,
  EN: en,
  RU: ru,
};

export type LanguageCode = keyof typeof locales;
export type Locale = typeof uk;
