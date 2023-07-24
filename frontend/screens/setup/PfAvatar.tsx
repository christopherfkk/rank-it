import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  ImageBackground,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegSkipButton from "../../components/auth/RegSkipButton";
import RegTitle from "../../components/auth/RegTitle";
import RegText from "../../components/auth/RegText";
import RegButton from "../../components/auth/RegButton";
import { FontFamily, Border, Color, Padding } from "../../GlobalStyles";

const PfAvatar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pfAvatar}>
      <ImageBackground
        style={styles.signUpBody}
        resizeMode="cover"
        source={require("../../assets/signupbody.png")}
      >
        <RegSkipButton />
        <RegTitle
          regtitle={`
Add your first photo`}
          whatsYourFirstAndLastNameMarginTop={18}
          whatsYourFirstAndLastNameAlignSelf="stretch"
          whatsYourFirstAndLastNameDisplay="unset"
          whatsYourFirstAndLastNameAlignItems="unset"
          whatsYourFirstAndLastNameJustifyContent="unset"
          whatsYourFirstAndLastNameWidth="unset"
        />
        <RegText
          youWontBeAbleToChangeThis="You’ll be able to see opponents’ age before matching. You won’t be able to change this later. "
          youWontBeAbleToChangeThisFontSize={10}
          youWontBeAbleToChangeThisFontFamily="Manrope_bold"
          youWontBeAbleToChangeThisColor="#fff"
          youWontBeAbleToChangeThisTextAlign="left"
          youWontBeAbleToChangeThisLineHeight={12}
          youWontBeAbleToChangeThisFontWeight="700"
          youWontBeAbleToChangeThisAlignSelf="stretch"
          youWontBeAbleToChangeThisWidth="unset"
        />
        <Pressable style={styles.textbox}>
          <Text style={styles.beginner}>+</Text>
        </Pressable>
        <RegButton
          onPfButtonPress={() => navigation.navigate("PfBirthday")}
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
  beginner: {
    fontSize: 32,
    fontFamily: FontFamily.almaraiRegular,
    color: "rgba(26, 18, 18, 0.33)",
    textAlign: "center",
    alignSelf: "stretch",
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
