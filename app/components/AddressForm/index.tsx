import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  Button,
  Pressable,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import styles from './styles';
import NavigationService from '../../navigation/NavigationService';

const AddressForm = ({ route }: any) => {
  const { buttonText } = route.params;
  console.log('button', buttonText);
  const [title, setTitle] = useState('');
  const [building, setBuilding] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [userId, setUserId] = useState('');

  //To get the user ID from current session
  useEffect(() => {
    const session = async () => {
      const userSession = await axios.get(
        `http://nodejsnoq-env.eba-kfqp329m.us-east-1.elasticbeanstalk.com/api/v1/`,
      );
      console.log(userSession);

      console.log('session in address', userSession.data.data);
      console.log('session in address', userSession.data.user_id);
      setUserId(userSession.data.user_id);
    };

    session();
  }, []);

  //To add a address
  const address = {
    building: building,
    street: street,
    city: city,
    state: state,
    pincode: pinCode,
    user: userId,
  };
  console.log(address);
  const addAddress = async () => {
    try {
      const response = await axios.post(
        `http://nodejsnoq-env.eba-kfqp329m.us-east-1.elasticbeanstalk.com/api/v1/address`,
        address,
      );
      console.log(JSON.stringify(response.data));
      if (response.data != null) {
        ToastAndroid.show('Address added', ToastAndroid.LONG);
        NavigationService.navigate('Address');
      } else {
        ToastAndroid.show('Please try again', ToastAndroid.LONG);
      }
    } catch (error) {
      // handle error
      console.log(error.message);
    }
  };
  return (
    <View>
      <TextInput
        style={styles.inputcontainer}
        placeholder="Label / Title"
        onChangeText={input => setTitle(input)}
      />
      <TextInput
        style={styles.inputcontainer}
        placeholder="Door No. & Building Name"
        onChangeText={input => setBuilding(input)}
      />
      <TextInput
        style={styles.inputcontainer}
        placeholder="Street Name"
        onChangeText={input => setStreet(input)}
      />
      <TextInput
        style={styles.inputcontainer}
        placeholder="Area / City"
        onChangeText={input => setCity(input)}
      />
      <TextInput
        style={styles.inputcontainer}
        placeholder="State"
        onChangeText={input => setState(input)}
      />
      <TextInput
        style={styles.inputcontainer}
        placeholder="PIN Code"
        onChangeText={input => setPinCode(input)}
      />

      <Pressable style={styles.savebutton} onPress={() => addAddress()}>
        <Text style={styles.textStyle}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

export default AddressForm;
