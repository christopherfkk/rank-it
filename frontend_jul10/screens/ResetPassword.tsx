import * as React from "react";
import { StyleSheet, View } from "react-native";
import AuthTitle from "../components/AuthTitle";
import AuthText from "../components/AuthText";
import TextInputBox from "../components/TextInputBox";
import AuthButton from "../components/AuthButton";
import { Color, Padding } from "../GlobalStyles";

const ResetPassword = () => {
  return (
    <View style={[styles.resetPassword, styles.signUpBodyFlexBox]}>
      <View style={[styles.signUpBody, styles.signUpBodyFlexBox]}>
        <AuthTitle />
        <AuthText />
        <TextInputBox />
        <AuthButton />
      </View>
    </View>
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
