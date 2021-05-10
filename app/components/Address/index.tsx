import { useFocusEffect } from '@react-navigation/native';
import { Assets } from '@react-navigation/stack';
import axios from 'axios';
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ToastAndroid,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import NavigationService from '../../navigation/NavigationService';
import { Payment } from '../Payment';
import styles from './styles';

interface Iadd {
  title: string;
  add1: string;
  add2: string;
  checked: boolean;
}

interface AddressInt {
  street: string;
  building: string;
  pincode: string;
  city: string;
  state: string;
  user: string;
  address_id: string;
}
interface AddInt {
  item: AddressInt;
  street: string;
  building: string;
  pincode: string;
  city: string;
  state: string;
}

    const Address = ({route}:any) => {
  const {totalPrice} = route.params;
  const arr: Array<AddressInt> = [];
  const [addressList, setAddressList] = useState(arr);
  console.log('after useState', addressList);
  const [addressFlag, setAddressFlag] = useState(false);
  const [count, setCount] = useState(0);
  const [radioBtn, setRadioBtn] = useState('');

  let userId: any;

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;
      // Do something when the screen is focused
      // To get session
      console.log('Inside useEffect of Address component*****');
      const session = async () => {
        const userSession = await axios.get(
          `http://nodejsnoq-env.eba-kfqp329m.us-east-1.elasticbeanstalk.com/api/v1/`,
        );

        console.log('session in address', userSession.data.data);
        console.log('userId in address', userSession.data.user_id);
        userId = userSession.data.user_id;
        try {
          const allAddress = await axios.get(
            `http://nodejsnoq-env.eba-kfqp329m.us-east-1.elasticbeanstalk.com/api/v1/address/userAddresses?userId=${userId}`,
          );
          console.log('allAddress type', typeof allAddress);
          console.log('allAddress ******************', allAddress);
          console.log('all address', allAddress.data);
          console.log(typeof allAddress.data);
          if (isActive) {
            setAddressList(allAddress.data);
            setAddressFlag(true);
          }
        } catch (error) {
          console.log(error);
        }
      };
      console.log('count in useEffect', count);
      session();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('In return statement');
        isActive = false;
      };
    }, [count]),
  );

  const addAddress = () => {
    NavigationService.navigate('AddressForm', { buttonText: 'SAVE' });
  };
  const editAddress = (item: object) => {
    NavigationService.navigate('AddressForm', {
      buttonText: 'UPDATE',
      UserAddress: item,
    });
  };

  //Delete Address
  const deleteAddress = async (item: AddressInt) => {
    try {
      const response = await axios.delete(
        `http://nodejsnoq-env.eba-kfqp329m.us-east-1.elasticbeanstalk.com/api/v1/address/${item.address_id}`,
      );
      console.log(JSON.stringify(response.data));
      if (response.data != null) {
        ToastAndroid.show('Address deleted', ToastAndroid.LONG);
        setCount(count => count + 1);
      } else {
        ToastAndroid.show('Please try again', ToastAndroid.LONG);
      }
    } catch (error) {
      // handle error
      console.log(error.message);
    }
  };
  const openOrders = () => {
    NavigationService.navigate('MyOrders');
  };

  const ProceedToPayment = () => {
    NavigationService.navigate("Payment",{totalPrice:totalPrice});
  }

  //Function for implementing radio button
  function RadioButton(item: AddressInt) {
    return (
      <View
        style={[
          {
            height: 16,
            width: 16,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: '#0DB165',
            alignItems: 'center',
            justifyContent: 'center',
          },
          // props.style,
        ]}>
        {console.log('key value', radioBtn)}
        {item.address_id === radioBtn ? (
          <View
            style={{
              height: 7,
              width: 7,
              borderRadius: 6,
              backgroundColor: '#0DB165',
            }}
          />
        ) : null}
      </View>
    );
  }

  const Item = ({ item, street, building, pincode, city, state }: AddInt) => {
    return (
      <View style={styles.item}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.radioBtnContainer}>
            <Pressable onPress={() => setRadioBtn(item.address_id)}>
              {RadioButton(item)}
            </Pressable>
          </View>

          <View style={styles.addressConatainer}>
            <Text style={styles.title} numberOfLines={1}>
              {building}
            </Text>
            <Text style={styles.addtext}>
              {street}
              {', '}
              {city}
            </Text>
            <Text style={styles.addtext}>
              {state}
              {'-'}
              {pincode}
            </Text>
          </View>

          <View style={styles.editDeleteContainer}>
            <Pressable onPress={() => deleteAddress(item)}>
              <Image
                style={styles.delimg}
                source={require('../../assets/delete.png')}
              />
            </Pressable>
            <Pressable onPress={() => editAddress(item)}>
              <Image source={require('../../assets/edit.png')} />
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {console.log('addressFlag inside return', addressFlag)}
          {console.log('addressList inside return', addressList)}
          {console.log('count in return', count)}

          {addressFlag &&
            addressList.map((item, key) => (
              <Item
                item={item}
                street={item.street}
                building={item.building}
                pincode={item.pincode}
                city={item.city}
                state={item.state}
                key={item.address_id}
              />
            ))}
        </View>
        <Pressable style={styles.Addressbutton} onPress={() => addAddress()}>
          <Image source={require('../../assets/addressimg.png')} />
          <Text style={styles.addresstext}>ADD ADDRESS</Text>
        </Pressable>
      </ScrollView>

      <Pressable style={styles.proceedbutton} onPress={() => ProceedToPayment()}>
        <Text style={styles.textStyle}>PROCEED</Text>
      </Pressable>
    </>
  );
};

export default Address;

