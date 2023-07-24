import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../constants/colors';

const ChooseMode = () => {
  const navigation = useNavigation();

  const mode = [
    {
      id: "m1",
      name: "Consult Online",
      icon: require('../../assets/images/video-call.png')
    },
    {
      id: "m2",
      name: "Book Appointment",
      icon: require('../../assets/images/medical-team.png')
    },
  ];

  const handleModePress = (modeName) => {
    // Implement the navigation to the desired screen here
    // Example: If you have a screen named "ModeScreen", you can navigate like this:
    navigation.navigate('SearchDoctor', { modeName });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>I want to</Text>
      <View style={styles.itemContainer}>
        {mode.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleModePress(item.name)}
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
    width: 100,
    height: 100,
  },
  item: {
    margin: 10,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  list: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    width: 160,
    borderColor: "black",
    borderRadius: 5,
    shadowRadius: 2,
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

export default ChooseMode;
