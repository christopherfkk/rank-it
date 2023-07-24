import React, { memo } from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";

type MatchesNavType = {
  style?: StyleProp<ViewStyle>;
};

const MatchesNav = memo(({ style }: MatchesNavType) => {
  return (
    <View style={[styles.matchesNav, style]}>
      <Image
        style={styles.mathcesIcon}
        contentFit="cover"
        source={require("../../assets/mathcesicon.png")}
      />
      <Text style={styles.mathesText}>Matches</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  mathcesIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  mathesText: {
    fontSize: FontSize.size_3xs,
    letterSpacing: 1,
    lineHeight: 13,
    fontFamily: FontFamily.bebasNeueRegular,
    color: Color.crimson_100,
    textAlign: "center",
    width: 45,
    height: 15,
    marginTop: 1,
  },
  matchesNav: {
    alignSelf: "stretch",
    flex: 1,
    padding: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default MatchesNav;
