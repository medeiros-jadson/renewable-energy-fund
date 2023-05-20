import React from 'react';
import { Text, View } from 'react-native';
import { AppStore, Persistor } from './core/stores';
import { PersistGate, Provider } from './libs';

const App: React.FC = () => {
  return (
    <Provider store={AppStore}>
      <PersistGate loading={null} persistor={Persistor}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>Hello</Text>
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
