import React, { useState } from 'react';
import {
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LoginButton from 'app/components/Button';
import axios from 'axios';
import ShowModal from '../ShowModal';

interface Iphn {
  phnNumber: string;
}

const PhnVerification: React.FC<Iphn> = ({ phnNumber }: Iphn) => {
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [otpVerification, setOtpVerification] = useState('');
  const [user, setUser] = useState(Boolean);
  const [otpResult, setOtpResult] = useState('');

  //To close modal and navigate to sign up or home screen
  const handleClose = () => {
    setModalVisible(!modalVisible);
    if (otpVerification === 'approved') {
      if (user) {
        NavigationService.navigate('ForgetPassword');
      } else {
        NavigationService.navigate('SignupForm');
      }
    }
  };

  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const VerifyOTP = async () => {
    let otp = otp1 + otp2 + otp3 + otp4;
    try {
      const response = await axios.get(
        `https://qless-new.herokuapp.com/api/v1/auth/verifyOtp?phonenumber=91${phnNumber}&code=${otp}`,
      );
      console.log(JSON.stringify(response.data));
      setModalVisible(!modalVisible);
      setOtpVerification(response.data.isVerified);
      setUser(response.data.isUser);
      if (response.data.isVerified === 'approved') {
        setOtpResult('OTP has been verified');
      } else {
        setOtpResult('Please enter valid OTP');
      }
    } catch (error) {
      // handle error
      console.log(error.message);
    }
  };

  return (
    <>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ImageBackground
          source={require('../../assets/loginbg.png')}
          style={styles.imgcontainer}
          resizeMode="contain">
          <ShowModal
            modalVisible={modalVisible}
            handleClose={handleClose}
            modalInput={otpResult}
          />
          <Text style={styles.textcontainer}>Verify Number</Text>
          <Text style={styles.mobilecontainer}>
            {'We have sent the OTP to your number'}
          </Text>
          <View style={styles.otpcontainer}>
            <TextInput
              style={styles.inputcontainer}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={input => setOtp1(input)}></TextInput>
            <TextInput
              style={styles.inputcontainer}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={input => setOtp2(input)}></TextInput>
            <TextInput
              style={styles.inputcontainer}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={input => setOtp3(input)}></TextInput>
            <TextInput
              style={styles.inputcontainer}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={input => setOtp4(input)}></TextInput>
          </View>
          <View style={styles.otpbutton}>
            <LoginButton OnPress={VerifyOTP()} title="Verify"></LoginButton>
          </View>
          <View style={styles.signupcontainer}>
            <Text style={styles.acccontainer}>Not received the OTP?</Text>

            <Pressable onPress={VerifyOTP}>
              <Text style={styles.signuptext}>RESEND</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </>
  );
};

export default PhnVerification;
