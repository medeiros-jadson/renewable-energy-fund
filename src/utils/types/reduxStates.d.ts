declare type UserState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isOverEighteen: boolean;
};

declare type ApplicationState = {
  user: UserState;
};
