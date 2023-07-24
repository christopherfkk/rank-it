import React, { memo } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Color, Padding, FontFamily, FontSize } from "../../GlobalStyles";

type ProfileSummaryContainerType = {
  imageIds?: ImageSourcePropType;
  fullName?: string;
  location1?: string;
  skill?: string;
};

const ProfileSummaryContainer = memo(
  ({
    imageIds,
    fullName = "Name",
    location1 = "Location",
    skill = "Skill",
  }: ProfileSummaryContainerType) => {
    return (
      <View style={[styles.profileSummary, styles.questionFlexBox]}>
        <View style={styles.profileFlexBox}>
          <ImageBackground
            style={styles.memberPhotoIcon}
            resizeMode="cover"
            source={imageIds}
          />
        </View>
        <View style={[styles.profile1, styles.profileFlexBox]}>
          <View style={[styles.bottomBar, styles.bottomBarFlexBox]}>
            <Text style={styles.fullName}>{fullName}</Text>
            <View style={[styles.question, styles.questionFlexBox]}>
              <View style={[styles.locationWrapper, styles.bottomBarFlexBox]}>
                <Text style={[styles.location, styles.locationTypo]}>
                  {location1}
                </Text>
              </View>
            </View>
            <View style={[styles.question, styles.questionFlexBox]}>
              <View style={[styles.locationWrapper, styles.bottomBarFlexBox]}>
                <Text style={[styles.location1, styles.locationTypo]}>
                  {skill}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  questionFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  profileFlexBox: {
    paddingVertical: Padding.p_3xs,
    height: 87,
    paddingHorizontal: Padding.p_mini,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  bottomBarFlexBox: {
    paddingVertical: Padding.p_0,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  locationTypo: {
    fontFamily: FontFamily.almaraiLight,
    fontWeight: "300",
    lineHeight: 14,
    fontSize: FontSize.size_2xs,
    color: Color.gray_300,
  },
  memberPhotoIcon: {
    borderRadius: 211,
    width: 77,
    height: 77,
  },
  fullName: {
    fontSize: FontSize.size_11xl,
    lineHeight: 30,
    fontFamily: FontFamily.bebasNeueRegular,
    textAlign: "left",
    color: Color.gray_300,
  },
  location: {
    textAlign: "left",
  },
  locationWrapper: {
    width: 118,
    paddingHorizontal: Padding.p_8xs,
  },
  question: {
    flexDirection: "row",
  },
  location1: {
    textAlign: "center",
  },
  bottomBar: {
    flex: 1,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_0,
  },
  profile1: {
    marginTop: 5,
  },
  profileSummary: {
    height: 229,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_25xl,
    paddingBottom: Padding.p_8xs,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default ProfileSummaryContainer;
