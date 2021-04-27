import React from 'react';
import { ImageBackground, KeyboardAvoidingView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import {Text,Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface IState {
  loginReducer: ILoginState;
}

const Login: React.FC = () => {
  // const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  //const onForgot = () => NavigationService.navigate('ForgotPassword');
  return (
      <View style={styles.container}>
        <ImageBackground 
        source={require('../../assets/loginbg.png')}
        style={styles.imgcontainer}
        resizeMode="contain"
        >
          <Text style={styles.textcontainer}>Login</Text>
          <Text style={styles.mobilecontainer}>{"Enter your mobile number"}</Text>
          <TextInput 
          style={styles.inputcontainer}
          keyboardType="numeric"></TextInput>
        </ImageBackground>
       
        {/* <Text style={styles.login}>Login Status : {id}</Text> */}
        
        <Button title="SEND OTP" onPress={onLogin} />
        {/* <Button
        title="Forgot Password"
          onPress={onForgot}
        </Button> */}
        <Text style={styles.acccontainer}>Didn't have an account?</Text>
        <Text style={styles.signupcontainer}>Sign Up</Text>
      </View>
  );
};

export default Login;
