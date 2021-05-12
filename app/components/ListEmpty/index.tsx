import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import NavigationService from '../../navigation/NavigationService';
import styles from './styles';

const openShopList =()=>{
  NavigationService.navigate("ShopList");
}

const ListEmpty = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.imgcontainer} source={require('../../assets/shoplist.png')}/>
            <Pressable
              style={styles.buttonStyle}
              onPress={()=>openShopList()}
              >
              <Text style={styles.buttontext}>CREATE LIST</Text>
            </Pressable>
            </View>
    )
}

export default ListEmpty;
