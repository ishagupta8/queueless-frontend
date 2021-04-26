import React from 'react';
import { View,Button } from 'react-native';
import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={onLogout} />
    </View>
  );
};

export default Home;
