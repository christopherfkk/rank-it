import React, { useState, memo } from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  FlatList,
  Text,
  View,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MatchesReceived from "components/home/MatchesReceived";
import Received from "./Received";
import MatchesPending from "./MatchesPending";
import Pending from "./Pending";
import MatchesUpcoming from "./MatchesUpcoming";
import Upcoming from "./Upcoming";
import TrendingDestinations1 from "./TrendingDestinations1";
import TrendingDestinations from "./TrendingDestinations";
import Profile1 from "./Profile1";
import Profile from "./Profile";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../../GlobalStyles";

type MatchesReceivedType = {
  style?: StyleProp<ViewStyle>;
};

const TopTab = createMaterialTopTabNavigator();
const MatchesReceived = memo(({ style }: MatchesReceivedType) => {
  const [profileInfoContainerData, setProfileInfoContainerData] = useState([
    <TrendingDestinations1 />,
    <TrendingDestinations />,
    <Profile1 />,
    <Profile />,
  ]);

  return (
    <View style={[styles.matchesReceived, style]}>
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
      <FlatList
        style={[styles.profileInfoContainer, styles.bottomBarBg]}
        data={profileInfoContainerData}
        renderItem={({ item }) => item}
        contentContainerStyle={styles.profileInfoContainerContent}
      />
      <View style={[styles.bottomBar, styles.bottomBarBg]}>
        <View style={[styles.menuActionopenpdfhttpsw, styles.navFlexBox]}>
          <View style={[styles.rankingNav, styles.navFlexBox]}>
            <Image
              style={[styles.rankingIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../../assets/rankingicon.png")}
            />
            <Text style={[styles.rankingText, styles.textTypo]}>Ranking</Text>
          </View>
          <View style={[styles.matchesNav, styles.navFlexBox]}>
            <Image
              style={[styles.rankingIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../../assets/mathcesicon.png")}
            />
            <Text style={[styles.mathesText, styles.textTypo]}>Matches</Text>
          </View>
          <View style={[styles.matchesNav, styles.navFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../../assets/messagetext.png")}
            />
            <Text style={[styles.rankingText, styles.textTypo]}>Events</Text>
          </View>
          <View style={[styles.matchesNav, styles.navFlexBox]}>
            <Image
              style={[styles.memberPhotoIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../../assets/memberphoto6.png")}
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
  profileInfoContainerContent: {
    flexDirection: "column",
  },
  bottomBarBg: {
    backgroundColor: Color.white,
    alignSelf: "stretch",
  },
  navFlexBox: {
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  textTypo: {
    marginTop: 1,
    height: 15,
    textAlign: "center",
    fontFamily: FontFamily.bebasNeueRegular,
    lineHeight: 13,
    letterSpacing: 1,
    fontSize: FontSize.size_3xs,
  },
  profileInfoContainer: {
    padding: Padding.p_3xs,
    flex: 1,
  },
  rankingIcon: {
    overflow: "hidden",
  },
  rankingText: {
    color: Color.lightLabelPrimary,
    width: 40,
  },
  rankingNav: {
    padding: Padding.p_3xs,
  },
  mathesText: {
    color: Color.crimson_100,
    width: 45,
  },
  matchesNav: {
    marginLeft: 17,
    padding: Padding.p_3xs,
  },
  memberPhotoIcon: {
    borderRadius: Border.br_131xl,
  },
  menuActionopenpdfhttpsw: {
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_0,
  },
  bottomBar: {
    borderStyle: "solid",
    borderColor: "#737373",
    borderTopWidth: 0.5,
    height: 54,
    justifyContent: "flex-end",
    overflow: "hidden",
    alignItems: "center",
  },
  matchesReceived: {
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
});

export default MatchesReceived;
