import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { doctorsData } from '../../constants/doctorsData';
import SearchDoctor from './SearchDoctor';
import Button from '../../components/UI/Button';


export default function MyAppointments({navigation}) {

  const handleBook = () => {
   
    navigation.navigate("Dashboard");

  };
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Text>Dates</Text>
      <View style={styles.buttonContainer}> 
        <Button onPress={handleBook} style={styles.button}>Start Consultation</Button>
        
      </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        padding: 16,
      },
    card:{
      margin: 10,
      justifycontent: 'center',
      alignItems: 'center',
      padding: 16,
      elevation: 3,
     // width: 160,
       borderColor : "black",
       borderRadius: 5,
       shadowRadius: 2,
      // flexDirection: 'row',
    },
    buttonContainer: {
      paddingVertical: 10,
      paddingHorizontal: 12,
    },
});
