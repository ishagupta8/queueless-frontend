import React, { useState } from 'react';
import { Alert, Modal, Text, Pressable, View, Image } from 'react-native';
import styles from './styles';

interface IModal {
  modalVisible: boolean;
  handleClose: () => void;
  modalInput1: string;
  modalInput2: string;
  buttontext:string;

}

const CartModal = ({ modalVisible, handleClose, modalInput1,modalInput2,buttontext }: IModal) => {
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
            <Text style={styles.modalText}>{modalInput1}</Text>
            <Text style={styles.modalText}>{''}{modalInput2}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => handleClose()}>
              <Text style={styles.textStyle}>{buttontext}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CartModal;
