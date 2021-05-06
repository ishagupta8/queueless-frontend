import React, { Component, useEffect, useState } from 'react';

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
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/Actions/cartAction';
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

  const SCREEN_HEIGHT = (Dimensions.get("window").height);

  const Item = {
    name: name,
    image:image,
    price:price,
    max_qty:max_qty,
  }

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

    console.log(Item);

    try{
      const response = await axios.get(`http://nodejsnoq-env.eba-kfqp329m.us-east-1.elasticbeanstalk.com/api/v1/products/sku/get`,{params:barcode});
      console.log(response.data);
      if(response.data!=null)
      Alert.alert("Product is added to cart");
      console.log(response.data.name);
      setImage(response.data.image);
      setName(response.data.name);
      setPrice(response.data.price);
      setMax_Qty(response.data.max_qty);
    } catch (error) {
      // handle error
      console.log(error.message);
    }
  };
  
  console.log(Item);

//   useEffect(() => {
//     console.log("*****************************");
//     console.log(Item);
//     console.log(itemFlag);
//     if(itemFlag)
//     {
//       console.log("inside useeffect");
//       const Product = Object.assign(Items,{
//       name: name,
//       image:image,
//       price:price,
//       max_qty:max_qty,

//     });
//     console.log("scanned product",Product)
//     dispatch(addToCart(Product));
//     setItemFlag(false);
//   }
//   console.log("final store cart",Items);  
// },[]);
  
  const address = () => {
    NavigationService.navigate('Address');
  } 
  
  const confirmItem = () => {
    setModalVisible(!modalVisible);
  }
  const handleClose = () => {
    setModalVisible(!modalVisible);
  }

  const addItemToCart = () => {
    dispatch(addToCart(Item));
    console.log("&&&&&&&&&&&&&&&",Items);
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
            addItemToCart = {addItemToCart}
          />

      <View style={styles.container2}>
          <Text style={styles.producttext}>OR</Text>
          <TextInput style={styles.inputcontainer}
          placeholder="enter barcode number"></TextInput>
           <Pressable
              style={styles.confirmbutton}
              onPress={() => addItemToCart()}>
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
