import { Image, ImageBackground, StyleSheet, Text, View, TextInput } from "react-native";
import { colors } from "../../../constants/colors";
import Title from "../../../components/UI/Title";
import Button from "../../../components/UI/Button";
import ShowAppointment from "../../../components/ShowAppointment";

const PaymentDetails  = ({navigation}) => {

  const payNowHandler = () => {
    <ShowAppointment/>
    navigation.navigate("MetaMask");
    alert('Appointment booked successfully')
    
};
  return (
    <View style={styles.container}>
      
      <View style={styles.textContainer}> 
        <Text style={styles.heading}>MetaMask Wallet Number</Text> 
      </View>

      <View style={styles.inputContainer}> 
      <TextInput
          placeholder="Enter your wallet's number"
          style={styles.textInput}
        />
      </View>
      
      <View style={styles.textContainer}> 
        <Text style={styles.heading}>Email</Text> 
      </View>
  
      <View style={styles.inputContainer}> 
      <TextInput
          placeholder="abc@gmail.com"
          style={styles.textInput}
        />
      </View>
      
      <View style={styles.buttonContainer}> 
         <Button onPress={payNowHandler} style={styles.button}>Pay Now</Button>   
      </View>
    </View>
  );
}

export default PaymentDetails ;

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