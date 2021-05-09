import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, View } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.4219983;
const LONGITUDE = -122.084;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const HomeLocation: React.FC = () => {

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

  // useEffect (() => {
  //   Geolocation.getCurrentPosition(
  //     (position) => {
  //       console.log(position);
  //       const {latitude,longitude} = position.coords;
  //       setCurrentLoc({latitude,longitude});
  //     },
  //     (error) => {
  //       // See error code charts below.
  //       console.log(error.code, error.message);
  //     },
  //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  // );
  // },[])

  // const showstores = () => {
  //   let {latitude,longitude} = currentLoc;
  //   store.lat = 13.0827;
  //   store.long = 80.2707;
  //   store.title = "kirana store";
  //   storecoords.push(store);
  //   storecoords.map((store) => <Marker
  //   key={store.id}
  //   coordinate={{ latitude: store.lat, longitude: store.long }}
  //   title={store.title}
  //   ></Marker>);
  // }

  //For Payment button implementation
  // const MakePayment = () => {
  //   var options = {
  //     description: 'Credits towards consultation',
  //     image: 'https://i.imgur.com/3g7nmJC.png',
  //     currency: 'INR',
  //     key: 'rzp_test_FFmv4J0tx2OUxu', // Your api key
  //     amount: '5000',
  //     name: 'foo',
  //     theme: { color: '#F37254' },
  //   };
  //   RazorpayCheckout.open(options)
  //     .then((data: { razorpay_payment_id: any }) => {
  //       // handle success
  //       Alert.alert(`Success: ${data.razorpay_payment_id}`);
  //     })
  //     .catch((error: { code: any; description: any }) => {
  //       // handle failure
  //       Alert.alert(`Error: ${error.code} | ${error.description}`);
  //     });
  // };

  return (
    <View>
      {/* <View>
        <Button icon="logout" mode="outlined" onPress={MakePayment}>
          Make a Payment
        </Button>
      </View> */}
      <MapView
      ref = {(map) => (mapref = map)}
      style={{width:'100%',height:'50%',backgroundColor:'red',display:'flex',flex:1}}
      showsUserLocation
      onUserLocationChange = {currentLoc => setCurrentLoc(currentLoc.nativeEvent.coordinate)}
      region={inregion}
      onRegionChangeComplete={inregion => setInRegion(inregion)}
    >

   <Marker
  coordinate={currentLoc}
  title="YOU ARE HERE"
  />
  </MapView>
  {/* <Button icon="stores" mode="outlined" onPress={showstores}>
        FIND STORES NEAR BY
      </Button> */}
  </View>
  );
};

export default HomeLocation;

