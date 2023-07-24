import React, { memo } from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";

type RankingNavType = {
  style?: StyleProp<ViewStyle>;
};

const RankingNav = memo(({ style }: RankingNavType) => {
  return (
    <View style={[styles.rankingNav, style]}>
      <Image
        style={styles.rankingIcon}
        contentFit="cover"
        source={require("../../assets/rankingicon.png")}
      />
      <Text style={styles.rankingText}>Ranking</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  rankingIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  rankingText: {
    fontSize: FontSize.size_3xs,
    letterSpacing: 1,
    lineHeight: 13,
    fontFamily: FontFamily.bebasNeueRegular,
    color: Color.lightLabelPrimary,
    textAlign: "center",
    width: 40,
    height: 15,
    marginTop: 1,
  },
  rankingNav: {
    alignSelf: "stretch",
    flex: 1,
    padding: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default RankingNav;
