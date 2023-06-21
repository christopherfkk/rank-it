import React, { memo } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Padding, Border, FontFamily, Color } from "../GlobalStyles";

const BadmintonSkillLevelContainer = memo(() => {
  return (
    <Pressable style={styles.skillLevel}>
      <TouchableHighlight
        style={styles.beginner}
        underlayColor="#4d7859"
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <Text style={styles.male}>Beginner</Text>
      </TouchableHighlight>
      <TouchableOpacity
        style={[styles.intermediate, styles.expertShadowBox]}
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <Text style={styles.male}>Intermediate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.expert, styles.expertShadowBox]}
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <Text style={styles.male}>Expert</Text>
      </TouchableOpacity>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  expertShadowBox: {
    marginTop: 10,
    paddingVertical: 8,
    height: 33,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    paddingHorizontal: Padding.p_mini,
    borderRadius: Border.br_mini,
    alignSelf: "stretch",
  },
  male: {
    fontSize: 12,
    fontWeight: "800",
    fontFamily: FontFamily.manropeExtrabold,
    color: Color.white,
    textAlign: "left",
  },
  beginner: {
    backgroundColor: Color.lightgreen,
    paddingVertical: 8,
    height: 33,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    paddingHorizontal: Padding.p_mini,
    borderRadius: Border.br_mini,
    alignSelf: "stretch",
  },
  intermediate: {
    backgroundColor: Color.steelblue,
  },
  expert: {
    backgroundColor: Color.red_100,
  },
  skillLevel: {
    paddingVertical: Padding.p_0,
    alignItems: "center",
    zIndex: 2,
    marginTop: 21,
    justifyContent: "center",
    paddingHorizontal: Padding.p_mini,
    borderRadius: Border.br_mini,
    alignSelf: "stretch",
  },
});

export default BadmintonSkillLevelContainer;
