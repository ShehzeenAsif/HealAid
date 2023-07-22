import { Image, ImageBackground, StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import Title from "../../components/UI/Title";
import { colors } from "../../constants/colors";


const HospitalDetails = () => {
    const hospital = [
        {
          id: "h1",
          name: "Aga Khan Hospital",
          icon: require('../../assets/images/image1.jpg')
        },
        {
          id: "h2",
          name: "Liaquat National Hospital",
          icon: require('../../assets/images/image2.jpg')
        },
        
    ];

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Registered Hospitals</Text>
           <View style={styles.itemContainer}>
              {/* <FlatList horizontal data={mode} 
                  renderItem={(itemData) => {
                  return (
                    <View style={styles.list}>
                      <View style={styles.item}>
                       <Image source={itemData.item.icon} style={styles.modeImage} />
                       <Text style={styles.modeName}>{itemData.item.name}</Text>
                     </View>
                    </View>
                  );
                }}/>       */}

              {hospital.map((item) => {
                  return (
                    <View style={styles.list}>
                    <View style={styles.item}>
                     <Image source={item.icon} style={styles.modeImage} />
                     <Text style={styles.modeName}>{item.name}</Text>
                   </View>
                  </View>
          );
        })}
            </View>

        </View>
    );
}

export default HospitalDetails;

const styles = StyleSheet.create({
    container: {
      padding: 6,
      marginVertical: 6,
      backgroundColor: "white",
    },
    modeImage: {
        width: 170,
        height: 120,
        borderRadius: 10,
      },
    item: {
       margin: 10,
       alignItems: 'center',
       flexWrap: 'wrap'
    },
    list: {
      margin: 2,
      justifycontent: 'center',
      alignItems: 'center',
    //  flexWrap: 'wrap',
     // elevation: 3,
      width: 180,
       borderColor : "black",
       borderRadius: 10,
      // shadowRadius: 2,
   },
    itemContainer: {
       flexDirection: "row",
       alignItems: 'center',
       
      // backgroundColor: colors.offWhite, 
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.blue,
    },  
    modeName: {
      fontSize: 12,
      fontWeight: 'bold',
      color: colors.blue
    }
  
  });