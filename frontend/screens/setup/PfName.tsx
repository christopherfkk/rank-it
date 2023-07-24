import * as React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegTitle from "../../components/auth/RegTitle";
import RegText from "../../components/auth/RegText";
import RegTextInput from "../../components/auth/RegTextInput";
import RegButton from "../../components/auth/RegButton";
import { Padding, Color } from "../../GlobalStyles";

const PfName = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.pfName, styles.pfNameFlexBox]}>
      <ImageBackground
        style={[styles.signUpBody, styles.pfNameFlexBox]}
        resizeMode="cover"
        source={require("../../assets/signupbody4.png")}
      >
        <RegTitle
          regtitle={`
What’s your first and last name?`}
          whatsYourFirstAndLastNameMarginTop="unset"
          whatsYourFirstAndLastNameAlignSelf="stretch"
          whatsYourFirstAndLastNameDisplay="unset"
          whatsYourFirstAndLastNameAlignItems="unset"
          whatsYourFirstAndLastNameJustifyContent="unset"
          whatsYourFirstAndLastNameWidth="unset"
        />
        <RegText
          youWontBeAbleToChangeThis="You won’t be able to change this later"
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
          locationFontFamily="Almarai_regular"
          locationBorderStyle="solid"
          locationBorderColor="#fff2f2"
          locationBorderWidth={1}
          locationFontWeight="unset"
          locationHeight={33}
          locationBackgroundColor="unset"
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
          locationHeight="unset"
          locationBackgroundColor="unset"
        />
        <RegButton
          onPfButtonPress={() => navigation.navigate("PfStart")}
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
  pfNameFlexBox: {
    alignItems: "center",
    flex: 1,
  },
  signUpBody: {
    alignSelf: "stretch",
    overflow: "hidden",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_4xs,
    justifyContent: "center",
  },
  pfName: {
    backgroundColor: Color.white,
  },
});

export default PfName;
