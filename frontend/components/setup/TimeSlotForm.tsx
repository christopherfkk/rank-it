import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TextInput } from "react-native";
import SubmittedAvailabilityCard from "../home/SubmittedAvailabilityCard";
import { Padding, Color, Border, FontFamily } from "../../GlobalStyles";

const TimeSlotForm = memo(() => {
  return (
    <View style={[styles.timeslots, styles.timeslotsFlexBox]}>
      <SubmittedAvailabilityCard
        dimensionsText={require("../../assets/ellipse-47.png")}
        dimensionsText2={require("../../assets/vector-8.png")}
      />
      <View style={[styles.unsubmittedAvailability, styles.timeslotsFlexBox]}>
        <Image
          style={styles.addRingIcon}
          contentFit="cover"
          source={require("../../assets/add-ring1.png")}
        />
        <View style={styles.birthday}>
          <View style={styles.year}>
            <Text style={styles.ddTypo}>Monday</Text>
          </View>
          <View style={[styles.day, styles.dayShadowBox]}>
            <Text style={[styles.dd, styles.ddTypo]}>12:00</Text>
          </View>
          <View
            style={[styles.month, styles.dayShadowBox]}
            placeholder="16:00"
          />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  timeslotsFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  dayShadowBox: {
    marginLeft: 6,
    paddingHorizontal: Padding.p_mini,
    height: 32,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    paddingVertical: 8,
    borderRadius: Border.br_mini,
  },
  ddTypo: {
    textAlign: "left",
    color: Color.dimgray_100,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: 12,
  },
  addRingIcon: {
    width: 15,
    height: 15,
  },
  year: {
    width: 78,
    paddingHorizontal: Padding.p_mini,
    height: 32,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    paddingVertical: 8,
    flexDirection: "row",
    borderRadius: Border.br_mini,
    alignItems: "center",
  },
  dd: {
    display: "flex",
    flex: 1,
    color: Color.dimgray_100,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: 12,
    alignItems: "center",
    alignSelf: "stretch",
  },
  day: {
    width: 60,
    justifyContent: "center",
  },
  month: {
    width: 64,
    flexDirection: "row",
    marginLeft: 6,
    alignItems: "center",
  },
  birthday: {
    paddingHorizontal: Padding.p_0,
    opacity: 0.5,
    marginTop: 6,
    paddingVertical: 8,
    borderRadius: Border.br_mini,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  unsubmittedAvailability: {
    height: 55,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_0,
    justifyContent: "center",
  },
  timeslots: {
    marginTop: 18,
  },
});

export default TimeSlotForm;
