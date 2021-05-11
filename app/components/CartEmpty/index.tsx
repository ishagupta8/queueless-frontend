import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import NavigationService from '../../navigation/NavigationService';
import styles from './styles';

const openHomePage =()=>{
  NavigationService.navigate("Home");
}

const CartEmpty = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
            Your cart is empty
            </Text>
            <Image style={styles.imgcontainer} source={require('../../assets/cart.png')}/>
            <Pressable
              style={styles.buttonStyle}
              onPress={()=>openHomePage()}
              >
              <Text style={styles.buttontext}>CONTINUE SHOPPING</Text>
            </Pressable>
            </View>
    )
}

export default CartEmpty;
