import React, { memo } from "react";
import { Text, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

type UpcomingType = {
  style?: StyleProp<ViewStyle>;
};

const Upcoming = memo(({ style }: UpcomingType) => {
  return <Text style={[styles.upcoming, style]}>Upcoming</Text>;
});

const styles = StyleSheet.create({
  upcoming: {
    flex: 1,
    fontSize: FontSize.size_xl,
    letterSpacing: 0.6,
    lineHeight: 24,
    fontFamily: FontFamily.bebasNeueRegular,
    color: Color.lightLabelPrimary,
    textAlign: "center",
  },
});

export default Upcoming;
