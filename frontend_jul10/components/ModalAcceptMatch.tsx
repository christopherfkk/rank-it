import React, { memo } from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import PfButton from "./PfButton";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

type ModalAcceptMatchType = {
  onClose?: () => void;
};

const ModalAcceptMatch = memo(({ onClose }: ModalAcceptMatchType) => {
  return (
    <View style={[styles.modalAcceptMatch, styles.profileSpaceBlock]}>
      <Pressable style={[styles.cross, styles.crossFlexBox]}>
        <View style={[styles.basilcrossSolid, styles.crossFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.acceptParent, styles.acceptParentSpaceBlock]}>
        <Text style={styles.accept}>accept?</Text>
        <View style={[styles.profile, styles.profileLayout]}>
          <Image
            style={styles.memberPhotoIcon}
            contentFit="cover"
            source={require("../assets/memberphoto3.png")}
          />
          <View style={[styles.bottomBar, styles.bottomBarSpaceBlock]}>
            <Text style={[styles.fullName, styles.fullNameFlexBox]}>
              Hana Sakura
            </Text>
            <View style={[styles.question, styles.questionFlexBox]}>
              <Image
                style={[styles.markerPin01Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/markerpin01.png")}
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
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/vector.png")}
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
        <Text
          style={[styles.proposedLocationAnd, styles.proposedLocationAndClr]}
        >
          Proposed location and time
        </Text>
        <View
          style={[styles.minatoKuSportsCenter0811Wrapper, styles.profileLayout]}
        >
          <Text
            style={[
              styles.minatoKuSportsCenterContainer,
              styles.proposedLocationAndClr,
            ]}
          >
            <Text style={styles.fullNameTypo}>{`Minato-Ku Sports Center 
`}</Text>
            <Text style={styles.text}>08/11/2023, 17:00-19:00</Text>
          </Text>
        </View>
        <Text
          style={[styles.contactYourOpponent, styles.proposedLocationAndClr]}
        >
          Contact your opponent from the Upcoming Matches screen!
        </Text>
        <PfButton />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  profileSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mini,
    overflow: "hidden",
  },
  crossFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  acceptParentSpaceBlock: {
    marginTop: 15,
    alignSelf: "stretch",
  },
  profileLayout: {
    width: 288,
    marginTop: 15,
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
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  iconLayout: {
    height: 10,
    width: 10,
  },
  proposedLocationAndClr: {
    color: Color.lightLabelPrimary,
    textAlign: "center",
  },
  vectorIcon: {
    width: 15,
    height: 15,
  },
  basilcrossSolid: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_9xs,
    justifyContent: "center",
    alignItems: "center",
  },
  cross: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  accept: {
    fontSize: FontSize.size_31xl,
    letterSpacing: 1.5,
    fontFamily: FontFamily.bebasNeueRegular,
    color: Color.gray_200,
    textAlign: "center",
    alignSelf: "stretch",
  },
  memberPhotoIcon: {
    borderRadius: 211,
    width: 50,
    height: 50,
  },
  fullName: {
    lineHeight: 20,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
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
    alignSelf: "stretch",
    paddingVertical: Padding.p_0,
    paddingHorizontal: Padding.p_mini,
  },
  profile: {
    borderRadius: Border.br_mini,
    height: 71,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mini,
    overflow: "hidden",
  },
  proposedLocationAnd: {
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    marginTop: 15,
    alignSelf: "stretch",
  },
  fullNameTypo: {
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  text: {
    fontFamily: FontFamily.manropeRegular,
  },
  minatoKuSportsCenterContainer: {
    fontSize: FontSize.size_base,
    lineHeight: 30,
    flex: 1,
  },
  minatoKuSportsCenter0811Wrapper: {
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#000",
    borderStyle: "solid",
  },
  contactYourOpponent: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.manropeRegular,
    width: 288,
    marginTop: 15,
  },
  acceptParent: {
    paddingHorizontal: Padding.p_0,
    paddingVertical: Padding.p_31xl,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalAcceptMatch: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: Color.white,
    borderWidth: 2,
    width: 331,
    height: 457,
    maxWidth: "100%",
    maxHeight: "100%",
    borderColor: "#000",
    borderStyle: "solid",
  },
});

export default ModalAcceptMatch;
