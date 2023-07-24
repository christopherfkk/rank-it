import React, { useMemo } from "react";
import { Text, StyleSheet } from "react-native";
import { FontFamily, Color } from "../../GlobalStyles";

type RegTitleType = {
  regtitle?: string;

  /** Style props */
  whatsYourFirstAndLastNameMarginTop?: number | string;
  whatsYourFirstAndLastNameAlignSelf?: string;
  whatsYourFirstAndLastNameDisplay?: string;
  whatsYourFirstAndLastNameAlignItems?: string;
  whatsYourFirstAndLastNameJustifyContent?: string;
  whatsYourFirstAndLastNameWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const RegTitle = ({
  regtitle = "Question Title",
  whatsYourFirstAndLastNameMarginTop,
  whatsYourFirstAndLastNameAlignSelf,
  whatsYourFirstAndLastNameDisplay,
  whatsYourFirstAndLastNameAlignItems,
  whatsYourFirstAndLastNameJustifyContent,
  whatsYourFirstAndLastNameWidth,
}: RegTitleType) => {
  const whatsYourFirstStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", whatsYourFirstAndLastNameMarginTop),
      ...getStyleValue("alignSelf", whatsYourFirstAndLastNameAlignSelf),
      ...getStyleValue("display", whatsYourFirstAndLastNameDisplay),
      ...getStyleValue("alignItems", whatsYourFirstAndLastNameAlignItems),
      ...getStyleValue(
        "justifyContent",
        whatsYourFirstAndLastNameJustifyContent
      ),
      ...getStyleValue("width", whatsYourFirstAndLastNameWidth),
    };
  }, [
    whatsYourFirstAndLastNameMarginTop,
    whatsYourFirstAndLastNameAlignSelf,
    whatsYourFirstAndLastNameDisplay,
    whatsYourFirstAndLastNameAlignItems,
    whatsYourFirstAndLastNameJustifyContent,
    whatsYourFirstAndLastNameWidth,
  ]);

  return (
    <Text style={[styles.whatsYourFirst, whatsYourFirstStyle]}>{regtitle}</Text>
  );
};

const styles = StyleSheet.create({
  whatsYourFirst: {
    alignSelf: "stretch",
    fontSize: 29,
    fontFamily: FontFamily.bebasNeueRegular,
    color: Color.lavenderblush,
    textAlign: "center",
  },
});

export default RegTitle;
