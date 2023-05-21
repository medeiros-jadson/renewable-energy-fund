const { ROUTES, MODALS } = Modules;

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

declare type ModalsStackParams = {
  [MODALS.DEFAULT]: {
    params: {
      title: string;
      dismiss?: boolean;
      loadingText?: string;
      okText?: string;
      onPressOk?: () => void;
    };
  };
};
