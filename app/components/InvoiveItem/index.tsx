import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface IItem {
  itemName: string;
  price: string;
  qty: string;
  amount: string;
}

const InvoiceItem = ({ item }) => {
  return (
    <View style={styles.headings}>
      <View style={styles.itemsHeading}>
        <Text style={styles.itemsText}>{item.product.name}</Text>
      </View>
      <View style={styles.priceHeading}>
        <Text style={styles.priceQtyText}>{item.product.price}</Text>
      </View>
      <View style={styles.quantityHeading}>
        <Text style={styles.priceQtyText}>{item.quantity}</Text>
      </View>
      <View style={styles.amountHeading}>
        <Text style={styles.amountText}>
          {item.product.price * item.quantity}
        </Text>
      </View>
    </View>
  );
};

export default InvoiceItem;
