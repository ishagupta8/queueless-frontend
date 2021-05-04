import React, { useState } from 'react';
import { SafeAreaView, View, FlatList,Text, Button} from 'react-native';
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

const Item = ({ title }:any) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
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
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={AddressArray}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
       <Button
          title="Add element"
          onPress={addAddress} />
    </SafeAreaView>
  );
}


export default Address;