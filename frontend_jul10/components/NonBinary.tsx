import React, { memo } from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontFamily, Color, Border, Padding } from "../GlobalStyles";

type NonBinaryType = {
  style?: StyleProp<ViewStyle>;
};

const NonBinary = memo(({ style }: NonBinaryType) => {
  return (
    <TouchableOpacity
      style={[styles.nonBinary, style]}
      activeOpacity={0.2}
      onPress={() => {}}
    >
      <Text style={styles.nonBinary1}>Non-binary</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  nonBinary1: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.lightLabelPrimary,
    textAlign: "left",
  },
  nonBinary: {
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

export default NonBinary;
