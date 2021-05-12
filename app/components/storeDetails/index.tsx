import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import NavigationService from '../../navigation/NavigationService';
import { clearCart } from '../../redux/Actions/cartAction';
import { getStoreData } from '../../redux/Actions/storeActions';
import CartModal from '../CartModal';
import styles from './styles';

const storeDetails = ({ route }: any) => {
  const storeData = useSelector((state: any) => state.stores.selectedStore);
  const Items = useSelector((state: any) => state.products);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [itemFlag, setItemFlag] = useState(false);

  console.log('storeinfovxfvbfvfvf', storeData);
  console.log('items djfdjfd&&&&&&&&&&&&', Items);
  const { storeInfo,currentLoc } = route.params;

  useEffect(() => {
    console.log('*****************************');
    console.log('scan flag', itemFlag);
    if (itemFlag) {
      console.log('inside useeffect');
      dispatch(clearCart());
      console.log('&&&&&&&&&&&&&&&', Items);
      setItemFlag(false);
    }
    console.log('final store cart', Items);
  }, [itemFlag]);

  const confirmClear = () => {
    setModalVisible(!modalVisible);
  };
  const handleClose = () => {
    setModalVisible(!modalVisible);
  };

  const ClearCartItems = () => {
    setItemFlag(true);
  };

  const ScanProducts = () => {
    if (storeData.length > 0 && storeData[0].storeId != storeInfo.storeId) {
      if (Items.length == 0) {
        NavigationService.navigate('Barcode');
        dispatch(getStoreData(storeInfo.storeId));
      } else {
        confirmClear();
      }
    } else {
      NavigationService.navigate('Barcode');
      dispatch(getStoreData(storeInfo.storeId));
    }
  };

    return (
      <>
    <View style={styles.storeContainer}>
      <CartModal
            modalVisible={modalVisible}
            handleClose={handleClose}
            modalInput1={"You have pending orders"}
            modalInput2={"Empty the Cart to Proceed"}
            buttontext={"OKAY"}
            addItemToCart = {ClearCartItems}
          />
        <View>
        <Image style={{height:260,width:"90%",alignSelf:'center'}} source={{uri:storeInfo.storeImgBig}} />
        </View>
        <MapView
      style={{width:'90%',height:'25%',display:'flex',marginTop:10,marginHorizontal:18}}
      region={{latitude: currentLoc.latitude,
        longitude: currentLoc.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >

   <Marker
  coordinate={currentLoc}
  title={storeInfo.name}
  />
  </MapView>
        <View style={styles.detailsContainer}>
                <View style={{flex:2}}>
                    <View style={{flexDirection:'row'}}>
                <Text style={styles.storeName}>{storeInfo.name}</Text>
                <Text style={styles.storeStatus}>{storeInfo.status}</Text>
                </View>
                <Text style={styles.storeAddress}>{storeInfo.add1}</Text>
                <View style={{marginTop:10}}>
                <Text style={styles.storeText}>One place store to</Text>
                <Text style={styles.storeText}>suffice all your needs.</Text>
                </View>
                </View>
                <View style={styles.verticleLine} />
            <View style={{flex:1}}>        
            <Pressable 
              >
               <Image style={styles.scanImg} source={require('../../assets/barcodeImg.png')} /> 
               <Text style={styles.scanText}>Scan the product to</Text> 
                <Text style={styles.scanText}>add in your cart</Text> 
            </Pressable>
            </View>
        </View>
      <Pressable style={styles.storebutton} onPress={() => ScanProducts()}>
        <Text style={styles.textStyle}>BUY PRODUCTS</Text>
      </Pressable>
    </View>
    </>
    )
}

export default storeDetails;
