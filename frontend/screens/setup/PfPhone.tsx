import * as React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegTitle from "../../components/auth/RegTitle";
import RegText from "../../components/auth/RegText";
import RegTextInput from "../../components/auth/RegTextInput";
import RegButton from "../../components/setup/RegButton"
import { Padding, Color } from "../../GlobalStyles";

const PfPhone = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.pfPhone, styles.pfPhoneFlexBox]}>
      <ImageBackground
        style={[styles.signUpBody, styles.pfPhoneFlexBox]}
        resizeMode="cover"
        source={require("../../assets/badminton-bg.png")}
      >
        <RegTitle
          regtitle={`
What’s your phone number?`}
          whatsYourFirstAndLastNameMarginTop="unset"
          whatsYourFirstAndLastNameAlignSelf="stretch"
          whatsYourFirstAndLastNameDisplay="unset"
          whatsYourFirstAndLastNameAlignItems="unset"
          whatsYourFirstAndLastNameJustifyContent="unset"
          whatsYourFirstAndLastNameWidth="unset"
        />
        <RegText
          youWontBeAbleToChangeThis="Your phone number will only be shared with opponents you have matched with, ensuring your privacy throughout the competitive badminton experience."
          youWontBeAbleToChangeThisFontSize={10}
          youWontBeAbleToChangeThisFontFamily="Manrope_bold"
          youWontBeAbleToChangeThisColor="#fff"
          youWontBeAbleToChangeThisTextAlign="left"
          youWontBeAbleToChangeThisFontWeight="700"
          youWontBeAbleToChangeThisAlignSelf="stretch"
          youWontBeAbleToChangeThisWidth="unset"
        />
        <RegTextInput />
        <RegButton
          onPfButtonPress={() => navigation.navigate("PfSkill")}
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
  pfPhoneFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  signUpBody: {
    alignSelf: "stretch",
    overflow: "hidden",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_4xs,
  },
  pfPhone: {
    backgroundColor: Color.white,
    width: "100%",
    height: 655,
  },
});

export default PfPhone;
