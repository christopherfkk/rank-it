import * as React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegTitle from "../components/RegTitle";
import RegSelectButton from "../components/RegSelectButton";
import RegButton from "../components/RegButton";
import { Padding } from "../GlobalStyles";

const PfGender1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pfGender}>
      <ImageBackground
        style={styles.signUpBody}
        resizeMode="cover"
        source={require("../assets/signupbody1.png")}
      >
        <RegTitle
          regtitle="Pick which best describes you"
          whatsYourFirstAndLastNameMarginTop="unset"
          whatsYourFirstAndLastNameAlignSelf="stretch"
          whatsYourFirstAndLastNameDisplay="unset"
          whatsYourFirstAndLastNameAlignItems="unset"
          whatsYourFirstAndLastNameJustifyContent="unset"
          whatsYourFirstAndLastNameWidth="unset"
        />
        <RegSelectButton
          onGenderPress={() => {}}
          onEnterYourFirstnameContainPress={() => {}}
          male="Male"
        />
        <RegSelectButton
          onGenderPress={() => {}}
          genderOpacity={0}
          onEnterYourFirstnameContainPress={() => {}}
          male="Female"
        />
        <RegSelectButton
          onGenderPress={() => {}}
          genderOpacity={0}
          onEnterYourFirstnameContainPress={() => {}}
          male="Non-binary"
        />
        <RegSelectButton
          onGenderPress={() => {}}
          genderOpacity={0}
          onEnterYourFirstnameContainPress={() => {}}
          male="Prefer not to say"
        />
        <RegButton
          onPfButtonPress={() => navigation.navigate("PfPhone")}
          pfButtonWidth={176}
          pfButtonHeight={41}
          button="Next"
          pfButtonMarginTop={18}
          pfButtonMarginLeft="unset"
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpBody: {
    alignSelf: "stretch",
    overflow: "hidden",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_4xs,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  pfGender: {
    width: "100%",
    height: 655,
    flex: 1,
  },
});

export default PfGender1;
