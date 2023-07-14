import React, { useState, useMemo, memo } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Image } from "expo-image";
import { Padding, Border, FontFamily, Color } from "../GlobalStyles";

type SubmittedAvailabilityCardType = {
  dimensionsText?: ImageSourcePropType;
  dimensionsText2?: ImageSourcePropType;

  /** Style props */
  timeColor?: string;
  buttonColor?: string;
  endTimeColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SubmittedAvailabilityCard = memo(
  ({
    dimensionsText,
    dimensionsText2,
    timeColor,
    buttonColor,
    endTimeColor,
  }: SubmittedAvailabilityCardType) => {
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
    const [dayOfWeek1Open, setDayOfWeek1Open] = useState(false);
    const [dayOfWeek1Items, setDayOfWeek1Items] = useState([
      { value: "Monday", label: "Monday" },
      { value: "Tuesday", label: "Tuesday" },
      { value: "Wednesday", label: "Wednesday" },
      { value: "Thursday", label: "Thursday" },
      { value: "Friday", label: "Friday" },
      { value: "Saturday", label: "Saturday" },
      { value: "Sunday", label: "Sunday" },
    ]);
    const dayOfWeekStyle = useMemo(() => {
      return {
        ...getStyleValue("color", timeColor),
      };
    }, [timeColor]);

    const startTimeStyle = useMemo(() => {
      return {
        ...getStyleValue("color", buttonColor),
      };
    }, [buttonColor]);

    const endTimeStyle = useMemo(() => {
      return {
        ...getStyleValue("color", endTimeColor),
      };
    }, [endTimeColor]);

    return (
      <View style={[styles.submittedAvailability, styles.buttonFlexBox]}>
        <View style={[styles.time, styles.timeSpaceBlock]}>
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Text style={[styles.dayOfWeek, styles.endTypo, dayOfWeekStyle]}>
              Day of week
            </Text>
            <View
              style={[styles.dayOfWeek1, styles.timeShadowBox]}
              placeholder="Monday"
              maxLength="4"
            >
              <DropDownPicker
                style={styles.endBorder}
                open={dayOfWeekOpen}
                setOpen={setDayOfWeekOpen}
                items={dayOfWeekItems}
                labelStyle={styles.dayOfWeekValue}
                dropDownContainerStyle={styles.dayOfWeekdropDownContainer}
              />
            </View>
          </View>
          <View style={[styles.button1, styles.buttonFlexBox]}>
            <Text style={[styles.dayOfWeek, styles.endTypo, startTimeStyle]}>
              Start time
            </Text>
            <TextInput
              style={[styles.startTime1, styles.endBorder]}
              placeholder="YYYY "
              placeholderTextColor="#737373"
              maxLength={4}
            />
          </View>
          <View style={[styles.button1, styles.buttonFlexBox]}>
            <Text style={[styles.dayOfWeek, styles.endTypo, endTimeStyle]}>
              End time
            </Text>
            <TextInput
              style={[styles.endTime1, styles.endBorder]}
              placeholder="YYYY "
              placeholderTextColor="#737373"
              maxLength={4}
            />
          </View>
        </View>
        <View style={[styles.time1, styles.timeSpaceBlock]}>
          <View style={[styles.button, styles.buttonFlexBox]}>
            <View
              style={[styles.dayOfWeek2, styles.timeShadowBox1]}
              placeholder="Monday"
              maxLength="4"
            >
              <DropDownPicker
                style={styles.endBorder}
                open={dayOfWeek1Open}
                setOpen={setDayOfWeek1Open}
                items={dayOfWeek1Items}
                labelStyle={styles.dayOfWeek1Value}
                dropDownContainerStyle={styles.dayOfWeek1dropDownContainer}
              />
            </View>
          </View>
          <View style={[styles.button1, styles.buttonFlexBox]}>
            <TextInput
              style={[styles.startTime2, styles.endBorder]}
              placeholder="YYYY "
              placeholderTextColor="#737373"
              maxLength={4}
            />
          </View>
          <View style={[styles.button1, styles.buttonFlexBox]}>
            <TextInput
              style={[styles.endTime2, styles.endBorder]}
              placeholder="YYYY "
              placeholderTextColor="#737373"
              maxLength={4}
            />
          </View>
          <Pressable style={styles.remove}>
            <Image
              style={styles.removeChild}
              contentFit="cover"
              source={dimensionsText}
            />
            <Image
              style={styles.removeItem}
              contentFit="cover"
              source={dimensionsText2}
            />
          </Pressable>
        </View>
      </View>
    );
  }
);

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
  dayOfWeek1Value: {
    color: "#737373",
    fontSize: 11.553038597106934,
    fontWeight: "500",
    fontFamily: "Manrope_medium",
  },
  dayOfWeek1dropDownContainer: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  buttonFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  timeSpaceBlock: {
    paddingVertical: 8,
    paddingHorizontal: Padding.p_0,
    flexDirection: "row",
    borderRadius: Border.br_mini,
    alignItems: "center",
  },
  endTypo: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: 12,
  },
  timeShadowBox: {
    marginTop: 6,
    paddingHorizontal: Padding.p_mini,
    height: 32,
    width: 78,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_8xs,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  endBorder: {
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: Color.white,
    borderStyle: "solid",
  },
  timeShadowBox1: {
    paddingHorizontal: Padding.p_mini,
    height: 32,
    width: 78,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_8xs,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  dayOfWeek: {
    color: Color.white,
    textAlign: "left",
  },
  dayOfWeek1: {
    borderStyle: "solid",
  },
  button: {
    justifyContent: "center",
  },
  startTime1: {
    marginTop: 6,
    paddingHorizontal: Padding.p_mini,
    height: 32,
    width: 78,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_8xs,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: 12,
  },
  button1: {
    marginLeft: 6,
    justifyContent: "center",
  },
  endTime1: {
    marginTop: 6,
    paddingHorizontal: Padding.p_mini,
    height: 32,
    width: 78,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_8xs,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: 12,
  },
  time: {
    height: 53,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  dayOfWeek2: {
    borderStyle: "solid",
  },
  startTime2: {
    paddingHorizontal: Padding.p_mini,
    height: 32,
    width: 78,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_8xs,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: 12,
  },
  endTime2: {
    paddingHorizontal: Padding.p_mini,
    height: 32,
    width: 78,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_8xs,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: 12,
  },
  removeChild: {
    width: 12,
    height: 12,
    zIndex: 0,
    borderRadius: Border.br_11xs,
  },
  removeItem: {
    position: "absolute",
    height: "6.85%",
    width: "37.5%",
    top: "46.57%",
    right: "31.25%",
    bottom: "46.57%",
    left: "31.25%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    zIndex: 1,
    borderRadius: Border.br_11xs,
  },
  remove: {
    padding: Padding.p_11xs,
    marginLeft: 6,
  },
  time1: {
    width: 243,
    height: 49,
  },
  submittedAvailability: {
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_0,
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default SubmittedAvailabilityCard;
