import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { theme } from "../../../theme/GlobalStyles";

const SkipButton = () => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.skip}>
        Skip
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  skip: {
    fontWeight: "500",
    textAlign: "center",
    fontSize: 12,
  },
  button: {
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "flex-end",

  },
});

export default SkipButton;
