import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const SearchBar = () =>{

 const navigation = useNavigation();
  
  const handleSearchBarPress = () => {
    navigation.navigate('SearchDoctor');
  };

  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSearchBarPress}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Doctor"
          editable={false}
        />
      </TouchableOpacity>
      
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
      //  flex: 1,
        justifyContent: 'center',
        padding: 8,
      },
      searchBar: {
        backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
        
      },
 
});
