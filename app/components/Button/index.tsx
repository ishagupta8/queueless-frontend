import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styles from './styles';

const AppButton = ({ onPress, title }) => (
  <TouchableHighlight
    onPress={onPress}
    style={styles.appButtonContainer}
    underlayColor="#0DB165">
    <View>
      <Text style={styles.appButtonText}>{title}</Text>
    </View>
  </TouchableHighlight>
);

export default AppButton;
