import React, {useState, useEffect} from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    ActivityIndicator,
} from "react-native";
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
import {selectInfo} from '../../auth/reducers/userInfoReducer';
import {selectId, selectToken, signOut} from '../../auth/reducers/userAuthReducer';
import {disconnect as disconnectRankingSocket} from '../../ranking/reducers/rankingSocketReducer';
import {disconnect as disconnectNotifSocket} from '../../postmatchfeedback/reducers/notifSocketReducer';
import {clearUserInfo} from '../../auth/reducers/userInfoReducer';

import handleLogout from '../../auth/api/logout';
import handleSaveButtonPress from '../../auth/api/putBlurb';
import getProfile from '../../auth/api/getProfile';
import {Ionicons} from '@expo/vector-icons';


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
                {
                    !self ?
                        <BackButton onPress={() => navigation.navigate("Ranking")}/>
                        : null
                }
                {self ?
                    <Pressable
                        onPress={handleEditButtonPress}
                        style={styles.button}
                    >
                        <Ionicons name="pencil" size={24} color="white"/>
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
                                disconnectNotifSocket,
                                clearUserInfo,
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    profile: {
        alignSelf: "center",
        flex: 1,
        width: "95%",
        maxWidth: 500,
        paddingTop: "5%",
    },
    profileScrollViewContent: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        overflow: "scroll",
    },
    button: {
        flexDirection: "row",
        gap: 5,
        backgroundColor: theme.colors.danger,
        justifyContent: "center",
        alignItems: "center",
        width: "30%",
        height: "5%",
        borderRadius: 20,
        marginVertical: 10,
    },
    buttonText: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.background,
    },
});

export default Profile;
