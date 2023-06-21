import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Border, Color, FontSize } from "../GlobalStyles";

const PfName = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pfName}>
      <View style={styles.statusBarLight}>
        <Image
          style={styles.icons}
          contentFit="cover"
          source={require("../assets/icons2.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
      <View style={[styles.signUpBody, styles.iconFlexBox]}>
        <Text style={styles.whatsYourFirst}>{`
What’s your first and last name?`}</Text>
        <Text style={styles.youWontBe}>
          You won’t be able to change this later
        </Text>
        <TextInput
          style={[styles.firstname, styles.lastnameShadowBox]}
          placeholder="Enter your first name"
          placeholderTextColor="#737373"
        />
        <TextInput
          style={[styles.lastname, styles.lastnameShadowBox]}
          placeholder="Enter your first name"
          placeholderTextColor="#737373"
        />
        <TouchableOpacity
          style={styles.forwardButton}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("PfAvatar")}
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
  lastnameShadowBox: {
    fontSize: 12,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    justifyContent: "center",
    paddingVertical: 8,
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
    borderRadius: Border.br_mini,
    marginTop: 18,
    backgroundColor: Color.white,
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
    height: 48,
    transform: [
      {
        rotate: "-0.12deg",
      },
    ],
    backgroundColor: Color.white,
    alignSelf: "stretch",
  },
  whatsYourFirst: {
    fontSize: 29,
    color: Color.gray,
    zIndex: 0,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textAlign: "left",
    alignSelf: "stretch",
  },
  youWontBe: {
    fontSize: FontSize.size_smi,
    zIndex: 1,
    marginTop: 18,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.lightLabelPrimary,
    alignSelf: "stretch",
  },
  firstname: {
    height: 33,
    zIndex: 2,
  },
  lastname: {
    zIndex: 3,
  },
  icon: {
    marginTop: 14.3,
    marginLeft: 95.5,
    maxWidth: 42,
    maxHeight: 42,
    minWidth: 42,
    minHeight: 42,
    width: "100%",
  },
  forwardButton: {
    left: "50%",
    zIndex: 4,
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
  pfName: {
    height: 655,
    width: "100%",
    flex: 1,
  },
});

export default PfName;
