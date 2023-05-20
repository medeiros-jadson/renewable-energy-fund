import { createSelector } from '~/libs';

export const selector = (state: ApplicationState): ApplicationState => state;

export const userSelector = createSelector(selector, (state) => state.user);
