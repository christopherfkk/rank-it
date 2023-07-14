import React, { memo } from "react";
import { Text, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

type ReceivedType = {
  style?: StyleProp<ViewStyle>;
};

const Received = memo(({ style }: ReceivedType) => {
  return <Text style={[styles.received, style]}>{`Received `}</Text>;
});

const styles = StyleSheet.create({
  received: {
    flex: 1,
    fontSize: FontSize.size_xl,
    letterSpacing: 1,
    lineHeight: 24,
    fontFamily: FontFamily.bebasNeueRegular,
    color: Color.lightLabelPrimary,
    textAlign: "center",
  },
});

export default Received;
