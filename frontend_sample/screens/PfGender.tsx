import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Male from "../components/Male";
import Female from "../components/Female";
import NonBinary from "../components/NonBinary";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const PfGender = () => {
  const [genderFlatListData, setGenderFlatListData] = useState([
    <Male />,
    <Female />,
    <NonBinary />,
  ]);
  const navigation = useNavigation();

  return (
    <View style={styles.pfGender}>
      <View style={styles.statusBarLight}>
        <Image
          style={styles.icons}
          contentFit="cover"
          source={require("../assets/icons2.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
      <View style={[styles.signUpBody, styles.iconFlexBox]}>
        <Text style={[styles.whatsYourGender, styles.pickWhichBestTypo]}>{`
What’s your gender?`}</Text>
        <Text style={[styles.pickWhichBest, styles.genderSpaceBlock]}>
          Pick which best describes you .
        </Text>
        <FlatList
          style={[styles.gender, styles.genderSpaceBlock]}
          data={genderFlatListData}
          renderItem={({ item }) => item}
          contentContainerStyle={styles.genderFlatListContent}
        />
        <TouchableOpacity
          style={styles.forwardButton}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("PfSkill")}
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
  genderFlatListContent: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 0,
  },
  iconFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
    flex: 1,
  },
  pickWhichBestTypo: {
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textAlign: "left",
  },
  genderSpaceBlock: {
    marginTop: 21,
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
  whatsYourGender: {
    fontSize: 29,
    color: Color.gray,
    zIndex: 0,
    alignSelf: "stretch",
  },
  pickWhichBest: {
    fontSize: FontSize.size_smi,
    zIndex: 1,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.lightLabelPrimary,
    marginTop: 21,
  },
  gender: {
    borderRadius: Border.br_mini,
    zIndex: 2,
    flex: 1,
  },
  icon: {
    marginTop: 35.3,
    marginLeft: 82.5,
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
  pfGender: {
    height: 655,
    width: "100%",
    flex: 1,
  },
});

export default PfGender;
