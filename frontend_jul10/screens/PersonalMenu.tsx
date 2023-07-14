import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import ProfileSummaryContainer from "../components/ProfileSummaryContainer";
import BioContainer from "../components/BioContainer";
import ProfileContainer from "../components/ProfileContainer";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const PersonalMenu = () => {
  return (
    <View style={styles.personalMenu}>
      <View style={styles.profileInfoContainer}>
        <ProfileSummaryContainer
          imageIds={require("../assets/memberphoto18.png")}
          fullName="Bentley Chen"
          location1="Taito, Tokyo"
          skill="Beginner"
        />
        <Pressable style={[styles.editProfileButton, styles.profileSpaceBlock]}>
          <View style={[styles.starRating, styles.pfButtonFlexBox]}>
            <Image
              style={[
                styles.fluentedit28RegularIcon,
                styles.fluentedit28IconLayout,
              ]}
              contentFit="cover"
              source={require("../assets/fluentedit28regular2.png")}
            />
            <Image
              style={styles.fluentedit28RegularIcon1}
              contentFit="cover"
              source={require("../assets/fluentedit28regular1.png")}
            />
            <Image
              style={[
                styles.fluentedit28RegularIcon2,
                styles.fluentedit28IconLayout,
              ]}
              contentFit="cover"
              source={require("../assets/fluentedit28regular3.png")}
            />
            <Text style={[styles.starRating1, styles.buttonTypo]}>
              Edit Profile
            </Text>
          </View>
        </Pressable>
        <View style={[styles.profileDetails, styles.profileSpaceBlock]}>
          <BioContainer
            bioText="Experienced badminton player with 5+ years of competitive play. Available on weekends for intense matches. Prefer playing at indoor courts in central Tokyo."
            matchLoggedText="43 logged matches"
            rankingText="444th in Tokyo"
            frame8652Height={448}
            propWidth="unset"
            propAlignSelf="stretch"
            sportsmanshiprating="Star Rating: 4.5 "
            availability={`Monday 16-17, 18-19
Tuesday 15-16
Wednesday 11-12
Thursday 13-14
Friday 18-19
Saturday 19-20
Sunday 11-12, 13-14`}
            strength="Agility, Cardio, Reaction Time"
            competitiveness="High"
          />
          <Pressable style={[styles.pfButton, styles.pfButtonFlexBox]}>
            <Text style={[styles.button, styles.buttonTypo]} numberOfLines={3}>
              Challenge
            </Text>
          </Pressable>
        </View>
      </View>
      <ProfileContainer
        productIds={require("../assets/rankingicon3.png")}
        productIdsArray={require("../assets/mathcesicon3.png")}
        productIdsString={require("../assets/messagetext4.png")}
        productIdsString20x20x={require("../assets/memberphoto19.png")}
        propHeight={58}
        propColor="#000"
        propColor1="rgba(211, 30, 40, 0.91)"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileSpaceBlock: {
    marginTop: 5,
    paddingVertical: Padding.p_0,
    backgroundColor: Color.white,
    alignSelf: "stretch",
  },
  pfButtonFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  fluentedit28IconLayout: {
    height: 28,
    width: 28,
    display: "none",
    overflow: "hidden",
  },
  buttonTypo: {
    textAlign: "center",
    fontSize: FontSize.size_2xs,
  },
  fluentedit28RegularIcon: {
    display: "none",
  },
  fluentedit28RegularIcon1: {
    width: 10,
    height: 10,
    marginLeft: 3,
    overflow: "hidden",
  },
  fluentedit28RegularIcon2: {
    marginLeft: 3,
    display: "none",
  },
  starRating1: {
    lineHeight: 13,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.gray_100,
    marginLeft: 3,
  },
  starRating: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.whitesmoke_300,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_3xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  editProfileButton: {
    height: 25,
    justifyContent: "center",
    marginTop: 5,
    paddingVertical: Padding.p_0,
    paddingHorizontal: Padding.p_3xs,
    alignItems: "flex-end",
  },
  button: {
    fontFamily: FontFamily.bebasNeueRegular,
    color: Color.white,
    flex: 1,
    fontSize: FontSize.size_2xs,
  },
  pfButton: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.crimson_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 134,
    height: 32,
    padding: Padding.p_mini,
    marginTop: 30,
    display: "none",
  },
  profileDetails: {
    height: 483,
    paddingHorizontal: Padding.p_8xs,
    marginTop: 5,
    paddingVertical: Padding.p_0,
    alignItems: "center",
  },
  profileInfoContainer: {
    alignItems: "center",
    backgroundColor: Color.white,
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  personalMenu: {
    width: "100%",
    height: 836,
    alignItems: "flex-end",
    flex: 1,
  },
});

export default PersonalMenu;
