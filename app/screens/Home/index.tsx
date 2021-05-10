import React, { useState } from 'react'
import { Dimensions, FlatList, Image, Pressable, Text, TouchableWithoutFeedback, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
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
      add1:"B - 19, Sector-A",
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
        <TouchableWithoutFeedback onPress={ () => openCart()}>
        <View style={styles.itemStyle}>
          <Image source={require('../../assets/dmart.png')} />   
          <Text style={styles.textStyle}>{name}</Text>
          <Text style={styles.storeAdd}>{add1}</Text>
          <View style={{flexDirection:'row'}}>
          <Image style={styles.locImg}source={require('../../assets/locationIcon.png')} /> 
          <Text style={styles.storeDis}>{distance}</Text>
          <Text style={styles.statusStyle}>{status}</Text>
          </View>
        </View>
        </TouchableWithoutFeedback>
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
  
    const openCart = () => {
      NavigationService.navigate("storeDetails");
    }
  
    const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.4219983;
const LONGITUDE = -122.084;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Home = () => {
    let region = {
        latitude:LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
       };
    
       let location ={
         latitude: 0,
         longitude: 0,
       }
    
       let store ={
        lat: 0,
        long: 0,
        title:"",
      }
    
      const [inregion,setInRegion] = useState(region);
      const [currentLoc,setCurrentLoc] = useState(location);
      const storecoords =[];
    
      let mapref:MapView | null;
    return (
    <View style={{flex:1,backgroundColor:"#F5F5F5"}}>
      <View style={{flexDirection:'row'}}>
      <Image style={{marginTop:10,marginLeft:10}} source={require('../../assets/profileIcon.png')} />
        <Text style={styles.welcomeText}>WELCOME!!</Text>
        </View>
            <MapView
      ref = {(map) => (mapref = map)}
      style={{width:'100%',height:'40%',display:'flex',marginTop:20}}
      showsUserLocation
      onUserLocationChange = {currentLoc => setCurrentLoc(currentLoc.nativeEvent.coordinate)}
      region={inregion}
      onRegionChangeComplete={inregion => setInRegion(inregion)}
    >

   <Marker
  coordinate={{
    latitude: 26.896099,
    longitude:80.951530
  }}
  title="YOU ARE HERE"
  />
  </MapView>

<View style={styles.container}>
    <Text style={styles.storeText}>Shops near you</Text>
      <FlatList
        data={AddressArray}
        horizontal
        renderItem={renderItem}
        keyExtractor={item => item.storeId}
        showsHorizontalScrollIndicator={false}
      />
      </View>
      <View style={styles.bottomNav}>
      <Pressable
              style={styles.HomeButton}
              >
               <Image source={require('../../assets/HomeIcon.png')} />
               <Text style={styles.HomeText}>Home</Text> 
            </Pressable>
            <Pressable
              style={styles.CartButton}
              >
               <Image source={require('../../assets/cartIcon.png')} /> 
               <Text style={styles.CartText}>My Cart</Text> 
            </Pressable>
            <Pressable
              style={styles.ListButton}
              >
               <Image source={require('../../assets/shoppingList.png')} /> 
               <Text style={styles.ListText}>Shopping List</Text> 
            </Pressable>
    </View>
    </View>
    )
}

export default Home;
