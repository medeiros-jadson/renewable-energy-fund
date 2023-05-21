import React from 'react';
import { createNativeStackNavigator } from '~/libs';
import * as Pages from '~/pages';
import { ROUTES } from '../enums';

const Home = createNativeStackNavigator<HomeStackParams>();

const HomeStack = (): JSX.Element => (
  <Home.Navigator
    initialRouteName={ROUTES.HOME}
    screenOptions={{
      header: () => <></>,
    }}
  >
    <Home.Screen name={ROUTES.HOME} component={Pages.Home} />
    <Home.Screen name={ROUTES.FUND_DETAILS} component={Pages.FundDetails} />
  </Home.Navigator>
);

export default HomeStack;
