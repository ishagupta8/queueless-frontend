import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";

interface IModal{
    show:boolean;
    handleClose: () => void;
    modalInput: string;

}
const ModalShow: React.FC<IModal> = ({show,handleClose, modalInput}:IModal)  => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        visible={show}
        onRequestClose={()=>handleClose()}
      >
        {/* <View style={styles.centeredView}>s
          <View style={styles.modalView}> */}
          <TouchableOpacity 
            activeOpacity={1} 
            onPressOut={() => handleClose()}
          >
            <TouchableWithoutFeedback>
                <View>
                <Image source={require('../../assets/tick.png')} /> 
                  <Text>{modalInput}</Text>
                </View>
              </TouchableWithoutFeedback>
          </TouchableOpacity>  
      </Modal>
    </View>
  );
};

export default ModalShow;