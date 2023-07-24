import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../constants/colors';

const HospitalDetails = () => {
  const navigation = useNavigation();

  const hospitals = [
    {
      id: "h1",
      name: "Aga Khan Hospital",
      icon: require('../../assets/images/image1.jpg')
    },
    {
      id: "h2",
      name: "Liaquat National Hospital",
      icon: require('../../assets/images/image2.jpg')
    },
    // Add more hospital data items here
  ];

  const handleHospitalPress = (hospitalName) => {
    if (hospitalName === 'Aga Khan Hospital') {
      navigation.navigate('AgaKhan', { hospitalName });
    } else if (hospitalName === 'Liaquat National Hospital') {
      navigation.navigate('Liaquat', { hospitalName });
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registered Hospitals</Text>
      <View style={styles.itemContainer}>
        {hospitals.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleHospitalPress(item.name)}
            style={styles.list}
          >
            <View style={styles.item}>
              <Image source={item.icon} style={styles.modeImage} />
              <Text style={styles.modeName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
    marginVertical: 6,
    backgroundColor: "white",
  },
  modeImage: {
    width: 170,
    height: 120,
    borderRadius: 10,
  },
  item: {
    margin: 10,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  list: {
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    borderColor: "black",
    borderRadius: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.blue,
  },
  modeName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.blue,
  }
});

export default HospitalDetails;
