import React, { memo } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
} from "react-native";
import RegButton from "../auth/RegButton";
import { Color, FontFamily, FontSize, Border, Padding } from "../../GlobalStyles";

type OpponentContainerType = {
  /** Action props */
  onFrameTouchableOpacityPress?: () => void;
};

const OpponentContainer = memo(
  ({ onFrameTouchableOpacityPress }: OpponentContainerType) => {
    return (
      <View style={[styles.opponent, styles.profileFlexBox]}>
        <TouchableOpacity
          style={[styles.profileParent, styles.wrapperFlexBox]}
          activeOpacity={0.2}
          onPress={onFrameTouchableOpacityPress}
        >
          <View style={[styles.profile, styles.profileFlexBox]}>
            <Text style={[styles.text, styles.textFlexBox]}>1</Text>
            <ImageBackground
              style={[styles.avatarIcon, styles.nameSpaceBlock]}
              resizeMode="cover"
              source={require("../../assets/avatar.png")}
            />
            <View style={[styles.name, styles.nameSpaceBlock]}>
              <Text style={[styles.christopherFok, styles.text1Typo]}>
                Christopher Fok
              </Text>
            </View>
          </View>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text1, styles.text1Typo]}>1231</Text>
          </View>
          <RegButton
            pfButtonWidth="unset"
            pfButtonHeight={29}
            button="start"
            pfButtonMarginTop="unset"
            pfButtonFlex={1}
            pfButtonMarginLeft={10}
          />
        </TouchableOpacity>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  profileFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapperFlexBox: {
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  nameSpaceBlock: {
    marginLeft: 5,
    justifyContent: "center",
    overflow: "hidden",
  },
  text1Typo: {
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
  },
  text: {
    fontSize: FontSize.size_smi,
    fontWeight: "800",
    fontFamily: FontFamily.manropeExtrabold,
    color: Color.orange,
    width: 12,
    height: 39,
    textAlign: "center",
    justifyContent: "center",
  },
  avatarIcon: {
    borderRadius: Border.br_81xl,
    width: 29,
    height: 30,
    alignItems: "center",
  },
  christopherFok: {
    lineHeight: 10,
    textAlign: "left",
    width: 88,
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
  name: {
    paddingHorizontal: Padding.p_0,
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
  },
  profile: {
    width: 127,
    height: 35,
    alignItems: "center",
  },
  text1: {
    textAlign: "center",
  },
  wrapper: {
    width: 47,
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_7xs,
    marginLeft: 10,
    justifyContent: "center",
  },
  profileParent: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.lavenderblush,
    padding: Padding.p_3xs,
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  opponent: {
    height: 45,
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_0,
    marginTop: 9,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default OpponentContainer;
