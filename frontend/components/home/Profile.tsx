import React, { memo } from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "expo-image";
import { Padding, Color, FontSize, FontFamily, Border } from "../../GlobalStyles";

type ProfileType = {
  style?: StyleProp<ViewStyle>;
};

const Profile = memo(({ style }: ProfileType) => {
  return (
    <Pressable style={[styles.profile, style]}>
      <View style={styles.profile1}>
        <Image
          style={styles.memberPhotoIcon}
          contentFit="cover"
          source={require("../../assets/memberphoto2.png")}
        />
        <View style={[styles.bottomBar, styles.bottomBarSpaceBlock]}>
          <Text style={[styles.fullName, styles.fullNameFlexBox]}>
            Samuel Jackson
          </Text>
          <View style={[styles.question, styles.questionFlexBox]}>
            <Image
              style={[styles.markerPin01Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../../assets/markerpin01.png")}
            />
            <View style={[styles.locationWrapper, styles.bottomBarSpaceBlock]}>
              <Text style={[styles.location, styles.fullNameFlexBox]}>
                Shinjuku, Tokyo
              </Text>
            </View>
          </View>
          <View style={styles.questionFlexBox}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../../assets/vector.png")}
            />
            <View style={[styles.locationWrapper, styles.bottomBarSpaceBlock]}>
              <Text style={[styles.location, styles.fullNameFlexBox]}>
                Intermediate
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
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
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  iconLayout: {
    height: 10,
    width: 10,
  },
  memberPhotoIcon: {
    borderRadius: 211,
    width: 50,
    height: 50,
  },
  fullName: {
    fontSize: FontSize.size_xl,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
  },
  markerPin01Icon: {
    overflow: "hidden",
    width: 10,
  },
  location: {
    fontSize: FontSize.size_2xs,
    lineHeight: 14,
    fontWeight: "300",
    fontFamily: FontFamily.almaraiLight,
  },
  locationWrapper: {
    width: 118,
    paddingHorizontal: Padding.p_8xs,
    justifyContent: "center",
  },
  question: {
    justifyContent: "center",
  },
  bottomBar: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_mini,
    alignSelf: "stretch",
    paddingVertical: Padding.p_0,
  },
  profile1: {
    flex: 1,
    borderStyle: "solid",
    borderColor: "#737373",
    borderWidth: 1,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
    overflow: "hidden",
    alignSelf: "stretch",
    borderRadius: Border.br_mini,
  },
  profile: {
    backgroundColor: Color.whitesmoke_100,
    width: 318,
    height: 100,
    borderRadius: Border.br_mini,
  },
});

export default Profile;
