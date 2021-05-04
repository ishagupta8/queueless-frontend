import React, { Component, useState } from 'react';

import {
  Text,
  TouchableOpacity,
  Linking,
  Alert,
  View,
  ImageBackground,
  Image,
  Button,
  KeyboardAvoidingView,
  ImageBackgroundBase,
  Dimensions
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera as Camera} from 'react-native-camera';
import styles from './styles';
import axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';

const ScanScreen = ()=> {
  let mode = Camera.Constants.FlashMode.off;
  const [code, setCode] = useState('');
  const [flash,setFlash] = useState(mode);
  const [flashtext, setFlashText] = useState('TURN ON FLASH');
  const [flashFlag,setFlashFLag]  = useState(false);
  const SCREEN_HEIGHT = (Dimensions.get("window").height);
  const onSuccess = async (e:any) => {
    const check = e.data;
    console.log('scanned data' + check);
    setCode(check);
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err)
    // );
    const barcode = {
      sku:code,
    }

    try{
      const response = await axios.get(`http://nodejsnoq-env.eba-kfqp329m.us-east-1.elasticbeanstalk.com/api/v1/products/sku/get`,{params:barcode});
      console.log(response.data);
      if(response.data!=null)
      Alert.alert("Product is added to cart");
    } catch (error) {
      // handle error
      console.log(error.message);
    }
  };
  
  const addtocart =()=>{
    Alert.alert("added to cart")
  }

  const flashChange = () =>{
    if(flashFlag===false)
    {
      setFlashFLag(true);
      let changedMode  =  Camera.Constants.FlashMode.torch;
      setFlash(changedMode);
      setFlashText('TURN OFF FLASH'); 
    }

  else{
    setFlashFLag(false);
    let changedMode  =  Camera.Constants.FlashMode.off;
    setFlash(changedMode);
    setFlashText('TURN ON FLASH');
  }
}

  return (
    <>
      <QRCodeScanner
  onRead={onSuccess}
  cameraProps={{flashMode: flash}}
  cameraStyle={{height:SCREEN_HEIGHT*0.88}}
  reactivate={true}
  showMarker={true}
  customMarker={
    <>
            <View style={styles.topOverlay}>
          <TouchableOpacity style={styles.topcontainer} activeOpacity = { .5 } onPress={()=>flashChange()}>
    <Image style={styles.imgcontainer} source={require('../../assets/flash.png')} />
    <Text style={styles.flash}>{flashtext}</Text>
    </TouchableOpacity>
    
            </View>

            <View style={{ flexDirection: "row"}}>
              <View style={styles.leftAndRightOverlay}/>

              
              <Image style={styles.scannerimg} source={require('../../assets/barscanner.png')} 
              resizeMode="contain" />
                
            <View style={styles.leftAndRightOverlay} /> 
            </View>
            <View style={styles.leftAndRightOverlay}/>
            </>


}

    />
      <View style={styles.container2}>
          <Text style={styles.producttext}>OR</Text>
          <TextInput style={styles.inputcontainer}
          placeholder="enter barcode number"></TextInput>
          <View style={styles.confirmbutton}>
          <Button title="CONFIRM" color="#0DB165" onPress={addtocart}/>
          </View>
          </View>
          </>
         
    );
  }
export default ScanScreen;
