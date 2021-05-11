import React, { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import NavigationService from '../../navigation/NavigationService';
import styles from './styles';

const ScanProducts = () => {
    NavigationService.navigate('Barcode');
}

const storeDetails = ({route}:any) => {
  const storeData = useSelector((state:any) => state.stores.selectedStore);
  console.log("storeinfovxfvbfvfvf",storeData);

  const {storeInfo} = route.params;
    return (
    <View style={styles.storeContainer}>
        <View style={styles.storeImg}>
        <Image source={require('../../assets/DmartLarge.png')} />
        </View>
        <MapView
      style={{width:'90%',height:'30%',display:'flex',marginTop:20,marginHorizontal:18}}
      region={{latitude: 26.9004,
        longitude: 80.9484,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >

   <Marker
  coordinate={{
    latitude: 26.8465,
    longitude:  80.9467
 }}
  title="DMart"
  />
  </MapView>
        <View style={styles.detailsContainer}>
                <View style={{flex:2}}>
                    <View style={{flexDirection:'row'}}>
                <Text style={styles.storeName}>{storeInfo.name}</Text>
                <Text style={styles.storeStatus}>{storeInfo.status}</Text>
                </View>
                <Text style={styles.storeAddress}>{storeInfo.add1}</Text>
                <Text style={styles.storeAddress}>{storeInfo.add1}</Text>
                <Text style={styles.storeAddress}>{storeInfo.add1}</Text>
                </View>
                <View style={styles.verticleLine} />
            <View style={{flex:1}}>        
            <Pressable 
              >
               <Image style={styles.scanImg} source={require('../../assets/barcodeImg.png')} /> 
               <Text style={styles.scanText}>Scan the product to</Text> 
                <Text style={styles.scanText}>add in your cart</Text> 
            </Pressable>
            </View>
        </View>
        <Pressable
              style={styles.storebutton}
              onPress={()=>ScanProducts()}
              >
              <Text style={styles.textStyle}>BUY PRODUCTS</Text>
            </Pressable>
    </View>
    )
}

export default storeDetails;
