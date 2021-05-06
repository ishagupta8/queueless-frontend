import React from 'react';
import { View,Button } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styles';
const Home: React.FC = () => {
  const dispatch = useDispatch();
  //const onLogout = () => dispatch(loginActions.logOut());

  return (
    <View style={styles.container}>
  
    </View>
  );
};

export default Home;
