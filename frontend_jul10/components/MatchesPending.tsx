import React, { memo } from "react";
import {
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  Pressable,
  View,
} from "react-native";
import { Image } from "expo-image";
import Upcoming from "./Upcoming";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

type MatchesPendingType = {
  style?: StyleProp<ViewStyle>;
};

const MatchesPending = memo(({ style }: MatchesPendingType) => {
  return (
    <View style={[styles.matchesPending, style, styles.matchesFlexBox]}>
      <View style={[styles.matchesMenu, styles.matchesFlexBox]}>
        <View style={[styles.matchesTabs, styles.matchesFlexBox]}>
          <Upcoming />
          <Text style={styles.received} />
          <Text style={styles.received} />
        </View>
        <View style={[styles.profile, styles.navFlexBox]}>
          <Pressable style={styles.profileLayout}>
            <View style={[styles.profile2, styles.profile2SpaceBlock]}>
              <Image
                style={styles.memberPhotoIcon}
                contentFit="cover"
                source={require("../assets/memberphoto13.png")}
              />
              <View style={[styles.bottomBar, styles.bottomBarSpaceBlock]}>
                <Text style={[styles.fullName, styles.fullNameFlexBox]}>
                  Jenny Tang
                </Text>
                <View style={[styles.question, styles.questionFlexBox]}>
                  <Image
                    style={[styles.markerPin01Icon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/markerpin014.png")}
                  />
                  <View
                    style={[styles.locationWrapper, styles.bottomBarSpaceBlock]}
                  >
                    <Text style={[styles.location, styles.fullNameFlexBox]}>
                      Shibuya, Tokyo
                    </Text>
                  </View>
                </View>
                <View style={styles.questionFlexBox}>
                  <Image
                    style={styles.iconLayout1}
                    contentFit="cover"
                    source={require("../assets/vector5.png")}
                  />
                  <View
                    style={[styles.locationWrapper, styles.bottomBarSpaceBlock]}
                  >
                    <Text style={[styles.location, styles.fullNameFlexBox]}>
                      Expert
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
          <Pressable style={[styles.profile3, styles.profileLayout]}>
            <View style={[styles.profile2, styles.profile2SpaceBlock]}>
              <Image
                style={styles.memberPhotoIcon}
                contentFit="cover"
                source={require("../assets/memberphoto13.png")}
              />
              <View style={[styles.bottomBar, styles.bottomBarSpaceBlock]}>
                <Text style={[styles.fullName, styles.fullNameFlexBox]}>
                  Tan Moose
                </Text>
                <View style={[styles.question, styles.questionFlexBox]}>
                  <Image
                    style={[styles.markerPin01Icon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/markerpin014.png")}
                  />
                  <View
                    style={[styles.locationWrapper, styles.bottomBarSpaceBlock]}
                  >
                    <Text style={[styles.location, styles.fullNameFlexBox]}>
                      Shinjuku, Tokyo
                    </Text>
                  </View>
                </View>
                <View style={styles.questionFlexBox}>
                  <Image
                    style={styles.iconLayout1}
                    contentFit="cover"
                    source={require("../assets/vector5.png")}
                  />
                  <View
                    style={[styles.locationWrapper, styles.bottomBarSpaceBlock]}
                  >
                    <Text style={[styles.location, styles.fullNameFlexBox]}>
                      Intermediate
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
          <Pressable style={[styles.profile3, styles.profileLayout]}>
            <View style={[styles.profile2, styles.profile2SpaceBlock]}>
              <Image
                style={styles.memberPhotoIcon}
                contentFit="cover"
                source={require("../assets/memberphoto13.png")}
              />
              <View style={[styles.bottomBar, styles.bottomBarSpaceBlock]}>
                <Text style={[styles.fullName, styles.fullNameFlexBox]}>
                  Sona Hagihara
                </Text>
                <View style={[styles.question, styles.questionFlexBox]}>
                  <Image
                    style={[styles.markerPin01Icon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/markerpin014.png")}
                  />
                  <View
                    style={[styles.locationWrapper, styles.bottomBarSpaceBlock]}
                  >
                    <Text style={[styles.location, styles.fullNameFlexBox]}>
                      Shibuya, Tokyo
                    </Text>
                  </View>
                </View>
                <View style={styles.questionFlexBox}>
                  <Image
                    style={styles.iconLayout1}
                    contentFit="cover"
                    source={require("../assets/vector5.png")}
                  />
                  <View
                    style={[styles.locationWrapper, styles.bottomBarSpaceBlock]}
                  >
                    <Text style={[styles.location, styles.fullNameFlexBox]}>
                      Beginner
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={[styles.bottomBar3, styles.profile2Border]}>
        <View
          style={[styles.menuActionopenpdfhttpsw, styles.bottomBarSpaceBlock]}
        >
          <View style={[styles.rankingNav, styles.navFlexBox]}>
            <Image
              style={[styles.rankingIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rankingicon2.png")}
            />
            <Text style={[styles.rankingText, styles.textTypo]}>Ranking</Text>
          </View>
          <View style={[styles.matchesNav, styles.navFlexBox]}>
            <Image
              style={[styles.rankingIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/mathcesicon2.png")}
            />
            <Text style={[styles.mathesText, styles.textTypo]}>Matches</Text>
          </View>
          <View style={[styles.matchesNav, styles.navFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/messagetext3.png")}
            />
            <Text style={[styles.rankingText, styles.textTypo]}>Events</Text>
          </View>
          <View style={[styles.matchesNav, styles.navFlexBox]}>
            <Image
              style={[styles.memberPhotoIcon3, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/memberphoto16.png")}
            />
            <Text style={[styles.rankingText, styles.textTypo]}>Profile</Text>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  matchesFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  navFlexBox: {
    padding: Padding.p_3xs,
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  profile2SpaceBlock: {
    paddingHorizontal: Padding.p_mini,
    alignSelf: "stretch",
  },
  bottomBarSpaceBlock: {
    paddingVertical: Padding.p_0,
    justifyContent: "center",
    overflow: "hidden",
  },
  fullNameFlexBox: {
    textAlign: "left",
    color: Color.gray_300,
  },
  questionFlexBox: {
    marginTop: 1,
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
  },
  iconLayout1: {
    height: 10,
    width: 10,
  },
  profileLayout: {
    height: 100,
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_mini,
    alignSelf: "stretch",
  },
  profile2Border: {
    borderColor: "#737373",
    borderStyle: "solid",
    overflow: "hidden",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  textTypo: {
    height: 15,
    textAlign: "center",
    fontFamily: FontFamily.bebasNeueRegular,
    lineHeight: 13,
    letterSpacing: 1,
    fontSize: FontSize.size_3xs,
    marginTop: 1,
  },
  received: {
    display: "none",
    marginTop: -8,
  },
  matchesTabs: {
    height: 65,
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  memberPhotoIcon: {
    borderRadius: 211,
    width: 50,
    height: 50,
  },
  fullName: {
    fontSize: FontSize.size_xl,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
  },
  markerPin01Icon: {
    overflow: "hidden",
  },
  location: {
    fontSize: FontSize.size_2xs,
    lineHeight: 14,
    fontWeight: "300",
    fontFamily: FontFamily.almaraiLight,
  },
  locationWrapper: {
    width: 118,
    paddingHorizontal: Padding.p_8xs,
  },
  question: {
    justifyContent: "center",
  },
  bottomBar: {
    paddingHorizontal: Padding.p_mini,
    alignSelf: "stretch",
  },
  profile2: {
    borderWidth: 1,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderColor: "#737373",
    borderStyle: "solid",
    overflow: "hidden",
    borderRadius: Border.br_mini,
    paddingHorizontal: Padding.p_mini,
  },
  profile3: {
    marginTop: 15,
  },
  profile: {
    backgroundColor: Color.white,
  },
  matchesMenu: {
    flex: 1,
    alignItems: "center",
  },
  rankingIcon: {
    overflow: "hidden",
  },
  rankingText: {
    color: Color.lightLabelPrimary,
    width: 40,
  },
  rankingNav: {
    justifyContent: "center",
    overflow: "hidden",
  },
  mathesText: {
    color: Color.crimson_100,
    width: 45,
  },
  matchesNav: {
    marginLeft: 17,
    justifyContent: "center",
    overflow: "hidden",
  },
  memberPhotoIcon3: {
    borderRadius: Border.br_131xl,
  },
  menuActionopenpdfhttpsw: {
    borderRadius: Border.br_8xs,
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
    paddingVertical: Padding.p_0,
  },
  bottomBar3: {
    borderTopWidth: 0.5,
    height: 54,
    justifyContent: "flex-end",
    backgroundColor: Color.white,
    alignItems: "center",
    alignSelf: "stretch",
  },
  matchesPending: {
    flex: 1,
    alignItems: "center",
  },
});

export default MatchesPending;
