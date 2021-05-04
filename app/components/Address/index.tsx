import { Assets } from '@react-navigation/stack';
import React, { useState } from 'react';
import { SafeAreaView, View, FlatList,Text, Button, EdgeInsetsPropType, Image, Pressable} from 'react-native';
import styles from './styles';

const AddressArray = [
  {
    id: '1',
    title:'My Home',
    add1: '#274, 27th Sector, HSR Layout, Bangalore',
    add2: 'Karnataka - 560037',
  },
  {
    id: '2',
    title:'My Home',
    add1: '#274, 27th Sector, HSR Layout, Bangalore',
    add2: 'Karnataka - 560037',
  },
];



const Item = ({ title ,add1,add2}:any) => (
  <View style={styles.item}>
     {/* <RadioButton
            isSelected={this.state.selectedIndex == index }
            onPress={() => {this.onPress(index)}}
          />  */}
    <View style={{flexDirection:'row'}}>      
    <Text style={styles.title}>{title}</Text>
    <Image style={styles.editimg} source={require('../../assets/edit.png')} />
    </View>
    <Text style={styles.addtext}>{add1}</Text>
    <Text style={styles.addtext}>{add2}</Text>
  </View>
);

const Address = () => {
    const [addAdd, setAdd] = useState(AddressArray);

  const addAddress = () => {
    var newAddressArray = [...AddressArray , {id : "3", title:'My Home',add1: '#274, 27th Sector, HSR Layout, Bangalore',
    add2: 'Karnataka - 560037',
  }];
    setAdd(newAddressArray);
  }
  const renderItem = ({ item }:any) => (
      
    <Item title={item.title} 
    add1={item.add1}
    add2={item.add2}/>
    
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={AddressArray}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={AddressArray}
      />
      
       <Pressable
              style={styles.proceedbutton}
              >
              <Text style={styles.textStyle}>PROCEED</Text>
            </Pressable>
    </SafeAreaView>
  );
}


export default Address;