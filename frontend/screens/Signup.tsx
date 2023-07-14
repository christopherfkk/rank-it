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
import BackButton from '../components/BackButton';
// import CsrfTokenContext from '../CsrfTokenContext';

const Signup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  const [error,setError] = useState("")
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
        
        <TouchableOpacity style={[Auth.google, Auth.googleFlexBox]} activeOpacity={0.2} onPress={() => navigation.navigate("PfName")}>
          <Image style={Auth.logogoogle} source={require("../assets/group-18.png")} />
          <Text style={[Auth.buttonText, { color: Color.black ,paddingLeft: 10 }]} numberOfLines={1}>Sign in with Google</Text>
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

export default Signup;
