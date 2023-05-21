const { ROUTES } = Modules;

declare type PrivateStackParams = {
  [ROUTES.HOME]: undefined;
  [ROUTES.TRADE]: {
    params: {
      data?: unknown;
    };
  };
};

declare type PublicStackParams = {
  [ROUTES.SIGN_IN]: undefined;
  [ROUTES.SIGN_UP]: undefined;
};
