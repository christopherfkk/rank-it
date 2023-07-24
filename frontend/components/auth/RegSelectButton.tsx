import React, { useMemo, memo } from "react";
import { Pressable, Text, StyleSheet, TouchableHighlight } from "react-native";
import { FontFamily, Color, Border, Padding } from "../../GlobalStyles";

type RegSelectButtonType = {
  male?: string;

  /** Style props */
  genderOpacity?: number;

  /** Action props */
  onGenderPress?: () => void;
  onEnterYourFirstnameContainPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const RegSelectButton = memo(
  ({
    onGenderPress,
    genderOpacity,
    onEnterYourFirstnameContainPress,
    male,
  }: RegSelectButtonType) => {
    const genderStyle = useMemo(() => {
      return {
        ...getStyleValue("opacity", genderOpacity),
      };
    }, [genderOpacity]);

    return (
      <TouchableHighlight
        style={[styles.gender, genderStyle]}
        underlayColor="#fff2f2"
        onPress={onGenderPress}
      >
        <TouchableHighlight
          underlayColor="#000"
          onPress={onEnterYourFirstnameContainPress}
        >
          <Text style={styles.male}>{male}</Text>
        </TouchableHighlight>
      </TouchableHighlight>
    );
  }
);

const styles = StyleSheet.create({
  male: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.lavenderblush,
    textAlign: "center",
  },
  gender: {
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
    borderStyle: "solid",
    borderColor: "#fff2f2",
    borderWidth: 1,
    height: 33,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 8,
    justifyContent: "center",
    marginTop: 18,
  },
});

export default RegSelectButton;
