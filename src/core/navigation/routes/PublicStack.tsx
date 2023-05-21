import React from 'react';
import { createNativeStackNavigator } from '~/libs';
import * as Pages from '~/pages';
import { ROUTES } from '../enums';

const Public = createNativeStackNavigator<PublicStackParams>();

const PublicStack = (): JSX.Element => (
  <Public.Navigator
    initialRouteName={ROUTES.SIGN_IN}
    screenOptions={{
      header: () => <></>,
    }}
  >
    <Public.Screen name={ROUTES.SIGN_IN} component={Pages.SignIn} />
    <Public.Screen name={ROUTES.SIGN_UP} component={Pages.SignUp} />
  </Public.Navigator>
);

export default PublicStack;
