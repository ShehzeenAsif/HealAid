import { ImageBackground, StyleSheet, Text, TextInput,View} from "react-native";
  import Button from "../../components/UI/Button";
  import Card from "../../components/UI/Card";
  import Input from "../../components/UI/Input";
import { colors } from "../../constants/colors";
 
  
  const SignupScreen = ({ route }) => {
    const register = route.params.register;
    return (
      <View style={styles.container}>
        <ImageBackground
        source={require('../../assets/images/bg.png')}
        style={styles.backgroundImage}
      >
       
        <Card >
          <Text style={styles.title}>SIGNUP</Text>
  
          <Input style={styles.inputContainer} placeholder="Email" />
          <Input style={styles.inputContainer} placeholder="Password" />
          <Input style={styles.inputContainer} placeholder="Contact No" />
          <Input style={styles.inputContainer} placeholder="CNIC" />
          <Input style={styles.inputContainer} placeholder="MetaMask Wallet" />
          <Button style={styles.button}>REGISTER</Button>
        </Card>
        </ImageBackground>
      </View>
    );
  };
  
  export default SignupScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
     // padding: 20
    },
    backgroundImage: {
      width: "100%",
      height: 280,
    },
    inputContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        width: '90%',
        padding: 8,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.blue ,
      padding: 20
    },
    button: {
       margin: 20 
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
  });
  