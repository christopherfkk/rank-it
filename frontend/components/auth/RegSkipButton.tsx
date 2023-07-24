import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";

const RegSkipButton = () => {
  return (
    <Pressable style={styles.skip}>
      <Text style={styles.skipButton}>
        <Text style={styles.skip1}>{`Skip `}</Text>
        <Text style={styles.text}>{`>`}</Text>
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  skip1: {
    fontSize: 12,
  },
  text: {
    fontSize: FontSize.size_sm,
  },
  skipButton: {
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.white,
    textAlign: "center",
  },
  skip: {
    overflow: "hidden",
    flexDirection: "row",
    padding: Padding.p_3xs,
    justifyContent: "flex-end",
  },
});

export default RegSkipButton;
