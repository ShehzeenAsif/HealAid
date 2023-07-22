import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import AccountDetails from "../../components/Profile/AccountDetails";
import AppInfo from "../../components/Profile/Appinfo";


const Profile = ({ route }) => {

    return (
      <View style={styles.container}>
        <AccountDetails/>
        <AppInfo/>
      </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
     // justifyContent: 'center',
      padding: 16,
    },
    
  });