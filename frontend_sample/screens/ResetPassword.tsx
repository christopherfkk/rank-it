import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const ResetPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.resetPassword}>
      <View style={[styles.statusBarLight, styles.emailBg]}>
        <Image
          style={styles.icons}
          contentFit="cover"
          source={require("../assets/icons3.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
      <View style={styles.signUpBody}>
        <ImageBackground
          style={styles.memberPhotoIcon}
          resizeMode="cover"
          source={require("../assets/memberphoto.png")}
        />
        <Text
          style={[styles.resetPassword1, styles.resetPassword1Typo]}
        >{` Reset password `}</Text>
        <Text style={[styles.enterYourEmail, styles.emailFlexBox]}>
          Enter your email to reset your password
        </Text>
        <TextInput
          style={[styles.email, styles.emailTypo]}
          placeholder="Enter your email "
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#737373"
        />
        <Pressable
          style={[styles.submit, styles.emailSpaceBlock]}
          onPress={() => navigation.navigate("Login")}
        >
          <TouchableOpacity activeOpacity={0.2} onPress={() => {}}>
            <Text style={[styles.getPasswordResetEmail, styles.emailTypo]}>
              Get password reset email
            </Text>
          </TouchableOpacity>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailBg: {
    backgroundColor: Color.white,
    alignSelf: "stretch",
  },
  resetPassword1Typo: {
    marginTop: 21,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  emailFlexBox: {
    textAlign: "center",
    color: Color.white,
  },
  emailTypo: {
    fontSize: 12,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  emailSpaceBlock: {
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    marginTop: 21,
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
    color: Color.lightLabelPrimary,
    textAlign: "left",
    position: "absolute",
  },
  statusBarLight: {
    height: 48,
    transform: [
      {
        rotate: "-0.12deg",
      },
    ],
  },
  memberPhotoIcon: {
    borderRadius: 211,
    width: 139,
    height: 139,
  },
  resetPassword1: {
    fontSize: 29,
    color: Color.white,
    marginTop: 21,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textAlign: "left",
  },
  enterYourEmail: {
    fontSize: FontSize.size_smi,
    marginTop: 21,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    alignSelf: "stretch",
    textAlign: "center",
  },
  email: {
    borderColor: "#000",
    height: 33,
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    marginTop: 21,
    backgroundColor: Color.white,
    alignSelf: "stretch",
  },
  getPasswordResetEmail: {
    textAlign: "center",
    color: Color.white,
  },
  submit: {
    backgroundColor: Color.tomato,
    borderColor: "#e95400",
    width: 204,
    height: 31,
    alignItems: "center",
  },
  signUpBody: {
    backgroundColor: "#ff6862",
    width: 322,
    height: 606,
    overflow: "hidden",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_4xs,
    alignItems: "center",
  },
  resetPassword: {
    flex: 1,
    width: "100%",
    height: 655,
  },
});

export default ResetPassword;
