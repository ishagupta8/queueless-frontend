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
  const { buttonText, UserAddress } = route.params;
  console.log('button', buttonText);
  const [building, setBuilding] = useState(
    UserAddress ? UserAddress.building : '',
  );
  const [street, setStreet] = useState(UserAddress ? UserAddress.street : '');
  const [city, setCity] = useState(UserAddress ? UserAddress.city : '');
  const [state, setState] = useState(UserAddress ? UserAddress.state : '');
  const [pinCode, setPinCode] = useState(
    UserAddress ? UserAddress.pincode : '',
  );
  const [userId, setUserId] = useState(UserAddress ? UserAddress.userId : '');

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

  //Decide for add or update
  const decideFunction = () => {
    if (buttonText === 'SAVE') {
      addAddress();
    } else {
      putAddress();
    }
  };
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

  //Edit address
  const putAddress = async () => {
    try {
      const response = await axios.put(
        `http://nodejsnoq-env.eba-kfqp329m.us-east-1.elasticbeanstalk.com/api/v1/address/${UserAddress.address_id}`,
        address,
      );
      console.log(JSON.stringify(response.data));
      if (response.data != null) {
        ToastAndroid.show('Address updated', ToastAndroid.LONG);
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
        placeholder="Door No. & Building Name"
        value={building}
        onChangeText={input => setBuilding(input)}
      />
      <TextInput
        style={styles.inputcontainer}
        placeholder="Street Name"
        value={street}
        onChangeText={input => setStreet(input)}
      />
      <TextInput
        style={styles.inputcontainer}
        placeholder="Area / City"
        value={city}
        onChangeText={input => setCity(input)}
      />
      <TextInput
        style={styles.inputcontainer}
        placeholder="State"
        value={state}
        onChangeText={input => setState(input)}
      />
      <TextInput
        style={styles.inputcontainer}
        placeholder="PIN Code"
        value={pinCode}
        onChangeText={input => setPinCode(input)}
      />

      <Pressable style={styles.savebutton} onPress={() => decideFunction()}>
        <Text style={styles.textStyle}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

export default AddressForm;
