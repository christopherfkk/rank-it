import * as React from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegButton from "../components/RegButton";
import { Padding, Border, FontFamily, Color, FontSize, Reg} from "../GlobalStyles";

const RegScreen = () => {
  const navigation = useNavigation();

  return (
<View style={Reg.background}>
<ImageBackground
  style={Reg.signUpBody}
  resizeMode="cover"
  source={require("../assets/badminton_photo.png")}
>
  <Text style={styles.whatsYourFirst}>Welcome</Text>
  <Text
    style={styles.youWontBe}
  >{`We're thrilled to welcome you aboard and play badminton with you! `}</Text>
  <TextInput
    style={[styles.textbox, styles.textboxShadowBox]}
    placeholder="Enter your first name"
    placeholderTextColor="#737373"
  />
  <TextInput
    style={styles.textboxShadowBox}
    placeholder="Enter your first name"
    placeholderTextColor="#737373"
  />
  <RegButton onPfButtonPress={() => navigation.navigate("PfLocation")} />
</ImageBackground>
</View>
);
};

const styles = StyleSheet.create({
textboxShadowBox: {
display: "none",
paddingVertical: 8,
paddingHorizontal: Padding.p_mini,
borderWidth: 1,
borderColor: "#fff2f2",
borderStyle: "solid",
shadowOpacity: 1,
elevation: 4,
shadowRadius: 4,
shadowOffset: {
width: 0,
height: 4,
},
shadowColor: "rgba(0, 0, 0, 0.25)",
borderRadius: Border.br_11xs,
marginTop: 18,
alignSelf: "stretch",
justifyContent: "center",
},
whatsYourFirst: {
fontSize: 29,
fontFamily: FontFamily.bebasNeueRegular,
textAlign: "center",
color: Color.lavenderblush,
alignSelf: "stretch",
},
youWontBe: {
fontSize: FontSize.size_smi,
fontFamily: FontFamily.almaraiRegular,
marginTop: 18,
textAlign: "center",
color: Color.lavenderblush,
alignSelf: "stretch",
},
textbox: {
height: 33,
},
signUpBody: {
overflow: "hidden",
paddingHorizontal: Padding.p_9xl,
paddingVertical: Padding.p_4xs,
alignSelf: "stretch",
justifyContent: "center",
alignItems: "center",
flex: 1,
},
background: { 
    backgroundColor: Color.white,
    flex: 1},
});

export default RegScreen;
