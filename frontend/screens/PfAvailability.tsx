import * as React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegSkipButton from "../components/RegSkipButton";
import RegTitle from "../components/RegTitle";
import RegText from "../components/RegText";
import TimeSlotForm from "../components/TimeSlotForm";
import RegButton from "../components/RegButton";
import { Padding } from "../GlobalStyles";

const PfAvailability = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pfAvailability}>
      <ImageBackground
        style={styles.signUpBody}
        resizeMode="cover"
        source={require("../assets/signupbody.png")}
      >
        <RegSkipButton />
        <RegTitle
          regtitle="When are you free?"
          whatsYourFirstAndLastNameMarginTop={18}
          whatsYourFirstAndLastNameAlignSelf="stretch"
          whatsYourFirstAndLastNameDisplay="unset"
          whatsYourFirstAndLastNameAlignItems="unset"
          whatsYourFirstAndLastNameJustifyContent="unset"
          whatsYourFirstAndLastNameWidth="unset"
        />
        <RegText
          youWontBeAbleToChangeThis="By providing your available timeslots, you enable other opponents to request matches at convenient times, increasing the likelihood of finding matches"
          youWontBeAbleToChangeThisFontSize={10}
          youWontBeAbleToChangeThisFontFamily="Manrope_bold"
          youWontBeAbleToChangeThisColor="#fff"
          youWontBeAbleToChangeThisTextAlign="left"
          youWontBeAbleToChangeThisLineHeight={12}
          youWontBeAbleToChangeThisFontWeight="700"
          youWontBeAbleToChangeThisAlignSelf="stretch"
          youWontBeAbleToChangeThisWidth="unset"
        />
        <TimeSlotForm />
        <RegButton
          onPfButtonPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "PersonalMenu" })
          }
          pfButtonWidth={176}
          pfButtonHeight={41}
          button="DONE"
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
    height: 655,
    overflow: "hidden",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_4xs,
    alignItems: "center",
    justifyContent: "center",
  },
  pfAvailability: {
    flex: 1,
    width: "100%",
  },
});

export default PfAvailability;
