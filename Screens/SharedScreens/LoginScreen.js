// src/LoginScreen.js
import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Alert } from "react-native";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";
import { colors } from "../../constants/colors";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const signupHandler = () => {
    navigation.navigate("SignupScreen", {});
  };

   const loginAsPatientHandler = () => {
    // Reset previous error messages
    setEmailError("");
    setPasswordError("");
    console.log(email,password)

    // Field validation
    if (!email.trim()) {
      setEmailError("Email is required.");
      return;
    }

    if (!password.trim()) {
      setPasswordError("Password is required.");
      return;
    }

  //   try {
  //     const response = await fetch("https://778c-116-90-111-14.ngrok.io/api/v1/patient/login", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: email,
  //        password: password,
  //       }),
  //     });

  //     const responseData = await response.json();
  //     console.log(responseData);

  //     // Assuming the response structure matches the given API response
  //     const { code, status, accessToken } = responseData;

  //     if (code === 200 && status && accessToken) {
  //       // Login successful, save accessToken to secure storage if required
  //       // AsyncStorage.setItem('accessToken', accessToken);

  //       // Redirect to the main screen after successful login
         navigation.navigate("DashboardScreen", {});
  //     } else {
  //       // Handle unsuccessful login (optional)
  //       // Show appropriate error message
  //       Alert.alert("Error", "Invalid email or password.");
  //     }
  //   } catch (error) {
  //     // Handle network or other errors
  //     console.error("Login failed:", error);
  //   }
   };

  const loginAsDocHandler = () => {
    navigation.navigate("DoctorDashboard", {});
  };

  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.inputContainer}
            placeholder="Email"
            value={email}
            onChangeText={(text) => {
              console.log("Email Typed:", text);
              setEmail(text);
            }}
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

          <TextInput
            style={styles.inputContainer}
            placeholder="Password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              console.log("Password Typed:", text);
              
            }}
            secureTextEntry
          />
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonContainer1}>
            <Button style={styles.button} onPress={loginAsPatientHandler}>
              Login
            </Button>
          </View>
        </View>

        <Text style={styles.registerText}>
          New User?
          <Text style={styles.registerSubtext} onPress={signupHandler}>
            Register Now
          </Text>
        </Text>
      </Card>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    marginTop: 200,
    height: 200,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    backgroundColor: "#D9D9D9",
  },
  textContainer: {
    padding: 20,
    justifyContent: "center",
  },
  errorText: {
    color: "red",
    marginBottom: 8,
  },
  button: {
    paddingHorizontal: 40,
  },
  buttonContainer: {
    padding: 10,
  },
  buttonContainer1: {
    padding: 6,
  },
  registerText: {
    fontSize: 16,
    marginTop: 16,
    color: colors.blue,
  },
  registerSubtext: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  inputContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors.darkTeal,
    width: 250,
  },
});
