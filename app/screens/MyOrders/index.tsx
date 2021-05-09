import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import Order from '../../components/Order';
import styles from './styles';

const MyOrders: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.recentText}>Recent</Text>
      <ScrollView>
        <Order />
        <Order />
      </ScrollView>
    </View>
  );
};

export default MyOrders;
