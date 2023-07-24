import * as React from "react";
import {
  TextInput,
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
} from "react-native";
import RegTitle from "../../components/auth/RegTitle";
import RegText from "../../components/auth/RegText";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Padding, Color, FontSize } from "../../GlobalStyles";

const PfSkill = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pfSkill}>
      <ImageBackground
        style={styles.signUpBody}
        resizeMode="cover"
        source={require("../../assets/signupbody1.png")}
      >
        <RegTitle
          regtitle="What’s your badminton skill?"
          whatsYourFirstAndLastNameMarginTop="unset"
          whatsYourFirstAndLastNameAlignSelf="stretch"
          whatsYourFirstAndLastNameDisplay="unset"
          whatsYourFirstAndLastNameAlignItems="unset"
          whatsYourFirstAndLastNameJustifyContent="unset"
          whatsYourFirstAndLastNameWidth="unset"
        />
        <RegText
          youWontBeAbleToChangeThis="Self assess your badminton level"
          youWontBeAbleToChangeThisFontSize={13}
          youWontBeAbleToChangeThisFontFamily="Manrope_bold"
          youWontBeAbleToChangeThisColor="#fff2f2"
          youWontBeAbleToChangeThisTextAlign="center"
          youWontBeAbleToChangeThisFontWeight="700"
          youWontBeAbleToChangeThisAlignSelf="stretch"
          youWontBeAbleToChangeThisWidth="unset"
        />
        <TextInput
          style={[styles.textbox, styles.textboxShadowBox]}
          placeholder="Beginner"
          placeholderTextColor="#737373"
        />
        <TextInput
          style={[styles.textbox1, styles.textboxShadowBox]}
          placeholder="Enter your first name"
          placeholderTextColor="#737373"
        />
        <TouchableOpacity
          style={[styles.textbox2, styles.textboxShadowBox]}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <Text style={[styles.beginner, styles.textboxTypo]}>Expert</Text>
        </TouchableOpacity>
        <Pressable
          style={[styles.pfButton, styles.textboxShadowBox]}
          onPress={() => navigation.navigate("PfBio")}
        >
          <Text style={styles.button} numberOfLines={3}>
            Next
          </Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  textboxShadowBox: {
    marginTop: 18,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_11xs,
    justifyContent: "center",
  },
  textboxTypo: {
    fontSize: 12,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  textbox: {
    fontSize: 12,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    paddingVertical: 8,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: "#fff2f2",
    borderStyle: "solid",
    marginTop: 18,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_11xs,
    alignSelf: "stretch",
  },
  textbox1: {
    fontSize: 12,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    paddingVertical: 8,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: "#fff2f2",
    borderStyle: "solid",
    marginTop: 18,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_11xs,
    alignSelf: "stretch",
  },
  beginner: {
    color: Color.lavenderblush,
    textAlign: "left",
  },
  textbox2: {
    opacity: 0,
    paddingVertical: 8,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: "#fff2f2",
    borderStyle: "solid",
    marginTop: 18,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_11xs,
    alignSelf: "stretch",
  },
  button: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.bebasNeueRegular,
    color: Color.crimson_200,
    textAlign: "center",
    flex: 1,
  },
  pfButton: {
    backgroundColor: Color.white,
    width: 176,
    height: 41,
    flexDirection: "row",
    padding: Padding.p_mini,
    marginTop: 18,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_11xs,
    alignItems: "center",
  },
  signUpBody: {
    overflow: "hidden",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_4xs,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  pfSkill: {
    width: "100%",
    height: 655,
    flex: 1,
  },
});

export default PfSkill;
