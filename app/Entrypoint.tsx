/**
 * React Native App
 * Everything starts from the entrypoint
 */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import Navigator from 'app/navigation';
import store from './redux/store';


const Entrypoint: React.FC = () => {
  return (
    <Provider store={store}>
        <Navigator />
    </Provider>
  );
};

export default Entrypoint;
