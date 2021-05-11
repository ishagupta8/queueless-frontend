import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

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
import { Image, Pressable } from 'react-native';
import MyOrders from '../screens/MyOrders';
import Invoice from '../screens/Invoice';
import storeDetails from '../components/storeDetails';
import Payment from '../components/Payment';
import { getUserSession } from '../redux/Actions/storeActions';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainLogin" component={MainLogin} />
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="SignupForm" component={SignupForm} />
      <Stack.Screen name="Home" component={HomeScreens} />
    </AuthStack.Navigator>
  );
};

function LogoTitle(props) {
  return (
    <Image
    style={{alignSelf:'center'}}
      source={require('../assets/noQ.png')}
    />
  );
}

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
        headerTitle:props => <LogoTitle {...props} />,
      }}
    />

    <Stack.Screen
      name="Barcode"
      component={Barcode}
      options={{
        headerTitle: 'Scan',
        headerRight: () => (
          <Pressable
            onPress={() => NavigationService.navigate('VirtualCart')}
            style={{ padding: 20 }}>
            <Image source={require('../assets/cartIcon.png')} />
          </Pressable>
        ),
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
    <Stack.Screen name="Address" component={Address} 
    options={{
      headerRight: () => (
        <Pressable
          style={{ padding: 20 }}>
          <Image source={require('../assets/profileIcon.png')} />
        </Pressable>
      ),
    }}/>
    <Stack.Screen name="AddressForm" component={AddressForm}
    options={{
      headerRight: () => (
        <Pressable
          style={{ padding: 20 }}>
          <Image source={require('../assets/profileIcon.png')} />
        </Pressable>
      ),
    }}
    />
    <Stack.Screen name="MyOrders" component={MyOrders} 
    options={{
      headerRight: () => (
        <Pressable
          style={{ padding: 20 }}>
          <Image source={require('../assets/profileIcon.png')} />
        </Pressable>
      ),
    }}
    />
    <Stack.Screen name="Invoice" component={Invoice}
    options={{
      headerRight: () => (
        <Pressable
          style={{ padding: 20 }}>
          <Image source={require('../assets/profileIcon.png')} />
        </Pressable>
      ),
    }} />
    <Stack.Screen
      name="storeDetails"
      component={storeDetails}
      options={{
        headerTitle: 'Shopping',
        headerRight: () => (
          <Pressable
            style={{ padding: 20 }}>
            <Image source={require('../assets/profileIcon.png')} />
          </Pressable>
        ),
      }}
    />

<Stack.Screen
      name="Payment"
      component={Payment}
      options={{
        headerTitle: 'Payments',
        headerRight: () => (
          <Pressable
            style={{ padding: 20 }}>
            <Image source={require('../assets/profileIcon.png')} />
          </Pressable>
        ),
      }}
    />
    
  </LoggedInStack.Navigator>
);

const LoggedInNavigator = () => (
  <LoggedInStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={HomeScreens} />
  </LoggedInStack.Navigator>
);

const App: React.FC = () => {
  const [flag, setflag] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const session = async () => {
      const userSession = await axios.get(
        `http://nodejsnoq-env.eba-kfqp329m.us-east-1.elasticbeanstalk.com/api/v1/`,
      );

     
        
      console.log(userSession);
    
      if (userSession.data.data !== 'nothing') 
      {
        setflag(true);
        dispatch(getUserSession({
          phone:userSession.data.data,
          user:userSession.data.user_id}));
        }

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
            <Stack.Screen name="Home" component={LoggedInNavigator} />
          ) : (
            <Stack.Screen name="Login" component={AuthNavigator} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
