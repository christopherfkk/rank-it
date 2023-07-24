import React, { useState } from "react";
import { Text, StyleSheet, ImageBackground, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegSelectButton from "../../components/RegSelectButton";
import RegButton from "../../components/RegButton";
import { FontFamily, Color, Padding, Reg } from "../../GlobalStyles";

const PfGender1 = () => {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState("");

  return (
    <View style={Reg.background}>
      <ImageBackground
        style={styles.signUpBody}
        resizeMode="cover"
        source={require("../assets/signupbody1.png")}
      >
        <Text style={Reg.heading1}>Pick which best describes you</Text>
        <RegSelectButton
          onGenderPress={(gender) => setSelectedGender(gender)}
          selectedGender={selectedGender}
          gender="Male"
        />
        <RegSelectButton
          onGenderPress={(gender) => setSelectedGender(gender)}
          selectedGender={selectedGender}
          gender="Female"
        />
        <RegSelectButton
          onGenderPress={(gender) => setSelectedGender(gender)}
          selectedGender={selectedGender}
          gender="Non-binary"
        />
        <RegSelectButton
          onGenderPress={(gender) => setSelectedGender(gender)}
          selectedGender={selectedGender}
          gender="Prefer not to say"
        />
        <RegButton
          navigation={navigation}
          screenName="Phone"
          disabled={selectedGender === ""}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpBody: {
    overflow: "hidden",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_4xs,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    flex: 1,
  },
});

export default PfGender1;
