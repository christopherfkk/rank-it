import React, { useState, useCallback} from "react";
import {Pressable, StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, ActivityIndicator} from "react-native";
import {Image} from "expo-image";
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {RouteProp} from "@react-navigation/native";

import { Color,  Home, ProfileStyles } from "../../GlobalStyles";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileDetails from "../../components/profile/ProfileDetails";
import ChallengeButton from '../../components/home/ChallengeButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiConfig from '../../apiConfig';
import ModalPostmatchfeedbackA from '../../components/home/ModalPostmatchfeedbackA';

type ProfileParamList = {
    Profile: {
        otherUserId: number | null;
        self: boolean;
    };
};

type ProfileType = {
    route: RouteProp<ProfileParamList, "Profile">
};
const Profile = ({route}: ProfileType) => {

    const navigation = useNavigation()

    const [isLoading, setIsLoading] = useState(true);

    // Check if route.params is defined before destructuring
    const {otherUserId, self} = route.params || {otherUserId: null, self: true};
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
    })

    const [isEditMode, setIsEditMode] = useState(false);
    const [editedBioText, setEditedBioText] = useState("");
    const [bioText, setBioText] = useState(profile.blurb);

    const handleEditButtonPress = () => {
        setIsEditMode(true);
        setEditedBioText(bioText); // Assuming you have `bioText` state in the `Profile` component
    };

    useFocusEffect(
        useCallback(() => {
            const fetchData = async () => {
                setIsLoading(true);
                const selfUserId = JSON.parse(await AsyncStorage.getItem('userInfo')).id
                const userId = self ? selfUserId : otherUserId;
                try {
                    const access = await AsyncStorage.getItem('accessToken')
                    const response = await fetch(`${apiConfig.BASE_URL}/accounts/${userId}/`, {
                        method: "GET",
                        headers: {
                            "Authorization": `Token ${access}`
                        }
                    })
                    const data = await response.json();
                    setProfile(data)
                    console.log(data)
                } catch {
                    console.error("NO PROFILE: Can't fetch profile")
                }
                setIsLoading(false);
            };
            fetchData();
            
        }, [self])
    );

    const handleSaveButtonPress = async () => {
        try {
            // Call the API here to save the edited bio text
            const selfUserId = JSON.parse(await AsyncStorage.getItem('userInfo')).id
            const access = await AsyncStorage.getItem('accessToken')
            const formData = new FormData();
            formData.append("blurb", editedBioText)
            const response = await fetch(`${apiConfig.BASE_URL}/accounts/${selfUserId}/`, {
                method: "PUT",
                headers: {
                    "Authorization": `Token ${access}`,
                },
                body: formData
            })
            const data = await response.json();
            console.log(data)
            setIsEditMode(false);
            setBioText(data.blurb);
            // Optionally, you can update the original bioText state with the editedBioText
            // if you want to display the edited text immediately after saving.
        } catch (error) {
            console.error("Failed to save bio text:", error);
            // Handle the error here (e.g., show an error message to the user)
        }
    };

    const handleLogout = async () => {

        // Get PUT request paramters
        const userId = JSON.parse(await AsyncStorage.getItem('userInfo')).id;
        const accessToken = await AsyncStorage.getItem('accessToken');

        fetch(`${apiConfig.BASE_URL}/accounts/logout/`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${accessToken}`
            },
        })
            .then((response) => {
                if (response.status == 200) {
                    AsyncStorage.clear()

                    console.log("LOGGED OUT: remove accessToken and userInfo")
                    navigation.navigate("Login")
                }
                return response.json()
            })
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                throw error
            });
    };

    const [showFeedbackModal, setShowFeedbackModal] = useState(false);

    const handleRegButtonPress = () => {
        // Show the modal when RegButton is pressed
        setShowFeedbackModal(true);
    };

    const handleCloseModal = () => {
        // Close the modal when the "Close" button is pressed
        setShowFeedbackModal(false);
    };

    if (isLoading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color= {Color.crimson_100} />
            </View>
        );
    }

    return (
        <SafeAreaView style={[Home.background]}>
            <View style={Home.body}>
                <ScrollView
                    style={styles.profile}
                    showsVerticalScrollIndicator={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.profileScrollViewContent}
                >
                    {/* PHOTO AND SOME DETAILS */}
                    <ProfileHeader
                        avatar={require("../../assets/empty-avatar.png")}
                        fullName={profile.first_name + " " + profile.last_name}
                        location="CB Gym, Tokyo"
                        skill={profile.level}
                    />

                    {self ?
                        // Edit Profile Button
                        <Pressable
                            onPress={handleEditButtonPress}
                            style={ProfileStyles.button}
                        >
                            <Image
                                style={styles.editProfileIcon}
                                contentFit="contain"
                                source={require("../../assets/edit-profile-icon.png")}
                            />
                            <Text style={ProfileStyles.buttonText}>
                                Edit Bio
                            </Text>
                        </Pressable> : null}

                    <ModalPostmatchfeedbackA
                        visible={showFeedbackModal}
                        onClose={handleCloseModal}
                        name={profile.first_name + " " + profile.last_name}
                        level={profile.level ?? 'null'}
                        opponentId={profile.id}
                        // selfName = {}
                        // opponentName = {}
                        />

                    {/* MORE PROFILE DETAILS */}
                    <ProfileDetails
                        bioText={bioText}
                        nMatchesLogged={profile.matches_played}
                        highestRankAttained={1}
                        sportsmanshipRating={profile.overall_sportsmanship_rating}
                        strength={profile.top_strengths.join(", ")}
                        competitiveness={profile.overall_match_competitiveness_rating}

                        isEditMode={isEditMode}
                        editedBioText={editedBioText}
                        setEditedBioText={setEditedBioText}
                        onSaveButtonPress={handleSaveButtonPress}
                    />

                    {self ?
                        <View style={ProfileStyles.button}>
                            <TouchableOpacity onPress={handleLogout}>
                                <Text style={ProfileStyles.buttonText}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                        : null}

                    {!self ?                         
                    // Challenge Button
                    <ChallengeButton
                    button="record"
                    backgroundColor= {Color.crimson_200}
                    textColor= {Color.white}
                    onPress={handleRegButtonPress}
                  />: null}

                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
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
        backgroundColor: Color.white,
    },
    editProfileIcon: {
        height: 13,
        width: 13,
    },
});

export default Profile;
