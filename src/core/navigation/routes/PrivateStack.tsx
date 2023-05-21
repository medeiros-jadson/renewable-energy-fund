import React from 'react';
import { BottomTab } from '~/components';
import { createBottomTabNavigator } from '~/libs';
import * as Pages from '~/pages';
import { ROUTES } from '../enums';
import HomeStack from './HomeStack';

const Private = createBottomTabNavigator<PrivateStackParams>();

const PrivateStack = (): JSX.Element => (
  <Private.Navigator
    initialRouteName={ROUTES.HOME_TAB}
    tabBar={(props) => <BottomTab props={props} />}
    screenOptions={{
      header: () => <></>,
    }}
  >
    <Private.Screen name={ROUTES.HOME_TAB} component={HomeStack} />
    <Private.Screen name={ROUTES.TRADE_TAB} component={Pages.Example} />
    <Private.Screen name={ROUTES.PORTIFOLIO_TAB} component={Pages.Example} />
  </Private.Navigator>
);

export default PrivateStack;
