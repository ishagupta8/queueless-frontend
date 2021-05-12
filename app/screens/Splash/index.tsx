import React, { useEffect, useState } from 'react';
import {
  BackHandler,
  Image,
  Pressable,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';

const SplashFirst = ({ splashScreen }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Queues: A thing of the past!!</Text>
      </View>
      <View>
        <Image source={require('../../assets/splash1.png')} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.skipCol}>
          <Pressable onPress={() => NavigationService.navigate('MainLogin')}>
            <Text style={styles.skipText}>SKIP</Text>
          </Pressable>
        </View>
        <View style={styles.ellipseCol}>
          <View style={styles.ellipseContainer}>
            <Image
              source={require('../../assets/ellipse1.png')}
              style={styles.ellipseImage}
            />
            <Image source={require('../../assets/ellipse2.png')} />
          </View>
        </View>
        <View style={styles.nextCol}>
          <Pressable
            style={styles.buttonContainer}
            onPress={() => splashScreen(true)}>
            <Text style={styles.buttonText}>NEXT</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const SplashSecond = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>100% contactless solution</Text>
      </View>
      <View>
        <Image source={require('../../assets/splash2.png')} />
      </View>
      <View style={styles.infoView}>
        <View style={styles.infoRow}>
          <Image
            source={require('../../assets/ellipse1.png')}
            style={styles.infoEllipse}
          />
          <Text style={styles.infoText}>
            Scan the product’s barcode and add them to basket
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Image
            source={require('../../assets/ellipse1.png')}
            style={styles.infoEllipse}
          />
          <Text style={styles.infoText}>
            Checkout using multiple payment options
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Image
            source={require('../../assets/ellipse1.png')}
            style={styles.infoEllipse}
          />
          <Text style={styles.infoText}>
            By using Q No you don’t have to worry about queues
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.skipCol}>
          <Pressable onPress={() => NavigationService.navigate('MainLogin')}>
            <Text style={styles.skipText}>Skip</Text>
          </Pressable>
        </View>
        <View style={styles.ellipseCol}>
          <View style={styles.ellipseContainer}>
            <Image
              source={require('../../assets/ellipse2.png')}
              style={styles.ellipseImage}
            />
            <Image source={require('../../assets/ellipse1.png')} />
          </View>
        </View>
        <View style={styles.nextCol}>
          <Pressable
            style={styles.buttonContainer}
            onPress={() => NavigationService.navigate('MainLogin')}>
            <Text style={styles.buttonText}>NEXT</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const Splash: React.FC = () => {
  const [screenFlag, setScreenFlag] = useState(false);

  useEffect(() => {
    const unsubscribe = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton,
    );

    // return () => null;
  }, []);

  const handleBackButton = () => {
    return true;
  };
  const splashScreen = flag => {
    setScreenFlag(flag);
  };
  return (
    <>
      {screenFlag ? (
        <SplashSecond />
      ) : (
        <SplashFirst splashScreen={splashScreen} />
      )}
    </>
  );
};

export default Splash;
