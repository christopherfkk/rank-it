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
import IndividualStrength from "../setup/IndividualStrength";
import PfButton1 from "../setup/PfButton1";
import { Padding, Color, Border, FontFamily, FontSize } from "../../GlobalStyles";
import InsertMatchScores from "./InsertMatchScores";

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
        <Text style={[styles.heading1, styles.heading1box]}>
          Your Match with Bentley
        </Text>
          <View style={[styles.profile]}>
            <Image
              style={styles.memberPhotoIcon}
              contentFit="cover"
              source={require("../../assets/memberphoto8.png")}
            />
            <View style={[styles.profileBox]}>
              <Text style={[styles.fullName]}>
                Jenny Tang
              </Text>
              <View style={[styles.location]}>
                <Image
                  style={[styles.iconLocation]}
                  contentFit="cover"
                  source={require("../../assets/markerpin011.png")}
                />
                <Text style={[styles.location]}>
                  CB Gym
                </Text>
              </View>
              <View style={[styles.location]}>
                <Image
                  style={[styles.iconLocation]}
                  contentFit="cover"
                  source={require("../../assets/vector2.png")}
                />
                <Text style={[styles.location]}>
                  Expert
                </Text>
              </View>
              </View>
              </View>
              <InsertMatchScores/>

               {/*
          <View style={[styles.gameCompletion, styles.matchScoresSpaceBlock]}>
            <Text style={[styles.gameCompleted, styles.fullNameTypo]}>
              Game completed?
            </Text>
            <View style={[styles.gameCompletion1, styles.gameSpaceBlock]}>
              <Pressable style={[styles.pfButton, styles.buttonShadowBox]}>
                <Text style={styles.button} numberOfLines={3}>
                  Yes
                </Text>
              </Pressable>
              <Pressable style={[styles.pfButton1, styles.buttonShadowBox]}>
                <Text style={styles.button} numberOfLines={1}>
                  no
                </Text>
              </Pressable>
            </View>
    </View>*/}
          {/*
          <View style={[styles.matchScores, styles.matchScoresSpaceBlock]}>
            <Text
              style={[styles.gameCompleted, styles.fullNameTypo]}
            >{`Match Scores `}</Text>
            <View style={styles.matchScores2}>
              <View style={styles.submittedAvailability}>
                <Pressable style={[styles.subtitle, styles.profileFlexBox]}>
                  <Text style={styles.dayTypo}>You</Text>
                  <Text style={[styles.dayOfWeek1, styles.dayTypo]}>
                    Opponent
                  </Text>
                </Pressable>
                <Pressable
                  style={[styles.insertMatchScores, styles.profileFlexBox]}
                >
                  <TextInput
                    style={styles.timeBorder}
                    placeholder="MM"
                    keyboardType="numeric"
                    placeholderTextColor="#737373"
                    maxLength={2}
                  />
                  <TextInput
                    style={[styles.startTime, styles.timeBorder]}
                    placeholder="DD"
                    keyboardType="number-pad"
                    secureTextEntry={false}
                    placeholderTextColor="#737373"
                    maxLength={2}
                    rejectResponderTermination
                  />
                </Pressable>
                <Pressable
                  style={[styles.insertMatchScores, styles.profileFlexBox]}
                >
                  <TextInput
                    style={styles.timeBorder}
                    placeholder="MM"
                    keyboardType="numeric"
                    placeholderTextColor="#737373"
                    maxLength={2}
                  />
                  <TextInput
                    style={[styles.startTime, styles.timeBorder]}
                    placeholder="DD"
                    keyboardType="number-pad"
                    secureTextEntry={false}
                    placeholderTextColor="#737373"
                    maxLength={2}
                    rejectResponderTermination
                  />
                </Pressable>
                <Pressable
                  style={[styles.insertMatchScores, styles.profileFlexBox]}
                >
                  <TextInput
                    style={styles.timeBorder}
                    placeholder="MM"
                    keyboardType="numeric"
                    placeholderTextColor="#737373"
                    maxLength={2}
                  />
                  <TextInput
                    style={[styles.startTime, styles.timeBorder]}
                    placeholder="DD"
                    keyboardType="number-pad"
                    secureTextEntry={false}
                    placeholderTextColor="#737373"
                    maxLength={2}
                    rejectResponderTermination
                  />
                </Pressable>
              </View>
            </View>
            <Image
              style={styles.addRingIcon}
              contentFit="cover"
              source={require("../../assets/add-ring.png")}
            />
          </View>
          <View style={[styles.strengthWeakness, styles.gameSpaceBlock]}>
            <Text style={[styles.gameCompleted, styles.fullNameTypo]}>
              Opponent Strength
            </Text>
            <View style={styles.matchScores3}>
              <Pressable style={styles.frameFlexBox}>
                <IndividualStrength
                  image13={require("../../assets/image-13.png")}
                  agility="Agility"
                />
                <IndividualStrength
                  individualStrengthBackgroundColor="unset"
                  individualStrengthMarginLeft={10}
                  image13={require("../../assets/vector3.png")}
                  agility="Offense"
                  agilityFontWeight="unset"
                  agilityFontFamily="Manrope_regular"
                  agilityColor="#4a4a4a"
                />
              </Pressable>
              <View style={[styles.frameParent, styles.frameFlexBox]}>
                <IndividualStrength
                  individualStrengthBackgroundColor="unset"
                  individualStrengthMarginLeft="unset"
                  image13={require("../../assets/image-11.png")}
                  agility="Defense"
                  agilityFontWeight="unset"
                  agilityFontFamily="Manrope_regular"
                  agilityColor="#4a4a4a"
                />
                <IndividualStrength
                  individualStrengthBackgroundColor="#fff2f2"
                  individualStrengthMarginLeft={11}
                  image13={require("../../assets/image-12.png")}
                  agility="Cardio"
                  agilityFontWeight="700"
                  agilityFontFamily="Manrope_bold"
                  agilityColor="#070707"
                />
              </View>
              <View style={[styles.frameGroup, styles.frameFlexBox]}>
                <Pressable style={[styles.image14Parent, styles.parentFlexBox]}>
                  <Image
                    style={styles.image14Icon}
                    contentFit="cover"
                    source={require("../../assets/image-14.png")}
                  />
                  <Text style={[styles.reactionTime, styles.footworkFlexBox]}>
                    Reaction Time
                  </Text>
                </Pressable>
                <Pressable style={[styles.image15Parent, styles.parentFlexBox]}>
                  <Image
                    style={styles.image14Icon}
                    contentFit="cover"
                    source={require("../../assets/image-15.png")}
                  />
                  <Text style={[styles.footwork, styles.footworkFlexBox]}>
                    Footwork
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <RNESlider
            style={[styles.gameCompletion2, styles.gameSpaceBlock]}
            minimumValue={0}
            maximumValue={5}
            step={1}
            value={gameCompletionValue}
            onValueChange={setGameCompletionValue}
            thumbStyle={styles.gameCompletionts}
            thumbTintColor="#ff0000"
            minimumTrackTintColor="#3f3f3f"
            maximumTrackTintColor="#b3b3b3"
          />
          <RNESlider
            style={[styles.gameCompletion2, styles.gameSpaceBlock]}
            minimumValue={0}
            maximumValue={5}
            step={1}
            value={gameCompletion1Value}
            onValueChange={setGameCompletion1Value}
            thumbStyle={styles.gameCompletion1ts}
            thumbTintColor="#ff0000"
            minimumTrackTintColor="#3f3f3f"
            maximumTrackTintColor="#b3b3b3"
          />
          <PfButton1 /> */}
        </ScrollView>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  modalPostmatchfeedback: {
    backgroundColor: Color.white,
    alignItems: "center",
    justifyContent: "center",
  },
  heading1box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heading1: {
    fontSize: 50,
    letterSpacing: 1.2,
    fontFamily: FontFamily.bebasNeueRegular,
    marginTop: 100, 
    alignItems: "center",
    justifyContent: "center",
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
