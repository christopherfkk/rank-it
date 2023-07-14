import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

type ProfileContainerType = {
  productIds?: ImageSourcePropType;
  productIdsArray?: ImageSourcePropType;
  productIdsString?: ImageSourcePropType;
  productIdsString20x20x?: ImageSourcePropType;

  /** Style props */
  propHeight?: number | string;
  propColor?: string;
  propColor1?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ProfileContainer = memo(
  ({
    productIds,
    productIdsArray,
    productIdsString,
    productIdsString20x20x,
    propHeight,
    propColor,
    propColor1,
  }: ProfileContainerType) => {
    const bottomBarStyle = useMemo(() => {
      return {
        ...getStyleValue("height", propHeight),
      };
    }, [propHeight]);

    const mathesTextStyle = useMemo(() => {
      return {
        ...getStyleValue("color", propColor),
      };
    }, [propColor]);

    const profileTextStyle = useMemo(() => {
      return {
        ...getStyleValue("color", propColor1),
      };
    }, [propColor1]);

    return (
      <View style={[styles.bottomBar, bottomBarStyle]}>
        <View style={styles.menuActionopenpdfhttpsw}>
          <View style={styles.navFlexBox}>
            <Image
              style={[styles.rankingIcon, styles.iconLayout]}
              contentFit="cover"
              source={productIds}
            />
            <Text style={[styles.rankingText, styles.textTypo]}>Ranking</Text>
          </View>
          <View style={[styles.matchesNav, styles.navFlexBox]}>
            <Image
              style={[styles.rankingIcon, styles.iconLayout]}
              contentFit="cover"
              source={productIdsArray}
            />
            <Text style={[styles.mathesText, styles.textTypo, mathesTextStyle]}>
              Matches
            </Text>
          </View>
          <View style={[styles.matchesNav, styles.navFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={productIdsString}
            />
            <Text style={[styles.rankingText, styles.textTypo]}>Events</Text>
          </View>
          <View style={[styles.matchesNav, styles.navFlexBox]}>
            <Image
              style={[styles.memberPhotoIcon, styles.iconLayout]}
              contentFit="cover"
              source={productIdsString20x20x}
            />
            <Text
              style={[styles.rankingText, styles.textTypo, profileTextStyle]}
            >
              Profile
            </Text>
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  iconLayout: {
    height: 20,
    width: 20,
  },
  textTypo: {
    marginTop: 1,
    height: 15,
    textAlign: "center",
    fontFamily: FontFamily.bebasNeueRegular,
    lineHeight: 13,
    letterSpacing: 1,
    fontSize: FontSize.size_3xs,
  },
  navFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  rankingIcon: {
    overflow: "hidden",
    height: 20,
    width: 20,
  },
  rankingText: {
    color: Color.lightLabelPrimary,
    width: 40,
  },
  mathesText: {
    color: Color.crimson_100,
    width: 45,
  },
  matchesNav: {
    marginLeft: 17,
  },
  memberPhotoIcon: {
    borderRadius: Border.br_131xl,
  },
  menuActionopenpdfhttpsw: {
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_0,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  bottomBar: {
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#737373",
    borderTopWidth: 0.5,
    height: 54,
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
});

export default ProfileContainer;
