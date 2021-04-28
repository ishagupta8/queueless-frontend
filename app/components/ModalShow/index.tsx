import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View, Image } from "react-native";
import styles from "./styles";

interface IModal{
    show:boolean;
}
const ModalShow: React.FC<IModal> = ({show}:IModal)  => {
  const [modalVisible, setModalVisible] = useState(show);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
             <Image source={require('../../assets/tick.png')} /> 
            <Text style={styles.modalText}>Phone Verified</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalShow;