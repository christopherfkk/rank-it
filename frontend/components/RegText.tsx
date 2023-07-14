import React, { useMemo } from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

type RegTextType = {
  youWontBeAbleToChangeThis?: string;

  /** Style props */
  youWontBeAbleToChangeThisFontSize?: number;
  youWontBeAbleToChangeThisFontFamily?: string;
  youWontBeAbleToChangeThisColor?: string;
  youWontBeAbleToChangeThisTextAlign?: string;
  youWontBeAbleToChangeThisLineHeight?: number;
  youWontBeAbleToChangeThisFontWeight?: string;
  youWontBeAbleToChangeThisAlignSelf?: string;
  youWontBeAbleToChangeThisWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const RegText = ({
  youWontBeAbleToChangeThis,
  youWontBeAbleToChangeThisFontSize,
  youWontBeAbleToChangeThisFontFamily,
  youWontBeAbleToChangeThisColor,
  youWontBeAbleToChangeThisTextAlign,
  youWontBeAbleToChangeThisLineHeight,
  youWontBeAbleToChangeThisFontWeight,
  youWontBeAbleToChangeThisAlignSelf,
  youWontBeAbleToChangeThisWidth,
}: RegTextType) => {
  const youWontBeStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", youWontBeAbleToChangeThisFontSize),
      ...getStyleValue("fontFamily", youWontBeAbleToChangeThisFontFamily),
      ...getStyleValue("color", youWontBeAbleToChangeThisColor),
      ...getStyleValue("textAlign", youWontBeAbleToChangeThisTextAlign),
      ...getStyleValue("lineHeight", youWontBeAbleToChangeThisLineHeight),
      ...getStyleValue("fontWeight", youWontBeAbleToChangeThisFontWeight),
      ...getStyleValue("alignSelf", youWontBeAbleToChangeThisAlignSelf),
      ...getStyleValue("width", youWontBeAbleToChangeThisWidth),
    };
  }, [
    youWontBeAbleToChangeThisFontSize,
    youWontBeAbleToChangeThisFontFamily,
    youWontBeAbleToChangeThisColor,
    youWontBeAbleToChangeThisTextAlign,
    youWontBeAbleToChangeThisLineHeight,
    youWontBeAbleToChangeThisFontWeight,
    youWontBeAbleToChangeThisAlignSelf,
    youWontBeAbleToChangeThisWidth,
  ]);

  return (
    <Text style={[styles.youWontBe, youWontBeStyle]}>
      {youWontBeAbleToChangeThis}
    </Text>
  );
};

const styles = StyleSheet.create({
  youWontBe: {
    alignSelf: "stretch",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.almaraiRegular,
    color: Color.lavenderblush,
    textAlign: "center",
    marginTop: 18,
  },
});

export default RegText;
