import React, { useMemo, memo } from "react";
import { TextInput, StyleSheet } from "react-native";
import { Color, Padding, FontFamily, FontSize } from "../../GlobalStyles";

type EditProfileBoxType = {
  /** Style props */
  questionFlex?: number | string;
  questionHeight?: number | string;
  questionBackgroundColor?: string;
  questionElevation?: number;
  questionBorderStyle?: string;
  questionBorderColor?: string;
  questionBorderWidth?: number;
  questionOverflow?: string;
  questionFlexDirection?: string;
  questionPaddingHorizontal?: number | string;
  questionPaddingVertical?: number | string;
  questionAlignItems?: string;
  questionJustifyContent?: string;
  questionPosition?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const EditProfileBox = memo(
  ({
    questionFlex,
    questionHeight,
    questionBackgroundColor,
    questionElevation,
    questionBorderStyle,
    questionBorderColor,
    questionBorderWidth,
    questionOverflow,
    questionFlexDirection,
    questionPaddingHorizontal,
    questionPaddingVertical,
    questionAlignItems,
    questionJustifyContent,
    questionPosition,
  }: EditProfileBoxType) => {
    const questionStyle = useMemo(() => {
      return {
        ...getStyleValue("flex", questionFlex),
        ...getStyleValue("height", questionHeight),
        ...getStyleValue("backgroundColor", questionBackgroundColor),
        ...getStyleValue("elevation", questionElevation),
        ...getStyleValue("borderStyle", questionBorderStyle),
        ...getStyleValue("borderColor", questionBorderColor),
        ...getStyleValue("borderWidth", questionBorderWidth),
        ...getStyleValue("overflow", questionOverflow),
        ...getStyleValue("flexDirection", questionFlexDirection),
        ...getStyleValue("paddingHorizontal", questionPaddingHorizontal),
        ...getStyleValue("paddingVertical", questionPaddingVertical),
        ...getStyleValue("alignItems", questionAlignItems),
        ...getStyleValue("justifyContent", questionJustifyContent),
        ...getStyleValue("position", questionPosition),
      };
    }, [
      questionFlex,
      questionHeight,
      questionBackgroundColor,
      questionElevation,
      questionBorderStyle,
      questionBorderColor,
      questionBorderWidth,
      questionOverflow,
      questionFlexDirection,
      questionPaddingHorizontal,
      questionPaddingVertical,
      questionAlignItems,
      questionJustifyContent,
      questionPosition,
    ]);

    return (
      <TextInput
        style={[styles.question, questionStyle]}
        placeholder="Last Name"
        placeholderTextColor="#bababa"
      />
    );
  }
);

const styles = StyleSheet.create({
  question: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#b8abab",
    borderWidth: 1,
    overflow: "hidden",
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_0,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: FontFamily.manropeRegular,
    fontSize: FontSize.size_2xs,
  },
});

export default EditProfileBox;
