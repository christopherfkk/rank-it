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
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding, Auth } from "../../GlobalStyles";
import apiConfig from "../../apiConfig";
import BackButton from '../../components/home/BackButton';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import GoogleSignInButton from "../../components/auth/GoogleSignInButton";

const Signup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  const [error,setError] = useState("")

const handleRegister = () => {
    const registrationData = {
      email: email,
      password1: password1,
      password2: password2
    };
    // Perform your API call or network request here to send email and password to the backend
    fetch(`${apiConfig.BASE_URL}/accounts/registration/`, {
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
        const registerSuccess = data.access !== undefined;

        if (registerSuccess) {
          navigation.navigate("Login");
        }
        else {
          setError(Object.values(data))
        }
      })
      .catch((error) => {
        console.error(error)
        setError(error)
      });
  };

  return (
    <SafeAreaView style={Auth.background}>
      <View style={Auth.body}>
      <BackButton onPress={() => navigation.navigate("Login")} />
        <ImageBackground
          style={Auth.memberPhotoIcon}
          resizeMode="cover"
          source={require("../assets/companylogo.png")}
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
            contextMenuHidden // Disable context menu (copy-paste actions)
          />
          <TextInput
            style={[Auth.textInputBoxStyle]}
            placeholder="Enter your password"
            keyboardType="default"
            placeholderTextColor="#737373"
            onChangeText={(text: string) => setPassword1(text)}
            secureTextEntry // Redact the password input
            contextMenuHidden // Disable context menu (copy-paste actions)
            selectionColor={Color.black} // Set the selection color to black
            underlineColorAndroid={Color.transparent} // Hide the default underline
          />
          <TextInput
            style={[Auth.textInputBoxStyle]}
            placeholder="Confirm your password"
            keyboardType="default"
            placeholderTextColor="#737373"
            onChangeText={(text: string) => setPassword2(text)}
            secureTextEntry // Redact the password input
            contextMenuHidden // Disable context menu (copy-paste actions)
            selectionColor={Color.black} // Set the selection color to black
            underlineColorAndroid={Color.transparent} // Hide the default underline
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

        {error ? (
          <Text style={Auth.errorText}>{error}</Text>
        ) : null}
        <GoogleSignInButton/>
        
           
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
        
        {/* <View>
          {user && <Text>user.name</Text>}
        </View> */}
        
      </View>
    </SafeAreaView>
  );
};

export default Signup;
