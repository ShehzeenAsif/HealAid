import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../constants/colors'; 

const Categories = () => {
  const navigation = useNavigation();

  const categories = [
    {
      id: "c1",
      name: "Physician",
      icon: require("../../assets/images/gp.png"),
    },
    {
      id: "c2",
      name: "Gynecologist",
      icon: require("../../assets/images/gynecologist.png"),
    },
    {
      id: "c3",
      name: "Cardio",
      icon: require("../../assets/images/cardio.png"),
    },
    {
      id: "c4",
      name: "Dentist",
      icon: require("../../assets/images/dental.png"),
    },
  ];

  const handleCategoryPress = (categoryName) => {
    navigation.navigate('SearchDoctor', { categoryName });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doctors</Text>
      <View style={styles.itemContainer}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleCategoryPress(item.name)}
            style={styles.item}
          >
            <Image source={item.icon} style={styles.categoryImage} />
            <Text style={styles.categoryName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 6,
    marginVertical: 6,
  },
  categoryImage: {
    width: 70,
    height: 70,
  },
  item: {
    margin: 10,
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.blue,
  },
  categoryName: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.blue,
  },
});

export default Categories;
