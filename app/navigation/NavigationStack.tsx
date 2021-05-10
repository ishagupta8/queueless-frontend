import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from './NavigationService';
import NavigationService from 'app/navigation/NavigationService';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import MainLogin from 'app/screens/MainLogin';
import VirtualCart from 'app/screens/VirtualCart';
import SignupForm from '../components/SignupForm';
import Barcode from '../components/Barcode';
import Address from '../components/Address';
import AddressForm from '../components/AddressForm';
import CartEmpty from '../components/CartEmpty';
import getSession from '../services/getSession';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import MyOrders from '../screens/MyOrders';
import Invoice from '../screens/Invoice';
import storeDetails from '../components/storeDetails';
import Splash from '../screens/Splash';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();

const CounterIcon: React.FC = () => {
  const [showCart, setShowCart] = useState(false);
  const Items = useSelector((state: any) => state.products);
  console.log('#################3', Items);

  useEffect(() => {
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
    if (Items.length === 0) {
      setShowCart(false);
      console.log('length=0');
    } else {
      setShowCart(true);
      console.log('length>0');
    }
  }, [Items]);
  return (
    <Pressable
      onPress={() => NavigationService.navigate('VirtualCart')}
      style={{ padding: 20 }}>
      <Image source={require('../assets/cartIcon.png')} />
      {showCart ? (
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#2CC980',
            width: 18,
            height: 18,
            borderRadius: 11 / 1,
            right: 10,
            top: +10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontSize: 8,
            }}>
            {Items.length}
          </Text>
        </View>
      ) : null}
    </Pressable>
  );
};

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainLogin" component={MainLogin} />
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="SignupForm" component={SignupForm} />
      <Stack.Screen name="Barcode" component={HomeScreens} />
    </AuthStack.Navigator>
  );
};

const HomeScreens = () => (
  <LoggedInStack.Navigator
    screenOptions={{
      headerTitleStyle: {
        alignContent: 'space-between',
        textAlign: 'center',
        color: '#2CC980',
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'Proxima Nova',
      },
      headerTintColor: '#2CC980',
    }}>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: 'NoQ',
      }}
    />

    <Stack.Screen
      name="Barcode"
      component={Barcode}
      options={{
        headerTitle: 'Scan',
        headerRight: () => <CounterIcon />,
      }}
    />
    <Stack.Screen
      name="VirtualCart"
      component={VirtualCart}
      options={{
        headerTitle: 'My Cart',
        headerRight: () => (
          <Pressable
            onPress={() => NavigationService.navigate('VirtualCart')}
            style={{ padding: 20 }}>
            <Image source={require('../assets/shoppingList.png')} />
          </Pressable>
        ),
      }}
    />
    <Stack.Screen name="Address" component={Address} />
    <Stack.Screen name="AddressForm" component={AddressForm} />
    <Stack.Screen name="MyOrders" component={MyOrders} />
    <Stack.Screen name="Invoice" component={Invoice} />
    <Stack.Screen
      name="storeDetails"
      component={storeDetails}
      options={{
        headerTitle: 'Shopping',
      }}
    />
  </LoggedInStack.Navigator>
);

const LoggedInNavigator = () => (
  <LoggedInStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="HomeScreens" component={HomeScreens} />
  </LoggedInStack.Navigator>
);

const App: React.FC = () => {
  const [flag, setflag] = useState(false);

  useEffect(() => {
    const session = async () => {
      const userSession = await axios.get(
        `http://nodejsnoq-env.eba-kfqp329m.us-east-1.elasticbeanstalk.com/api/v1/`,
      );

      console.log(userSession);
      if (userSession.data.data !== 'nothing') setflag(true);

      console.log('session', userSession.data.data);
      console.log('session', userSession.data.user_id);
      console.log('flagggg', flag);
    };

    session();
  }, []);

  return (
    <>
      {console.log('flag', flag)}
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator headerMode="none">
          {flag ? (
            <Stack.Screen name="HomePage" component={LoggedInNavigator} />
          ) : (
            <Stack.Screen name="Login" component={AuthNavigator} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
