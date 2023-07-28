import * as React from "react";
import { Pressable, ImageBackground, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegSkipButton from "../../components/auth/RegSkipButton";
import RegTitle from "../../components/auth/RegTitle";
import RegText from "../../components/auth/RegText";
import RankITCard from "../../components/home/RankITCard";
import RegButton from "../../components/setup/RegButton"
import { Padding } from "../../GlobalStyles";

const PfBirthday = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pfBirthday}>
      <ImageBackground
        style={styles.signUpBody}
        resizeMode="cover"
        source={require("../../assets/signupbody3.png")}
      >
        <RegSkipButton />
        <RegTitle
          regtitle="When’s your birthday?"
          whatsYourFirstAndLastNameMarginTop={18}
          whatsYourFirstAndLastNameAlignSelf="stretch"
          whatsYourFirstAndLastNameDisplay="unset"
          whatsYourFirstAndLastNameAlignItems="unset"
          whatsYourFirstAndLastNameJustifyContent="unset"
          whatsYourFirstAndLastNameWidth="unset"
        />
        <RegText
          youWontBeAbleToChangeThis="Complete your RankIT profile with a photo to showcase your badminton passion and connect with fellow players."
          youWontBeAbleToChangeThisFontSize={10}
          youWontBeAbleToChangeThisFontFamily="Manrope_bold"
          youWontBeAbleToChangeThisColor="#fff"
          youWontBeAbleToChangeThisTextAlign="left"
          youWontBeAbleToChangeThisLineHeight={12}
          youWontBeAbleToChangeThisFontWeight="700"
          youWontBeAbleToChangeThisAlignSelf="stretch"
          youWontBeAbleToChangeThisWidth="unset"
        />
        <RankITCard />
        <RegButton
          onPfButtonPress={() => navigation.navigate("PfAvailability")}
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
  pfBirthday: {
    width: "100%",
    height: 652,
    flex: 1,
  },
});

export default PfBirthday;
