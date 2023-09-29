import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../../GlobalStyles";

type RegButtonType = {
  button: string;
  textColor?: string;
  backgroundColor?: string;
  onPress?: () => void; // Add the onPress prop here
};

const ChallengeButton = ({
  onPress,
  button,
  textColor = Color.crimson_200,  // default text color
  backgroundColor = Color.white,  // default background color
}: RegButtonType) => {

  return (
    <Pressable
      style={[styles.pfButton, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.button, { color: textColor }]}>
        {button}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    fontSize: 15,
    fontFamily: FontFamily.bebasNeueRegular,
    color: Color.white,
    textAlign: "center",
  },
  pfButton: {
    flex: 1,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.crimson_100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChallengeButton;
