import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface IItem {
  itemName: string;
  price: string;
  qty: string;
  amount: string;
}

const InvoiceItem = ({ itemName, price, qty, amount }: IItem) => {
  console.log('Inside invoice Items');
  return (
    <View style={styles.headings}>
      <View style={styles.itemsHeading}>
        <Text style={styles.itemsText}>{itemName}</Text>
      </View>
      <View style={styles.priceHeading}>
        <Text style={styles.priceQtyText}>{price}</Text>
      </View>
      <View style={styles.quantityHeading}>
        <Text style={styles.priceQtyText}>{qty}</Text>
      </View>
      <View style={styles.amountHeading}>
        <Text style={styles.amountText}>{amount}</Text>
      </View>
    </View>
  );
};

export default InvoiceItem;
