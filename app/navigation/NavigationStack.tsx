import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from './NavigationService';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import ForgotPassword from 'app/screens/ForgotPassword';
import MainLogin from 'app/screens/MainLogin';
import { ILoginState } from 'app/models/reducers/login';
import SignupForm from '../components/SignupForm';
import Barcode from '../components/Barcode';
import getSession from '../services/getSession';
import axios from 'axios';
import { useEffect, useState } from 'react';


const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();


const homeOptions = {
  title: 'Home',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

interface IState {
  loginReducer: ILoginState;
}

const AuthNavigator = () => {
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );
  return (
    <AuthStack.Navigator>
      <Stack.Screen
        name="MainLogin"
        component={MainLogin}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
        }}
        />
        <Stack.Screen
        name="SignupForm"
        component={SignupForm}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
        }}

      />
      <Stack.Screen
        name="Barcode"
        component={Barcode}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
        }}

      />
    </AuthStack.Navigator>
  );
};

const LoggedInNavigator = () => (
  <LoggedInStack.Navigator>
    <Stack.Screen name="Barcode" component={Barcode} />
  </LoggedInStack.Navigator>
);

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );
  const [flag, setflag] = useState(false);

  useEffect(() => {
    const session = async () =>{
      const userSession = await axios.get(`http://nodejsnoq-env.eba-kfqp329m.us-east-1.elasticbeanstalk.com/api/v1/`);
      console.log(userSession);
         if(userSession.data.data !== "nothing")
         setflag(true); 
      
      console.log("session",userSession.data.data);
      console.log("flag", flag);
    };
 
    session();
  }, []);
 
  return (
    <>
    {console.log("flag", flag)}
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none">
        {flag ? (
          <Stack.Screen
            name="Barcode"
            component={LoggedInNavigator}

          />
        ) : (
          <Stack.Screen
            name="Login"
            component={AuthNavigator}
            options={{
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;
