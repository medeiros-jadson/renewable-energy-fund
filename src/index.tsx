import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationProvider, useNavigation } from './core/navigation';
import { AppStore, Persistor } from './core/stores';
import { ThemeProvider } from './core/theme';
import { PersistGate, Provider, SafeAreaProvider } from './libs';

const App: React.FC = () => {
  const { navigation } = useNavigation();

  return (
    <SafeAreaProvider>
      <Provider store={AppStore}>
        <PersistGate loading={null} persistor={Persistor}>
          <ThemeProvider>
            <StatusBar
              animated
              barStyle="dark-content"
              backgroundColor="#FFFFFF"
            />
            <NavigationProvider
              setNavigator={(navigatorRef): void =>
                navigation.setNavigator(navigatorRef)
              }
            />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
