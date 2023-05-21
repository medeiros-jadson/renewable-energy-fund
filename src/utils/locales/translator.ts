import { I18n } from '~/libs';
import ptBR from './pt-BR';

const translations = new I18n({
  'pt-BR': ptBR,
});

translations.defaultLocale = 'pt-BR';
translations.locale = 'pt-BR';

export const translate = (
  key: keyof Locales,
  placeholders?: Record<string, string | number>,
): string => translations.t(key, placeholders);
