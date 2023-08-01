import React, {memo, useState} from "react";
import {Text, StyleSheet, ImageBackground, View, TouchableOpacity,} from "react-native";
import ModalPostmatchfeedbackA from "./ModalPostmatchfeedbackA"
import {Color, FontFamily, FontSize, Border, Padding} from "../../GlobalStyles";
import ChallengeButton from '../home/ChallengeButton';

type RankingContainerType = {
    /** Text props */
    rank: number;
    name: string;
    avatar?: string;
    skill: number;
    self: boolean;
    userData: any

    /** Action props: Navigates to the opponent profile */
    onFrameTouchableOpacityPress?: () => void;
};

const RankingContainer = memo(({
                                   rank,
                                   name,
                                   avatar,
                                   skill,
                                   userData,
                                   onFrameTouchableOpacityPress,
                                   self
                               }: RankingContainerType) => {
        const backgroundColor = self ? Color.dimgray_100 : Color.lavenderblush;
        const [showFeedbackModal, setShowFeedbackModal] = useState(false);

        const handleRegButtonPress = () => {
            // Show the modal when RegButton is pressed
            setShowFeedbackModal(true);
        };

        const handleCloseModal = () => {
            // Close the modal when the "Close" button is pressed
            setShowFeedbackModal(false);
        };

        const showSkill = (skill) => {
            // Origin Trueskill from backend is 1-100 with many decimals
            return Math.round(skill*10) + 100
        }

        return (
            <View style={[styles.rankingContainer, {backgroundColor}]}>
                <TouchableOpacity
                    style={styles.rankingContainer}
                    activeOpacity={self ? 1 : 0.3}
                    onPress={self ? null : onFrameTouchableOpacityPress}
                >

                    {/* PROFILE DETAILS */}
                    <View style={styles.profile}>
                        <Text style={styles.rankText}>
                            {rank}
                        </Text>
                        <ImageBackground
                            style={styles.avatar}
                            imageStyle={styles.avatar_image}
                            resizeMode="cover"
                            source={require("../../assets/empty-avatar.png")}
                        />

                        <Text style={styles.name}>
                            {name}
                        </Text>
                        <Text style={styles.skillText}>
                            {showSkill(skill)}
                        </Text>
                    </View>
                    <View style={styles.button}>
                        {/* START CHALLENGE BUTTON */}
                        {self ?
                            null :
                            <ChallengeButton
                                pfButtonWidth={"100%"}
                                pfButtonHeight={"100%"}
                                button="challenge"
                                pfButtonMarginTop="unset"
                                pfButtonFlex={1}
                                pfButtonMarginLeft="unset"
                                onPress={handleRegButtonPress}
                            />}
                    </View>
                </TouchableOpacity>
                <ModalPostmatchfeedbackA
                    visible={showFeedbackModal}
                    onClose={handleCloseModal}
                    name={name}
                    level={userData.level ?? 'null'}
                    opponentId={userData.id}/>
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
        marginVertical: 5,
        borderRadius: Border.br_8xs,
    },
    profile: {
        width: "70%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        height: 35,
    },
    button: {
        width: "30%",
        height: "100%",
        marginRight: "2%",
    },
    rankText: {
        width: "15%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontSize: FontSize.size_3xs,
        fontFamily: FontFamily.manropeExtrabold,
        color: Color.darkslategray,
    },
    avatar: {
        width: "10%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
    },
    avatar_image: {
        borderRadius: 75,
        width: "100%",
        height: "100%",
    },
    name: {
        width: "40%",
        fontFamily: FontFamily.manropeBold,
        fontSize: FontSize.size_3xs,
        color: Color.lightLabelPrimary,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    skillText: {
        width: "35%",
        fontSize: FontSize.size_3xs,
        fontFamily: FontFamily.manropeBold,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
});

export default RankingContainer;
