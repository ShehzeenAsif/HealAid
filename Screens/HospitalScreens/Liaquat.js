import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Liaquat = ({ route }) => {
  const { hospitalName } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Liaquat National </Text>
        <Image
          source={require('../../assets/images/image2.jpg')}
          style={styles.logo}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.subTitle}>About Liaquat National Hospital:</Text>
        <Text style={styles.description}>
          Liaquat National Hospital is one of the largest medical facilities in
          the country. It provides comprehensive healthcare services and is
          equipped with modern technology and skilled medical professionals.
          Established in 1958, the hospital has been serving the community for
          many years.
        </Text>
        <Text style={styles.subTitle}>Services:</Text>
        <Text style={styles.services}>
          - Advanced medical treatments in various specialties such as
          cardiology, oncology, orthopedics, etc.
        </Text>
        <Text style={styles.services}>
          - Emergency services and state-of-the-art trauma center.
        </Text>
        <Text style={styles.services}>
          - Well-equipped diagnostic facilities and laboratory services.
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
    width: 100,
    height: 120,
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

export default Liaquat;
