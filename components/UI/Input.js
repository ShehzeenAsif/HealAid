import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../../constants/colors";

const Input = ({ placeholder,style ,type, value, onChange}) => {
  const changeHandler = (text) => {
    onChange(text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput style={[styles.inputInnerContainer, style]} value={value} placeholder={placeholder} keyboardType={type && type} onChangeText={changeHandler}/>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
  },
  inputInnerContainer: {
    width: 250,
    marginBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors.darkTeal,
  },

});
