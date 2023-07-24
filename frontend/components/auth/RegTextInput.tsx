import React, { useMemo } from "react";
import { TextInput, StyleSheet } from "react-native";
import { Border, Padding, FontFamily } from "../../GlobalStyles";

type RegTextInputType = {
  /** Style props */
  locationFlexDirection?: string;
  locationAlignItems?: string;
  locationJustifyContent?: string;
  locationFontFamily?: string;
  locationBorderStyle?: string;
  locationBorderColor?: string;
  locationBorderWidth?: number;
  locationFontWeight?: string;
  locationHeight?: number | string;
  locationBackgroundColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const RegTextInput = ({
  locationFlexDirection,
  locationAlignItems,
  locationJustifyContent,
  locationFontFamily,
  locationBorderStyle,
  locationBorderColor,
  locationBorderWidth,
  locationFontWeight,
  locationHeight,
  locationBackgroundColor,
}: RegTextInputType) => {
  const locationStyle = useMemo(() => {
    return {
      ...getStyleValue("flexDirection", locationFlexDirection),
      ...getStyleValue("alignItems", locationAlignItems),
      ...getStyleValue("justifyContent", locationJustifyContent),
      ...getStyleValue("fontFamily", locationFontFamily),
      ...getStyleValue("borderStyle", locationBorderStyle),
      ...getStyleValue("borderColor", locationBorderColor),
      ...getStyleValue("borderWidth", locationBorderWidth),
      ...getStyleValue("fontWeight", locationFontWeight),
      ...getStyleValue("height", locationHeight),
      ...getStyleValue("backgroundColor", locationBackgroundColor),
    };
  }, [
    locationFlexDirection,
    locationAlignItems,
    locationJustifyContent,
    locationFontFamily,
    locationBorderStyle,
    locationBorderColor,
    locationBorderWidth,
    locationFontWeight,
    locationHeight,
    locationBackgroundColor,
  ]);

  return (
    <TextInput
      style={[styles.location, locationStyle]}
      placeholder="Enter your first name"
      placeholderTextColor="#737373"
    />
  );
};

const styles = StyleSheet.create({
  location: {
    alignSelf: "stretch",
    borderRadius: Border.br_11xs,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 33,
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 8,
    alignItems: "center",
    fontFamily: FontFamily.manropeRegular,
    fontSize: 12,
    marginTop: 18,
  },
});

export default RegTextInput;
