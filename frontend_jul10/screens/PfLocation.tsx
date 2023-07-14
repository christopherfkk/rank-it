import * as React from "react";
import { TextInput, StyleSheet, ImageBackground, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegTitle from "../components/RegTitle";
import RegText from "../components/RegText";
import RegTextInput from "../components/RegTextInput";
import RegButton from "../components/RegButton";
import { Border, Padding, Color } from "../GlobalStyles";

const PfLocation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pfLocation}>
      <ImageBackground
        style={[styles.signUpBody, styles.textboxFlexBox]}
        resizeMode="cover"
        source={require("../assets/signupbody1.png")}
      >
        <RegTitle
          regtitle={`
What’s your Location?`}
          whatsYourFirstAndLastNameMarginTop="unset"
          whatsYourFirstAndLastNameAlignSelf="stretch"
          whatsYourFirstAndLastNameDisplay="unset"
          whatsYourFirstAndLastNameAlignItems="unset"
          whatsYourFirstAndLastNameJustifyContent="unset"
          whatsYourFirstAndLastNameWidth="unset"
        />
        <RegText
          youWontBeAbleToChangeThis="E.g. Shibuya, Tokyo or Taito, Tokyo"
          youWontBeAbleToChangeThisFontSize={13}
          youWontBeAbleToChangeThisFontFamily="Manrope_bold"
          youWontBeAbleToChangeThisColor="#fff2f2"
          youWontBeAbleToChangeThisTextAlign="left"
          youWontBeAbleToChangeThisFontWeight="700"
          youWontBeAbleToChangeThisAlignSelf="stretch"
          youWontBeAbleToChangeThisWidth="unset"
        />
        <RegTextInput
          locationFlexDirection="column"
          locationAlignItems="flex-start"
          locationJustifyContent="center"
          locationFontFamily="Manrope_medium"
          locationBorderStyle="solid"
          locationBorderColor="#fff2f2"
          locationBorderWidth={1}
          locationFontWeight="500"
          locationHeight={33}
          locationBackgroundColor="unset"
        />
        <TextInput
          style={[styles.textbox, styles.textboxFlexBox]}
          placeholder="Enter your first name"
          placeholderTextColor="#737373"
        />
        <RegButton
          onPfButtonPress={() => navigation.navigate("PfGender")}
          pfButtonWidth={125}
          pfButtonHeight={29}
          button="Next"
          pfButtonMarginTop={18}
          pfButtonMarginLeft="unset"
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  textboxFlexBox: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  textbox: {
    borderRadius: Border.br_11xs,
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
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 8,
    display: "none",
    marginTop: 18,
  },
  signUpBody: {
    overflow: "hidden",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_4xs,
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  pfLocation: {
    backgroundColor: Color.white,
    width: "100%",
    height: 655,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default PfLocation;
