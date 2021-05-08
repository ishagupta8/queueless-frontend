import { Assets } from '@react-navigation/stack';
import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
  Pressable,
  TextInputComponent,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import NavigationService from '../../navigation/NavigationService';
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
  street: string;
  building: string;
  pincode: string;
  city: string;
  state: string;
}
const AddressArray = [
  {
    id: '1',
    building: 'My Home',
    street: '#274, 27th Sector, HSR Layout, Bangalore',
    state: 'Karnataka',
    pincode: '560037',
    city: 'Bangalore',
  },
  {
    id: '2',
    building: 'My Home',
    street: '#274, 27th Sector, HSR Layout, Bangalore',
    state: 'Karnataka',
    pincode: '560037',
    city: 'Bangalore',
  },
];

const Address = () => {
  const arr: Array<AddressInt> = [];
  const [addAdd, setAdd] = useState(AddressArray);
  const [addressList, setAddressList] = useState(arr);
  console.log('after useState', addressList);
  const [addressFlag, setAddressFlag] = useState(false);

  let userId: any;

  //To get address of the current user
  useEffect(() => {
    //To get session
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
        setAddressList(allAddress.data);
        setAddressFlag(true);
      } catch (error) {
        console.log(error);
      }
    };
    // const getAddress = async () => {
    //   console.log('UserId in getAddress', userId);
    //   allAddress = await axios.get(
    //     `http://nodejsnoq-env.eba-kfqp329m.us-east-1.elasticbeanstalk.com/api/v1/address/userAddresses?userId=${userId}`,
    //   );
    //   console.log('all address', allAddress);
    //   setAddressFlag(true);
    // };
    if (!addressFlag) {
      session();
    }
    // getAddress();
    // console.log('UserId after getAddress', userId);
  }, []);

  const addAddress = () => {
    NavigationService.navigate('AddressForm', { buttontext: 'SAVE' });
  };
  const editAddress = () => {
    NavigationService.navigate('AddressForm', { buttontext: 'UPDATE' });
  };
  const openCart = () => {
    NavigationService.navigate('CartEmpty');
  };

  const Item = ({ street, building, pincode, city, state }: AddInt) => {
    return (
      <View style={styles.item}>
        <View style={{ flexDirection: 'row' }}>
          {/* <BouncyCheckbox
            size={15}
            fillColor="#0DB165"
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: '#0DB165' }}
            isChecked={checked}
            onPress={() => !checked}
          /> */}
          <Text style={styles.title}>{building}</Text>
          <Pressable>
            <Image
              style={styles.delimg}
              source={require('../../assets/delete.png')}
            />
          </Pressable>
          <Pressable onPress={() => editAddress()}>
            <Image source={require('../../assets/edit.png')} />
          </Pressable>
        </View>
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
    );
  };

  // const addAddress = () => {
  //   var newAddressArray = [...AddressArray , {id : "3", title:'My Home',add1: '#274, 27th Sector, HSR Layout, Bangalore',
  //   add2: 'Karnataka - 560037',
  // }];
  //   setAdd(newAddressArray);
  // }
  const renderItem = ({ item }: any) => (
    <Item
      street={item.street}
      building={item.building}
      pincode={item.pincode}
      city={item.city}
      state={item.state}
    />
  );

  return (
    <>
      <View style={styles.container}>
        {console.log('addressFlag inside return', addressFlag)}
        {console.log('addressList inside return', addressList)}
        {/* {addressFlag && (
          <FlatList
            data={addressList}
            renderItem={renderItem}
            keyExtractor={item => item.address_id}
          />
        )} */}
        {/* {addressList.map((item, key) => {
          // <Item
          //   street={item.street}
          //   building={item.building}
          //   pincode={item.pincode}
          //   city={item.city}
          //   state={item.state}
          //   user={item.user}
          //   address_id={item.address_id}
          // />;
          <Text>{item.city}</Text>;
        })} */}
        {addressFlag &&
          addressList.map(item => (
            <Item
              street={item.street}
              building={item.building}
              pincode={item.pincode}
              city={item.city}
              state={item.state}
            />
          ))}
      </View>
      <Pressable style={styles.Addressbutton} onPress={() => addAddress()}>
        <Image source={require('../../assets/addressimg.png')} />
        <Text style={styles.addresstext}>ADD ADDRESS</Text>
      </Pressable>
      <Pressable style={styles.proceedbutton} onPress={() => openCart()}>
        <Text style={styles.textStyle}>PROCEED</Text>
      </Pressable>
    </>
  );
};

export default Address;
