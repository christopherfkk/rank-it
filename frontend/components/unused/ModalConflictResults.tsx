import React, { memo } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, Padding, FontFamily, Border, FontSize } from "../../GlobalStyles";

type ModalConflictResultsType = {
  onClose?: () => void;
};

const ModalConflictResults = memo(({ onClose }: ModalConflictResultsType) => {
  return (
    <View style={styles.modalConflictResults}>
      <Text style={[styles.yourMatchWith, styles.yourMatchWithFlexBox]}>
        Your Match with
      </Text>
      <View style={[styles.profile, styles.profileFlexBox]}>
        <Image
          style={styles.memberPhotoIcon}
          contentFit="cover"
          source={require("../../assets/memberphoto12.png")}
        />
        <View style={[styles.bottomBar, styles.bottomBarSpaceBlock]}>
          <Text style={[styles.fullName, styles.fullNameFlexBox]}>
            Jenny Tang
          </Text>
          <View style={[styles.question, styles.questionFlexBox]}>
            <Image
              style={[styles.markerPin01Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../../assets/markerpin013.png")}
            />
            <View style={[styles.locationWrapper, styles.bottomBarSpaceBlock]}>
              <Text style={[styles.location, styles.fullNameFlexBox]}>
                Shibuya, Tokyo
              </Text>
            </View>
          </View>
          <View style={styles.questionFlexBox}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../../assets/vector4.png")}
            />
            <View style={[styles.locationWrapper, styles.bottomBarSpaceBlock]}>
              <Text style={[styles.location, styles.fullNameFlexBox]}>
                Expert
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.pleaseReviewAnd, styles.fullNameTypo]}>
        Please review and select the box with the accurate match scores.
      </Text>
      <Pressable style={styles.matchScores}>
        <Text style={styles.matchScores1}>Yours</Text>
        <View style={styles.confirmScores}>
          <View style={styles.submittedAvailability}>
            <View style={[styles.subtitle, styles.profileFlexBox]}>
              <Text style={[styles.dayOfWeek, styles.dayClr]}>You</Text>
              <Text style={[styles.dayOfWeek1, styles.dayClr]}>Opponent</Text>
            </View>
            <View style={[styles.insertMatchScores, styles.profileFlexBox]}>
              <View style={styles.timeBorder}>
                <Text style={[styles.mm, styles.mmLayout]}>21</Text>
              </View>
              <View style={[styles.startTime, styles.timeBorder]}>
                <Text style={[styles.dd, styles.mmTypo]}>6</Text>
              </View>
            </View>
            <View style={[styles.insertMatchScores, styles.profileFlexBox]}>
              <View style={styles.timeBorder}>
                <Text style={[styles.mm, styles.mmLayout]}>21</Text>
              </View>
              <View style={[styles.startTime, styles.timeBorder]}>
                <Text style={[styles.dd1, styles.dayClr]}>5</Text>
              </View>
            </View>
            <View style={[styles.insertMatchScores, styles.profileFlexBox]}>
              <View style={styles.timeBorder}>
                <Text style={[styles.mm2, styles.mm2Typo]}>21</Text>
              </View>
              <View style={[styles.startTime, styles.timeBorder]}>
                <Text style={[styles.dd2, styles.mm2Typo]}>5</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.matchScores}>
        <Text style={styles.matchScores1}>Yours</Text>
        <View style={styles.confirmScores}>
          <View style={styles.submittedAvailability}>
            <View style={[styles.subtitle, styles.profileFlexBox]}>
              <Text style={[styles.dayOfWeek, styles.dayClr]}>You</Text>
              <Text style={[styles.dayOfWeek1, styles.dayClr]}>Opponent</Text>
            </View>
            <View style={[styles.insertMatchScores, styles.profileFlexBox]}>
              <View style={styles.timeBorder}>
                <Text style={[styles.mm, styles.mmLayout]}>21</Text>
              </View>
              <View style={[styles.startTime, styles.timeBorder]}>
                <Text style={[styles.dd, styles.mmTypo]}>6</Text>
              </View>
            </View>
            <View style={[styles.insertMatchScores, styles.profileFlexBox]}>
              <View style={styles.timeBorder}>
                <Text style={[styles.mm, styles.mmLayout]}>21</Text>
              </View>
              <View style={[styles.startTime, styles.timeBorder]}>
                <Text style={[styles.dd1, styles.dayClr]}>5</Text>
              </View>
            </View>
            <View style={[styles.insertMatchScores, styles.profileFlexBox]}>
              <View style={styles.timeBorder}>
                <Text style={[styles.mm2, styles.mm2Typo]}>21</Text>
              </View>
              <View style={[styles.startTime, styles.timeBorder]}>
                <Text style={[styles.dd2, styles.mm2Typo]}>5</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.pfButton, styles.profileFlexBox]}>
        <Text style={styles.button} numberOfLines={3}>
          submit
        </Text>
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  yourMatchWithFlexBox: {
    color: Color.lightLabelPrimary,
    textAlign: "center",
    alignSelf: "stretch",
  },
  profileFlexBox: {
    flexDirection: "row",
    alignItems: "center",
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
    alignItems: "center",
    overflow: "hidden",
  },
  iconLayout: {
    height: 10,
    width: 10,
  },
  fullNameTypo: {
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  dayClr: {
    color: Color.crimson_100,
    fontSize: 12,
    flex: 1,
  },
  mmLayout: {
    height: 19,
    width: 37,
  },
  timeBorder: {
    paddingVertical: 8,
    borderRadius: Border.br_8xs,
    flex: 1,
    borderWidth: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    paddingHorizontal: Padding.p_mini,
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  mmTypo: {
    color: Color.dimgray_100,
    fontFamily: FontFamily.almaraiRegular,
    fontSize: 12,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  mm2Typo: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    color: Color.dimgray_100,
    fontSize: 12,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  yourMatchWith: {
    fontSize: FontSize.size_21xl,
    textAlign: "center",
    fontFamily: FontFamily.bebasNeueRegular,
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
    textAlign: "left",
    color: Color.gray_300,
  },
  markerPin01Icon: {
    overflow: "hidden",
  },
  location: {
    lineHeight: 14,
    fontWeight: "300",
    fontFamily: FontFamily.almaraiLight,
    fontSize: FontSize.size_2xs,
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
    paddingHorizontal: Padding.p_mini,
  },
  profile: {
    height: 71,
    paddingVertical: Padding.p_3xs,
    marginTop: 15,
    borderRadius: Border.br_mini,
    flexDirection: "row",
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_mini,
    overflow: "hidden",
  },
  pleaseReviewAnd: {
    fontSize: 15,
    marginTop: 15,
    textAlign: "center",
    color: Color.lightLabelPrimary,
    alignSelf: "stretch",
  },
  matchScores1: {
    alignItems: "flex-end",
    height: 28,
    display: "flex",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.lightLabelPrimary,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  dayOfWeek: {
    fontFamily: FontFamily.almaraiRegular,
    color: Color.crimson_100,
    fontSize: 12,
    textAlign: "center",
  },
  dayOfWeek1: {
    marginLeft: 15,
    fontFamily: FontFamily.almaraiRegular,
    color: Color.crimson_100,
    fontSize: 12,
    textAlign: "center",
  },
  subtitle: {
    paddingHorizontal: Padding.p_0,
    paddingVertical: Padding.p_8xs,
    borderRadius: Border.br_mini,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  mm: {
    color: Color.dimgray_100,
    fontFamily: FontFamily.almaraiRegular,
    fontSize: 12,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  dd: {
    flex: 1,
    alignSelf: "stretch",
  },
  startTime: {
    marginLeft: 30,
    justifyContent: "center",
  },
  insertMatchScores: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_11xs,
    borderRadius: Border.br_mini,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  dd1: {
    fontWeight: "800",
    fontFamily: FontFamily.almaraiExtrabold,
    color: Color.crimson_100,
    fontSize: 12,
    display: "flex",
    textAlign: "left",
    alignSelf: "stretch",
    alignItems: "center",
  },
  mm2: {
    height: 19,
    width: 37,
  },
  dd2: {
    flex: 1,
    alignSelf: "stretch",
  },
  submittedAvailability: {
    height: 114,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  confirmScores: {
    marginTop: 10,
    alignSelf: "stretch",
    alignItems: "center",
  },
  matchScores: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_xl,
    borderWidth: 1,
    marginTop: 15,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
    borderColor: "#000",
    borderStyle: "solid",
  },
  button: {
    color: Color.white,
    flex: 1,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    fontFamily: FontFamily.bebasNeueRegular,
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
    width: 149,
    height: 25,
    padding: Padding.p_mini,
    marginTop: 15,
    justifyContent: "center",
  },
  modalConflictResults: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    borderWidth: 2,
    width: 290,
    paddingVertical: 40,
    maxWidth: "100%",
    maxHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.p_mini,
    overflow: "hidden",
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
});

export default ModalConflictResults;
