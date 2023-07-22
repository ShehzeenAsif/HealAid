import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/colors";

const AccountDetails = () => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.accountIconContainer}>
        <Ionicons style={styles.icon} name="person" size={40} />
      </View>
      <View style={styles.accountData}>
        <Text style={styles.nameText}>Shehzeen Asif</Text>
      </View>
    </View>
  );
};

export default AccountDetails;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    marginBottom: 22,
  },
  accountIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    borderWidth: 3,
    borderColor: colors.blue,
    width: 70,
    height: 70,
  },
  icon: {
    color: colors.blue,
  },
  accountData: {
    marginLeft: 20,
    justifyContent: "center",
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.blue,
  },
  viewProfileText: {
    fontSize: 16,
    textDecorationLine: "underline",
    fontWeight: "bold",
    color: colors.blue,
  },
});
