import { ThemeType } from '~/core/theme';
import { createSelector } from '~/libs';

export const selector = (
  state: ApplicationState<ThemeType>,
): ApplicationState<ThemeType> => state;

export const themeSelector = createSelector(selector, (state) => state.theme);
