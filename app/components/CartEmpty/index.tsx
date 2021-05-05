import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import styles from '../Address/styles'

const CartEmpty = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
            Your cart is empty
            </Text>
            <Image source={require('../../assets/cart.png')}/>
            <Pressable
              style={styles.buttonStyle}
              >
              <Text style={styles.textStyle}>CONTINUE SHOPPING</Text>
            </Pressable>
            </View>
    )
}

export default CartEmpty;
