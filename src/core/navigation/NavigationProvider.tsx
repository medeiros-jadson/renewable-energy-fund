import React, { useContext, useRef } from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
  NavigationState,
  ParamListBase,
  ThemeContext,
  createNativeStackNavigator,
} from '~/libs';
import { ROUTES_STACKS } from './enums';
import { PrivateStack, PublicStack } from './routes';
import { getActiveRouteName } from './services';

type Props = {
  setNavigator: (navigatorRef: NavigationContainerRef<ParamListBase>) => void;
};

const MainStack = createNativeStackNavigator();

const NavigationProvider: React.FC<Props> = ({ setNavigator }) => {
  const routeNameRef = useRef<any>();
  const { colors } = useContext(ThemeContext);

  const themeContext = {
    dark: false,
    colors: {
      primary: colors.primary[500],
      background: 'transparent',
      card: colors.primary[500],
      text: colors.text[500],
      border: colors.primary[500],
      notification: colors.primary[500],
    },
  };

  const onNavigationStateChange = (state?: NavigationState): void => {
    if (state) {
      const currentRouteName = getActiveRouteName(state);
      routeNameRef.current = currentRouteName;
    }
  };

  const getInitialRoute = (): string => {
    return ROUTES_STACKS.PUBLIC;
  };

  const initialRoute = getInitialRoute();

  return (
    <NavigationContainer
      ref={setNavigator}
      theme={themeContext}
      onStateChange={onNavigationStateChange}
    >
      <MainStack.Navigator initialRouteName={initialRoute}>
        <MainStack.Screen name={ROUTES_STACKS.PUBLIC} component={PublicStack} />
        <MainStack.Screen
          name={ROUTES_STACKS.PRIVATE}
          component={PrivateStack}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationProvider;
