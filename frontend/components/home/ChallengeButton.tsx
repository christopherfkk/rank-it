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
      <Text style={[styles.button, { color: textColor }]} numberOfLines={3}>
        {button}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.bebasNeueRegular,
    color: Color.white,
    textAlign: "center",
  },
  pfButton: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.crimson_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 134,
    height: 32,
    flexDirection: "row",
    padding: Padding.p_mini,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChallengeButton;
