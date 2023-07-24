import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../constants/colors';

const DATA = [
  { id: '1', imageSource: require('../../assets/images/file1.png') },
  { id: '2', imageSource: require('../../assets/images/file2.jpg') },
  // Add more card data here
];

const ShareRecord = () => {
  const handleShare = () => {
    // Implement the logic for sharing here
    console.log('Share button pressed!');
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.imageSource} style={styles.image} />
      <TouchableOpacity onPress={handleShare} style={styles.shareButton}>
        <Text style={styles.shareButtonText}>Share</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  shareButton: {
    marginTop: 8,
   // backgroundColor: '#3498db',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: colors.darkTeal
  },
  shareButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ShareRecord;
