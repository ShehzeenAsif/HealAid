import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { colors } from "../../constants/colors";
import Button from "../../components/UI/Button";
import ImageViewer from "./ImageViewer";
import { setStatusBarHidden } from "expo-status-bar";

const PickImage = ({ onSelectImage }) => {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
      pickImage();
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      onSelectImage(result.assets[0].uri);
    }
  };

  if (hasGalleryPermission === false) {
    return <Text>No access to Gallery</Text>;
  }
};

export default PickImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: 'center',
    //  backgroundColor: colors.offWhite,
  },
});
