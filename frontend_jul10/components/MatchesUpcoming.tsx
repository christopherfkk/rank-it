import React, { memo } from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  Pressable,
  Text,
  View,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MatchesReceived from "./MatchesReceived";
import Received from "./Received";
import MatchesPending from "./MatchesPending";
import Pending from "./Pending";
import MatchesUpcoming from "MatchesUpcoming";
import Upcoming from "./Upcoming";
import { Image } from "expo-image";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

type MatchesUpcomingType = {
  style?: StyleProp<ViewStyle>;
};

const TopTab = createMaterialTopTabNavigator();
const MatchesUpcoming = memo(({ style }: MatchesUpcomingType) => {
  return (
    <View style={[styles.navFlexBox, style]}>
      <TopTab.Navigator
        style={styles.matchesTabsToptabs}
        screenOptions={{
          tabBarStyle: styles.matchesTabsTopTabstopTabBarContainer,
        }}
      >
        <TopTab.Screen
          name="matches_received"
          component={MatchesReceived}
          options={{
            tabBarLabel: "received",
            tabBarIcon: () => <Received />,
          }}
        />
        <TopTab.Screen
          name="matches_pending"
          component={MatchesPending}
          options={{
            tabBarLabel: "pending",
            tabBarIcon: () => <Pending />,
          }}
        />
        <TopTab.Screen
          name="matches_upcoming"
          component={MatchesUpcoming}
          options={{
            tabBarLabel: "upcoming",
            tabBarIcon: () => <Upcoming />,
          }}
        />
      </TopTab.Navigator>
      <View style={[styles.upcomingMatches, styles.bottomBar3FlexBox]}>
        <Pressable style={styles.upcomingLayout}>
          <View style={[styles.profile, styles.profileSpaceBlock]}>
            <Image
              style={styles.memberPhotoIcon}
              contentFit="cover"
              source={require("../assets/memberphoto13.png")}
            />
            <View style={[styles.bottomBar, styles.bottomBarSpaceBlock]}>
              <Text style={[styles.fullName, styles.fullNameFlexBox]}>
                David Wells
              </Text>
              <View style={[styles.question, styles.questionFlexBox]}>
                <Image
                  style={[styles.markerPin01Icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/markerpin012.png")}
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
                  source={require("../assets/vector4.png")}
                />
                <View
                  style={[styles.locationWrapper, styles.bottomBarSpaceBlock]}
                >
                  <Text style={[styles.location, styles.fullNameFlexBox]}>
                    Expert
                  </Text>
                </View>
              </View>
              <View style={styles.questionFlexBox}>
                <View style={[styles.phoneLight, styles.iconLayout1]}>
                  <Image
                    style={[styles.phoneLightChild, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/vector-189.png")}
                  />
                </View>
                <View
                  style={[styles.locationWrapper, styles.bottomBarSpaceBlock]}
                >
                  <Text style={[styles.location, styles.fullNameFlexBox]}>
                    +1 (415) 490-6893
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Pressable>
        <Pressable style={[styles.upcomingProfile1, styles.upcomingLayout]}>
          <View style={[styles.profile, styles.profileSpaceBlock]}>
            <Image
              style={styles.memberPhotoIcon}
              contentFit="cover"
              source={require("../assets/memberphoto14.png")}
            />
            <View style={[styles.bottomBar, styles.bottomBarSpaceBlock]}>
              <Text style={[styles.fullName, styles.fullNameFlexBox]}>
                Ava Nelson
              </Text>
              <View style={[styles.question, styles.questionFlexBox]}>
                <Image
                  style={[styles.markerPin01Icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/markerpin012.png")}
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
                  source={require("../assets/vector4.png")}
                />
                <View
                  style={[styles.locationWrapper, styles.bottomBarSpaceBlock]}
                >
                  <Text style={[styles.location, styles.fullNameFlexBox]}>
                    Expert
                  </Text>
                </View>
              </View>
              <View style={styles.questionFlexBox}>
                <View style={[styles.phoneLight, styles.iconLayout1]}>
                  <Image
                    style={[styles.phoneLightChild, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/vector-189.png")}
                  />
                </View>
                <View
                  style={[styles.locationWrapper, styles.bottomBarSpaceBlock]}
                >
                  <Text style={[styles.location, styles.fullNameFlexBox]}>
                    +852 6626-0372
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Pressable>
        <Pressable style={[styles.upcomingProfile1, styles.upcomingLayout]}>
          <View style={[styles.profile, styles.profileSpaceBlock]}>
            <Image
              style={styles.memberPhotoIcon}
              contentFit="cover"
              source={require("../assets/memberphoto15.png")}
            />
            <View style={[styles.bottomBar, styles.bottomBarSpaceBlock]}>
              <Text style={[styles.fullName, styles.fullNameFlexBox]}>
                Christopher Fok
              </Text>
              <View style={[styles.question, styles.questionFlexBox]}>
                <Image
                  style={[styles.markerPin01Icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/markerpin012.png")}
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
                  source={require("../assets/vector4.png")}
                />
                <View
                  style={[styles.locationWrapper, styles.bottomBarSpaceBlock]}
                >
                  <Text style={[styles.location, styles.fullNameFlexBox]}>
                    Expert
                  </Text>
                </View>
              </View>
              <View style={styles.questionFlexBox}>
                <View style={[styles.phoneLight, styles.iconLayout1]}>
                  <Image
                    style={[styles.phoneLightChild, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/vector-189.png")}
                  />
                </View>
                <View
                  style={[styles.locationWrapper, styles.bottomBarSpaceBlock]}
                >
                  <Text style={[styles.location, styles.fullNameFlexBox]}>
                    +86 23-2343-2342
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
      <View style={[styles.bottomBar3, styles.profileBorder]}>
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
              source={require("../assets/messagetext2.png")}
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
  matchesTabsToptabs: {
    width: "100%",
  },
  matchesTabsTopTabstopTabBarContainer: {
    backgroundColor: "#fff",
  },
  bottomBar3FlexBox: {
    backgroundColor: Color.white,
    alignItems: "center",
    alignSelf: "stretch",
  },
  profileSpaceBlock: {
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
  upcomingLayout: {
    height: 100,
    borderRadius: Border.br_mini,
    alignSelf: "stretch",
  },
  profileBorder: {
    borderStyle: "solid",
    overflow: "hidden",
  },
  navFlexBox: {
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
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
    justifyContent: "center",
  },
  question: {
    justifyContent: "center",
  },
  phoneLightChild: {
    position: "absolute",
    marginTop: -5.79,
    marginLeft: -4.53,
    top: "50%",
    left: "50%",
    zIndex: 0,
  },
  phoneLight: {
    alignItems: "flex-end",
    padding: Padding.p_3xs,
  },
  bottomBar: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_mini,
    alignSelf: "stretch",
  },
  profile: {
    backgroundColor: Color.whitesmoke_100,
    borderColor: "#000",
    borderWidth: 1,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    overflow: "hidden",
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    paddingHorizontal: Padding.p_mini,
  },
  upcomingProfile1: {
    marginTop: 15,
  },
  upcomingMatches: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    padding: Padding.p_3xs,
    flex: 1,
    backgroundColor: Color.white,
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
    padding: Padding.p_3xs,
  },
  mathesText: {
    color: Color.crimson_100,
    width: 45,
  },
  matchesNav: {
    marginLeft: 17,
    justifyContent: "center",
    overflow: "hidden",
    padding: Padding.p_3xs,
  },
  memberPhotoIcon3: {
    borderRadius: Border.br_131xl,
  },
  menuActionopenpdfhttpsw: {
    borderRadius: Border.br_8xs,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
    paddingVertical: Padding.p_0,
  },
  bottomBar3: {
    borderColor: "#737373",
    borderTopWidth: 0.5,
    height: 54,
    justifyContent: "flex-end",
    overflow: "hidden",
    backgroundColor: Color.white,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default MatchesUpcoming;
