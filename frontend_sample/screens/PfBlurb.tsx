import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { FontFamily, Border, FontSize, Color, Padding } from "../GlobalStyles";

const PfBlurb = () => {
  return (
    <View style={styles.pfBlurb}>
      <View style={styles.statusBarLight}>
        <Image
          style={styles.icons}
          contentFit="cover"
          source={require("../assets/icons.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
      <View style={styles.signUpBody}>
        <Text style={styles.writeAShort}>{`
Write a short message!`}</Text>
        <Text style={styles.whenYouShare}>
          When you share some details about yourself, it provides your opponent
          with a sneak peek into your badminton experience.
        </Text>
        <TextInput
          style={[styles.shortBlurb, styles.submit1Typo]}
          placeholder="Highlight your experience, availability and location preference to your opponent!"
          multiline={true}
          placeholderTextColor="#737373"
        />
        <Pressable
          style={[styles.submit, styles.submitBorder]}
          onPress={() => {}}
        >
          <TouchableOpacity activeOpacity={0.2} onPress={() => {}}>
            <Text style={[styles.submit1, styles.submit1Typo]}>Submit</Text>
          </TouchableOpacity>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  submit1Typo: {
    fontSize: 12,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  submitBorder: {
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    marginTop: 21,
    alignItems: "center",
    height:40,
  },
  icons: {
    top: 17,
    right: 14,
    width: 67,
    height: 11,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    top: "50%",
    left: 32,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.roboto,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    position: "absolute",
  },
  statusBarLight: {
    width: 325,
    height: 48,
    transform: [
      {
        rotate: "-0.12deg",
      },
    ],
    backgroundColor: Color.white,
  },
  writeAShort: {
    fontSize: 29,
    color: Color.gray,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    alignSelf: "stretch",
    textAlign: "left",
  },
  whenYouShare: {
    fontSize: FontSize.size_smi,
    marginTop: 21,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    alignSelf: "stretch",
    textAlign: "left",
    color: Color.lightLabelPrimary,
  },
  shortBlurb: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: "#000",
    width: 263,
    height: 145,
    flexDirection: "row",
    padding: Padding.p_mini,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    marginTop: 21,
    alignItems: "center",
    backgroundColor: Color.white,
    display: 'flex',
  },
  submit1: {
    color: Color.white,
    textAlign: "center",
  },
  submit: {
    backgroundColor: Color.tomato,
    borderColor: "#e95400",
    width: 135,
    height: 25,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 8,
  },
  signUpBody: {
    backgroundColor: Color.orange,
    overflow: "hidden",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_4xs,
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  pfBlurb: {
    width: "100%",
    height: 655,
    flex: 1,
  },
});

export default PfBlurb;
