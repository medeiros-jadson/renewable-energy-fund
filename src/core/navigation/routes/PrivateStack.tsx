import React, { Fragment } from 'react';
import { createNativeStackNavigator } from '~/libs';
import * as Pages from '~/pages';
import { ROUTES } from '../enums';

const Private = createNativeStackNavigator<PrivateStackParams>();

const PrivateStack = (): JSX.Element => (
  <Private.Navigator
    initialRouteName={ROUTES.HOME}
    screenOptions={{
      header: () => <Fragment />,
    }}
  >
    <Private.Screen name={ROUTES.HOME} component={Pages.Home} />
    <Private.Screen name={ROUTES.TRADE} component={Pages.Trade} />
  </Private.Navigator>
);

export default PrivateStack;
