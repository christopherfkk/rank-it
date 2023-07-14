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

const ResetPassword = () => {
  return (
    <SafeAreaView style={[Auth.background]}>
      <View style={Auth.body}>
      <Text style={Auth.heading1}>
      Reset Password
      </Text>
        <Text style={Auth.heading2}>
      Enter your email to reset your password
      </Text>
        <TouchableOpacity
          style={[Auth.button]}
          activeOpacity={0.2}
          onPress={handleReset}
        >
          <TouchableOpacity activeOpacity={0.2} onPress={() => {}}>
            <Text style={[Auth.buttonText]}>Sign-up</Text>
          </TouchableOpacity>
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
