import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AgaKhan = ({ route }) => {
  const { hospitalName } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Aga Khan Hospital</Text>
        <Image
          source={require('../../assets/images/image1.jpg')}
          style={styles.logo}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.subTitle}>About Aga Khan Hospital:</Text>
        <Text style={styles.description}>
          Aga Khan Hospital is a world-renowned medical institution known for its
          exceptional healthcare services and patient care. It is part of the
          Aga Khan Health Services, a not-for-profit agency that operates health
          facilities in various countries.
        </Text>
        <Text style={styles.subTitle}>Services:</Text>
        <Text style={styles.services}>
          - Specialized medical treatments in various fields including
          cardiology, oncology, neurology, and more.
        </Text>
        <Text style={styles.services}>
          - State-of-the-art diagnostic facilities and modern medical equipment.
        </Text>
        <Text style={styles.services}>
          - Highly skilled medical professionals and dedicated staff.
        </Text>
        {/* Add other hospital details here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  detailsContainer: {
    flex: 1,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  services: {
    fontSize: 14,
    color: 'black',
    marginBottom: 5,
  },
});

export default AgaKhan;
