declare type RouteParams = Record<string, any>;

declare type Route = {
  name: string;
  params: RouteParams;
};
