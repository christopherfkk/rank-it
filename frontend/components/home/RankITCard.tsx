import React, { memo } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Padding, Border, Color, FontFamily } from "../../GlobalStyles";

const RankITCard = memo(() => {
  return (
    <View style={styles.birthdayParent}>
      <View style={[styles.birthday, styles.birthdayFlexBox]}>
        <Text style={[styles.day, styles.dayLayout]}>Day</Text>
        <Text style={styles.yearTypo}>Month</Text>
        <Text style={[styles.year, styles.yearTypo]}>Year</Text>
      </View>
      <View style={[styles.birthday1, styles.birthdayFlexBox]}>
        <TextInput
          style={styles.day1}
          placeholder="DD"
          keyboardType="number-pad"
          secureTextEntry={false}
          placeholderTextColor="#737373"
          maxLength={2}
          rejectResponderTermination
        />
        <TextInput
          style={[styles.month1, styles.year1ShadowBox]}
          placeholder="MM"
          keyboardType="numeric"
          placeholderTextColor="#737373"
          maxLength={2}
        />
        <TextInput
          style={[styles.year1, styles.year1ShadowBox]}
          placeholder="YYYY "
          placeholderTextColor="#737373"
          maxLength={4}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  birthdayFlexBox: {
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: Padding.p_0,
    flexDirection: "row",
    borderRadius: Border.br_mini,
    alignSelf: "stretch",
  },
  dayLayout: {
    height: 16,
    width: 26,
    display: "flex",
    alignItems: "center",
  },
  yearTypo: {
    marginLeft: 35,
    textAlign: "left",
    color: Color.lavenderblush,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: 12,
  },
  year1ShadowBox: {
    marginLeft: 6,
    height: 32,
    paddingHorizontal: Padding.p_mini,
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
    borderRadius: Border.br_8xs,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: 12,
    alignItems: "center",
    paddingVertical: 8,
    flexDirection: "row",
  },
  day: {
    textAlign: "left",
    color: Color.lavenderblush,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: 12,
    height: 16,
    width: 26,
    display: "flex",
  },
  year: {
    height: 16,
    width: 26,
    display: "flex",
    alignItems: "center",
  },
  birthday: {
    height: 15,
  },
  day1: {
    width: 51,
    paddingHorizontal: Padding.p_mini,
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
    borderRadius: Border.br_8xs,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: 12,
    paddingVertical: 8,
    justifyContent: "center",
  },
  month1: {
    width: 64,
  },
  year1: {
    width: 78,
  },
  birthday1: {
    height: 34,
    marginTop: 6,
  },
  birthdayParent: {
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_0,
    marginTop: 18,
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default RankITCard;
