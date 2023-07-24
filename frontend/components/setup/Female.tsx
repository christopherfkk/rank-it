import React, { memo } from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontFamily, Color, Border, Padding } from "../../GlobalStyles";

type FemaleType = {
  style?: StyleProp<ViewStyle>;
};

const Female = memo(({ style }: FemaleType) => {
  return (
    <TouchableOpacity
      style={[styles.female, style]}
      activeOpacity={0.2}
      onPress={() => {}}
    >
      <Text style={styles.female1}>Female</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  female1: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.lightLabelPrimary,
    textAlign: "left",
  },
  female: {
    alignSelf: "stretch",
    borderRadius: Border.br_mini,
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
    borderColor: "#000",
    borderWidth: 1,
    height: 33,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 8,
    justifyContent: "center",
  },
});

export default Female;