export declare type ShadeColors = {
  white: string;
  whiteFade: string;
  black: string;
  blackFade: string;
};

export declare type DefaultColors = {
  50?: string;
  100: string;
  200?: string;
  300: string;
  400?: string;
  500: string;
  600?: string;
  700: string;
  800?: string;
  900: string;
  fade: string;
  contrast?: string;
};

export declare type Colors = {
  shade: ShadeColors;
  danger: DefaultColors;
  success: DefaultColors;
  warning: DefaultColors;
  info: DefaultColors;
  text: DefaultColors;
  primary: DefaultColors;
  secondary: DefaultColors;
  tertiary: DefaultColors;
  background: DefaultColors;
};
