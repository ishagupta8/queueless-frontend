import React, { Component } from 'react';

import {
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera as Camera} from 'react-native-camera';
import styles from './styles';

const ScanScreen = ()=> {
  const onSuccess = (e:any) => {
    const check = e.data;
    console.log('scanned data' + check);
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err)
    // );
  };
  
  return (
  <QRCodeScanner
  onRead={onSuccess}
  cameraProps={{ flashMode: Camera.Constants.FlashMode.auto }}
  reactivate={true}
  showMarker={true}
  topContent={
  <Text style={styles.centerText}>
      Go to{' '}
      <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    );
  }
export default ScanScreen;
