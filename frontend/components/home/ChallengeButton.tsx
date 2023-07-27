import React, { useMemo } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../../GlobalStyles";

type RegButtonType = {
  pfButtonWidth: number;
  pfButtonHeight: number;
  button: string;
  pfButtonMarginTop: string;
  pfButtonFlex: number;
  pfButtonMarginLeft: number;
  onPress?: () => void; // Add the onPress prop here
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ChallengeButton = ({
  onPress,
  pfButtonWidth,
  pfButtonHeight,
  button,
  pfButtonMarginTop,
  pfButtonFlex,
  pfButtonMarginLeft,
}: RegButtonType) => {
  const pfButtonStyle = useMemo(() => {
    return {
      ...getStyleValue("width", pfButtonWidth),
      ...getStyleValue("height", pfButtonHeight),
      ...getStyleValue("marginTop", pfButtonMarginTop),
      ...getStyleValue("flex", pfButtonFlex),
      ...getStyleValue("marginLeft", pfButtonMarginLeft),
    };
  }, [
    pfButtonWidth,
    pfButtonHeight,
    pfButtonMarginTop,
    pfButtonFlex,
    pfButtonMarginLeft,
  ]);

  return (
    <Pressable
      style={[styles.pfButton, pfButtonStyle]}
      onPress={onPress}
    >
      <Text style={styles.button} numberOfLines={3}>
        {button}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.bebasNeueRegular,
    color: Color.crimson_200,
    textAlign: "center",
    width: "100%",
  },
  pfButton: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChallengeButton;
