import React, { useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementItem,
  incrementItem,
  removeFromCart,
} from '../../redux/Actions/cartAction';
import styles from './styles';

export default function CartItem({ thing, removeItem, getPrice }) {
  const { name, image, max_qty, sku, price, item_qty } = thing;
  const Items = useSelector((state: any) => state.products);
  const dispatch = useDispatch();
  const [num, setnum] = useState(max_qty);
  console.log('cartItem&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', Items);

  return (
    <View style={styles.rowContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: image,
          }}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
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
          onChange={num => setnum(num)}
          onIncrease={() => {
            dispatch(incrementItem(thing)), getPrice();
          }}
          onDecrease={() => {
            dispatch(decrementItem(thing)), getPrice();
          }}
          onMin={() => removeItem(thing)}
          onMax={() => Alert.alert('max qty')}
          background={'#E8F5E9'}
          shadow={false}
          rounded={false}
          skin={'square'}
          fontSize={10}
          inputStyle={{ padding: 0 }}
          color={'#50AD6C'}
        />
        <Text style={styles.finalPriceText}>{item_qty * parseInt(price)}</Text>
      </View>
    </View>
  );
}
