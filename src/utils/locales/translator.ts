import { I18n } from '~/libs';
import enUS from './en-US';

const translations = new I18n({
  en: enUS,
});

translations.defaultLocale = 'en';
translations.locale = 'en';

export const translate = (
  key: keyof Locales,
  placeholders?: Record<string, string | number>,
): string => translations.t(key, placeholders);
