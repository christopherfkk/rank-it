import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color, Auth } from "../../GlobalStyles";

const AuthTitleComponent = () => {
  return <Text style={styles.resetPassword}>{` Reset password `}</Text>;
};

const styles = StyleSheet.create({
  resetPassword: Auth.heading1,
});

export default AuthTitleComponent;