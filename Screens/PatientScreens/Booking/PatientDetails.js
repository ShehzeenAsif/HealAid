import { Image, ImageBackground, StyleSheet, Text, View, TextInput } from "react-native";
import { colors } from "../../../constants/colors";
import Title from "../../../components/UI/Title";
import Button from "../../../components/UI/Button";
import ConnectToMetaMask from "../../../components/Payment/ConnectToMetaMask";

const PatientDetails = ({navigation}) => {

  const confirmBookingHandler = () => {
    navigation.navigate("PaymentDetails");
    //<ConnectToMetaMask/>
};
  return (
    <View style={styles.container}>
      
      <View style={styles.textContainer}> 
        <Text style={styles.heading}>Patient's Name</Text> 
      </View>

      <View style={styles.inputContainer}> 
      <TextInput
          placeholder="Enter patient's name"
          style={styles.textInput}
        />
      </View>
      
      <View style={styles.textContainer}> 
        <Text style={styles.heading}>Phone Number</Text> 
      </View>
  
      <View style={styles.inputContainer}> 
      <TextInput
          placeholder="03XX-XXXXXXX"
          style={styles.textInput}
        />
      </View>
      
      <View style={styles.buttonContainer}> 
         <Button onPress={confirmBookingHandler} style={styles.button}>Confirm Booking</Button>   
      </View>
    </View>
  );
}

export default PatientDetails ;

const styles = StyleSheet.create({
  container: {
 //   backgroundColor: "white",
    padding: 6,
    //marginVertical: 6
  },

  heading :{
    color: colors.blue,
    fontSize: 18

  },
 
  inputContainer: {
    // alignContent: "flex-end"
    padding: 8
   },

   textContainer: {
    // alignContent: "flex-end"
   padding: 8
   },
  
  buttonContainer: {
   // alignContent: "flex-end"
   paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 390, 
  },
  button: {
    borderRadius:10,
    fontWeight: 'bold',
   
   },
   textInput:{
    elevation: 1,
    height: 50,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
   },

});