import React, { useState, memo } from "react";
import { View, Pressable, StyleSheet, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import DropDownPicker from "react-native-dropdown-picker";
import CrossButton from "./CrossButton";
import ModalTitle from "./ModalTitle";
import { Padding, Color, FontFamily, Border, FontSize } from "../GlobalStyles";

type ModalProposeMatchType = {
  onClose?: () => void;
};

const ModalProposeMatch = memo(({ onClose }: ModalProposeMatchType) => {
  const [dayOfWeekOpen, setDayOfWeekOpen] = useState(false);
  const [dayOfWeekItems, setDayOfWeekItems] = useState([
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
    { value: "Saturday", label: "Saturday" },
    { value: "Sunday", label: "Sunday" },
  ]);

  return (
    <View style={styles.modalProposeMatch}>
      <CrossButton />
      <View style={[styles.mainFrame, styles.buttonFlexBox]}>
        <ModalTitle />
        <Pressable style={styles.profile}>
          <View style={[styles.profile1, styles.profile1SpaceBlock]}>
            <Image
              style={styles.memberPhotoIcon}
              contentFit="cover"
              source={require("../assets/memberphoto7.png")}
            />
            <View style={[styles.bottomBar, styles.bottomBarSpaceBlock]}>
              <Text style={[styles.fullName, styles.fullNameClr]}>
                Jenny Tang
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
                  <Text style={[styles.location, styles.fullNameClr]}>
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
                  <Text style={[styles.location, styles.fullNameClr]}>
                    Expert
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Pressable>
        <Text style={[styles.proposeAMatch, styles.fullNameTypo]}>
          Propose a match location and time
        </Text>
        <TextInput
          style={styles.matchLocation}
          placeholder="Match Location"
          placeholderTextColor="#737373"
        />
        <View style={styles.time}>
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Text style={[styles.dayOfWeek, styles.timeTypo]}>Day of week</Text>
            <View
              style={styles.timeShadowBox}
              placeholder="Monday"
              maxLength="4"
            >
              <DropDownPicker
                style={[styles.dropdownpicker, styles.timeBorder]}
                open={dayOfWeekOpen}
                setOpen={setDayOfWeekOpen}
                items={dayOfWeekItems}
                labelStyle={styles.dayOfWeekValue}
                dropDownContainerStyle={styles.dayOfWeekdropDownContainer}
              />
            </View>
          </View>
          <View style={[styles.button1, styles.buttonFlexBox]}>
            <Text style={[styles.dayOfWeek, styles.timeTypo]}>Start time</Text>
            <TextInput
              style={[styles.startTime1, styles.timeShadowBox]}
              placeholder="YYYY "
              placeholderTextColor="#737373"
              maxLength={4}
            />
          </View>
          <View style={[styles.button1, styles.buttonFlexBox]}>
            <Text style={[styles.dayOfWeek, styles.timeTypo]}>End time</Text>
            <TextInput
              style={[styles.endTime1, styles.timeShadowBox]}
              placeholder="YYYY "
              placeholderTextColor="#737373"
              maxLength={4}
            />
          </View>
        </View>
        <Text style={styles.weTakeNoShows}>
          We take no-shows seriously and might ban users that don’t show up.
          Once matched, communicate with your opponents through WhatsApp.
        </Text>
        <Pressable style={styles.pfButton}>
          <Text style={styles.button3} numberOfLines={3}>
            submit
          </Text>
        </Pressable>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  dayOfWeekValue: {
    color: "#737373",
    fontSize: 11.553038597106934,
    fontWeight: "500",
    fontFamily: "Manrope_medium",
  },
  dayOfWeekdropDownContainer: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  buttonFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  profile1SpaceBlock: {
    paddingHorizontal: Padding.p_mini,
    alignSelf: "stretch",
  },
  bottomBarSpaceBlock: {
    paddingVertical: Padding.p_0,
    justifyContent: "center",
    overflow: "hidden",
  },
  fullNameClr: {
    color: Color.gray_300,
    textAlign: "left",
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
  timeTypo: {
    fontSize: 12,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  timeBorder: {
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: Color.white,
  },
  timeShadowBox: {
    marginTop: 6,
    width: 78,
    height: 32,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    paddingVertical: 8,
    borderRadius: Border.br_8xs,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    alignItems: "center",
    borderStyle: "solid",
  },
  memberPhotoIcon: {
    borderRadius: 211,
    width: 50,
    height: 50,
  },
  fullName: {
    fontSize: FontSize.size_xl,
    lineHeight: 20,
    textAlign: "left",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  markerPin01Icon: {
    overflow: "hidden",
  },
  location: {
    lineHeight: 14,
    fontWeight: "300",
    fontFamily: FontFamily.almaraiLight,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
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
  profile1: {
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
    borderRadius: Border.br_mini,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  profile: {
    borderRadius: Border.br_mini,
    marginTop: 15,
    alignSelf: "stretch",
  },
  proposeAMatch: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.lightLabelPrimary,
    marginTop: 15,
    alignSelf: "stretch",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  matchLocation: {
    width: 255,
    height: 30,
    paddingHorizontal: Padding.p_3xs,
    fontSize: FontSize.size_xs_5,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    paddingVertical: Padding.p_0,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  dayOfWeek: {
    color: Color.lightLabelPrimary,
    textAlign: "left",
  },
  dropdownpicker: {
    borderStyle: "solid",
    borderWidth: 1,
  },
  button: {
    justifyContent: "center",
  },
  startTime1: {
    fontSize: 12,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: Color.white,
  },
  button1: {
    marginLeft: 6,
    justifyContent: "center",
  },
  endTime1: {
    fontSize: 12,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: Color.white,
  },
  time: {
    height: 53,
    paddingVertical: 8,
    flexDirection: "row",
    borderRadius: Border.br_mini,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.p_0,
    alignSelf: "stretch",
  },
  weTakeNoShows: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.manropeRegular,
    width: 251,
    height: 60,
    color: Color.lightLabelPrimary,
    textAlign: "left",
    marginTop: 15,
  },
  button3: {
    flex: 1,
    fontFamily: FontFamily.bebasNeueRegular,
    color: Color.white,
    textAlign: "center",
    fontSize: FontSize.size_2xs,
  },
  pfButton: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.crimson_100,
    width: 134,
    padding: Padding.p_mini,
    height: 32,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  mainFrame: {
    paddingVertical: Padding.p_31xl,
    marginTop: 15,
    justifyContent: "center",
    paddingHorizontal: Padding.p_0,
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  modalProposeMatch: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    borderWidth: 2,
    width: 311,
    padding: Padding.p_3xs,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    borderColor: "#000",
    backgroundColor: Color.white,
    borderStyle: "solid",
  },
});

export default ModalProposeMatch;
