const { ROUTES, MODALS } = Modules;

declare type HomeStackParams = {
  [ROUTES.HOME]: undefined;
  [ROUTES.FUND_DETAILS]: {
    params: {
      data?: unknown;
    };
  };
};

declare type PrivateStackParams = {
  [ROUTES.HOME_TAB]: undefined;
  [ROUTES.TRADE_TAB]: undefined;
  [ROUTES.PORTIFOLIO_TAB]: undefined;
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
