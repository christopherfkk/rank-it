import * as React from "react";
import { Pressable, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, Padding,Auth } from "../GlobalStyles";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
}

const AuthButton: React.FC<CustomButtonProps> = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={Auth.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.white,
    textAlign: "center",
  },
  buttonText: {
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
