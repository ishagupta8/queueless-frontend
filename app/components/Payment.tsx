import axios from 'axios';
import { useState } from 'react';
import { Alert } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/Actions/cartAction';



  const Payment = ({route}:any) =>{

    const {totalPrice} = route.params;
    const dispatch = useDispatch();
    const Items = useSelector((state:any) => state.products);
    const [paymentId, setPaymentId] = useState('');

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
          Alert.alert(`Payment Successful: ${data.razorpay_payment_id}`);
        })
        .catch((error: { code: any; description: any }) => {
          // handle failure
          Alert.alert(`Something went wrong!!!!
          Error: ${error.code} | ${error.description}`);
          
        });
    };

    const orderHistory = async () => {
      try {
        const response = await axios.post(
          `http://nodejsnoq-env.eba-kfqp329m.us-east-1.elasticbeanstalk.com/api/v1/address/${item.address_id}`,
        );
        console.log(JSON.stringify(response.data));
        if (response.data != null) {
          ToastAndroid.show('Address deleted', ToastAndroid.LONG);
          setCount(count => count + 1);
        } else {
          ToastAndroid.show('Please try again', ToastAndroid.LONG);
        }
      } catch (error) {
        // handle error
        console.log(error.message);
      }
    };

    return(
      <>
        {MakePayment(totalPrice)}
        {paymentId.length>0 ? orderHistory(): null}

        </>
    )
  }

  export default Payment;
