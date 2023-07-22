import { Pressable, View, Text, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const Button = ({ children, onPress, style,buttonText }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <View style={[styles.button, style]}>
        <Text style={[styles.buttonText, buttonText]}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 22,
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: colors.darkTeal,
    borderColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  },
  pressed: {
    opacity: 0.75,
  },
});
