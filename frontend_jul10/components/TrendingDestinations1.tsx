import React, { memo } from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

type TrendingDestinations1Type = {
  style?: StyleProp<ViewStyle>;
};

const TrendingDestinations1 = memo(({ style }: TrendingDestinations1Type) => {
  return (
    <View style={[styles.trendingDestinations, style]}>
      <Text
        style={[styles.swipeToDeceline, styles.memberClass2FlexBox]}
      >{` Swipe right to accept -->`}</Text>
      <View style={styles.profile}>
        <Image
          style={styles.memberPhotoIcon}
          contentFit="cover"
          source={require("../assets/memberphoto5.png")}
        />
        <View style={styles.bottomBar}>
          <Text style={styles.fullName}>Hugo Siu</Text>
          <Text style={[styles.memberClass, styles.memberTypo]}>
            2:0 last week
          </Text>
          <Text style={styles.memberClass1}>245 matches played</Text>
        </View>
        <View style={styles.bottomBar1}>
          <Text style={[styles.memberClass2, styles.memberTypo]}>#11</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  memberClass2FlexBox: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  memberTypo: {
    color: Color.crimson_100,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  swipeToDeceline: {
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemibold,
    justifyContent: "center",
    alignItems: "center",
    color: Color.lightLabelPrimary,
  },
  memberPhotoIcon: {
    borderRadius: 50,
    width: 77,
    height: 77,
  },
  fullName: {
    fontSize: FontSize.size_xl,
    lineHeight: 26,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.gray_300,
    width: 210,
    height: 27,
    textAlign: "right",
  },
  memberClass: {
    fontSize: FontSize.size_base,
    lineHeight: 19,
    textAlign: "left",
    height: 21,
    display: "none",
    width: 138,
  },
  memberClass1: {
    fontSize: FontSize.size_3xs,
    fontStyle: "italic",
    fontFamily: FontFamily.montserratRegularItalic,
    height: 15,
    textAlign: "right",
    width: 138,
    color: Color.lightLabelPrimary,
  },
  bottomBar: {
    height: 79,
    alignItems: "flex-end",
    display: "none",
    width: 138,
    overflow: "hidden",
    justifyContent: "center",
  },
  memberClass2: {
    fontSize: FontSize.size_5xl,
    lineHeight: 24,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  bottomBar1: {
    width: 57,
    height: 64,
    display: "none",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    backgroundColor: Color.whitesmoke_200,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_0,
    justifyContent: "space-between",
    marginLeft: 14,
    overflow: "hidden",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    borderRadius: Border.br_mini,
  },
  trendingDestinations: {
    backgroundColor: "#d8ffc6",
    width: 315,
    height: 105,
    flexDirection: "row",
    borderRadius: Border.br_mini,
  },
});

export default TrendingDestinations1;
