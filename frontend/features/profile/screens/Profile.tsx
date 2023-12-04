import React, {useState, useEffect} from "react";
import {Pressable, StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, ActivityIndicator,} from "react-native";
import {Image} from "expo-image";
import {useNavigation} from '@react-navigation/native';
import {theme} from "../../../theme/GlobalStyles";

import ProfileHeader from "../components/ProfileHeader";
import ProfileDetails from "../components/ProfileDetails";
import ChallengeButton from '../../ranking/components/ChallengeButton';
import BackButton from '../../../components/BackButton';
import FeedbackA from '../../postmatchfeedback/modals/FeedbackA';

import {avatarImages} from '../../setup/utils/avatarImages';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {selectInfo} from '../../../reducers/userInfoReducer';
import {selectId, selectToken, signOut} from '../../../reducers/userAuthReducer';
import {disconnect as disconnectRankingSocket} from '../../ranking/reducers/rankingSocketReducer';
import {disconnect as disconnectNotifSocket} from '../../postmatchfeedback/reducers/notifSocketReducer';

import handleLogout from '../../auth/api/logout';
import handleSaveButtonPress from '../../auth/api/putBlurb';
import getProfile from '../../auth/api/getProfile';


const Profile = ({route}) => {

    const {profileUserId} = route.params

    const navigation = useNavigation()
    const dispatch = useAppDispatch()

    const userToken = useAppSelector(selectToken)
    const userId = useAppSelector(selectId)
    const userName = useAppSelector(selectInfo)['firstName']
    const self = profileUserId === userId

    const [profile, setProfile] = useState({
        id: "",
        first_name: "",
        last_name: "",
        level: "",
        blurb: "",
        matches_played: "",
        overall_sportsmanship_rating: "",
        top_strengths: [],
        overall_match_competitiveness_rating: "",
        avatar_image_name: "",
    });
    const [isEditMode, setIsEditMode] = useState(false);
    const [editedBioText, setEditedBioText] = useState("");
    const [bioText, setBioText] = useState(profile.blurb);

    const handleEditButtonPress = () => {
        setIsEditMode(true);
        setEditedBioText(bioText);
    };

    useEffect(() => {
        getProfile(profileUserId, userToken, setProfile)
    }, [profileUserId])

    const [showFeedbackModal, setShowFeedbackModal] = useState(false);

    const handleRegButtonPress = () => {
        setShowFeedbackModal(true);
    };

    const handleCloseModal = () => {
        setShowFeedbackModal(false);
    };

    return (
        <SafeAreaView style={[styles.background]}>
            <View style={styles.body}>
                <ScrollView
                    style={styles.profile}
                    showsVerticalScrollIndicator={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.profileScrollViewContent}
                >
                    <ProfileHeader
                        avatar={avatarImages[profile.avatar_image_name]}
                        fullName={profile.first_name + " " + profile.last_name}
                        location="CB Gym, Tokyo"
                        skill={profile.level}
                    />
                    {!self ? <BackButton onPress={() => navigation.navigate("Ranking")}/> : null}
                    {self ?
                        <Pressable
                            onPress={handleEditButtonPress}
                            style={styles.button}
                        >
                            <Image
                                style={styles.editProfileIcon}
                                contentFit="contain"
                                source={require("../../../assets/profile-page/icon-edit-profile.png")}
                            />
                            <Text style={styles.buttonText}>
                                Edit Bio
                            </Text>
                        </Pressable> : null}

                    <ProfileDetails
                        bioText={bioText}
                        nMatchesLogged={profile.matches_played}
                        highestRankAttained={"1"}
                        sportsmanshipRating={profile.overall_sportsmanship_rating}
                        strength={profile.top_strengths.join(", ")}
                        competitiveness={profile.overall_match_competitiveness_rating}
                        isEditMode={isEditMode}
                        editedBioText={editedBioText}
                        setEditedBioText={setEditedBioText}
                        onSaveButtonPress={() => handleSaveButtonPress(userToken, userId, setIsEditMode, setBioText, editedBioText)}
                    />

                    <FeedbackA
                        visible={showFeedbackModal}
                        onClose={handleCloseModal}
                        opponentName={profile.first_name + " " + profile.last_name}
                        level={profile.level ?? 'null'}
                        opponentId={profile.id}
                        selfName={userName}
                    />

                    {self ?
                        <View style={styles.button}>
                            <TouchableOpacity onPress={() =>
                                handleLogout(
                                    navigation,
                                    userToken,
                                    dispatch,
                                    signOut,
                                    disconnectRankingSocket,
                                    disconnectNotifSocket
                                )}>
                                <Text style={styles.buttonText}>
                                    Logout
                                </Text>
                            </TouchableOpacity>
                        </View>
                        : null}

                    {!self ?
                        <ChallengeButton
                            button="record"
                            onPress={handleRegButtonPress}
                        /> : null}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flex: 1,
        backgroundColor: theme.colors.background
    },
    body: {
        // paddingHorizontal: Padding.p_9xl,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        alignSelf: "center", // INSTEAD OF STRETCH
        width: "95%", // ADD THIS
        maxWidth: 500, // ADD THIS
    },
    button: {
        flexDirection: "row",
        gap: 5,
        backgroundColor: theme.colors.background,
        justifyContent: "center",
        alignItems: "center",
        width: "30%",
        paddingVertical: "1%",
        paddingHorizontal: "1%",
        marginVertical: "2%"
    },
    buttonText: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
    },
    profile: {
        width: "100%",
        alignSelf: "stretch",
        overflow: "scroll",
    },
    profileScrollViewContent: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        alignSelf: "stretch",
        overflow: "scroll",
        width: "100%",
        backgroundColor: theme.colors.foreground,
    },
    editProfileIcon: {
        height: 13,
        width: 13,
    },
});

export default Profile;
