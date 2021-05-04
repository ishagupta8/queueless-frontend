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
  Dimensions,
  Pressable
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera as Camera} from 'react-native-camera';
import styles from './styles';
import axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';
import CartModal from '../CartModal';
import NavigationService from '../../navigation/NavigationService';

const ScanScreen = ()=> {
  let mode = Camera.Constants.FlashMode.off;
  const [code, setCode] = useState('');
  const [flash,setFlash] = useState(mode);
  const [flashtext, setFlashText] = useState('TURN ON FLASH');
  const [flashFlag,setFlashFLag]  = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
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
  
  const address = () => {
    NavigationService.navigate('Address');
  } 
  
  const confirmItem = () => {
    setModalVisible(!modalVisible);
  }
  const handleClose = () => {
    setModalVisible(!modalVisible);
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
    <CartModal
            modalVisible={modalVisible}
            handleClose={handleClose}
            modalInput1={"Lays classic"}
            modalInput2={"25/-"}
            buttontext={"ADD TO CART"}
          />

      <View style={styles.container2}>
          <Text style={styles.producttext}>OR</Text>
          <TextInput style={styles.inputcontainer}
          placeholder="enter barcode number"></TextInput>
           <Pressable
              style={styles.confirmbutton}
              onPress={() => confirmItem()}>
              <Text style={styles.textStyle}>CONFIRM</Text>
            </Pressable>
            <Pressable
              style={styles.confirmbutton}
              onPress={() => address()}>
              <Text style={styles.textStyle}>PROCEED</Text>
            </Pressable>
          </View>
          </>
         
    );
  }
export default ScanScreen;
