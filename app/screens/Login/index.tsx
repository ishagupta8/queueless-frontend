import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';
import {Text,Button} from 'react-native';

interface IState {
  loginReducer: ILoginState;
}

const Login: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.login}>Login Status : {id}</Text>
        <Button title="Login" onPress={onLogin} />
        <Button
        title="Forgot Password"
          onPress={onForgot}>
        </Button>
      </View>
    </View>
  );
};

export default Login;
