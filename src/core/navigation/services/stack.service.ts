import { CommonActions, StackActions } from '~/libs';
import { navigator } from './navigation.service';

const extract = (route: string, params: RouteParams[]): Route[] => {
  const stack: Route[] = [];

  params.map((param: any) => {
    stack.push({
      name: route,
      params: param,
    });
  });

  return stack;
};

export const resetStack = (route: string, params: RouteParams[]): void => {
  navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: extract(route, params),
    }),
  );
};

export const pop = (count: number): void => {
  navigator.dispatch(StackActions.pop(count));
};

export const push = (routeName: string, params?: RouteParams): void => {
  navigator.dispatch(StackActions.push(routeName, params));
};

export const replace = (name: string, params?: RouteParams): void => {
  navigator.dispatch(StackActions.replace(name, params));
};
