import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/Actions/cartAction';
import styles from './styles';

export default function CartItem({thing}) {
  const {name,image,max_qty,sku,price,item_qty} = thing;
  const dispatch = useDispatch();
  const [num, setnum] = useState(max_qty);
  
  
  return (
    <View style={styles.rowContainer}>
      <View style={styles.imageContainer}>
        {/* <Image source={require('../../assets/chips.png')} /> */}
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>{name}</Text>
        <Text style={styles.priceText}>{price}</Text>
      </View>
      <View style={styles.spinnerContainer}>
        <InputSpinner
          height={20}
          width={70}
          max={max_qty}
          min={0}
          step={1}
          colorMax={'#f04048'}
          colorMin={'#40c5f4'}
          colorLeft={'#E8F5E9'}
          colorRight={'#E8F5E9'}
          buttonTextColor={'#50AD6C'}
          buttonTextStyle={{ padding: 1 }}
          buttonFontSize={20}
          value={item_qty}
          onChange={num => {setnum(num)
          if(num==0)
          dispatch(removeFromCart(thing))}}
          background={'#E8F5E9'}
          shadow={false}
          rounded={false}
          skin={'square'}
          fontSize={10}
          inputStyle={{ padding: 0 }}
          color={'#50AD6C'}
        />
        <Text style={styles.finalPriceText}>{item_qty}*{price}</Text>
      </View>
    </View>
  );
}
