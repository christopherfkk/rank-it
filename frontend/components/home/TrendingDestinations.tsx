import React, { memo } from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Padding, Border } from "../../GlobalStyles";

type TrendingDestinationsType = {
  style?: StyleProp<ViewStyle>;
};

const TrendingDestinations = memo(({ style }: TrendingDestinationsType) => {
  return (
    <View style={[styles.trendingDestinations, style]}>
      <View style={styles.profileFlexBox1}>
        <View style={[styles.profile, styles.profileFlexBox]}>
          <Image
            style={styles.memberPhotoIcon}
            contentFit="cover"
            source={require("../../assets/memberphoto4.png")}
          />
          <View style={styles.bottomBar}>
            <Text style={styles.fullName}>Jessica Yan</Text>
            <Text style={[styles.memberClass, styles.memberTypo]}>
              Shibuya, Tokyo
            </Text>
            <Text style={[styles.memberClass1, styles.memberTypo]}>Expert</Text>
          </View>
          <View style={[styles.bottomBar1, styles.profileFlexBox]}>
            <Text style={[styles.memberClass2, styles.swipeLeftToFlexBox]}>
              #11
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={[styles.swipeLeftTo, styles.swipeLeftToFlexBox]}
      >{`<- Swipe left to decline`}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  profileFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  memberTypo: {
    fontFamily: FontFamily.almaraiLight,
    fontWeight: "300",
    lineHeight: 14,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    color: Color.gray_300,
    width: 138,
  },
  swipeLeftToFlexBox: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  memberPhotoIcon: {
    borderRadius: 211,
    width: 77,
    height: 77,
    display: "none",
  },
  fullName: {
    fontSize: FontSize.size_xl,
    lineHeight: 26,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    width: 210,
    height: 27,
    textAlign: "left",
    color: Color.gray_300,
  },
  memberClass: {
    height: 21,
  },
  memberClass1: {
    height: 15,
  },
  bottomBar: {
    height: 79,
    justifyContent: "center",
    width: 138,
    overflow: "hidden",
  },
  memberClass2: {
    fontSize: FontSize.size_5xl,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.crimson_100,
    textAlign: "center",
    justifyContent: "center",
  },
  bottomBar1: {
    width: 57,
    height: 64,
    justifyContent: "center",
    display: "none",
  },
  profile: {
    backgroundColor: Color.whitesmoke_200,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_0,
    justifyContent: "space-between",
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    borderRadius: Border.br_mini,
    alignItems: "center",
    overflow: "hidden",
  },
  profileFlexBox1: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  swipeLeftTo: {
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemibold,
    color: Color.lightLabelPrimary,
    marginLeft: 14,
    textAlign: "left",
  },
  trendingDestinations: {
    backgroundColor: "rgba(255, 206, 209, 0.49)",
    width: 319,
    height: 106,
    flexDirection: "row",
    borderRadius: Border.br_mini,
  },
});

export default TrendingDestinations;
