import React, { useState, useCallback, memo } from "react";
import { View, Pressable, StyleSheet, Text, Modal } from "react-native";
import { Image } from "expo-image";
import ModalEditMatch from "./ModalEditMatch";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

type ModalMatchDetailsType = {
  onClose?: () => void;
};

const ModalMatchDetails = memo(({ onClose }: ModalMatchDetailsType) => {
  const [pfButtonVisible, setPfButtonVisible] = useState(false);

  const openPfButton = useCallback(() => {
    setPfButtonVisible(true);
  }, []);

  const closePfButton = useCallback(() => {
    setPfButtonVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.modalMatchDetails, styles.profileSpaceBlock]}>
        <Pressable style={[styles.cross, styles.crossFlexBox]}>
          <View style={[styles.basilcrossSolid, styles.crossFlexBox]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
        </Pressable>
        <View style={styles.matchDetailsParent}>
          <Text style={[styles.matchDetails, styles.matchDetailsFlexBox]}>
            match details
          </Text>
          <View style={[styles.profile, styles.crossFlexBox]}>
            <Image
              style={styles.memberPhotoIcon}
              contentFit="cover"
              source={require("../assets/memberphoto9.png")}
            />
            <View style={[styles.bottomBar, styles.bottomBarSpaceBlock]}>
              <Text style={[styles.fullName, styles.fullNameFlexBox]}>
                Hana Sakura
              </Text>
              <View style={[styles.question, styles.questionFlexBox]}>
                <Image
                  style={[styles.markerPin01Icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/markerpin012.png")}
                />
                <View
                  style={[styles.locationWrapper, styles.bottomBarSpaceBlock]}
                >
                  <Text style={[styles.location, styles.fullNameFlexBox]}>
                    Shibuya, Tokyo
                  </Text>
                </View>
              </View>
              <View style={styles.questionFlexBox}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/vector4.png")}
                />
                <View
                  style={[styles.locationWrapper, styles.bottomBarSpaceBlock]}
                >
                  <Text style={[styles.location, styles.fullNameFlexBox]}>
                    Expert
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Text style={[styles.proposedLocationAnd, styles.fullNameTypo]}>
            Proposed location and time
          </Text>
          <View
            style={[
              styles.minatoKuSportsCenter0811Wrapper,
              styles.crossFlexBox,
            ]}
          >
            <Text
              style={[
                styles.minatoKuSportsCenterContainer,
                styles.buttonFlexBox,
              ]}
            >
              <Text style={styles.fullNameTypo}>{`Minato-Ku Sports Center 
`}</Text>
              <Text style={styles.text}>08/11/2023, 17:00-19:00</Text>
            </Text>
          </View>
          <Text
            style={[styles.contactYourOpponent, styles.matchDetailsFlexBox]}
          >
            Contact your opponent from the Upcoming Matches screen!
          </Text>
          <Pressable
            style={[styles.pfButton, styles.crossFlexBox]}
            onPress={openPfButton}
          >
            <Text
              style={[styles.button, styles.buttonFlexBox]}
              numberOfLines={3}
            >
              edit
            </Text>
          </Pressable>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={pfButtonVisible}>
        <View style={styles.pfButtonOverlay}>
          <Pressable style={styles.pfButtonBg} onPress={closePfButton} />
          <ModalEditMatch onClose={closePfButton} />
        </View>
      </Modal>
    </>
  );
});

const styles = StyleSheet.create({
  profileSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mini,
    overflow: "hidden",
  },
  crossFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  matchDetailsFlexBox: {
    textAlign: "center",
    alignSelf: "stretch",
  },
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
  fullNameTypo: {
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  buttonFlexBox: {
    flex: 1,
    textAlign: "center",
  },
  vectorIcon: {
    width: 15,
    height: 15,
  },
  basilcrossSolid: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_9xs,
    justifyContent: "center",
    alignItems: "center",
  },
  cross: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  matchDetails: {
    fontSize: FontSize.size_31xl,
    letterSpacing: 1.5,
    color: Color.gray_200,
    fontFamily: FontFamily.bebasNeueRegular,
  },
  memberPhotoIcon: {
    borderRadius: 211,
    width: 50,
    height: 50,
  },
  fullName: {
    lineHeight: 20,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  markerPin01Icon: {
    overflow: "hidden",
  },
  location: {
    lineHeight: 14,
    fontWeight: "300",
    fontFamily: FontFamily.almaraiLight,
    fontSize: FontSize.size_2xs,
  },
  locationWrapper: {
    width: 118,
    paddingHorizontal: Padding.p_8xs,
  },
  question: {
    justifyContent: "center",
  },
  bottomBar: {
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_0,
  },
  profile: {
    borderRadius: Border.br_mini,
    height: 71,
    marginTop: 15,
    alignSelf: "stretch",
    alignItems: "center",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mini,
    overflow: "hidden",
  },
  proposedLocationAnd: {
    color: Color.lightLabelPrimary,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    marginTop: 15,
    textAlign: "center",
    alignSelf: "stretch",
  },
  text: {
    fontFamily: FontFamily.manropeRegular,
  },
  minatoKuSportsCenterContainer: {
    fontSize: FontSize.size_base,
    lineHeight: 30,
    color: Color.lightLabelPrimary,
  },
  minatoKuSportsCenter0811Wrapper: {
    borderRadius: Border.br_8xs,
    borderColor: "#040404",
    borderWidth: 1,
    width: 245,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
  },
  contactYourOpponent: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.manropeRegular,
    color: Color.lightLabelPrimary,
    marginTop: 15,
  },
  pfButtonOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  pfButtonBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  button: {
    color: Color.white,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.bebasNeueRegular,
  },
  pfButton: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.crimson_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 134,
    height: 32,
    padding: Padding.p_mini,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  matchDetailsParent: {
    paddingHorizontal: Padding.p_0,
    paddingVertical: Padding.p_31xl,
    marginTop: 30,
    alignSelf: "stretch",
    alignItems: "center",
  },
  modalMatchDetails: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: Color.white,
    borderColor: "#000",
    borderWidth: 2,
    width: 306,
    maxWidth: "100%",
    maxHeight: "100%",
    borderStyle: "solid",
  },
});

export default ModalMatchDetails;
