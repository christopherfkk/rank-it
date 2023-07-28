import React, {memo, useState} from "react";
import {Text, StyleSheet, ImageBackground, View, TouchableOpacity,} from "react-native";
import RegButton from "./ChallengeButton";
import ModalPostmatchfeedback from "./ModalPostmatchfeedback"
import {Color, FontFamily, FontSize, Border, Padding} from "../../GlobalStyles";

type ConfirmationContainerType = {
    /** Text props */
    name: string;
    avatar?: string;
    date: string
    matchData: any

    /** Action props: Navigates to the opponent profile */
    onFrameTouchableOpacityPress?: () => void;
};

const ConfirmationContainer = memo(({
                                name, 
                                avatar, 
                                date,
                                matchData
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
            <TouchableOpacity
                style={styles.rankingContainer}
                activeOpacity={self ? 1 : 0.3}
                onPress={self ? null : onFrameTouchableOpacityPress}
            >

                    {/* PROFILE DETAILS */}
                    <View style={styles.profile}>
                        <ImageBackground
                            style={styles.avatar}
                            imageStyle={styles.avatar_image}
                            resizeMode="cover"
                            source={require("../../assets/avatar.png")}
                        />

                        <Text style={styles.name}>
                            {name}
                        </Text>
                        <Text style={styles.skillText}>
                            {date}
                        </Text>
                    </View>

                    {/* START CHALLENGE BUTTON */}
                    {self ?
                        null :
                        <RegButton
                            pfButtonWidth={10}
                            pfButtonHeight={29}
                            button="start"
                            pfButtonMarginTop="unset"
                            pfButtonFlex={1}
                            pfButtonMarginLeft={10}
                            onPress={handleRegButtonPress}
                        />}
                </TouchableOpacity>
                {/* <ModalPostmatchfeedback 
                    visible={showFeedbackModal} 
                    onClose={handleCloseModal}         
                    name={name}/> */}
            </View>
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
    },
    profile: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "55%",
        height: 35,
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
    },
    avatar_image: {
        borderRadius: 75,
    },
    name: {
        fontFamily: FontFamily.manropeBold,
        fontSize: FontSize.size_3xs,
        color: Color.lightLabelPrimary,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "48%",
    },
    skillText: {
        fontSize: FontSize.size_3xs,
        fontFamily: FontFamily.manropeBold,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingHorizontal: "8%",
    },
});

export default ConfirmationContainer;