import * as React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegSkipButton from "../../components/auth/RegSkipButton";
import RegTitle from "../../components/auth/RegTitle";
import RegText from "../../components/auth/RegText";
import RegTextInput from "../../components/auth/RegTextInput";
import RegButton from "../../components/setup/RegButton"
import { Padding } from "../../GlobalStyles";

const PfBlurb = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pfBio}>
      <ImageBackground
        style={styles.signUpBody}
        resizeMode="cover"
        source={require("../../assets/signupbody.png")}
      >
        <RegSkipButton />
        <RegTitle
          regtitle={`
Write a short Bio`}
          whatsYourFirstAndLastNameMarginTop={18}
          whatsYourFirstAndLastNameAlignSelf="unset"
          whatsYourFirstAndLastNameDisplay="flex"
          whatsYourFirstAndLastNameAlignItems="flex-end"
          whatsYourFirstAndLastNameJustifyContent="center"
          whatsYourFirstAndLastNameWidth={267}
        />
        <RegText
          youWontBeAbleToChangeThis="When you share some details about yourself, it provides your opponent with a sneak peek into your badminton experience."
          youWontBeAbleToChangeThisFontSize={10}
          youWontBeAbleToChangeThisFontFamily="Manrope_bold"
          youWontBeAbleToChangeThisColor="#fff"
          youWontBeAbleToChangeThisTextAlign="center"
          youWontBeAbleToChangeThisLineHeight={12}
          youWontBeAbleToChangeThisFontWeight="700"
          youWontBeAbleToChangeThisAlignSelf="unset"
          youWontBeAbleToChangeThisWidth={267}
        />
        <RegTextInput
          locationFlexDirection="column"
          locationAlignItems="flex-start"
          locationJustifyContent="center"
          locationFontFamily="Manrope_regular"
          locationBorderStyle="solid"
          locationBorderColor="#fff2f2"
          locationBorderWidth={1}
          locationFontWeight="unset"
          locationHeight={76}
          locationBackgroundColor="#fff"
        />
        <RegButton
          onPfButtonPress={() => navigation.navigate("PfAvatar")}
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
  pfBio: {
    width: "100%",
    height: 655,
    flex: 1,
  },
});

export default PfBlurb;
