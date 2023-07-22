import { ImageBackground, StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";
import { colors } from "../../constants/colors";

const LoginScreen = ({ navigation, route }) => {
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

    // Field validation
    if (!email.trim()) {
      setEmailError("Email is required.");
      return;
    }

    if (!password.trim()) {
      setPasswordError("Password is required.");
      return;
    }

    // If all fields are filled, proceed to login as a patient
    navigation.navigate("DashboardScreen", {});
  };

  const loginAsDocHandler = () => {
    navigation.navigate("DoctorDashboard", {});
  };

  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <ImageBackground
          source={require("../../assets/images/signupbg.png")}
          style={styles.backgroundImage}
        />
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
              console.log("Password Typed:", text);
              setPassword(text);
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
  backgroundImage: {
    marginTop: 40,
    width: 250,
    height: 200,
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
  forgetPasswordText: {
    color: "orange",
    textDecorationLine: "underline",
    marginTop: -5,
    marginLeft: 150,
    marginBottom: 20,
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
    width: 250
  },
});
