import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  SafeAreaView
} from "react-native";
import { Image } from "expo-image";
import { Slider as RNESlider } from "@rneui/themed";
import StrengthGrid from "./StrengthGrid"
import PfButton1 from "../setup/PfButton1";
import { Padding, Color, Border, FontFamily, FontSize } from "../../GlobalStyles";
import InsertMatchScores from "./InsertMatchScores";
import SlidersComponent from "./Slider";

type ModalPostmatchfeedbackType = {
  onClose?: () => void;
};

const ModalPostmatchfeedback = ({ onClose }: ModalPostmatchfeedbackType) => {
  const [gameCompletionValue, setGameCompletionValue] = useState();
  const [gameCompletion1Value, setGameCompletion1Value] = useState(0);
    return (
      <SafeAreaView style={[styles.modalPostmatchfeedback]}>
        <ScrollView
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
        >
        <View style={styles.heading1box}>
          <Text style={styles.heading1}>Your Match with</Text>
        </View>
          <View style={[styles.profile]}>
            <Image
              style={styles.memberPhotoIcon}
              contentFit="cover"
              source={require("../../assets/avatar.png")} 
            />
            <View style={[styles.profileBox]}>
              <Text style={[styles.fullName]}>
                Jenny Tang
              </Text>
              <View style={[styles.location]}>
                <Image
                  style={[styles.iconLocation]}
                  contentFit="cover"
                  source={require("../../assets/profile/iconLocation.png")}  
                />
                <Text style={[styles.location]}>
                  CB Gym
                </Text>
              </View>
              <View style={[styles.location]}>
                <Image
                  style={[styles.iconLocation]}
                  contentFit="cover"
                  source={require("../../assets/profile/iconBadminton.png")}
                />
                <Text style={[styles.location]}>
                  Expert
                </Text>
              </View>
              </View>
              </View>
              <InsertMatchScores/>
              <StrengthGrid/>
              <SlidersComponent/>
          <PfButton1 /> 
        </ScrollView>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  modalPostmatchfeedback: {
    backgroundColor: Color.white,
    alignItems: "center", // Center items horizontally
    justifyContent: "center", // Center items vertically
    flex: 1,
  },
  heading1box: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  heading1: {
    fontSize: 30,
    letterSpacing: 1.2,
    fontFamily: FontFamily.bebasNeueRegular,
  },
  profile: {
    flexDirection: "row",
    paddingVertical: 10,
    marginTop: 6,
    overflow: "hidden",
    justifyContent: "center",
  },
  memberPhotoIcon: {
    borderRadius: 211,
    width: 50,
    height: 50,
  },
  profileBox: {
    alignSelf: "stretch",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  fullName: {
    lineHeight: 20,
    fontFamily: FontFamily.manropeBold,
    fontSize: 20,
    textAlign: "left",
    color: Color.gray_300,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_0,
  },
  iconLocation: {
    overflow: "hidden",
    height: 10,
    width: 10,
  },
  // },
  // gameCompletionts: {
  //   height: 25,
  //   width: 25,
  // },
  // gameCompletion1ts: {
  //   height: 25,
  //   width: 25,
  // },
  // frameScrollViewContent: {
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // profileSpaceBlock: {
  //   paddingHorizontal: Padding.p_mini,
  //   overflow: "hidden",
  // },
  // headingFlexBox: {
  //   flexDirection: "row",
  //   justifyContent: "center",
  // },
  // profileFlexBox: {
  //   borderRadius: Border.br_mini,
  //   flexDirection: "row",
  //   alignItems: "center",
  // },
  // fullNameFlexBox: {
  //   textAlign: "left",
  //   color: Color.gray_300,
  // },
  // questionFlexBox: {
  //   marginTop: 1,
  //   flexDirection: "row",
  //   alignItems: "center",
  //   overflow: "hidden",
  // },
  // iconLayout: {
  //   height: 10,
  //   width: 10,
  // },
  // matchScoresSpaceBlock: {
  //   paddingHorizontal: Padding.p_3xs,
  //   marginTop: 6,
  //   alignItems: "center",
  //   overflow: "hidden",
  // },
  // fullNameTypo: {
  //   fontFamily: FontFamily.manropeBold,
  //   fontWeight: "700",
  // },
  // gameSpaceBlock: {
  //   padding: Padding.p_3xs,
  //   overflow: "hidden",
  // },
  // buttonShadowBox: {
  //   padding: Padding.p_mini,
  //   height: 32,
  //   width: 100,
  //   borderWidth: 1,
  //   shadowOpacity: 1,
  //   elevation: 4,
  //   shadowRadius: 4,
  //   shadowOffset: {
  //     width: 0,
  //     height: 4,
  //   },
  //   shadowColor: "rgba(0, 0, 0, 0.25)",
  //   borderRadius: Border.br_11xs,
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderColor: "#000",
  //   borderStyle: "solid",
  // },
  // dayTypo: {
  //   color: Color.crimson_100,
  //   fontFamily: FontFamily.manropeMedium,
  //   fontWeight: "500",
  //   fontSize: 12,
  //   textAlign: "center",
  //   flex: 1,
  // },
  // timeBorder: {
  //   paddingVertical: 8,
  //   borderRadius: Border.br_8xs,
  //   fontFamily: FontFamily.manropeMedium,
  //   fontWeight: "500",
  //   fontSize: 12,
  //   borderWidth: 1,
  //   flexDirection: "row",
  //   flex: 1,
  //   alignSelf: "stretch",
  //   alignItems: "center",
  //   paddingHorizontal: Padding.p_mini,
  //   borderColor: "#000",
  //   borderStyle: "solid",
  //   backgroundColor: Color.white,
  // },
  // frameFlexBox: {
  //   height: 30,
  //   flexDirection: "row",
  //   alignSelf: "stretch",
  // },
  // parentFlexBox: {
  //   borderRadius: Border.br_8xs,
  //   borderWidth: 1,
  //   paddingVertical: Padding.p_0,
  //   flexDirection: "row",
  //   flex: 1,
  //   alignSelf: "stretch",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   paddingHorizontal: Padding.p_mini,
  //   borderColor: "#000",
  //   borderStyle: "solid",
  // },
  // footworkFlexBox: {
  //   fontSize: FontSize.size_xs_5,
  //   display: "flex",
  //   textAlign: "center",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // heading: {
  //   alignItems: "center",
  // },
  // memberPhotoIcon: {
  //   borderRadius: 211,
  //   width: 50,
  //   height: 50,
  // },
  // fullName: {
  //   lineHeight: 20,
  //   fontFamily: FontFamily.manropeBold,
  //   fontWeight: "700",
  //   fontSize: FontSize.size_xl,
  // },
  // markerPin01Icon: {
  //   overflow: "hidden",
  // },
  // location: {
  //   lineHeight: 14,
  //   fontWeight: "300",
  //   fontFamily: FontFamily.almaraiLight,
  //   fontSize: FontSize.size_2xs,
  // },
  // locationWrapper: {
  //   width: 118,
  //   paddingHorizontal: Padding.p_8xs,
  //   paddingVertical: Padding.p_0,
  //   justifyContent: "center",
  //   overflow: "hidden",
  // },
  // question: {
  //   justifyContent: "center",
  // },
  // bottomBar: {
  //   paddingVertical: Padding.p_0,
  //   alignSelf: "stretch",
  //   justifyContent: "center",
  // },
  // profile: {
  //   width: 240,
  //   height: 71,
  //   paddingVertical: Padding.p_3xs,
  //   marginTop: 6,
  //   paddingHorizontal: Padding.p_mini,
  //   overflow: "hidden",
  // },
  // gameCompleted: {
  //   fontSize: FontSize.size_xl,
  //   fontWeight: "700",
  //   height: 28,
  //   alignItems: "flex-end",
  //   display: "flex",
  //   textAlign: "center",
  //   color: Color.lightLabelPrimary,
  //   justifyContent: "center",
  //   alignSelf: "stretch",
  // },
  // button: {
  //   fontSize: FontSize.size_2xs,
  //   textAlign: "center",
  //   color: Color.lightLabelPrimary,
  //   fontFamily: FontFamily.bebasNeueRegular,
  //   flex: 1,
  // },
  // pfButton: {
  //   backgroundColor: Color.lavenderblush,
  // },
  // pfButton1: {
  //   marginLeft: 10,
  // },
  // gameCompletion1: {
  //   width: 307,
  //   flexDirection: "row",
  //   justifyContent: "center",
  // },
  // gameCompletion: {
  //   paddingVertical: Padding.p_0,
  // },
  // dayOfWeek1: {
  //   marginLeft: 15,
  // },
  // subtitle: {
  //   paddingHorizontal: Padding.p_0,
  //   paddingVertical: Padding.p_8xs,
  //   alignSelf: "stretch",
  // },
  // startTime: {
  //   marginLeft: 30,
  //   justifyContent: "center",
  // },
  // insertMatchScores: {
  //   paddingHorizontal: Padding.p_xl,
  //   paddingVertical: Padding.p_11xs,
  //   alignSelf: "stretch",
  // },
  // submittedAvailability: {
  //   height: 114,
  //   alignSelf: "stretch",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // matchScores2: {
  //   marginTop: 15,
  //   alignSelf: "stretch",
  //   alignItems: "center",
  // },
  // addRingIcon: {
  //   width: 15,
  //   height: 15,
  //   marginTop: 15,
  // },
  // matchScores: {
  //   width: 311,
  //   height: 207,
  //   paddingVertical: Padding.p_xl,
  // },
  // frameParent: {
  //   marginTop: 10,
  // },
  // image14Icon: {
  //   width: 20,
  //   height: 20,
  // },
  // reactionTime: {
  //   width: 80,
  //   height: 26,
  //   marginLeft: 3,
  //   fontFamily: FontFamily.manropeBold,
  //   fontWeight: "700",
  //   color: Color.lightLabelPrimary,
  //   fontSize: FontSize.size_xs_5,
  // },
  // image14Parent: {
  //   backgroundColor: Color.lavenderblush,
  // },
  // footwork: {
  //   fontFamily: FontFamily.manropeRegular,
  //   color: Color.darkslategray,
  //   flex: 1,
  //   alignSelf: "stretch",
  // },
  // image15Parent: {
  //   marginLeft: 10,
  // },
  // frameGroup: {
  //   marginTop: 10,
  //   justifyContent: "center",
  // },
  // matchScores3: {
  //   height: 105,
  //   marginTop: 10,
  //   alignSelf: "stretch",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // strengthWeakness: {
  //   marginTop: 6,
  //   alignSelf: "stretch",
  // },
  // gameCompletion2: {
  //   width: 295,
  //   height: 81,
  //   marginTop: 6,
  // },
});

export default ModalPostmatchfeedback;
