import { StatusBar } from 'expo-status-bar';
import 'fast-text-encoding';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserHomeScreen from "./Screens/PatientScreens/UserHomeScreen";
import Profile from "./Screens/PatientScreens/Profile";
import AddRecord from "./Screens/PatientScreens/AddRecord/AddRecord" ;
import MyAppointments from "./Screens/PatientScreens/MyAppointments";
import SplashScreen from "./Screens/SharedScreens/SplashScreen";
import SignupScreen from './Screens/PatientScreens/SignupScreen';
import LoginScreen from "./Screens/SharedScreens/LoginScreen";
import UploadImage from './components/Records/UploadImage';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "./constants/colors";
import SearchDoctor from './Screens/PatientScreens/SearchDoctor';
import TimeSlot from './Screens/PatientScreens/Booking/TimeSlot';
import PatientDetails from './Screens/PatientScreens/Booking/PatientDetails';
import PaymentDetails from './Screens/PatientScreens/Booking/PaymentDetails';
import DoctorHomeScreen from './Screens/DoctorScreens/DoctorHomeScreen';
import DoctorProfile from './Screens/DoctorScreens/DoctorProfile';
import ScheduledAppointments from './Screens/DoctorScreens/ScheduledAppointments';
import MetaMask from './Screens/PatientScreens/Booking/MetaMask';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Dashboard = ({ route }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.darkTeal },
        tabBarActiveTintColor: colors.light,
      }}
    >
      <Tab.Screen
        name="UserHomeScreen"
        component={UserHomeScreen}
        initialParams={route}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? colors.light : colors.offWhite}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Appointments"
        component={MyAppointments}
        options={{
          title: "My Appointments",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="calendar-plus-o"
              size={24}
              color={focused ? colors.light : colors.offWhite}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddRecord"
        component={AddRecord}
        initialParams={route}
        options={{
          title: "AddRecord",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="addfile"
              size={24}
              color={focused ? colors.light : colors.offWhite}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={route}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              size={24}
              color={focused ? colors.light : colors.offWhite}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const DoctorDashboard = ({ route }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.darkTeal },
        tabBarActiveTintColor: colors.light,
      }}
    >
      <Tab.Screen
        name="DoctorHomeScreen"
        component={DoctorHomeScreen}
        initialParams={route}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? colors.light : colors.offWhite}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ScheduledAppointments"
        component={ScheduledAppointments}
        options={{
          title: "My Appointments",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="calendar-plus-o"
              size={24}
              color={focused ? colors.light : colors.offWhite}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DoctorProfile"
        component={DoctorProfile}
        initialParams={route}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              size={24}
              color={focused ? colors.light : colors.offWhite}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    
    <View style={styles.container}>  
      <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
             // headerTitle: () => <LogoTitle />,
             // headerStyle: { backgroundColor: colors.darkTeal },
              headerTintColor: colors.blue,
            }}
          >
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{
                headerShown: false,
              }}
            />
             <Stack.Screen
              name="SignupScreen"
              component={SignupScreen}
              options={{
                title: "Register Yourself",
              }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="DashboardScreen" component={Dashboard} />
            <Stack.Screen name="DoctorDashboard" component={DoctorDashboard} />
            <Stack.Screen name="UploadImage" component={UploadImage} />
            <Stack.Screen name="SearchDoctor" component={SearchDoctor} initialParams={navigator} />
            <Stack.Screen name="TimeSlot" component={TimeSlot} initialParams={navigator} />
            <Stack.Screen name="PatientDetails" component={PatientDetails}  />
            <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
            <Stack.Screen name="MetaMask" component={MetaMask} />
           
          </Stack.Navigator>
        </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
   // alignItems: 'center',
   // justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  image: {
    opacity: 0.1,
  },
 
});
