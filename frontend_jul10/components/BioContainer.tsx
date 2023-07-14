import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Padding, FontSize } from "../GlobalStyles";

type BioContainerType = {
  bioText?: string;
  matchLoggedText?: string;
  rankingText?: string;
  sportsmanshiprating?: string;
  availability?: string;
  strength?: string;
  competitiveness?: string;

  /** Style props */
  frame8652Height?: number | string;
  propWidth?: number | string;
  propAlignSelf?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BioContainer = memo(
  ({
    bioText,
    matchLoggedText,
    rankingText,
    frame8652Height,
    propWidth,
    propAlignSelf,
    sportsmanshiprating = "Star Rating: 4.5 ",
    availability = "Monday 16-17, 18-19Tuesday 15-16Wednesday 11-12Thursday 13-14Friday 18-19Saturday 19-20Sunday 11-12, 13-14",
    strength = "Agility, Cardio, Reaction Time",
    competitiveness = "High",
  }: BioContainerType) => {
    const personalStyle = useMemo(() => {
      return {
        ...getStyleValue("height", frame8652Height),
      };
    }, [frame8652Height]);

    const analyticsStyle = useMemo(() => {
      return {
        ...getStyleValue("width", propWidth),
        ...getStyleValue("alignSelf", propAlignSelf),
      };
    }, [propWidth, propAlignSelf]);

    return (
      <View style={[styles.personal, personalStyle]}>
        <View style={styles.question}>
          <Text style={[styles.bio, styles.bioFlexBox]}>Bio</Text>
          <Text style={[styles.editBio, styles.editBioTypo]}>{bioText}</Text>
        </View>
        <View style={[styles.analytics, styles.analyticsBorder]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <View style={styles.locationParent}>
            <Text style={[styles.location, styles.bioFlexBox]}>
              Sportsmanship
            </Text>
            <Text style={[styles.location1, styles.editBioTypo]}>
              {sportsmanshiprating}
            </Text>
          </View>
        </View>
        <View style={[styles.analytics, styles.analyticsBorder]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/star1.png")}
          />
          <View style={styles.locationParent}>
            <Text style={[styles.location, styles.bioFlexBox]}>
              Matches Played
            </Text>
            <Text style={[styles.location1, styles.editBioTypo]}>
              {matchLoggedText}
            </Text>
          </View>
        </View>
        <View style={[styles.analytics, styles.analyticsBorder]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/star2.png")}
          />
          <View style={styles.locationParent}>
            <Text style={[styles.location, styles.bioFlexBox]}>
              Highest Rank Attained (City)
            </Text>
            <Text style={[styles.location1, styles.editBioTypo]}>
              {rankingText}
            </Text>
          </View>
        </View>
        <View style={[styles.analytics, styles.analyticsBorder]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/star3.png")}
          />
          <View style={styles.locationParent}>
            <Text style={[styles.location, styles.bioFlexBox]}>
              Match Competitiveness
            </Text>
            <Text style={[styles.location1, styles.editBioTypo]}>
              {competitiveness}
            </Text>
          </View>
        </View>
        <View style={[styles.analytics, styles.analyticsBorder]}>
          <Image
            style={[styles.iconParkOutlinemuscle, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/star4.png")}
          />
          <View style={styles.locationParent}>
            <Text style={[styles.location, styles.bioFlexBox]}>Strength</Text>
            <Text style={[styles.location1, styles.editBioTypo]}>
              {strength}
            </Text>
          </View>
        </View>
        <View
          style={[styles.analytics5, styles.analyticsBorder, analyticsStyle]}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/star5.png")}
          />
          <View style={styles.locationParent}>
            <Text style={[styles.location, styles.bioFlexBox]}>
              Availability
            </Text>
            <Text style={[styles.location1, styles.editBioTypo]}>
              {availability}
            </Text>
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  bioFlexBox: {
    textAlign: "left",
    color: Color.gray_300,
  },
  editBioTypo: {
    fontFamily: FontFamily.manropeRegular,
    textAlign: "left",
    color: Color.gray_300,
  },
  analyticsBorder: {
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_8xs,
    justifyContent: "center",
    overflow: "hidden",
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: "#bababa",
    borderStyle: "solid",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  bio: {
    fontSize: FontSize.size_xl,
    lineHeight: 26,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    alignSelf: "stretch",
  },
  editBio: {
    fontSize: FontSize.size_smi,
    lineHeight: 17,
    display: "flex",
    flex: 1,
    fontFamily: FontFamily.manropeRegular,
    alignItems: "center",
    alignSelf: "stretch",
  },
  question: {
    height: 125,
    padding: Padding.p_3xs,
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: "#bababa",
    borderStyle: "solid",
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: Color.white,
    alignSelf: "stretch",
  },
  location: {
    fontSize: FontSize.size_2xs,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemibold,
  },
  location1: {
    fontSize: FontSize.size_5xs,
    lineHeight: 10,
  },
  locationParent: {
    paddingVertical: Padding.p_0,
    marginLeft: 3,
    paddingHorizontal: Padding.p_8xs,
    flex: 1,
    justifyContent: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  analytics: {
    alignSelf: "stretch",
  },
  iconParkOutlinemuscle: {
    overflow: "hidden",
    height: 20,
    width: 20,
  },
  analytics5: {
    width: 332,
  },
  personal: {
    alignItems: "center",
    backgroundColor: Color.white,
    alignSelf: "stretch",
  },
});

export default BioContainer;
