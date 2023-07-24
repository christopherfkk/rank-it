import * as React from "react";
import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import EditProfileBox from "../../components/home/EditProfileBox";
import AvailabilityCard from "../../components/home/AvailabilityCard";
import { Color, FontFamily, FontSize, Padding, Border } from "../../GlobalStyles";

const ProfileEdit = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.profileEdit, styles.profileFlexBox1]}>
      <View style={styles.statusBar}>
        <View style={[styles.property1default, styles.blurbFlexBox]}>
          <View style={[styles.statusBarLight, styles.profileFlexBox]}>
            <Pressable style={styles.heading} />
            <Text
              style={[styles.heading1, styles.heading1Typo]}
              numberOfLines={1}
            >
              Profile
            </Text>
            <Pressable
              onPress={() =>
                navigation.navigate("BottomTabsRoot", {
                  screen: "PersonalMenu",
                })
              }
            >
              <Text style={styles.text} />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={[styles.profile, styles.profileFlexBox]}>
        <Image
          style={styles.memberPhotoIcon}
          contentFit="cover"
          source={require("../../assets/memberphoto17.png")}
        />
        <View style={[styles.name, styles.nameSpaceBlock]}>
          <EditProfileBox />
          <EditProfileBox
            questionFlex={1}
            questionHeight="unset"
            questionBackgroundColor="#fff"
            questionElevation={4}
            questionBorderStyle="solid"
            questionBorderColor="#b8abab"
            questionBorderWidth={1}
            questionOverflow="hidden"
            questionFlexDirection="column"
            questionPaddingHorizontal="unset"
            questionPaddingVertical="unset"
            questionAlignItems="center"
            questionJustifyContent="center"
            questionPosition="unset"
          />
        </View>
        <Text style={[styles.subheading, styles.nameSpaceBlock]}>personal</Text>
        <View style={[styles.personalInformation, styles.nameSpaceBlock]}>
          <EditProfileBox
            questionHeight={32}
            questionBackgroundColor="#fff"
            questionElevation={4}
            questionBorderStyle="solid"
            questionBorderColor="#b8abab"
            questionBorderWidth={1}
            questionOverflow="hidden"
            questionFlexDirection="column"
            questionPaddingHorizontal="unset"
            questionPaddingVertical="unset"
            questionAlignItems="center"
            questionJustifyContent="center"
            questionPosition="unset"
          />
          <EditProfileBox
            questionHeight={32}
            questionBackgroundColor="#fff"
            questionElevation={4}
            questionBorderStyle="solid"
            questionBorderColor="#b8abab"
            questionBorderWidth={1}
            questionOverflow="hidden"
            questionFlexDirection="column"
            questionPaddingHorizontal="unset"
            questionPaddingVertical="unset"
            questionAlignItems="center"
            questionJustifyContent="center"
            questionPosition="unset"
          />
          <EditProfileBox
            questionHeight={32}
            questionBackgroundColor="#fff"
            questionElevation={4}
            questionBorderStyle="solid"
            questionBorderColor="#b8abab"
            questionBorderWidth={1}
            questionOverflow="hidden"
            questionFlexDirection="column"
            questionPaddingHorizontal="unset"
            questionPaddingVertical="unset"
            questionAlignItems="center"
            questionJustifyContent="center"
            questionPosition="unset"
          />
          <EditProfileBox
            questionHeight={32}
            questionBackgroundColor="#fff"
            questionElevation={4}
            questionBorderStyle="solid"
            questionBorderColor="#b8abab"
            questionBorderWidth={1}
            questionOverflow="hidden"
            questionFlexDirection="column"
            questionPaddingHorizontal="unset"
            questionPaddingVertical="unset"
            questionAlignItems="center"
            questionJustifyContent="center"
            questionPosition="unset"
          />
          <EditProfileBox
            questionHeight={32}
            questionBackgroundColor="#fff"
            questionElevation={4}
            questionBorderStyle="solid"
            questionBorderColor="#b8abab"
            questionBorderWidth={1}
            questionOverflow="hidden"
            questionFlexDirection="column"
            questionPaddingHorizontal="unset"
            questionPaddingVertical="unset"
            questionAlignItems="center"
            questionJustifyContent="center"
            questionPosition="unset"
          />
        </View>
        <Text style={[styles.subheading, styles.nameSpaceBlock]}>Bio</Text>
        <View style={[styles.question, styles.nameSpaceBlock]}>
          <TextInput
            style={[styles.blurb, styles.blurbFlexBox]}
            placeholder="150 characters"
            placeholderTextColor="#bababa"
          />
        </View>
        <AvailabilityCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileFlexBox1: {
    overflow: "hidden",
    alignItems: "center",
  },
  blurbFlexBox: {
    alignSelf: "stretch",
    flex: 1,
  },
  profileFlexBox: {
    justifyContent: "center",
    backgroundColor: Color.white,
  },
  heading1Typo: {
    fontFamily: FontFamily.bebasNeueRegular,
    letterSpacing: 0.6,
    fontSize: FontSize.size_xl,
  },
  nameSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  heading: {
    flex: 1,
  },
  heading1: {
    lineHeight: 20,
    color: Color.lightLabelPrimary,
    textAlign: "center",
    flex: 1,
  },
  text: {
    flex: 1,
  },
  statusBarLight: {
    width: 338,
    flexDirection: "row",
    paddingHorizontal: Padding.p_0,
    paddingVertical: Padding.p_xs,
    height: 44,
    justifyContent: "center",
  },
  property1default: {
    alignItems: "center",
  },
  statusBar: {
    borderColor: "#d9d9d9",
    borderBottomWidth: 1,
    paddingHorizontal: 148,
    paddingVertical: Padding.p_0,
    borderStyle: "solid",
    height: 44,
    backgroundColor: Color.white,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  memberPhotoIcon: {
    borderRadius: 211,
    width: 104,
    height: 104,
  },
  name: {
    height: 64,
    borderWidth: 1,
    borderColor: "#bababa",
    marginTop: 10,
    borderRadius: Border.br_11xs,
    justifyContent: "center",
    borderStyle: "solid",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  subheading: {
    lineHeight: 26,
    color: Color.gray_300,
    textAlign: "left",
    fontFamily: FontFamily.bebasNeueRegular,
    letterSpacing: 0.6,
    fontSize: FontSize.size_xl,
  },
  personalInformation: {
    borderWidth: 1,
    borderColor: "#bababa",
    marginTop: 10,
    borderRadius: Border.br_11xs,
    justifyContent: "center",
    borderStyle: "solid",
    alignItems: "center",
    overflow: "hidden",
  },
  blurb: {
    fontFamily: FontFamily.manropeRegular,
    fontSize: FontSize.size_2xs,
  },
  question: {
    borderColor: "#737373",
    borderWidth: 0.5,
    height: 111,
    paddingHorizontal: Padding.p_8xs,
    borderRadius: Border.br_11xs,
    marginTop: 10,
    justifyContent: "center",
    paddingVertical: Padding.p_0,
    borderStyle: "solid",
    backgroundColor: Color.white,
    alignItems: "center",
    overflow: "hidden",
  },
  profile: {
    paddingHorizontal: 30,
    paddingVertical: 18,
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
  },
  profileEdit: {
    backgroundColor: Color.lavenderblush,
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
});

export default ProfileEdit;
