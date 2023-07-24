import * as React from "react";
import { TextInput, StyleSheet, ImageBackground, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegTitle from "../../components/auth/RegTitle";
import RegText from "../../components/auth/RegText";
import RegButton from "../../components/auth/RegButton";
import { Padding, Border, Color } from "../../GlobalStyles";

// add asyncstorage registered = true
const PfStart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pfStart}>
      <ImageBackground
        style={styles.signUpBody}
        resizeMode="cover"
        source={require("../../assets/signupbody2.png")}
      >
        <RegTitle regtitle="Welcome" />
        <RegText youWontBeAbleToChangeThis="We're thrilled to welcome you aboard and play badminton with you! " />
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
        <RegButton
          onPfButtonPress={() => navigation.navigate("PfLocation")}
          button="Next"
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  textboxShadowBox: {
    marginTop: 18,
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
    alignSelf: "stretch",
    justifyContent: "center",
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
  pfStart: {
    backgroundColor: Color.white,
    width: "100%",
    height: 655,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default PfStart;
