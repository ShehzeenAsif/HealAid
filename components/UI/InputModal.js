import React, { useState } from "react";
import {  StyleSheet, Text, TextInput, View } from "react-native";
import Modal from "react-native-modal";
import Button from "./Button";
import Input from "./Input";
const InputModal = ({isModalVisible,setModalVisible}) => {

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Modal isVisible={isModalVisible} coverScreen={true} avoidKeyboard={false} hasBackdrop={true}>
        <View>
          <Input placeholder="Enter Value" />
          <Text>Hello</Text>
          <Button onPress={toggleModal}>Heelo</Button>

          
        </View>
      </Modal>
    </View>
  );
};

export default InputModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
