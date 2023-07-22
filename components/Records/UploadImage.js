import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from 'react';

import { colors } from "../../constants/colors";
import { Camera } from 'expo-camera';
import Button from "../../components/UI/Button";
// import AddRecord from "../../Screens/PatientScreens/AddRecord/AddRecord";

const UploadImage = () => {

    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
          const cameraStatus = await Camera.requestPermissionsAsync();
          setHasCameraPermission(cameraStatus.status === 'granted');
    })();
      }, []);
    const takePicture = async () => {
        if(camera){
            const data = await camera.takePictureAsync(null)
            setImage(data.uri);
        }
    }
    
    if (hasCameraPermission === false) {
       return <Text>No access to camera</Text>;
    }


    return (
        <View style={{ flex: 1}}>

            <View style={styles.cameraContainer}>
            <Camera 
            ref={ref => setCamera(ref)}
            style={styles.fixedRatio} 
            type={type}
            ratio={'1:1'} />
            </View>
            <Button style={styles.button} onPress={() => takePicture()}> Take Picture</Button>
           <View style={{ flex: 1}}>
               {image && <Image source={{uri: image}} style={{flex:1}}/>}
           </View>
           
        </View>
    );
}

export default UploadImage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: colors.offWhite,
    },
    button: {
        fontSize: 12,
        marginTop:30,
        alignItems: 'center',
        //backgroundColor: '#006070',
        backgroundColor: colors.blue,
        fontWeight: "bold",
        textAlign: "center",
    },
    image: {
        flex: 1/2,
    },
    cameraContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    fixedRatio:{
        flex: 1,
        aspectRatio: 1
    }
  });