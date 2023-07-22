import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Day from './TimeSlot/Day';
import Slot from './TimeSlot/Slot';


export default function ShowAppointment({navigation}) {
  
  return (
    <View style={styles.container}>
      <Text>  </Text>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
      },
});
