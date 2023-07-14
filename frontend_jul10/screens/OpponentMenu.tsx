import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import ProfileSummaryContainer from "../components/ProfileSummaryContainer";
import BioContainer from "../components/BioContainer";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const OpponentMenu = () => {
  return (
    <View style={styles.opponentMenu}>
      <View style={styles.profileInfoContainer}>
        <ProfileSummaryContainer
          imageIds={require("../assets/memberphoto10.png")}
        />
        <Pressable style={[styles.editProfileButton, styles.profileSpaceBlock]}>
          <View style={[styles.starRating, styles.pfButtonFlexBox]}>
            <Image
              style={styles.fluentedit28IconLayout}
              contentFit="cover"
              source={require("../assets/fluentedit28regular.png")}
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
              source={require("../assets/fluentedit28regular.png")}
            />
            <Text style={[styles.starRating1, styles.buttonTypo]}>
              Edit Profile
            </Text>
          </View>
        </Pressable>
        <View style={[styles.profileDetails, styles.profileSpaceBlock]}>
          <BioContainer
            bioText="Hi, I'm David! 🌸 I'm a passionate badminton player and love engaging in competitive matches. With several years of experience, I enjoy honing my skills and exploring different playing strategies. "
            matchLoggedText="243 logged matches"
            rankingText="1st in Tokyo"
          />
          <Pressable style={[styles.pfButton, styles.pfButtonFlexBox]}>
            <Text style={[styles.button, styles.buttonTypo]} numberOfLines={3}>
              Challenge
            </Text>
          </Pressable>
        </View>
      </View>
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
    overflow: "hidden",
  },
  buttonTypo: {
    textAlign: "center",
    fontSize: FontSize.size_2xs,
  },
  fluentedit28RegularIcon1: {
    width: 10,
    height: 10,
    marginLeft: 3,
    overflow: "hidden",
  },
  fluentedit28RegularIcon2: {
    marginLeft: 3,
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
    alignItems: "flex-end",
    display: "none",
    justifyContent: "center",
    marginTop: 5,
    paddingVertical: Padding.p_0,
    paddingHorizontal: Padding.p_3xs,
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
  },
  profileDetails: {
    height: 483,
    paddingHorizontal: Padding.p_8xs,
    marginTop: 5,
    paddingVertical: Padding.p_0,
    alignItems: "center",
  },
  profileInfoContainer: {
    overflow: "hidden",
    backgroundColor: Color.white,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  opponentMenu: {
    backgroundColor: Color.lavenderblush,
    width: "100%",
    height: 794,
    alignItems: "center",
    flex: 1,
  },
});

export default OpponentMenu;
