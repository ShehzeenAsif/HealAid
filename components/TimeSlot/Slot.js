
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { colors } from "../../constants/colors";
import { Slots } from "../../constants/Slots";
import React, { useState } from 'react';



const Slot = () => {

  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    console.log('selected')
  };

  const renderSlotCard = ({ item }) => (
    <TouchableOpacity
      style={[styles.slotCard, selectedSlot?.id === item.id && styles.selectedSlotCard]}
      onPress={() => handleSlotSelect(item)}>
      <View style={styles.item}>
          <Text>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );
    

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Available Slots</Text>
           <View style={styles.itemContainer}>
           <FlatList horizontal
              data={Slots}
              renderItem={renderSlotCard}
              keyExtractor={(item) => item.id}/>     
            </View>
        </View>
    );
}

export default Slot;

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