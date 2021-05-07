import { Assets } from '@react-navigation/stack';
import React, { useState } from 'react';
import {SafeAreaView, View, FlatList,Text, Image, Pressable, TextInputComponent} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import NavigationService from '../../navigation/NavigationService';
import styles from './styles';


interface Iadd {
  title:string,
  add1:string,
  add2:string,
  checked:boolean
}

const AddressArray = [
  {
    id: '1',
    title:'My Home',
    add1: '#274, 27th Sector, HSR Layout, Bangalore',
    add2: 'Karnataka - 560037',
    checked: false,
  },
  {
    id: '2',
    title:'My Home',
    add1: '#274, 27th Sector, HSR Layout, Bangalore',
    add2: 'Karnataka - 560037',
    checked:false,
  },
];


const Address = () => {
    const [addAdd, setAdd] = useState(AddressArray);

    const addAddress = () => {
      NavigationService.navigate('AddressForm',{buttonText:'SAVE'});
    }
    const editAddress = () => {
      NavigationService.navigate('AddressForm',{buttonText:"UPDATE"});
    }
    
    
    const Item = ({ title,add1,add2,checked}:Iadd) => {

    return (
      <View style={styles.item}>
        <View style={{flexDirection:'row'}}> 
        <BouncyCheckbox
        size={15}
      fillColor="#0DB165"
      unfillColor="#FFFFFF"
      iconStyle={{ borderColor: "#0DB165" }}
      isChecked={checked}
      onPress={()=>!checked}
    />      
        <Text style={styles.title}>{title}</Text>
        <Pressable>
        <Image style={styles.delimg} source={require('../../assets/delete.png')} />
        </Pressable>
        <Pressable onPress={()=>editAddress()}>
        <Image source={require('../../assets/edit.png')} />
        </Pressable>
        </View>
        <Text style={styles.addtext}>{add1}</Text>
        <Text style={styles.addtext}>{add2}</Text>
      </View>
    );
    }

  // const addAddress = () => {
  //   var newAddressArray = [...AddressArray , {id : "3", title:'My Home',add1: '#274, 27th Sector, HSR Layout, Bangalore',
  //   add2: 'Karnataka - 560037',
  // }];
  //   setAdd(newAddressArray);
  // }
  const renderItem = ({ item }:any) => (
      
    <Item title={item.title} 
    add1={item.add1}
    add2={item.add2}
    checked={item.checked}
  />
    
  );

  return (
    <>
    <View style={styles.container}>
      <FlatList
        data={AddressArray}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>
      <Pressable
              style={styles.Addressbutton}
              onPress={()=>addAddress()}
              >
               <Image source={require('../../assets/addressimg.png')} /> 
              <Text style={styles.addresstext}>ADD ADDRESS</Text>
            </Pressable> 
       <Pressable
              style={styles.proceedbutton}
              >
              <Text style={styles.textStyle}>PROCEED</Text>
            </Pressable>
    </>
  );
}


export default Address;