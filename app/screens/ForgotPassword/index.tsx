import React from 'react';
import { View , Button} from 'react-native';

import NavigationService from 'app/navigation/NavigationService';

import styles from './styles';
const Home: React.FC = () => {
  const goBack = () => NavigationService.goBack();
  return (
    <View style={styles.container}>
      <Button title=" Go Back" onPress={goBack} />
    </View>
  );
};

export default Home;
