import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import Button from "../../components/UI/Button";
import { doctorsData } from '../../constants/doctorsData';
import { colors } from '../../constants/colors';

const SearchDoctor = ({navigation}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [doctors, setDoctors] = useState(doctorsData);
  const [searchResults, setSearchResults] = useState(doctors);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setSearchResults(doctors);
    } else {
      const filteredDoctors = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredDoctors);
    }
  };

  const handleBook = () => {
   
    navigation.navigate("TimeSlot");

  };

  const renderDoctorCard = ({ item }) => (
    <View style={styles.cardContainer}>
      
      <View style={styles.card}> 
        <Text style={styles.doctorName}>{item.name}</Text>
        <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
        
      </View>
      <View style={styles.buttonContainer}> 
        <Button onPress={handleBook} style={styles.button}>Book Now</Button>
        
      </View>
      
    </View>

  );

  return (
    <View style={styles.container}>
        
      <TextInput
        style={styles.input}
        placeholder="Enter a doctor's name"
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      <Button onPress={handleSearch} style={styles.button}>Search</Button>
      {/* <FlatList
        data={searchResults}
        renderItem={renderDoctorCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.results}
      /> */}
      {searchResults.map((item) => {
          return (
            <View style={styles.cardContainer}>
              <View style={styles.card}> 
                 <Text style={styles.doctorName}>{item.name}</Text>
                <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
              </View>
              <View style={styles.buttonContainer}> 
                <Button onPress={handleBook} style={styles.button}>Book Now</Button>
              </View>
      
            </View>
          );
        })}
    </View>
  );
}

export default SearchDoctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 6,
  },
  cardContainer: {
    flexDirection : 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,  
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
 
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  results: {
    marginTop: 16,
  },
  card: {
   
    flex:1,
    
  },
  doctorName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  doctorSpecialty: {
    color: '#888',
    fontSize: 14,
  },
  button: {
    fontSize: 12,
    //marginTop:30,
    alignItems: 'center',
    //backgroundColor: '#006070',
    backgroundColor: colors.darkTeal,
    fontWeight: "bold",
    textAlign: "center",
}
});
