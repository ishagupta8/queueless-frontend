/**
 * React Native App
 * Everything starts from the entrypoint
 */
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import Navigator from './navigation';
import configureStore from './redux/store';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

const { persistor, store } = configureStore();

const Entrypoint: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
};

export default Entrypoint;
