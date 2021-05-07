import React, { Component, useEffect, useRef, useState } from 'react';

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
  Pressable,
  ToastAndroid,
  InputAccessoryView
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera as Camera} from 'react-native-camera';
import styles from './styles';
import axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';
import CartModal from '../CartModal';
import NavigationService from '../../navigation/NavigationService';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart } from '../../redux/Actions/cartAction';
import { RootState } from '../../redux/Reducers';

// interface Item {
//   name: string,
//   image: string,
//   price: string,
//   max_qty: string,
// }
// type ItemType = {
//   cart:Item[]
// }

const ScanScreen = ()=> {
  let mode = Camera.Constants.FlashMode.off;
  const Items = useSelector((state:any) => state.products);
  const dispatch = useDispatch();
  console.log("inital store cart",Items);
  const [code, setCode] = useState('');
  const [flash,setFlash] = useState(mode);
  const [flashtext, setFlashText] = useState('TURN ON FLASH');
  const [flashFlag,setFlashFLag]  = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemFlag,setItemFlag] = useState(false); 
  const [image, setImage] = useState('');
  const [name,setName] = useState('');
  const [price,setPrice] = useState('');
  const [max_qty,setMax_Qty] = useState('');
  const [item_qty,setItem_Qty] = useState(1);
  const [textInput, setTextInput] = useState('');
  


  const SCREEN_HEIGHT = (Dimensions.get("window").height);

  const Item = {
    name: name,
    image:image,
    price:price,
    max_qty:max_qty,
    sku:code,
    item_qty:item_qty,
  }

  const barcode = {
    sku:code,
  }

  const onSuccess = async (e:any) => {
    const check = e.data;
    console.log('scanned data' + check);
    setCode(check);
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err)
    // );


    console.log(Item);

    try{
      const response = await axios.get(`http://nodejsnoq-env.eba-kfqp329m.us-east-1.elasticbeanstalk.com/api/v1/products/sku/get`,{params:barcode});
      console.log(response.data);
      if(response.data!=null)
      {
        setImage(response.data.image);
        setName(response.data.name);
        setPrice(response.data.price);
        setMax_Qty(response.data.max_qty);
        setItem_Qty(item_qty);
        ToastAndroid.show("Product scanned sucessfully",ToastAndroid.SHORT);
        setModalVisible(true);
      }

      else{
        ToastAndroid.show("Please fill Barcode Manually",ToastAndroid.SHORT);
      }
      console.log(response.data.name);
      
    } catch (error) {
      // handle error
      console.log(error.message);
    }
  };

   const changeHandler = (value) => { 
    setTextInput(value);
    setCode(value);
   }

  const onManualBarcode = async ()=>{
    try{
      const response = await axios.get(`http://nodejsnoq-env.eba-kfqp329m.us-east-1.elasticbeanstalk.com/api/v1/products/sku/get`,{params:barcode});
      console.log(response.data);
      if(response.data!=null)
      {
        setImage(response.data.image);
        setName(response.data.name);
        setPrice(response.data.price);
        setMax_Qty(response.data.max_qty);
        setItem_Qty(item_qty); 
        setModalVisible(true);
      }
      console.log(response.data.name);
      
    } catch (error) {
      // handle error
      console.log(error.message);
    }

  }
  
  console.log(Item);

  useEffect(() => {
    console.log("*****************************");
    console.log(Item);
    console.log("scan flag",itemFlag);
    if(itemFlag)
    {
      console.log("inside useeffect");
      dispatch(addToCart(Item));
    console.log("&&&&&&&&&&&&&&&",Items);
    setItemFlag(false);
    setTextInput('');
  }
  console.log("final store cart",Items);  
},[itemFlag]);
  
  
  const handleClose = () => {
    setModalVisible(false);
  }

  const addItemToCart = () => {
    setItemFlag(true);
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
            modalInput1={Item.name}
            modalInput2={Item.price}
            buttontext={"ADD TO CART"}
            addItemToCart = {addItemToCart}
          />

      <View style={styles.container2}>
          <Text style={styles.producttext}>OR</Text>
          <TextInput style={styles.inputcontainer}
          placeholder="Enter Barcode Number"
          onChangeText={changeHandler} 
          value={textInput}></TextInput>
           <Pressable
              style={styles.confirmbutton}
              onPress={() => onManualBarcode()}>
              <Text style={styles.textStyle}>CONFIRM</Text>
            </Pressable>
            {/* <Pressable
              style={styles.confirmbutton}
              onPress={() => address()}>
              <Text style={styles.textStyle}>PROCEED</Text>
            </Pressable> */}
          </View>
          </>
         
    );
  }
export default ScanScreen;


