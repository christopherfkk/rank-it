import React, { useState, useEffect} from "react";
import { Text, StyleSheet, TouchableOpacity, ImageBackground, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegSkipButton from "../../components/auth/RegSkipButton";
import RegButton from "../../components/setup/RegButton"
import { Reg, FontFamily, Color, FontSize, Border, Padding } from "../../GlobalStyles";
import RegBackground from "../../components/setup/RegBackground";
import * as ImagePicker from 'expo-image-picker';

const PfAvatar = () => {
  const navigation = useNavigation();
  const [selectedImage, setselectedImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setselectedImage(result.assets[0].uri);
    }
  };


  return (
    <View style={Reg.background}>
      <RegBackground>
        <RegSkipButton />
        <Text style={Reg.heading1}>
          {`Add your first photo`}
        </Text>

        <Text
          style={Reg.heading2}
        >{`You’ll be able to see opponents’ age before matching. You won’t be able to change this later. `}</Text>

        {/* Display the selected image if available */}
        {selectedImage && <Image source={{ uri: selectedImage }} style={{width:200, height:200}} />}

        {/* TouchableOpacity to open image picker */}
        <TouchableOpacity style={styles.textbox} onPress={pickImage}>
          <Text style={[styles.beginner, styles.beginnerFlexBox]}>+</Text>
        </TouchableOpacity>

        <RegButton
          navigation={navigation}
          screenName="PfAvatar" // Replace "OtherScreen" with the next screen name
          disabled={selectedImage === null} // Disable the button if no image is selected
        />
      </RegBackground>
    </View>
  );
};


const styles = StyleSheet.create({
  beginnerFlexBox: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  addYourFirst: {
    fontSize: 29,
    fontFamily: FontFamily.bebasNeueRegular,
    color: Color.lavenderblush,
    marginTop: 18,
  },
  youllBeAble: {
    fontSize: FontSize.size_3xs,
    lineHeight: 12,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.white,
    textAlign: "left",
    marginTop: 18,
    alignSelf: "stretch",
  },
  beginner: {
    fontSize: 32,
    fontFamily: FontFamily.almaraiRegular,
    color: "rgba(26, 18, 18, 0.33)",
  },
  textbox: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#fff2f2",
    borderWidth: 1,
    width: 122,
    height: 76,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 8,
    marginTop: 18,
    justifyContent: "center",
  },
  signUpBody: {
    height: 655,
    overflow: "hidden",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_4xs,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  pfAvatar: {
    flex: 1,
    width: "100%",
  },
});

export default PfAvatar;
