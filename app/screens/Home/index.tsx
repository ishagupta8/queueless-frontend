import React from 'react';
import { View,Button, FlatList, Image, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import HomeLocation from '../../components/HomeLocation';
import NavigationService from '../../navigation/NavigationService';
import styles from './styles';

interface IStore {
  name:string,
  add1:string,
  distance:string,
  status:string,
  storeImg:string,
}

const AddressArray = [
  {
    storeId:'001',
    name:"DMart",
    add1:"2nd Stage, HSR",
    distance:"0.96KM",
    status:"Open",
    storeImg:'../../assets/dmart.png',
  },
  {
    storeId:'002',
    name:"Metro",
    add1:"3rd Stage, HSR",
    distance:"1.6KM",
    status:"Open",
    storeImg:'../../assets/metro.png', 
  },
  {
    storeId:'003',
    name:"Big Bazaar",
    add1:"3rd Stage, HSR",
    distance:"1.6KM",
    status:"Open",
    storeImg:'../../assets/metro.png', 
  },
  {
    storeId:'004',
    name:"Metro",
    add1:"3rd Stage, HSR",
    distance:"1.6KM",
    status:"Open",
    storeImg:'../../assets/metro.png', 
  },
  {
    storeId:'005',
    name:"Metro",
    add1:"3rd Stage, HSR",
    distance:"1.6KM",
    status:"Open",
    storeImg:'../../assets/metro.png', 
  },
];
        
    const Item = ({name,add1,distance,status,storeImg}:IStore) => {

    return (
      <View style={styles.item}>
        <Image source={require('../../assets/dmart.png')} />   
        <Text style={styles.textStyle}>{name}</Text>
        <Text style={styles.storeAdd}>{add1}</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.storeAdd}>{distance}</Text>
        <Text style={styles.statusStyle}>{status}</Text>
        </View>
      </View>
    );
    }

  const renderItem = ({ item }:any) => (
      
    <Item name={item.name}
    add1={item.add1}
    distance={item.distance}
    status={item.status}
    storeImg={item.storeImg}
  />
    
  );

  // const openCart = () => {
  //   NavigationService.navigate("StoreDetails");
  // }

const Home: React.FC = () => {
  return (
    <>
    <View style={styles.container}>
      
      <FlatList
        data={AddressArray}
        horizontal
        renderItem={renderItem}
        keyExtractor={item => item.storeId}

      />
    </View>
    </>
  );
};

export default Home;
