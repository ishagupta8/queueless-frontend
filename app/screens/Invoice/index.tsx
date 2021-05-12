import axios from 'axios';
import React, { useEffect, useState } from 'react';
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

const Invoice: React.FC = ({ route }: any) => {
  const { order, store } = route.params;
  console.log('Inside my items', order);
  console.log('Inside my items', store);

  const [invoice, setInvoice] = useState([]);
  const [products, setProducts] = useState([]);
  const [invoiceFlag, setInvoiceFlag] = useState(false);
  const [itemsPrice, setItemslPrice] = useState(0);
  const [tranId, setTranId] = useState('');
  const [invoiceId, setInvoiceId] = useState('');

  useEffect(() => {
    const getInvoiceDetails = () => {
      axios
        .get(
          `http://nodejsnoq-env.eba-kfqp329m.us-east-1.elasticbeanstalk.com/api/v1/invoice/?order_id=${order.order_id}`,
        )
        .then(response => {
          setInvoice(response.data),
            setProducts(response.data[0].orders.orderItems),
            setItemslPrice(response.data[0].orders.totalPrice),
            setTranId(response.data[0].transaction_id),
            setInvoiceId(response.data[0]._id);
          setInvoiceFlag(true);
        });
      console.log('invoice details ********', invoice);
    };
    getInvoiceDetails();
  }, []);
  return (
    <>
      {invoiceFlag && (
        <>
          <ScrollView>
            <View style={styles.buttonView}>
              <View style={styles.storeDetailsView}>
                <View style={styles.storeFirst}>
                  <Text style={styles.storeName}>{store[0].name}</Text>
                  <Text style={styles.storeAddress}>{store[0].add1}</Text>
                  <Text style={styles.gstText}>GST : 22AAAAA0000A1Z5</Text>
                </View>
                <View style={styles.storeSecond}>
                  <Text style={styles.dateTimeText}>
                    Date: {order.dateOrdered}
                  </Text>
                  <Text style={styles.dateTimeText}>Time: 03 : 17 PM</Text>
                  <Text style={styles.gstText}>INV : {invoiceId}</Text>
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
                  {invoiceFlag &&
                    products.map((item, key) => (
                      <InvoiceItem item={item} key={key} />
                    ))}
                </View>
                <View style={styles.totalView}>
                  <View style={styles.storeFirst}>
                    <Text style={styles.itemTotalText}>Item Total</Text>
                    <Text style={styles.taxesText}>Taxes</Text>
                  </View>
                  <View style={styles.storeSecond}>
                    <Text style={styles.itemTotalText}>₹{itemsPrice}</Text>
                    <Text style={styles.taxesText}>₹{itemsPrice * 0.05}</Text>
                  </View>
                </View>
                <View style={styles.totalView}>
                  <View style={styles.storeFirst}>
                    <Text style={styles.grandTotaLText}>Grand total</Text>
                  </View>
                  <View style={styles.storeSecond}>
                    <Text style={styles.grandTotaLText}>
                      ₹{itemsPrice + itemsPrice * 0.05}
                    </Text>
                  </View>
                </View>
                <View style={styles.modeView}>
                  <Text style={styles.modeText}>
                    Mode of Payment : Net Banking
                  </Text>
                  <Text style={styles.modeText}>Transaction ID : {tranId}</Text>
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
      )}
    </>
  );
};

export default Invoice;
