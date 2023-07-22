import { StyleSheet, Image } from 'react-native';
//import PickImage from './PickImage';

export default function ImageViewer({ selectedImage }) {
  const imageSource =  { uri: selectedImage };

  return ( selectedImage && <Image source={imageSource} style={styles.image} />);
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 18,
  },
});