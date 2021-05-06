import React from 'react';
import { View, Text, Image } from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import styles from './styles';

export default function CartItem() {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.imageContainer}>
        {/* <Image source={require('../../assets/chips.png')} /> */}
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>Lay’s Classic 250g</Text>
        <Text style={styles.priceText}>₹25</Text>
      </View>
      <View style={styles.spinnerContainer}>
        <InputSpinner
          height={20}
          width={70}
          max={10}
          min={0}
          step={1}
          colorMax={'#f04048'}
          colorMin={'#40c5f4'}
          colorLeft={'#E8F5E9'}
          colorRight={'#E8F5E9'}
          buttonTextColor={'#50AD6C'}
          buttonTextStyle={{ padding: 1 }}
          buttonFontSize={20}
          value={1}
          onChange={num => {
            console.log(num);
          }}
          background={'#E8F5E9'}
          shadow={false}
          rounded={false}
          skin={'square'}
          fontSize={10}
          inputStyle={{ padding: 0 }}
          color={'#50AD6C'}
        />
        <Text style={styles.finalPriceText}>₹50</Text>
      </View>
    </View>
  );
}
