import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import NavigationService from '../../navigation/NavigationService';
import Geolocation from 'react-native-geolocation-service';
import styles from './styles';

interface IStore {
  storeId:string;
    name:string,
    add1:string,
    distance:string,
    status:string,
    storeImgBig:string,
    storeImgSmall:string,
  }
          
      
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 20.5937;
const LONGITUDE = 78.9629;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Home = () => {
  const AddressArray = useSelector((state:any)=> state.stores.storeList);
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

      useEffect (() => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        const {latitude,longitude} = position.coords;
        setCurrentLoc({latitude,longitude});
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
  },[])
    
      let mapref:MapView | null;

      const Item = ({name,add1,distance,status,storeImgBig,storeImgSmall,storeId}:IStore) => {
        const storeInfo = {name,add1,distance,status,storeImgBig,storeId};
      return (
        <TouchableWithoutFeedback onPress={() =>openCart(storeInfo)}>
        <View style={styles.itemStyle}>
          <Image style={{height:130,width:"100%",alignSelf:'center'}} source={{uri:storeImgSmall}}/>   
          <Text style={styles.textStyle}>{name}</Text>
          <Text style={styles.storeAdd}>{add1}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.locImg}
              source={require('../../assets/locationIcon.png')}
            />
            <Text style={styles.storeDis}>{distance}</Text>
            <Text style={styles.statusStyle}>{status}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const renderItem = ({ item }: any) => (
    <Item
      name={item.name}
      add1={item.add1}
      distance={item.distance}
      status={item.status}
      storeImgBig={item.storeImgBig}
      storeImgSmall={item.storeImgSmall}
      storeId={item.storeId}

    />
  );

  const openCart = (storeInfo: any) => {
    NavigationService.navigate('storeDetails', { storeInfo: storeInfo , currentLoc:currentLoc});
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ marginTop: 10, marginLeft: 10 }}
          source={require('../../assets/profileIcon.png')}
        />
        <Text style={styles.welcomeText}>WELCOME!!</Text>
      </View>
      <MapView
        ref={map => (mapref = map)}
        style={{
          width: '100%',
          height: '40%',
          display: 'flex',
          marginTop: 20,
        }}
        showsUserLocation={true}
        zoomEnabled = {true}
        onUserLocationChange={currentLoc =>
          setCurrentLoc(currentLoc.nativeEvent.coordinate)
        }
        region={inregion}
        onRegionChangeComplete={inregion => setInRegion(inregion)}>
        <Marker
          coordinate={currentLoc}
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
        <Pressable style={styles.HomeButton}>
          <Image source={require('../../assets/HomeIcon.png')} />
          <Text style={styles.HomeText}>Home</Text>
        </Pressable>
        <Pressable
          style={styles.CartButton}
          onPress={() => NavigationService.navigate('MyOrders')}>
          <Image source={require('../../assets/cartIcon.png')} />
          <Text style={styles.CartText}>My Cart</Text>
        </Pressable>
        <Pressable style={styles.ListButton}
        onPress={() => NavigationService.navigate('ShoppingList')}>
          <Image source={require('../../assets/shoppingList.png')} />
          <Text style={styles.ListText}>Shopping List</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;


