import React, { memo } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import SubmittedAvailabilityCard from "./SubmittedAvailabilityCard";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const AvailabilityCard = memo(() => {
  return (
    <View style={[styles.timeslots, styles.timeslotsFlexBox]}>
      <Text style={styles.subheading}>Availability</Text>
      <View style={styles.timeslots1}>
        <SubmittedAvailabilityCard
          dimensionsText={require("../assets/ellipse-471.png")}
          dimensionsText2={require("../assets/vector-81.png")}
          timeColor="#000"
          buttonColor="#000"
          endTimeColor="#000"
        />
        <View style={styles.unsubmittedAvailability}>
          <Image
            style={styles.addRingIcon}
            contentFit="cover"
            source={require("../assets/add-ring.png")}
          />
          <Image
            style={[styles.birthdayIcon, styles.timeslotsFlexBox]}
            contentFit="cover"
            source={require("../assets/birthday.png")}
          />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  timeslotsFlexBox: {
    flex: 1,
    alignSelf: "stretch",
  },
  subheading: {
    fontSize: FontSize.size_xl,
    letterSpacing: 0.6,
    lineHeight: 26,
    fontFamily: FontFamily.bebasNeueRegular,
    color: Color.gray_300,
    textAlign: "left",
    alignSelf: "stretch",
  },
  addRingIcon: {
    width: 15,
    height: 15,
  },
  birthdayIcon: {
    borderRadius: Border.br_mini,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    width: "100%",
    opacity: 0.5,
    marginTop: 6,
  },
  unsubmittedAvailability: {
    height: 55,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_0,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  timeslots1: {
    marginTop: 24,
    alignItems: "center",
  },
  timeslots: {
    marginTop: 10,
    alignItems: "center",
  },
});

export default AvailabilityCard;
