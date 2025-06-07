
import { enTranslations } from './en';
import { arTranslations } from './ar';
import { Language, Translations } from '../types/language';

export const translations: Record<Language, Translations> = {
  en: enTranslations,
  ar: arTranslations
};
