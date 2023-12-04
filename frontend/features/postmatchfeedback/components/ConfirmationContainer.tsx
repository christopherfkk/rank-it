import React, {memo, useState} from "react";
import {Text, StyleSheet, ImageBackground, View, TouchableOpacity} from "react-native";

import {avatarImages} from '../../setup/utils/avatarImages';
import FeedbackB from "../modals/FeedbackB";
import {theme} from "../../../theme/GlobalStyles";

type ConfirmationContainerType = {
    /** Text props */
    opponentName: string;
    avatar?: string;
    date: string;
    matchData: any;
    selfId: string;
    selfName: string;
};

const ConfirmationContainer = memo(
    ({
         opponentName,
         avatar,
         date,
         matchData,
         selfName,
         selfId
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
                            source={avatarImages[avatar]}
                        />
                        <Text style={styles.name}>{opponentName}</Text>
                        <Text style={styles.skillText}>{date}</Text>
                    </View>

                    {/* START CHALLENGE BUTTON */}
                </TouchableOpacity>
                <FeedbackB
                    visible={showFeedbackModal}
                    onClose={handleCloseModal}
                    name={opponentName}
                    selfName={selfName}
                    selfId={selfId}
                    level={matchData.submitter.level}
                    opponentId={matchData.submitter.id}
                    matchId={matchData.id}
                    notifId={matchData.notifId}
                    preSubmitterScore={String(matchData.post_match_feedback.opponent_score)} //reversed
                    preOpponentScore={String(matchData.post_match_feedback.submitter_score)} //reversed
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
        marginVertical: 5,
        borderRadius: 20,
        borderWidth: 1
    },
    profileContainer: {
        flex: 1,
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
        borderRadius: 20,
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
        marginRight: 20,
    },
    rankText: {
        width: "10%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
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
        width: "30%",
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    skillText: {
        width: "50%",
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
});

export default ConfirmationContainer;
