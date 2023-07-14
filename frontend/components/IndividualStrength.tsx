import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

type IndividualStrengthType = {
  image13?: ImageSourcePropType;
  agility?: string;

  /** Style props */
  individualStrengthBackgroundColor?: string;
  individualStrengthMarginLeft?: number | string;
  agilityFontWeight?: string;
  agilityFontFamily?: string;
  agilityColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const IndividualStrength = memo(
  ({
    individualStrengthBackgroundColor,
    individualStrengthMarginLeft,
    image13,
    agility,
    agilityFontWeight,
    agilityFontFamily,
    agilityColor,
  }: IndividualStrengthType) => {
    const individualStrengthStyle = useMemo(() => {
      return {
        ...getStyleValue("backgroundColor", individualStrengthBackgroundColor),
        ...getStyleValue("marginLeft", individualStrengthMarginLeft),
      };
    }, [individualStrengthBackgroundColor, individualStrengthMarginLeft]);

    const agilityStyle = useMemo(() => {
      return {
        ...getStyleValue("fontWeight", agilityFontWeight),
        ...getStyleValue("fontFamily", agilityFontFamily),
        ...getStyleValue("color", agilityColor),
      };
    }, [agilityFontWeight, agilityFontFamily, agilityColor]);

    return (
      <View
        style={[
          styles.individualStrength,
          styles.agilityFlexBox,
          individualStrengthStyle,
        ]}
      >
        <Image style={styles.image13Icon} contentFit="cover" source={image13} />
        <Text style={[styles.agility, styles.agilityFlexBox, agilityStyle]}>
          {agility}
        </Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  agilityFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  image13Icon: {
    width: 20,
    height: 20,
  },
  agility: {
    fontSize: FontSize.size_xs_5,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.lightLabelPrimary,
    textAlign: "center",
    display: "flex",
  },
  individualStrength: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.lavenderblush,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_0,
  },
});

export default IndividualStrength;
