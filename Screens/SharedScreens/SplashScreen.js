import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Text, Easing } from 'react-native';
import Button from "../../components/UI/Button";
import { colors } from '../../constants/colors';

const AbstractElement = ({ animatedValue }) => {
  const animatedScale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const animatedOpacity = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0],
  });

  return (
    <>
      <Animated.View
        style={[
          styles.abstractElement1,
          {
            transform: [{ scale: animatedScale }],
            opacity: animatedOpacity,
          },
        ]}
      />
      <Animated.View
        style={[
          styles.abstractElement2,
          {
            transform: [{ scale: animatedScale }],
            opacity: animatedOpacity,
          },
        ]}
      >     
      </Animated.View>
      <Animated.View
        style={[
          styles.abstractElement3,
          {
            transform: [{ scale: animatedScale }],
            opacity: animatedOpacity,
          },
        ]}
      >
      </Animated.View>
      <Animated.View
        style={[
          styles.abstractElement4,
          {
            transform: [{ scale: animatedScale }],
            opacity: animatedOpacity,
          },
        ]}
      />
    </>
  );
};

const SplashScreen = ({navigation}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const pressHandler = () => {
    navigation.navigate("LoginScreen");
};

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      { iterations: -1 }
    ).start();
  };

  return (
    <View style={styles.container}>
      <AbstractElement animatedValue={animatedValue} />
      <Text style={styles.text}>HEAL AID</Text>
      <View style={styles.subTitle}>
        <Text style={styles.subTitleText}>Protecting Your Health Data </Text>
        <Text style={styles.subTitleText}>
          Blockchain-Enabled Online Medical Consultations
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={pressHandler} style={styles.button}>GET STARTED</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    
  },
  abstractElement1: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#008080',
    position: 'absolute',
    top: 30,
    left: 10,
    margin: 10,
  },
  abstractElement2: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#008080',
    position: 'absolute',
    bottom: 0,
    right: 30,
    justifyContent: 'center',
  },
  abstractElement4: {
    width: 180,
    height: 180,
    borderRadius: 50,
    position: 'absolute',
    bottom: 200,
    right: '70%',
    backgroundColor: '#008080',
  },
  abstractElement3: {
    width: 180,
    height: 180,
    borderRadius: 50,
    position: 'absolute',
    top: 200,
    left: '70%',
    backgroundColor: '#008080',
  },
  text: {
    color: '#008080',
    textAlign: 'center',
    fontSize: 50,
    justifyContent: 'center',
    top: 220,
    fontSize: 50,
    fontWeight: "bold",
    padding: 2,
  },
  subTitle: {
    marginTop: 16,
  },
  subTitleText: {
    padding: 2,
    fontWeight: 'bold',
    textAlign: "center",
    color: '#008080',
    fontSize: 15,
    top: 280
  },
  buttonContainer: {
    top:330,
    width: 250,
    left: 60,
   // justifyContent: 'center',
    
  },
  button: {
    paddingHorizontal: 30,
    borderRadius: 12,
    fontSize: 50,
    
  }
});

export default SplashScreen;
