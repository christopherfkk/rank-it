import * as React from "react";
import { TextInput, StyleSheet } from "react-native";
import { Border, Color, Padding, FontFamily, Auth} from "../../GlobalStyles";

const AuthTextInputBox = () => {
  return (
    <TextInput
      style={[Auth.textInputBoxStyle, Auth.textInput]}
      placeholder="Enter your email"
      keyboardType="email-address"
      autoCapitalize="none"
      placeholderTextColor="#737373"
    />
  );
};

// const styles = StyleSheet.create({
//   email: {
//     alignSelf: "stretch",
//     borderRadius: Border.br_8xs,
//     backgroundColor: Color.white,
//     borderStyle: "solid",
//     borderColor: "#000",
//     borderWidth: 1,
//     height: 33,
//     paddingHorizontal: Padding.p_mini,
//     paddingVertical: 8,
//     justifyContent: "center",
//     fontWeight: "500",
//     fontFamily: FontFamily.manropeMedium,
//     fontSize: 12,
//     marginTop: 21,
//   },
// });

export default AuthTextInputBox;
