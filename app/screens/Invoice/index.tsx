import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import InvoiceItem from '../../components/InvoiveItem';
import NavigationService from '../../navigation/NavigationService';
import styles from './styles';

const ItemsArray = [
  {
    items: 'Lay’s Classic 250g',
    price: '₹25',
    qty: '2',
    amount: '₹50',
  },
  {
    items: 'Chhole Masala 100g',
    price: '₹55',
    qty: '1',
    amount: '₹55',
  },
  {
    items: 'Dry Ginger Powder 250g',
    price: '₹125',
    qty: '1',
    amount: '₹125',
  },
  {
    items: 'Jeera Powder 50g',
    price: '₹37',
    qty: '1',
    amount: '₹37',
  },
  {
    items: 'Appy Fizz 300ml',
    price: '₹25',
    qty: '3',
    amount: '₹75',
  },
];

const MyOrders: React.FC = () => {
  console.log('Inside my items');
  return (
    <>
      <ScrollView>
        <View style={styles.buttonView}>
          <View style={styles.storeDetailsView}>
            <View style={styles.storeFirst}>
              <Text style={styles.storeName}>DMart</Text>
              <Text style={styles.storeAddress}>HSR Layout, Bangalore</Text>
              <Text style={styles.gstText}>GST : 22AAAAA0000A1Z5</Text>
            </View>
            <View style={styles.storeSecond}>
              <Text style={styles.dateTimeText}>Date: 02 May, 2021</Text>
              <Text style={styles.dateTimeText}>Time: 03 : 17 PM</Text>
              <Text style={styles.gstText}>Invoice Number : D3729472961</Text>
            </View>
          </View>
          <View style={styles.mainInvoiceView}>
            <View style={styles.headings}>
              <View style={styles.itemsHeading}>
                <Text style={styles.headingsText}>Items</Text>
              </View>
              <View style={styles.priceHeading}>
                <Text style={styles.headingsText}>Price</Text>
              </View>
              <View style={styles.quantityHeading}>
                <Text style={styles.headingsText}>Qty</Text>
              </View>
              <View style={styles.amountHeading}>
                <Text style={styles.headingsText}>Amount</Text>
              </View>
            </View>
            <View style={styles.allItemsView}>
              {ItemsArray.map((item, key) => (
                <InvoiceItem
                  itemName={item.items}
                  price={item.price}
                  qty={item.qty}
                  amount={item.amount}
                />
              ))}
            </View>
            <View style={styles.totalView}>
              <View style={styles.storeFirst}>
                <Text style={styles.itemTotalText}>Item Total</Text>
                <Text style={styles.taxesText}>Taxes</Text>
              </View>
              <View style={styles.storeSecond}>
                <Text style={styles.itemTotalText}>₹342</Text>
                <Text style={styles.taxesText}>₹14</Text>
              </View>
            </View>
            <View style={styles.totalView}>
              <View style={styles.storeFirst}>
                <Text style={styles.grandTotaLText}>Grand total</Text>
              </View>
              <View style={styles.storeSecond}>
                <Text style={styles.grandTotaLText}>₹356</Text>
              </View>
            </View>
            <View style={styles.modeView}>
              <Text style={styles.modeText}>Mode of Payment : Card</Text>
              <Text style={styles.modeText}>Transaction ID : 12149768676</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonView}>
        <Pressable
          style={styles.closeButton}
          onPress={() => NavigationService.navigate('Barcode')}>
          <Text style={styles.buttonText}>CLOSE</Text>
        </Pressable>
      </View>
    </>
  );
};

export default MyOrders;
