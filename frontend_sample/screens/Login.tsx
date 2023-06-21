import * as React from "react";
import { useState } from "react";;
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
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();
  // const [email, setEmail] = useState("")
  // const [password,setPassword] = useState("")

  // const handleSignIn = () => {
  //   // Perform your API call or network request here to send email and password to the backend
  //   // You can use libraries like Axios or the built-in fetch function

  //   // Example using fetch:
  //   fetch("https://your-backend-url.com/signin", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email, password }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Handle the response from the backend
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <View style={styles.login}>
      <View style={styles.signUpBody}>
        <ImageBackground
          style={styles.memberPhotoIcon}
          resizeMode="cover"
          source={require("../assets/memberphoto1.png")}
        />
        <Text style={[styles.signIn, styles.orClr]}>Sign in</Text>
        <Text
          style={[styles.enterYourEmail, styles.enterYourEmailTypo]}
        >{`Enter your email and password `}</Text>
        <TextInput
          style={[styles.email, styles.emailTypo]}
          placeholder="Enter your email "
          placeholderTextColor="#737373"
        />
        <TextInput
          style={[styles.email, styles.emailTypo]}
          placeholder="Enter your password"
          placeholderTextColor="#737373"
        />
        <TouchableOpacity
          style={[styles.submit, styles.emailSpaceBlock]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("PfName")}
        >
          <TouchableOpacity activeOpacity={0.2} onPress={() => {}}>
            <Text style={[styles.login1, styles.emailTypo]}>Login</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <Text style={[styles.or, styles.orClr]}>
          ------------------- or -------------------
        </Text>
        <TouchableOpacity
          style={[styles.google, styles.emailSpaceBlock]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("PfName")}
        >
          <View style={styles.logogoogleParent}>
            <Image
              style={styles.logogoogleIcon}
              contentFit="cover"
              source={require("../assets/logogoogle1.png")}
            />
            <Text
              style={[styles.signInWith, styles.emailTypo]}
              numberOfLines={1}
            >
              Sign in with Google
            </Text>
          </View>
        </TouchableOpacity>
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
        <Text style={styles.byContinuingYou}>
          By continuing, you agree to the Terms and Conditions
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orClr: {
    color: Color.white,
    textAlign: "center",
  },
  enterYourEmailTypo: {
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.white,
    alignSelf: "stretch",
  },
  emailTypo: {
    fontSize: 12,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  emailSpaceBlock: {
    paddingVertical: 8,
    justifyContent: "center",
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
    fontFamily: FontFamily.roboto,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    fontWeight: "600",
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
  signIn: {
    fontSize: 29,
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  enterYourEmail: {
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  email: {
    height: 33,
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: Padding.p_mini,
    borderRadius: Border.br_mini,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.white,
    alignSelf: "stretch",
  },
  login1: {
    textAlign: "center",
    color: Color.white,
  },
  submit: {
    backgroundColor: "#ed1313",
    width: 135,
    height: 25,
    justifyContent: "center",
    paddingHorizontal: Padding.p_mini,
    borderRadius: Border.br_mini,
    paddingVertical: 8,
    alignItems: "center",
  },
  or: {
    fontSize: 13,
    fontWeight: "800",
    fontFamily: FontFamily.robotoCondensed,
    textAlign: "center",
    alignSelf: "stretch",
  },
  logogoogleIcon: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  signInWith: {
    display: "flex",
    width: 121,
    marginLeft: 10,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    color: Color.lightLabelPrimary,
  },
  logogoogleParent: {
    flexDirection: "row",
    paddingLeft: 0,
    paddingRight: 0,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  google: {
    borderRadius: 72,
    paddingHorizontal: 64,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.white,
    alignSelf: "stretch",
    alignItems: "center",
  },
  dontHaveAnAccountSignUp: {
    textDecoration: "underline",
    fontFamily: FontFamily.manropeSemibold,
    fontWeight: "600",
  },
  byContinuingYou: {
    fontSize: 11,
    lineHeight: 12,
    fontFamily: FontFamily.lato,
    color: "#d9d9d9",
    fontWeight: "500",
    textAlign: "center",
    alignSelf: "stretch",
  },
  signUpBody: {
    backgroundColor: Color.salmon_100,
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_4xs,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "stretch",
    flex: 1,
  },
  login: {
    backgroundColor: Color.studioLightmodeLightBGF8F9FB,
    width: "100%",
    height: 658,
    flex: 1,
  },
});

export default Login;
