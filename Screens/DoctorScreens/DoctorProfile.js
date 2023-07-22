import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AccountDetails from "../../components/Profile/AccountDetails";
import AppInfo from "../../components/Profile/Appinfo";
const DoctorProfile = ({ navigation, route }) => {

    return (
       <View style={styles.container}>
         <AccountDetails/>
         <AppInfo/>
         
       </View>
    );
}

export default DoctorProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
    },
  });