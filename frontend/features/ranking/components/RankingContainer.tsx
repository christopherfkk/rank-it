import React, {useState} from "react";
import {Text, StyleSheet, View, TouchableOpacity, Image} from "react-native";

import FeedbackA from "../../postmatchfeedback/modals/FeedbackA"
import {theme} from "../../../theme/GlobalStyles";
import ChallengeButton from './ChallengeButton';
import {avatarImages} from '../../setup/utils/avatarImages';

type RankingContainerType = {
    /** Text props */
    rank: number;
    selfName: string;
    opponentName: string;
    avatar?: string;
    avatar_image_name: string;
    skill: number;
    self: boolean;
    opponentData: any;
    setRefresh: Function;

    /** Action props: Navigates to the opponent profile */
    onFrameTouchableOpacityPress?: () => void;
};

const RankingContainer = (
    {
        rank,
        selfName,
        opponentName,
        avatar,
        avatar_image_name,
        skill,
        opponentData,
        setRefresh,
        onFrameTouchableOpacityPress,
        self
    }: RankingContainerType) => {
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
        return Math.round(skill * 10) + 100
    }

    const backgroundColor = self ? theme.colors.primary : theme.colors.unfocused;

    return (
        <View style={[styles.rankingContainer, {backgroundColor, height: "10%",}]}>
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
                    <Image
                        style={styles.avatar}
                        resizeMode="cover"
                        source={avatarImages[avatar_image_name]}
                    />

                    <Text style={styles.name}>
                        {opponentName}
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
                            button='challenge'
                            onPress={handleRegButtonPress}
                        />}
                </View>
            </TouchableOpacity>
            <FeedbackA
                visible={showFeedbackModal}
                onClose={handleCloseModal}
                selfName={selfName}
                opponentName={opponentName}
                level={opponentData.level ?? 'null'}
                opponentId={opponentData.id}/>
        </View>
    );
};

const styles = StyleSheet.create({

    rankingContainer: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
        width: "98%",
        borderRadius: 20,
    },
    profile: {
        width: "70%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: "30%",
        height: "90%",
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
        borderRadius: 200,
        height: "100%",
        width: "10%",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        overflow: "visible",
        borderWidth: 1,
    },
    name: {
        width: "60%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
    },
    skillText: {
        width: "20%",
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
});

export default RankingContainer;
