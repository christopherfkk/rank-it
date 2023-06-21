import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import AgeCard from "../components/AgeCard";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const PfBirthday = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pfBirthday}>
      <View style={styles.statusBarLight}>
        <Image
          style={styles.icons}
          contentFit="cover"
          source={require("../assets/icons2.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
      <View style={[styles.signUpBody, styles.iconFlexBox]}>
        <Text style={[styles.whensYourBirthday, styles.youllBeAbleTypo]}>{`
When’s your birthday?`}</Text>
        <Text
          style={[styles.youllBeAble, styles.youllBeAbleTypo]}
        >{`You’ll be able to see opponents’ age before matching `}</Text>
        <AgeCard />
        <Pressable
          style={styles.forwardButton}
          onPress={() => navigation.navigate("PfLocation")}
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
  iconFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
    flex: 1,
  },
  youllBeAbleTypo: {
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
  whensYourBirthday: {
    fontSize: 29,
    color: Color.gray,
    zIndex: 0,
  },
  youllBeAble: {
    fontSize: FontSize.size_smi,
    zIndex: 1,
    marginTop: 21,
    color: Color.lightLabelPrimary,
    fontWeight: "700",
  },
  icon: {
    marginTop: 34.3,
    marginLeft: 88.5,
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
  pfBirthday: {
    height: 655,
    width: "100%",
    flex: 1,
  },
});

export default PfBirthday;
