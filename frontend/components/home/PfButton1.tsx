import React, { memo } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../../GlobalStyles";

const PfButton1 = memo(() => {
  return (
    <Pressable style={styles.pfButton}>
      <Text style={styles.button}>
        submit
      </Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  button: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.bebasNeueRegular,
    color: Color.white,
    textAlign: "center",
  },
  pfButton: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.crimson_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 134,
    height: 32,
    padding: Padding.p_mini,
    alignItems: "center", // Align the content (Text) horizontally center.
    justifyContent: "center", // Align the content (Text) vertically center.
    alignSelf: "center", // Center the Pressable (container) itself horizontally.
    marginTop: 6,
  },
});

export default PfButton1;
