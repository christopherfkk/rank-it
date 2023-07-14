import React, { useMemo } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

type RegButtonType = {
  button?: string;

  /** Style props */
  pfButtonWidth?: number | string;
  pfButtonHeight?: number | string;
  pfButtonMarginTop?: number | string;
  pfButtonFlex?: number;
  pfButtonMarginLeft?: number | string;

  /** Action props */
  onPfButtonPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const RegButton = ({
  onPfButtonPress,
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
      onPress={onPfButtonPress}
    >
      <Text style={styles.button} numberOfLines={3}>
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
    color: Color.crimson_200,
    textAlign: "center",
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
    elevation: 4,
    shadowOpacity: 1,
    width: 125,
    height: 29,
    flexDirection: "row",
    padding: Padding.p_mini,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
  },
});

export default RegButton;
