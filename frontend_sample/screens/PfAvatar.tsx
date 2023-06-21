import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const PfAvatar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pfAvatar}>
      <View style={styles.statusBarLight}>
        <Image
          style={styles.icons}
          contentFit="cover"
          source={require("../assets/icons2.png")}
        />
        <Text style={[styles.time, styles.timeClr]}>9:41</Text>
      </View>
      <View style={[styles.signUpBody, styles.iconFlexBox]}>
        <Text style={[styles.addYourFirst, styles.addTypo]}>{`
Add your first photo!`}</Text>
        <Text style={[styles.completeYourRankit, styles.addTypo]}>
          Complete your RankIT profile with a photo to showcase your badminton
          passion and connect with fellow players.
        </Text>
        <Pressable style={styles.profilePhoto}>
          <Text style={[styles.addPhoto, styles.addTypo]}>+</Text>
        </Pressable>
        <Pressable
          style={styles.forwardButton}
          onPress={() => navigation.navigate("PfBirthday")}
        >
          <Image
            style={[styles.icon, styles.iconFlexBox]}
            contentFit="cover"
            source={require("../assets/group-8625.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeClr: {
    color: Color.lightLabelPrimary,
    textAlign: "left",
  },
  iconFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
    flex: 1,
  },
  addTypo: {
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
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
    top: "50%",
    left: 32,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.roboto,
    textAlign: "left",
    position: "absolute",
  },
  statusBarLight: {
    height: 48,
    transform: [
      {
        rotate: "-0.12deg",
      },
    ],
    backgroundColor: Color.white,
    alignSelf: "stretch",
  },
  addYourFirst: {
    fontSize: 29,
    color: Color.gray,
    zIndex: 0,
    textAlign: "left",
    alignSelf: "stretch",
  },
  completeYourRankit: {
    fontSize: FontSize.size_smi,
    zIndex: 1,
    marginTop: 21,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    alignSelf: "stretch",
  },
  addPhoto: {
    fontSize: 40,
    color: Color.dimgray_100,
    textAlign: "center",
  },
  profilePhoto: {
    borderRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 158,
    height: 97,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 8,
    justifyContent: "center",
    zIndex: 2,
    marginTop: 21,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  icon: {
    marginLeft: 95.5,
    maxWidth: 42,
    maxHeight: 42,
    minWidth: 42,
    minHeight: 42,
    width: "100%",
  },
  forwardButton: {
    left: "50%",
    top: 332,
    zIndex: 3,
    position: "absolute",
    width: "100%",
  },
  signUpBody: {
    backgroundColor: Color.orange,
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_4xs,
    alignItems: "center",
  },
  pfAvatar: {
    height: 655,
    width: "100%",
    flex: 1,
  },
});

export default PfAvatar;
