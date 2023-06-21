import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  TextInput,
  Linking,
} from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Signup1 = () => {
  return (
    <View style={styles.signup}>
      <View style={styles.statusBarLight}>
        <Image
          style={styles.icons}
          contentFit="cover"
          source={require("../assets/icons5.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
      <View style={styles.signUpBody}>
        <ImageBackground
          style={styles.memberPhotoIcon}
          resizeMode="cover"
          source={require("../assets/memberphoto2.png")}
        />
        <Text style={[styles.signUp, styles.orClr]}>Sign up</Text>
        <Pressable style={styles.enterYourEmailContainer} onPress={() => {}}>
          <Text
            style={[styles.enterYourEmailAndPassword, styles.orClr]}
          >{`Enter your email and password `}</Text>
        </Pressable>
        <TextInput
          style={[styles.email, styles.emailTypo]}
          placeholder="Enter your email "
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#737373"
        />
        <TextInput
          style={[styles.email, styles.emailTypo]}
          placeholder="Enter your password"
          keyboardType="default"
          placeholderTextColor="#737373"
        />
        <TextInput
          style={[styles.email, styles.emailTypo]}
          placeholder="Enter your password"
          keyboardType="default"
          placeholderTextColor="#737373"
        />
        <Text style={[styles.or, styles.orClr]}>
          ------------------- or -------------------
        </Text>
        <Pressable
          style={[styles.google, styles.googleFlexBox]}
          onPress={() => Linking.openURL("www.google.com")}
        >
          <View style={[styles.logogoogleParent, styles.googleFlexBox]}>
            <Image
              style={styles.logogoogleIcon}
              contentFit="cover"
              source={require("../assets/logogoogle2.png")}
            />
            <Text
              style={[styles.signUpWith, styles.emailTypo]}
              numberOfLines={1}
            >
              Sign up with Google
            </Text>
          </View>
        </Pressable>
        <Text
          style={styles.byContinuingYou}
        >{`By continuing, you agree to the Terms and Conditions of this app `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orClr: {
    color: Color.white,
    alignSelf: "stretch",
  },
  emailTypo: {
    fontSize: 12,
    fontFamily: FontFamily.manropeMedium,
    justifyContent: "center",
    fontWeight: "500",
  },
  googleFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    top: 18,
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
    height: 48,
    backgroundColor: Color.white,
    alignSelf: "stretch",
  },
  memberPhotoIcon: {
    borderRadius: 211,
    width: 139,
    height: 139,
  },
  signUp: {
    fontSize: 29,
    marginTop: 21,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    color: Color.white,
    textAlign: "left",
  },
  enterYourEmailAndPassword: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    color: Color.white,
    textAlign: "left",
  },
  enterYourEmailContainer: {
    marginTop: 21,
  },
  email: {
    borderRadius: Border.br_mini,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 8,
    height: 33,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    marginTop: 21,
    backgroundColor: Color.white,
    alignSelf: "stretch",
  },
  or: {
    fontSize: 13,
    fontWeight: "800",
    fontFamily: FontFamily.robotoCondensed,
    textAlign: "center",
    marginTop: 21,
  },
  logogoogleIcon: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  signUpWith: {
    display: "flex",
    width: 131,
    marginLeft: 10,
    textAlign: "center",
    alignItems: "center",
    color: Color.lightLabelPrimary,
    fontSize: 12,
    fontFamily: FontFamily.manropeMedium,
    justifyContent: "center",
  },
  logogoogleParent: {
    height: 16,
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
  },
  google: {
    borderRadius: 72,
    paddingHorizontal: Padding.p_31xl,
    paddingVertical: 8,
    height: 33,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    marginTop: 21,
    backgroundColor: Color.white,
    alignSelf: "stretch",
  },
  byContinuingYou: {
    fontSize: 11,
    lineHeight: 12,
    fontFamily: FontFamily.lato,
    color: Color.textL02,
    textAlign: "center",
    fontWeight: "500",
    marginTop: 21,
    alignSelf: "stretch",
  },
  signUpBody: {
    backgroundColor: "#25e187",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_4xs,
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  signup: {
    width: "100%",
    flex: 1,
  },
});

export default Signup1;
