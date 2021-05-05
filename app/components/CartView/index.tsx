import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

import CartItem from '../CartItem';
import styles from './styles';
import AppButton from 'app/components/Button';

var radio_props = [
  { label: 'Pickup', value: 0 },
  { label: 'Delivery', value: 1 },
];

export default function CartView() {
  //To get the state of the delivery option selected
  const [delivery, setDelivery] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <CartItem />
          <CartItem />
          <CartItem />
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
            <Text style={styles.clearText}>CLEAR</Text>
          </Pressable>
        </View>
        <View style={styles.checkoutButton}>
          <Pressable style={styles.buttonContainer}>
            <Text style={styles.buttonText}>CHECKOUT</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
