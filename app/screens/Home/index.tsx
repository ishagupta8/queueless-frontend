import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, Pressable, Text, TouchableWithoutFeedback, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import NavigationService from '../../navigation/NavigationService';
import { getStoreData } from '../../redux/Actions/storeActions';
import styles from './styles';



interface IStore {
  storeId:string;
    name:string,
    add1:string,
    distance:string,
    status:string,
    storeImg:string,
  }
          
      
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.4219983;
const LONGITUDE = -122.084;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Home = () => {
  const AddressArray = useSelector((state:any)=> state.stores.storeList);
  const [storeID, setStoreID] = useState('');
  const dispatch = useDispatch();


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
    
    
      const [inregion,setInRegion] = useState(region);
      const [currentLoc,setCurrentLoc] = useState(location);
      const storecoords =[];
    
      let mapref:MapView | null;

      const Item = ({name,add1,distance,status,storeImg,storeId}:IStore) => {
        const storeInfo = {name,add1,distance,status,storeImg,storeId};
      return (
        <TouchableWithoutFeedback onPress={() =>{setStoreID(storeInfo.storeId),openCart(storeInfo)}}>
        <View style={styles.itemStyle}>
          <Image source={require("../../assets/"+"metro.png")} />   
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
      storeId={item.storeId}
    />
      
    );
  
    useEffect(() => {
      if (storeID!==" ") {
        dispatch(getStoreData(storeID));
      } 
    }, [storeID]);
    
    const openCart = (storeInfo:any) => {
      NavigationService.navigate("storeDetails",{storeInfo:storeInfo});
    }
  
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
function dispatch(arg0: { type: string; payload: any; }) {
  throw new Error('Function not implemented.');
}

