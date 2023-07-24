import { Image, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import * as ImagePicker from "expo-image-picker";
import { colors } from "../../../constants/colors";
import Button from "../../../components/UI/Button";
import PickImage from "../../../components/Records/PickImage";
import UploadImage from "../../../components/Records/UploadImage";

const AddRecord = ({ navigation, route }) => {
  const [showPickComponent, setPickShowComponent] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageDetails, setImageDetails] = useState({
    title: "",
    date: "",
    description: "",
  });

  const pressHandlerPick = () => {
    setPickShowComponent(true);
  };

  const uploadHandler = () => {
    // Implement your upload logic here
  };

  const handleChildComponentComplete = () => {
    setPickShowComponent(false);
  };

  const handleImage = (imageUrl) => {
    setPickShowComponent(false);
    setSelectedImage(imageUrl);
    // Reset the image details
    setImageDetails({ title: "", date: "", description: "" });
  };

  const handleSelectNewImage = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        alert('You need to grant gallery permissions to select an image.');
        return;
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!pickerResult.cancelled) {
        setSelectedImage(pickerResult.uri);
        // You can optionally reset the image details when selecting a new image.
        setImageDetails({ title: "", date: "", description: "" });
      }
    } catch (error) {
      console.log('Error selecting new image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>RECORD</Text>
        {!selectedImage && (
          <View style={styles.buttonContainer}>
            <Button onPress={pressHandlerPick} style={styles.button}>
              Pick Image
            </Button>
          </View>
        )}
        {showPickComponent && <PickImage onSelectImage={handleImage} />}
        {selectedImage && (
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: selectedImage }} style={styles.image} />
              <View style={styles.detailContainer}>
                <TextInput
                  placeholder="Title"
                  value={imageDetails.title}
                  onChangeText={(text) =>
                    setImageDetails((prev) => ({ ...prev, title: text }))
                  }
                />
                <TextInput
                  placeholder="Date"
                  value={imageDetails.date}
                  onChangeText={(text) =>
                    setImageDetails((prev) => ({ ...prev, date: text }))
                  }
                />
                <TextInput
                  placeholder="Description"
                  value={imageDetails.description}
                  onChangeText={(text) =>
                    setImageDetails((prev) => ({ ...prev, description: text }))
                  }
                />
              </View>

              <View style={styles.buttonContainer}>
                
                <Button onPress={handleSelectNewImage} style={styles.button2}>
                  New Image
                </Button>

                <Button onPress={uploadHandler} style={styles.button2}>
                  Upload Image
                </Button>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default AddRecord;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.offWhite,
  },
  button: {
    fontSize: 12,
    marginTop: 30,
    alignItems: "center",
    backgroundColor: colors.blue,
    fontWeight: "bold",
    textAlign: "center",
  },
  button2: {
    fontSize: 12,
    alignItems: "center",
    backgroundColor: colors.darkTeal,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 2, // Added margin for spacing between buttons
   // padding: 6,
    borderRadius: 12,
    alignItems: 'center',
    //flex: 1/2
  },
  imageContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  detailContainer: {
    alignItems: "center",
    padding: 10,
  },
  card: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ECECEC",
    borderRadius: 12,
    elevation: 4,
    marginTop: 20,
    margin: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
