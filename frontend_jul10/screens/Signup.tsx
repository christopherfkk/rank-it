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
import { useContext } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding, Auth } from "../GlobalStyles";
import BASE_URL from '../apiConfig';
// import CsrfTokenContext from '../CsrfTokenContext';

const Signup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  // const csrfToken = useContext(CsrfTokenContext);

const handleRegister = () => {
  // Perform your API call or network request here to send email and password to the backend
  // You can use libraries like Axios or the built-in fetch function

  // Example using fetch:
    const registrationData = {
      email: email,
      password1: password1,
      password2: password2
    };
    console.log(csrfToken)
    // Perform your API call or network request here to send email and password to the backend
    fetch(`${BASE_URL}/accounts/registration/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registrationData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log(data);
  
        // Check if the login was successful (adjust this based on your backend response)
        const registerSuccess = data.status_code === 201;

        if (registerSuccess) {
          navigation.navigate("PfName");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={Auth.background}>
      <View style={Auth.body}>
        <ImageBackground
          style={Auth.memberPhotoIcon}
          resizeMode="cover"
          source={require("../assets/memberphoto1.png")}
        />
        <Text style={[Auth.heading1]}>
          Create an Account
        </Text>
        <View style={Auth.signupForm}>
          <TextInput
            style={[Auth.textInputBoxStyle]}
            placeholder="Enter your email "
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#737373"
            onChangeText={(text: string) => setEmail(text)}
          />
          <TextInput
            style={[Auth.textInputBoxStyle]}
            placeholder="Enter your password"
            keyboardType="default"
            placeholderTextColor="#737373"
            onChangeText={(text: string) => setPassword1(text)}
          />
          <TextInput
            style={[Auth.textInputBoxStyle]}
            placeholder="Confirm your password"
            keyboardType="default"
            placeholderTextColor="#737373"
            onChangeText={(text: string) => setPassword2(text)}
          />
        </View>
        <TouchableOpacity
          style={[Auth.button]}
          activeOpacity={0.2}
          onPress={handleRegister}
        >
          <TouchableOpacity activeOpacity={0.2} onPress={() => {}}>
            <Text style={[Auth.buttonText]}>Sign-up</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={[Auth.google, Auth.googleFlexBox]} activeOpacity={0.2} onPress={() => navigation.navigate("PfName")}>
          <Image style={Auth.logogoogle} source={require("../assets/group-18.png")} />
          <Text style={[Auth.heading2, { paddingLeft: 10 }]} numberOfLines={1}>Sign in with Google</Text>
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
            <Text style={styles.text} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  orClr: {
    color: Color.lightLabelPrimary,
    textAlign: "center",
  },
  emailTypo: {
    fontSize: 12,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  emailSpaceBlock: {
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
  createAnAccount: {
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
  signupForm: {
    height: 140,
    paddingBottom: 0,
    marginTop: 21,
    alignSelf: "stretch",
    alignItems: "center",
  },
  signUp: {
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
    fontFamily: FontFamily.manropeMedium,
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
    height: 655,
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_4xs,
    overflow: "hidden",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Signup;
