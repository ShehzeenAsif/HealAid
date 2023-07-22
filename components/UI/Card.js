import { StyleSheet, TouchableOpacity, View } from "react-native";
// import { colors } from "../../constants/colors";

const Card = ({ children, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    borderRadius: 12,
    elevation: 4, // box shadow
  },
});
