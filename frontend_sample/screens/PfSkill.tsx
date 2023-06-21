import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import BadmintonSkillLevelContainer from "../components/BadmintonSkillLevelContainer";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const PfSkill = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pfSkill}>
      <View style={styles.statusBarLight}>
        <Image
          style={styles.icons}
          contentFit="cover"
          source={require("../assets/icons1.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
      <View style={[styles.signUpBody, styles.iconFlexBox]}>
        <Text style={[styles.whatsYourBadminton, styles.yourTypo]}>{`
What’s your badminton skill level?`}</Text>
        <Text style={[styles.selfAssessYourBadminton, styles.yourTypo]}>
          Self-assess your badminton skill level.
        </Text>
        <BadmintonSkillLevelContainer />
        <TouchableOpacity
          style={styles.forwardButton}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("PfBlurb")}
        >
          <Image
            style={[styles.icon, styles.iconFlexBox]}
            contentFit="cover"
            source={require("../assets/group-8625.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
    flex: 1,
  },
  yourTypo: {
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textAlign: "left",
    alignSelf: "stretch",
  },
  icons: {
    top: 17,
    right: 14,
    width: 67,
    height: 11,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    left: 32,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.roboto,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    top: "50%",
    position: "absolute",
  },
  statusBarLight: {
    backgroundColor: Color.white,
    height: 48,
    transform: [
      {
        rotate: "-0.12deg",
      },
    ],
    alignSelf: "stretch",
  },
  whatsYourBadminton: {
    fontSize: 29,
    color: Color.gray,
    zIndex: 0,
  },
  selfAssessYourBadminton: {
    fontSize: FontSize.size_smi,
    zIndex: 1,
    marginTop: 21,
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  icon: {
    marginTop: 76.15,
    marginLeft: 67.5,
    maxWidth: 42,
    maxHeight: 42,
    minWidth: 42,
    minHeight: 42,
    width: "100%",
  },
  forwardButton: {
    left: "50%",
    zIndex: 3,
    top: "50%",
    position: "absolute",
    width: "100%",
  },
  signUpBody: {
    backgroundColor: Color.orange,
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_4xs,
    alignItems: "center",
  },
  pfSkill: {
    height: 655,
    width: "100%",
    flex: 1,
  },
});

export default PfSkill;
