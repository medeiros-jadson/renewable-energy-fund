import { NAVIGATION_ACTIONS, ROUTES, ROUTES_STACKS } from '../enums';
import * as NavigationService from '../services';

type UseNavigation = {
  routes: typeof ROUTES;
  actions: typeof NAVIGATION_ACTIONS;
  stacks: typeof ROUTES_STACKS;
  navigation: typeof NavigationService;
};

export const useNavigation = (): UseNavigation => {
  return {
    routes: ROUTES,
    actions: NAVIGATION_ACTIONS,
    stacks: ROUTES_STACKS,
    navigation: NavigationService,
  };
};
