import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, Padding } from "../GlobalStyles";

const AuthButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Login");
  };
  
  return (
    <Pressable style={styles.submit} onPress={handlePress}>
      <Text style={styles.getPasswordResetEmail}>Get password reset email</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  getPasswordResetEmail: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.white,
    textAlign: "center",
  },
  submit: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.crimson_100,
    width: 253,
    height: 32,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 21,
  },
});

export default AuthButton;
