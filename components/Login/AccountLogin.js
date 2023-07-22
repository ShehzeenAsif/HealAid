import { StyleSheet, View } from "react-native";
import Button from "../UI/Button";
import { Ionicons } from "@expo/vector-icons";

const AccountLogin = () => {
  return (
    <View style={styles.buttonContainer}>
      <Button style={styles.googleBtn}>
        <Ionicons name="logo-google" size={16} />
        Login with Google
      </Button>
      <Button style={styles.facebookBtn}>
        <Ionicons name="logo-facebook" size={16} />
        Login with Facebook
      </Button>
    </View>
  );
};

export default AccountLogin;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 50,
    flexDirection: "row",
  },
  googleBtn: {
    backgroundColor: "#990011FF",
    paddingHorizontal: 8,
    borderRadius: 12,
    marginHorizontal: 10,
  },
  facebookBtn: {
    backgroundColor: "#4831D4",
    paddingHorizontal: 8,
    borderRadius: 12,
  },
});
