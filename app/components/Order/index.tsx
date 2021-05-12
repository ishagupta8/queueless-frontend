import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import NavigationService from '../../navigation/NavigationService';
import styles from './styles';

export default function Order({ order }) {
  const IOrder = {
    name: '',
    add1: '',
  };
  const storeId = order.store_id;
  const dispatch = useDispatch();
  const storeDetails = useSelector((state: any) => state.stores.storeList);
  let arr = storeDetails.filter(id => id.storeId == storeId);
  console.log('storeArray', arr);

  return (
    <View style={styles.orderContainer}>
      <View style={styles.orderRow}>
        <View style={styles.storeContainer}>
          <Image
            source={{
              uri:
                'https://hbs-noq.s3.ap-south-1.amazonaws.com/bigbazzarXHD.png',
            }}
            style={{ width: '100%', height: 60 }}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.storeName}>{arr[0].name}</Text>
          <Text style={styles.storeAddress}>{arr[0].add1}</Text>
          <Text style={styles.orderDate}>{order.dateOrdered}</Text>
        </View>
        <View style={styles.totalConatiner}>
          <Text style={styles.priceText}>
            {(order.totalPrice += 0.05 * order.totalPrice).toFixed(2)}
          </Text>
          <View style={styles.optionContainer}>
            <Text style={styles.optionText}>Home Delivery</Text>
          </View>
        </View>
      </View>
      <View style={styles.invoiceRow}>
        {console.log('storeObject **********', arr)}
        <Pressable
          style={styles.invoiceButton}
          onPress={() =>
            NavigationService.navigate('Invoice', {
              order: order,
              store: arr,
            })
          }>
          <Text style={styles.buttonText}>INVOICE</Text>
        </Pressable>
      </View>
    </View>
  );
}
