import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import ConnectToMetaMask from "../../../components/Payment/ConnectToMetaMask";


const MetaMask = ({ navigation, route }) => {

    return (
       <View>
         <ConnectToMetaMask/>
       </View>
    );
}

export default MetaMask;