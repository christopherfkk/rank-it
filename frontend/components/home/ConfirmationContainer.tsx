import React, { memo, useState } from "react";
import { Text, StyleSheet, ImageBackground, View, TouchableOpacity } from "react-native";
import RegButton from "./ChallengeButton";
import ModalPostmatchfeedbackB from "./ModalPostmatchfeedbackB";
import { Color, FontFamily, FontSize, Border, Padding } from "../../GlobalStyles";

type ConfirmationContainerType = {
  /** Text props */
  name: string;
  avatar?: string;
  date: string;
  matchData: any;

  /** Action props: Navigates to the opponent profile */
  onFrameTouchableOpacityPress?: () => void;
};

const ConfirmationContainer = memo(
  ({
    name,
    avatar,
    date,
    matchData,
    // onFrameTouchableOpacityPress,
  }: ConfirmationContainerType) => {
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const handleRegButtonPress = () => {
      // Show the modal when RegButton is pressed
      setShowFeedbackModal(true);
    };

    const handleCloseModal = () => {
      // Close the modal when the "Close" button is pressed
      setShowFeedbackModal(false);
    };

    return (
      <View style={[styles.rankingContainer]}>
        <TouchableOpacity style={styles.profileContainer} onPress={handleRegButtonPress}>
          {/* PROFILE DETAILS */}
          <View style={styles.profile}>
            <ImageBackground
              style={styles.avatar}
              imageStyle={styles.avatar_image}
              resizeMode="cover"
              source={require("../../assets/avatar.png")}
            />

            <View style={styles.nameTimeContainer}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.skillText}>{date}</Text>
            </View>
          </View>

          {/* START CHALLENGE BUTTON */}
        </TouchableOpacity>
        <ModalPostmatchfeedbackB
          visible={showFeedbackModal}
          onClose={handleCloseModal}
          name={name}
          level={matchData.submitter.level}
          opponentId={matchData.submitter.id}
          matchId={matchData.id}
        />
      </View> //instead of opponentId, they reversed
    );
  }
);

const styles = StyleSheet.create({
  rankingContainer: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_0,
    marginVertical: 5,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
  },
  profileContainer: {
    flex: 1,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%", // Changed to 100% to take up the entire width
    paddingHorizontal: Padding.p_8xs,
  },
  rankText: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.manropeExtrabold,
    color: Color.darkslategray,
    width: "10%",
  },
  avatar: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
    marginRight: 10, // Added margin to create space between avatar and nameTimeContainer
  },
  avatar_image: {
    borderRadius: 75,
  },
  nameTimeContainer: {
    flex: 1,
  },
  name: {
    fontFamily: FontFamily.manropeBold,
    fontSize: FontSize.size_3xs,
    color: Color.lightLabelPrimary,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 5, // Added margin to create space between name and date
  },
  skillText: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.manropeBold,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});

export default ConfirmationContainer;
