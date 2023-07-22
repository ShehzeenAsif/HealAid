import { Image, ImageBackground, StyleSheet, Text, View, TextInput} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Day from "../../../components/TimeSlot/Day";
import Slot from "../../../components/TimeSlot/Slot";
import { Note } from "../../../components/TimeSlot/Note";
import { colors } from "../../../constants/colors";
import Button from "../../../components/UI/Button";



const TimeSlot = ({navigation}) => {

  const confirmBookingHandler = () => {
      navigation.navigate("PatientDetails");
  };
    return (
      <View >
        <Day/>
        <Slot/>
        <View style={styles.notes}>
           <Text style={styles.title}>Important Notes</Text>
           <View style={styles.notes}>
               <Text>{Note.n1}</Text>
               <Text>{Note.n2}</Text>
              <Text>{Note.n3}</Text>
           </View>
        </View>
        <View style={styles.buttonContainer}> 
           <Button onPress={confirmBookingHandler} style={styles.button}>Confirm Booking</Button>   
        </View>
      </View>
    );
}

export default TimeSlot;

const styles = StyleSheet.create({
    container: {
   //   backgroundColor: "white",
      padding: 6,
      //marginVertical: 6
    },
   
    itemContainer: {
       flexDirection: "row",
       alignItems: 'center',
       
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.blue,
    },
    buttonContainer: {
     // alignContent: "flex-end"
     paddingVertical: 10,
      paddingHorizontal: 12,
      marginTop: 220,
      
    },
    button: {
      // alignContent: "flex-end"
      borderRadius:10,
      fontWeight: 'bold',
      //fontSize: 34
      
       
     },
    notes: {
       // padding: 8,
        marginTop:10,
        justifyContent: "space-between",
        margin: 8
      },   

  });