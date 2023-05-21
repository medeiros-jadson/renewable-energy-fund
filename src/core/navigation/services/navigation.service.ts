import {
  CommonActions,
  NavigationAction,
  NavigationContainerRef,
  NavigationState,
  ParamListBase,
  PartialState,
} from '~/libs';

let navigator: NavigationContainerRef<ParamListBase>;

export const setNavigator = (
  navigatorRef: NavigationContainerRef<ParamListBase>,
): void => {
  navigator = navigatorRef;
};

export const dispatch = (fn: NavigationAction): void => {
  navigator.dispatch(fn);
};

export const reset = (route: string, params?: RouteParams): void => {
  navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: route,
          params,
        },
      ],
    }),
  );
};

export const navigate = (route: string, params?: RouteParams): void => {
  navigator.dispatch(
    CommonActions.navigate({
      name: route,
      params,
    }),
  );
};

export const goBack = (): void => {
  navigator.dispatch(CommonActions.goBack());
};

export const getActiveRouteName = (
  state: NavigationState | PartialState<NavigationState>,
): string => {
  if (!state.index || state.index == null) {
    return '';
  }

  const route = state.routes[state.index];
  if (route.state) {
    return getActiveRouteName(route.state);
  }

  return route.name;
};

export { navigator };
