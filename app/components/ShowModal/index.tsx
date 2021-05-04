import React, { useState } from 'react';
import { Alert, Modal, Text, Pressable, View } from 'react-native';
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
            <Text style={styles.modalText}>{modalInput}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => handleClose()}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ShowModal;
