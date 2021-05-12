import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import Order from '../../components/Order';
import styles from './styles';

const MyOrders: React.FC = () => {
  const [ordersList, setOrdersList] = useState([]);
  const [ordersFlag, setOrdersFlag] = useState(false);
  const session = useSelector((state: any) => state.stores.session);
  console.log('userid', session);
  const userId = session.user;

  useEffect(() => {
    const getOrderHistory = async () => {
      try {
        axios
          .get(
            `http://nodejsnoq-env.eba-kfqp329m.us-east-1.elasticbeanstalk.com/api/v1/orders/orderHistory?userId=${userId}`,
          )
          .then(response => setOrdersList(response.data));
        console.log('**************************************');
        setOrdersFlag(true);
      } catch (error) {
        console.log(error);
      }
    };
    if (!ordersFlag) {
      getOrderHistory();
    }
  }, []);

  return (
    <>
      {ordersList.length > 0 ? (
        <View style={styles.container}>
          <Text style={styles.recentText}>Recent</Text>
          <ScrollView>
            {ordersFlag &&
              ordersList.map((item, key: any) => {
                return <Order order={item} key={key} />;
              })}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.emptyOrderView}>
          <ImageBackground
            source={require('../../assets/loginbg.png')}
            style={styles.imgcontainer}
            resizeMode="contain">
            <Text style={styles.textcontainer}>NO ORDERS PLACED YET !!</Text>
            <Text style={styles.textcontainer}>SELECT STORE</Text>
            <Text style={styles.textcontainer}>AND GRAB THE DEALS</Text>
          </ImageBackground>
        </View>
      )}
    </>
  );
};

export default MyOrders;
