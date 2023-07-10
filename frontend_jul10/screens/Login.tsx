import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding, Auth } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={styles.signUpBody}>
        <ImageBackground
          style={styles.memberPhotoIcon}
          resizeMode="cover"
          source={require("../assets/memberphoto.png")}
        />
        <Text style={[Auth.heading1]}>Log in to Rank-it</Text>
        <View style={styles.signupForm}>
          <TextInput
            style={[Auth.textBoxStyle]}
            placeholder="Enter your email "
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#737373"
          />
          <TextInput
            style={[Auth.textBoxStyle]}
            placeholder="Enter your password"
            keyboardType="default"
            placeholderTextColor="#737373"
          />
        </View>
        <TouchableOpacity
          style={[Auth.button]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("PfName")}
        >
            <Text style={[Auth.buttonText]}>Login</Text>
        </TouchableOpacity>
        <Text style={[styles.or]}>
          ------------------- or -------------------
        </Text>
        <Pressable
          style={[styles.google, styles.googleFlexBox]}
          onPress={() => Linking.openURL("www.google.com")}
        >
          <View style={[styles.logogoogleParent, styles.googleFlexBox]}>
            <Text style={styles.logogoogle}>
              <Image
                style={styles.logogoogleChild}
                contentFit="cover"
                source={require("../assets/group-18.png")}
              />
            </Text>
            <Text
              style={[styles.continueWithGoogle, styles.emailTypo]}
              numberOfLines={1}
            >
              Continue with Google
            </Text>
          </View>
        </Pressable>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text
            style={[styles.dontHaveAnAccountSignUp, styles.enterYourEmailTypo]}
          >
            Don’t have an account? Sign up here
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => navigation.navigate("ResetPassword")}
        >
          <Text
            style={[styles.dontHaveAnAccountSignUp, styles.enterYourEmailTypo]}
          >
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View style={styles.termsAndConditions}>
        <Pressable
          style={styles.byContinuingYouContainer}
          onPress={() =>
            Linking.openURL(
              "https://classy-galette-16d.notion.site/RankIT-Terms-of-Service-17c96ce8b482418c862bcf85e3d08b1a?pvs=25"
            )
          }
        >
          <Text style={[styles.text2, styles.emailTypo, styles.termsAndConditionsText]}>
        By continuing, you agree to the Terms and Conditions
      </Text>
        </Pressable>
</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // orClr: {
  //   color: Color.lightLabelPrimary,
  //   textAlign: "center",
  // },
  emailTypo: {
    fontSize: 12,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  passwordSpaceBlock: {
    paddingVertical: 8,
    borderRadius: Border.br_8xs,
    alignSelf: "stretch",
  },
  googleFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  memberPhotoIcon: {
    width: 160,
    height: 139,
  },
  logInTo: {
    fontSize: FontSize.size_6xl,
    marginTop: 21,
    textAlign: "center",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    color: Color.lightLabelPrimary,
    alignSelf: "stretch",
  },
  email: {
    paddingVertical: 8,
    borderRadius: Border.br_8xs,
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_mini,
    height: 33,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.white,
    justifyContent: "center",
  },
  password: {
    paddingVertical: 8,
    borderRadius: Border.br_8xs,
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_mini,
    height: 33,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.white,
    marginTop: 21,
    justifyContent: "center",
  },
  confirmPassword: {
    display: "none",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 8,
    borderRadius: Border.br_8xs,
    height: 33,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.white,
    marginTop: 21,
    justifyContent: "center",
  },
  signupForm: {
    height: 84,
    paddingBottom: 0,
    marginTop: 21,
    alignItems: "center",
    alignSelf: "stretch",
  },
  login1: {
    color: Color.white,
    textAlign: "center",
  },
  loginButton: {
    backgroundColor: Color.crimson_100,
    height: 27,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 8,
    borderRadius: Border.br_8xs,
    marginTop: 21,
    alignItems: "center",
  },
  or: {
    fontSize: 13,
    fontWeight: "800",
    fontFamily: FontFamily.manropeSemiBold,
    marginTop: 21,
    textAlign: "center",
    alignSelf: "stretch",
  },
  logogoogleChild: {
    height: "91.85%",
    width: "89.85%",
    top: "4.17%",
    right: "5.99%",
    bottom: "3.98%",
    left: "4.17%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  logogoogle: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  continueWithGoogle: {
    display: "flex",
    width: 131,
    marginLeft: 10,
    textAlign: "center",
    color: Color.lightLabelPrimary,
    justifyContent: "center",
    alignItems: "center",
  },
  logogoogleParent: {
    height: 16,
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
  },
  google: {
    paddingHorizontal: Padding.p_31xl,
    paddingVertical: 8,
    borderRadius: Border.br_8xs,
    alignSelf: "stretch",
    height: 33,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.white,
    flexDirection: "row",
    marginTop: 21,
    overflow: "hidden",
  },
  text: {
    alignSelf: "stretch",
  },
  dontHaveAnContainer: {
    marginTop: 21,
  },
  text2: {
    width: "100%",
  },
  byContinuingYouContainer: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  termsAndConditions: {
    width: 266,
    height: 12,
    marginTop: 21,
  },
  signUpBody: {
    backgroundColor: Color.lavenderblush,
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_4xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "stretch",
    flex: 1,
  },
  login: {
    height: 655,
    width: "100%",
    flex: 1,
  },
  termsAndConditions: {
    marginTop: 21,
    alignItems: "center",
  },
  termsAndConditionsText: {
    color: "#888",
    textDecorationLine: "underline",
    textAlign: "center",
  },
});

export default Login;
