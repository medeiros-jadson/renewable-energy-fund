declare type UserState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isOverEighteen: boolean;
};

declare type ThemeState<ThemeType> = {
  theme: ThemeType;
  svg: SvgSet;
};

declare type ApplicationState<ThemeType> = {
  user: UserState;
  theme: ThemeState<ThemeType>;
};
