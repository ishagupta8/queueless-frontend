import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { rootReducer } from './Reducers';
import { persistStore, persistCombineReducers, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const config = {
    key: 'root',
    storage: AsyncStorage,
  };

const reducers = persistReducer(config, rootReducer);


const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

const persistor = persistStore(store);

const configureStore = () => {
    return { persistor, store };
  };
  

  
  export default configureStore;
  
