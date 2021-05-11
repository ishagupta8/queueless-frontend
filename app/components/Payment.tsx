import axios from 'axios';
import { useEffect, useState } from 'react';
import { Alert, Button, Image, ImageBackground, Pressable, Text, ToastAndroid, View } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { clearCart} from '../redux/Actions/cartAction';
import NavigationService from '../navigation/NavigationService';
import PaymentModal from './PaymentModal';
import styles from './PaymentModal/styles';


interface productData {
  quantity:number,
  product:string,
}


  const Payment = ({route}:any) =>{

    const {totalPrice} = route.params;
    const dispatch = useDispatch();
    const Items = useSelector((state:any) => state.products);
    const storeData = useSelector((state:any) => state.stores.selectedStore);
    const session = useSelector((state:any)=>state.stores.session);
    console.log("userid",session);
    const [paymentId, setPaymentId] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalInput,setModalInput] = useState('');
    
    let PurchasedProducts:productData[] = [];
    for (let i = 0; i < Items.length; i++) {
      
      const productData ={
        quantity:Items[i].item_qty,
        product:Items[i].product_id
      }
    PurchasedProducts.push(productData);
    }

    console.log("purchased",PurchasedProducts);

    const OrderData = {
        orderItems : PurchasedProducts,
        phone: session.phone,
        payment_id: paymentId,
        store_id: storeData[0].storeId,
        user: session.user,
    }
    

    console.log(OrderData);

    const handleClose = () => {
      setModalVisible(!modalVisible);
      if (paymentId !=="") {
          NavigationService.navigate('Home');
        } else {
          NavigationService.navigate('VirtualCart');
        }
      }

    const MakePayment = (totalPrice) => {
      console.log(totalPrice)
      var price = (totalPrice+0.05*totalPrice)*100;
      var options = {
        description: 'Queueless Shopping Experience',
        image: 'https://hbs-noq.s3.ap-south-1.amazonaws.com/noQLogo.png',
        currency: 'INR',
        key: 'rzp_test_FFmv4J0tx2OUxu', // Your api key
        amount: price,
        name: 'NoQ',
        prefill: {
          email: 'gaurav.kumar@example.com',
          contact: '9191919191',
          name: 'Gaurav Kumar'
        },
        theme: { color: '#2CC980' },
      };
      RazorpayCheckout.open(options)
        .then((data: { razorpay_payment_id: any }) => {
          console.log("gfgdfdfgfg");
          setPaymentId(data.razorpay_payment_id);
          //Alert.alert(`Payment Successful: ${data.razorpay_payment_id}`);
          //orderHistory(); 
          setModalInput("Order Placed Successfully!!")
          setModalVisible(true);
        })
        .catch((error: { code: any; description: any }) => {
          // handle failure
          // Alert.alert(`Something went wrong!!!!
          // Error: ${error.code} | ${error.description}`);
          setModalInput("Something went Wrong!!")
          setModalVisible(true);
        });
    };

    useEffect(() => {
      const orderHistory = async () => {
        console.log("order history")
        axios.post('http://nodejsnoq-env.eba-kfqp329m.us-east-1.elasticbeanstalk.com/api/v1/orders/',OrderData
        ).then(response => {console.log(JSON.stringify(response.data))
          if(response.data!=null)
        dispatch(clearCart());
        });
      };
  
      orderHistory();
    }, [paymentId]);

    // const orderHistory = async () => {
    //   console.log("order history")
    //   axios.post('http://nodejsnoq-env.eba-kfqp329m.us-east-1.elasticbeanstalk.com/api/v1/orders/',OrderData
    //   ).then(response => {console.log("order history data",JSON.stringify(response.data))
    //     // if(response.data!=null)
    //     // dispatch(clearCart());
    //   });
    // };

    return(
      <View style={styles.centeredContainer}>
        <PaymentModal
            modalVisible={modalVisible}
            handleClose={handleClose}
            modalInput={modalInput}
          />
         <ImageBackground
          source={require('../assets/loginbg.png')}
          style={styles.imgcontainer}
          resizeMode="contain">
             
            <Text style={styles.textcontainer}>YOU ARE JUST ONE STEP AWAY</Text>
            <Text style={styles.textcontainer}>TO PLACE THE ORDER</Text>
  

<Pressable style={styles.proceedbutton} onPress={() => MakePayment(totalPrice)}>
        <Text style={styles.textStyle}>CLICK TO PAY</Text>
      </Pressable>
      </ImageBackground>
      </View>
    )
  }

  export default Payment;
