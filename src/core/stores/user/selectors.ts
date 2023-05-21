import { ThemeType } from '~/core/theme';
import { createSelector } from '~/libs';

export const selector = (
  state: ApplicationState<ThemeType>,
): ApplicationState<ThemeType> => state;

export const userSelector = createSelector(selector, (state) => state.user);
