
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import Title from "../../components/UI/Title";
import { colors } from "../../constants/colors";
import { Days } from "../../constants/Days";
import React, { useState } from 'react';



const Day = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleSlotSelect = (day) => {
    setSelectedDay(day);
    console.log(selectedDay)
  };

  const renderSlotCard = ({ item }) => (
    <TouchableOpacity
      style={[styles.slotCard, selectedDay?.id === item.id && styles.selectedSlotCard]}
      onPress={() => handleSlotSelect(item)}>
      <View style={styles.item}>
                       <Text>{item.day}</Text>
                       <Text>{item.dated}</Text>
                    </View>
    </TouchableOpacity>
  );

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Day</Text>
           <View style={styles.itemContainer}>
              <FlatList horizontal
              data={Days}
              renderItem={renderSlotCard}
              keyExtractor={(item) => item.id}/>           
            </View>
        </View>
    );
}

export default Day;

const styles = StyleSheet.create({
    container: {
   //   backgroundColor: "white",
      padding: 6,
      marginVertical: 6
    },
    categoryImage: {
        width: 70,
        height: 70,
      },
    item: {
       margin: 10,
       alignItems: 'center',
       backgroundColor: 'white',
       borderRadius: 8,
       padding: 16,
      // marginBottom: 16,
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.1,
       shadowRadius: 2,
       elevation: 2,  
       alignItems: 'center',
       justifyContent: 'space-between',
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
    selectedSlotCard: {
      backgroundColor: '#FFCCCB',
    }, 

  });