
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import * as ImagePicker from "expo-image-picker";
import { colors } from "../../../constants/colors";
import Button from "../../../components/UI/Button";
import PickImage from "../../../components/Records/PickImage";
import UploadImage from "../../../components/Records/UploadImage";

const AddRecord = ({ navigation, route }) => {
  const [showPickComponent, setPickShowComponent] = useState(false);
  const [images, setImages] = useState([]);
  const [imageDetails, setImageDetails] = useState({
    title: "",
    date: "",
    description: "",
  });

  const pressHandlerPick = () => {
    setPickShowComponent(true);
  };

  const handleChildComponentComplete = () => {
    setPickShowComponent(false);
  };

  const handleImage = (imageUrl) => {
    setPickShowComponent(false);
    setImages((prev) => [...prev, { imageUrl, ...imageDetails }]);
    // Reset the image details
    setImageDetails({ title: "",date:"", description: "" });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>RECORD</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={pressHandlerPick} style={styles.button}>
            Pick Image
          </Button>
        </View>
        {showPickComponent && <PickImage onSelectImage={handleImage} />}
        {images.map((imageData, index) => (
          <View style={styles.card}>
            <View key={index} style={styles.imageContainer}>
            <Image source={{ uri: imageData.imageUrl }} style={styles.image} />
            <View style={styles.detailContainer}>
            <TextInput
              placeholder="Title"
              value={imageData.title}
              onChangeText={(text) =>
                setImages((prev) =>
                  prev.map((item, idx) =>
                    idx === index ? { ...item, title: text } : item
                  )
                )
              }
            />
            <TextInput
              placeholder="Date"
              value={imageData.date}
              onChangeText={(text) =>
                setImages((prev) =>
                  prev.map((item, idx) =>
                    idx === index ? { ...item, date: text } : item
                  )
                )
              }
            />
            <TextInput
              placeholder="Description"
              value={imageData.description}
              onChangeText={(text) =>
                setImages((prev) =>
                  prev.map((item, idx) =>
                    idx === index ? { ...item, description: text } : item
                  )
                )
              }
            />
            </View>
            
            </View>
          </View>
        ))}
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
    //marginBottom: 10
  },
  button: {
    fontSize: 12,
    marginTop: 30,
    alignItems: "center",
    backgroundColor: colors.blue,
    fontWeight: "bold",
    textAlign: "center",
  },
  imageContainer: {
    marginVertical: 10,
    alignItems: "center",
    flexDirection: 'row'
  },
  detailContainer: {
   // marginVertical: 10,
    alignItems: "center",
    padding: 10
  },
  card: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ECECEC",
    borderRadius: 12,
    elevation: 4, // box shadow
    marginTop: 20,
    margin: 10
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
});
