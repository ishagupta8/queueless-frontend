/**
 * React Native App
 * Everything starts from the entrypoint
 */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import Navigator from 'app/navigation';
import configureStore from 'app/store';

const { persistor, store } = configureStore();

const Entrypoint: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
};

export default Entrypoint;
