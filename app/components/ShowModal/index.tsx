import React, { useState } from 'react';
import { Alert, Modal, Text, Pressable, View, Image } from 'react-native';
import styles from './styles';

interface IModal {
  modalVisible: boolean;
  handleClose: () => void;
  modalInput: string;
}

const ShowModal = ({ modalVisible, handleClose, modalInput }: IModal) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => handleClose()}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable onPress={() => handleClose()} style={styles.crossStyle}>
              <Image source={require('../../assets/cross.png')} />
            </Pressable>
            <Image source={require('../../assets/tick.png')} />
            <Text style={styles.modalText}>{modalInput}</Text>
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => handleClose()}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ShowModal;
