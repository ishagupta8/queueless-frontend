import React, { useEffect, useState } from 'react';
import {
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  ToastAndroid,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LoginButton from 'app/components/Button';
import PhnVerification from '../../components/PhnVerification';
import axios from 'axios';
import SignupForm from '../../components/SignupForm';



const Login: React.FC = () => {
  // const id = useSelector((state: IState) => state.loginReducer.id);
  const [isOTP, setIsOTP] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [mobileinput, setMobileInput] = useState('');
  const dispatch = useDispatch();
  //const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  //const onForgot = () => NavigationService.navigate('ForgotPassword');
  const onOTP = async () => {
    try {
      const response = await axios.get(
        `http://nodejsnoq-env.eba-kfqp329m.us-east-1.elasticbeanstalk.com/api/v1/auth/sendOtp?phonenumber=${mobileinput}&channel=sms`,
      );
      console.log(response.data);
      if (response.data != 'null')
        ToastAndroid.show('OTP Sent', ToastAndroid.SHORT);
    } catch (error) {
      // handle error
      console.log('OTP not sent');
    }
  };

  const handleInputChange = (text: any) => {
    if (/^\d+$/.test(text) || text === '') {
      setMobileInput(text);
    } else {
      Alert.alert('Invalid Mobile Number.Enter only digits');
    }
  };

  const handleMobileInput = () => {
    if (!mobileinput.trim()) {
      ToastAndroid.show('Please Enter Valid Mobile Number', ToastAndroid.SHORT);
    } else {
      onOTP();
      setIsMobile(!isMobile);
      setIsOTP(!isOTP);
    }
  };

  return (
    <>
      {isMobile && (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <ImageBackground
            source={require('../../assets/loginbg.png')}
            style={styles.imgcontainer}
            resizeMode="contain">
            <Text style={styles.textcontainer}>Login/SignUp</Text>
            <Text style={styles.mobilecontainer}>
              {'Enter your mobile number'}
            </Text>
            <View style={styles.signupcontainer}>
              <TextInput
                style={styles.inputcontainer}
                editable={false}
                placeholder={'+91'}></TextInput>
              <TextInput
                style={styles.inputcontainer1}
                keyboardType="numeric"
                maxLength={10}
                onChangeText={input => handleInputChange(input)}></TextInput>
            </View>
            <View style={styles.otpbutton}>
              <LoginButton
                onPress={() => {
                  handleMobileInput();
                }}
                title="SEND OTP"></LoginButton>
            </View>
          </ImageBackground>

          {/* <Text style={styles.login}>Login Status : {id}</Text> */}

          {/* <Button
        title="Forgot Password"
          onPress={onForgot}
        </Button> */}

          {/* <View style={styles.signupcontainer}>
        <Text style={styles.acccontainer}>Didn't have an account?</Text>
        <Text style={styles.signuptext} onPress={()=>{setIsMobile(!isMobile),setIsOTP(isOTP),setshowForm(!showForm)}}>SIGN UP</Text>
        </View> */}
        </KeyboardAvoidingView>
      )}

      {isOTP && <PhnVerification phnNumber={mobileinput} />}
    </>
  );
};

export default Login;
