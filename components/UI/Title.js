import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";

const Title = ({ children, style,buttonText }) => {
  return (
    <View style={[styles.title, style]}>
      <Text style={[styles.text, buttonText]}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  title: {
    borderRadius: 12,
    borderColor: colors.darkTeal,
    borderWidth: 3,
    padding: 12,
    backgroundColor: colors.darkTeal
  },
});
