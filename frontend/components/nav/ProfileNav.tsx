import React, { memo } from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";

type ProfileNavType = {
  style?: StyleProp<ViewStyle>;
};

const ProfileNav = memo(({ style }: ProfileNavType) => {
  return (
    <View style={[styles.profileNav, style]}>
      <Image
        style={styles.memberPhotoIcon}
        contentFit="cover"
        source={require("../../assets/avatar.png")}
      />
      <Text style={styles.profileText}>Profile</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  memberPhotoIcon: {
    borderRadius: Border.br_131xl,
    width: 20,
    height: 20,
  },
  profileText: {
    fontSize: FontSize.size_3xs,
    letterSpacing: 1,
    lineHeight: 13,
    fontFamily: FontFamily.bebasNeueRegular,
    color: Color.lightLabelPrimary,
    textAlign: "center",
    width: 40,
    height: 15,
    marginTop: 1,
  },
  profileNav: {
    alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
    padding: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileNav;
