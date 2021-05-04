import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { Text } from 'react-native';
import LoginButton from 'app/components/Button';

const Login: React.FC = () => {
  const onLogin = () =>  NavigationService.navigate('Login');
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        A whole grocery store at your fingertips
      </Text>
      <Image
        source={require('../../assets/images/groceries.png')}
        resizeMode="contain"
        style={styles.image}></Image>
      <View style={styles.buttonStyle}>
        <LoginButton onPress={onLogin} title="LOGIN"></LoginButton>
      </View>
    </View>
  );
};

export default Login;
