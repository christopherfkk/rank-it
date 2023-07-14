import React, { memo } from "react";
import { Text, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

type PendingType = {
  style?: StyleProp<ViewStyle>;
};

const Pending = memo(({ style }: PendingType) => {
  return <Text style={[styles.pending, style]}>Pending</Text>;
});

const styles = StyleSheet.create({
  pending: {
    flex: 1,
    fontSize: FontSize.size_5xl,
    letterSpacing: 0.7,
    lineHeight: 29,
    fontFamily: FontFamily.bebasNeueRegular,
    color: Color.crimson_100,
    textAlign: "center",
  },
});

export default Pending;
