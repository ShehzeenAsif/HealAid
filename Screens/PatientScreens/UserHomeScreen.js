import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Categories from "../../components/Doctor/Categories";
import ChooseMode from "../../components/ModeOfConsultation/ChooseMode";
import SearchBar from "../../components/SearchBar";
import HospitalDetails from "../../components/Hospital/HospitalDetails";


const UserHomeScreen = ({ navigation, route }) => {

    return (
       <View style={styles.container}>
          <SearchBar/>
          <Categories/> 
          <ChooseMode/>
          <HospitalDetails/>
       </View>
    );
}

export default UserHomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
     // paddingTop: 24,
      backgroundColor: 'white'
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
    },
  });