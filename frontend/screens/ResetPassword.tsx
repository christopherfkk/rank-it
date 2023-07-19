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

const ResetPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [error,setError] = useState("");

  const handleReset = () => {
    // Perform your API call or network request here to send email and password to the backend
    // You can use libraries like Axios or the built-in fetch function
  
    // Example using fetch:
      const resetData = {
        email: email,
      };
      // Perform your API call or network request here to send email and password to the backend
      fetch(`${BASE_URL}/accounts/password/reset/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resetData),
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
            setError(Object.values(data));
          }
        })
        .catch((error) => {
          console.error(error);
          setError(error);
        });
    };


  return (
    <SafeAreaView style={[Auth.background]}>
      <View style={Auth.body}>
        <BackButton onPress={() => navigation.navigate("Login")} />
        <Text style={Auth.heading1}>
          Reset Password
        </Text>
        <Text style={Auth.heading2}>
          Enter your email to reset your password
        </Text>
        <TextInput
          style={[Auth.textInputBoxStyle]}
          placeholder="Enter your email "
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#737373"
          onChangeText={(text: string) => setEmail(text)}
          contextMenuHidden // Disable context menu (copy-paste actions)
        />
        <TouchableOpacity
          style={[Auth.button]}
          activeOpacity={0.2}
          onPress={handleReset}
        >
          <Text style={[Auth.buttonText]}>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  signUpBodyFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  signUpBody: {
    alignSelf: "stretch",
    backgroundColor: Color.lavenderblush,
    overflow: "hidden",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_4xs,
  },
  resetPassword: {
    width: "100%",
    height: "100%",
  },
});

export default ResetPassword;
