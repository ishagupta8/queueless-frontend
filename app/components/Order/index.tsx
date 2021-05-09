import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import NavigationService from '../../navigation/NavigationService';
import styles from './styles';

export default function Order() {
  return (
    <View style={styles.orderContainer}>
      <View style={styles.orderRow}>
        <View style={styles.storeContainer}>
          <Image source={require('../../assets/store1.png')} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.storeName}>DMart</Text>
          <Text style={styles.storeAddress}>HSR Layout, Bangalore</Text>
          <Text style={styles.orderDate}>02 May, 2021</Text>
        </View>
        <View style={styles.totalConatiner}>
          <Text style={styles.priceText}>₹356</Text>
          <View style={styles.optionContainer}>
            <Text style={styles.optionText}>Home Delivery</Text>
          </View>
        </View>
      </View>
      <View style={styles.invoiceRow}>
        <Pressable
          style={styles.invoiceButton}
          onPress={() => NavigationService.navigate('Invoice')}>
          <Text style={styles.buttonText}>INVOICE</Text>
        </Pressable>
      </View>
    </View>
  );
}
