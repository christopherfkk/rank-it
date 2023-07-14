import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ModalTitle = () => {
  return <Text style={styles.challenge}>challenge</Text>;
};

const styles = StyleSheet.create({
  challenge: {
    alignSelf: "stretch",
    fontSize: FontSize.size_31xl,
    letterSpacing: 1.5,
    fontFamily: FontFamily.bebasNeueRegular,
    color: Color.gray_200,
    textAlign: "center",
  },
});

export default ModalTitle;
