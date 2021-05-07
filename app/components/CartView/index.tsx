import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

import CartItem from '../CartItem';
import styles from './styles';
import AppButton from 'app/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart } from '../../redux/Actions/cartAction';
import NavigationService from '../../navigation/NavigationService';
import CartModal from '../CartModal';

var radio_props = [
  { label: 'Pickup', value: 0 },
  { label: 'Delivery', value: 1 },
];

export default function CartView() {
  //To get the state of the delivery option selected
  const Items = useSelector((state:any) => state.products);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemFlag,setItemFlag] = useState(false); 
  const [showEmpty, setShowEmpty] = useState(false);
  const [showCart,setShowCart] = useState(true);
  const dispatch = useDispatch();

//   const getCartItems = () => {
//     if(Items.length===0)
//     {
//       setShowEmpty(true);
//       setShowCart(false);
//     }

//     else{
//       setShowEmpty(false);
//       setShowCart(true);
//     }
// }
  
  const removeItem = (thing) => {
    dispatch(removeFromCart(thing))
  }

  const address = () => {
    NavigationService.navigate('Address');
  } 



  useEffect(() => {
    console.log("*****************************");
    console.log("scan flag",itemFlag);
    if(itemFlag)
    {
      console.log("inside useeffect");
      dispatch(clearCart());
    console.log("&&&&&&&&&&&&&&&",Items);
    setItemFlag(false);
  }
  console.log("final store cart",Items);  
},[itemFlag]);

  const confirmClear = () => {
    setModalVisible(!modalVisible);
  }
  const handleClose = () => {
    setModalVisible(!modalVisible);
  }

  const ClearCartItems = () => {
    setItemFlag(true);
  }

  // useEffect(() => {
    
  //   console.log("%%%%%%%%%%%%%%%%%%%%%% use effect of caert view",Items);
  // }, [Items])
  
  const [delivery, setDelivery] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <CartModal
            modalVisible={modalVisible}
            handleClose={handleClose}
            modalInput1={"Do you want"}
            modalInput2={"Empty the Cart"}
            buttontext={"OKAY"}
            addItemToCart = {ClearCartItems}
          />
        <View>
          {Items.map((item) => <CartItem thing={item}  key={item.sku} removeItem={removeItem}/>)}
        </View>

        <View>
          <View style={styles.priceContainer}>
            <View style={styles.topContainer}>
              <View style={styles.firstContainer}>
                <Text style={styles.topText}>Item Total</Text>
                <Text style={styles.bottomText}>Taxes</Text>
              </View>
              <View style={styles.secondContainer}>
                <Text style={styles.topText}>₹342</Text>
                <Text style={styles.bottomText}>₹14</Text>
              </View>
            </View>
            <View>
              <View style={styles.bottomContainer}>
                <View style={styles.firstContainer}>
                  <Text style={styles.totalText}>Grand Total</Text>
                </View>
                <View style={styles.secondContainer}>
                  <Text style={styles.totalText}>₹331</Text>
                </View>
              </View>
              <View style={styles.radioButtonView}>
                <RadioForm
                  radio_props={radio_props}
                  formHorizontal={true}
                  initial={1}
                  onPress={value => {
                    setDelivery(value);
                  }}
                  buttonColor={'#9A9A9A'}
                  labelColor={'#9A9A9A'}
                  selectedButtonColor={'#0DB165'}
                  selectedLabelColor={'#0DB165'}
                  buttonSize={10}
                  labelStyle={{ paddingRight: 30 }}>
                  <Text>hello world</Text>
                </RadioForm>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonView}>
        <View style={styles.clearButton}>
          <Pressable>
            <Text style={styles.clearText} onPress={() => confirmClear()}>CLEAR</Text>
          </Pressable>
        </View>
        <View style={styles.checkoutButton}>
          <Pressable style={styles.buttonContainer} onPress={()=>address()}>
            <Text style={styles.buttonText}>CHECKOUT</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
