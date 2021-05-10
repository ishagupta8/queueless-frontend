import React, { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import NavigationService from '../../navigation/NavigationService';
import styles from './styles';

const ScanProducts = () => {
    NavigationService.navigate('Barcode');
}

const storeDetails = () => {
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
                <Text style={styles.storeName}>DMart</Text>
                <Text style={styles.storeStatus}>Open</Text>
                </View>
                <Text style={styles.storeAddress}>B - 19, Sector-A, Sector K,</Text>
                <Text style={styles.storeAddress}>Aliganj, Lucknow, Uttar Pradesh</Text>
                <Text style={styles.storeAddress}>226024</Text>
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
