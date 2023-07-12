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
  SafeAreaView
} from "react-native";
import { Image } from "expo-image";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding, Auth } from "../GlobalStyles";
import BASE_URL from '../apiConfig';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleLogin = () => {
    // Perform your API call or network request here to send email and password to the backend
    // You can use libraries like Axios or the built-in fetch function

    // Example using fetch:
    fetch(`${BASE_URL}/accounts/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={[Auth.background]}>
      <View style={Auth.body}>
        <ImageBackground
          style={Auth.memberPhotoIcon}
          resizeMode="cover"
          source={require("../assets/memberphoto.png")}
        />
        <Text style={[Auth.heading1]}>Log in to Rank-it</Text>
        <View style={styles.signupForm}>
          <TextInput
            style={[Auth.textInputBoxStyle]}
            placeholder="Enter your email "
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#737373"
          />
          <TextInput
            style={[Auth.textInputBoxStyle]}
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

        <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate("ResetPassword")}>
          <Text style={[Auth.heading2]}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Auth.google, Auth.googleFlexBox]} activeOpacity={0.2} onPress={() => navigation.navigate("PfName")}>
          <Image style={Auth.logogoogle} source={require("../assets/group-18.png")} />
          <Text style={[Auth.heading2, { paddingLeft: 10 }]} numberOfLines={1}>Sign in with Google</Text>
        </TouchableOpacity>
        
    <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate("Signup")}>
        <Text style={[Auth.heading2]}>
          Don’t have an account? <Text style={Auth.underlineText}>Sign up here</Text>
        </Text>
    </TouchableOpacity>
    
        <Pressable
          onPress={() =>
            Linking.openURL(
              "https://classy-galette-16d.notion.site/RankIT-Terms-of-Service-17c96ce8b482418c862bcf85e3d08b1a?pvs=25"
            )
          }
        >
          <Text style={[Auth.heading3]}>
        By continuing, you agree to the Terms and Conditions
      </Text>
        </Pressable>

      </View>
    </SafeAreaView>
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
  termsAndConditions: {
    width: 266,
    height: 12,
    marginTop: 21,
  },
  signUpBody: {
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_4xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "stretch",
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
