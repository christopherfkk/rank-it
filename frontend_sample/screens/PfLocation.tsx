import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const PfLocation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pfLocation}>
      <View style={[styles.statusBarLight, styles.locationBg]}>
        <Image
          style={styles.icons}
          contentFit="cover"
          source={require("../assets/icons2.png")}
        />
        <Text style={[styles.time, styles.timePosition]}>9:41</Text>
      </View>
      <View style={[styles.signUpBody, styles.iconFlexBox]}>
        <Text style={styles.whatsYourLocation}>{`
What’s your location?`}</Text>
        <TextInput
          style={[styles.location, styles.locationBg]}
          placeholder="Enter your  location"
          placeholderTextColor="#737373"
        />
        <Pressable
          style={[styles.forwardButton, styles.timePosition]}
          onPress={() => navigation.navigate("PfGender")}
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
  locationBg: {
    backgroundColor: Color.white,
    alignSelf: "stretch",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  iconFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
    flex: 1,
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
    color: Color.lightLabelPrimary,
    textAlign: "left",
  },
  statusBarLight: {
    height: 48,
    transform: [
      {
        rotate: "-0.12deg",
      },
    ],
  },
  whatsYourLocation: {
    fontSize: 29,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.gray,
    zIndex: 0,
    textAlign: "left",
    alignSelf: "stretch",
  },
  location: {
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
    height: 33,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 8,
    justifyContent: "center",
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    fontSize: 12,
    zIndex: 1,
    marginTop: 21,
  },
  icon: {
    marginTop: 37.15,
    marginLeft: 84.5,
    maxWidth: 42,
    maxHeight: 42,
    minWidth: 42,
    minHeight: 42,
    width: "100%",
  },
  forwardButton: {
    left: "50%",
    zIndex: 2,
    width: "100%",
  },
  signUpBody: {
    backgroundColor: Color.orange,
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_4xs,
    alignItems: "center",
  },
  pfLocation: {
    height: 655,
    width: "100%",
    flex: 1,
  },
});

export default PfLocation;
