import * as React from "react";
import {Pressable, StyleSheet, Text, View, ScrollView, TouchableOpacity} from "react-native";
import {Image} from "expo-image";

import {Padding, Color, FontSize, FontFamily, Border} from "../../GlobalStyles";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileDetails from "../../components/profile/ProfileDetails";
import RegButton from '../../components/auth/RegButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiConfig from '../../apiConfig';
import {useNavigation} from '@react-navigation/native';

type ProfileType = {
    self: Boolean;
};
const Profile = ({self = true}: ProfileType) => {

    const navigation = useNavigation()

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

    return (
        <ScrollView
            style={styles.profile}
            showsVerticalScrollIndicator={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.profileScrollViewContent}
        >
            {/* PHOTO AND SOME DETAILS */}
            <ProfileHeader
                avatar={require("../../assets/memberphoto18.png")}
                fullName="Bentley Chen"
                location="Taito, Tokyo"
                skill="Beginner"
            />

            {self ?
                // Edit Profile Button
                <Pressable style={styles.editProfileButton}>
                    <Image
                        style={styles.editProfileIcon}
                        contentFit="contain"
                        source={require("../../assets/edit-profile-icon.png")}
                    />
                    <Text style={styles.editProfileText}>
                        Edit Profile
                    </Text>
                </Pressable> :
                // Challenge Button
                <RegButton
                    pfButtonWidth={100}
                    pfButtonHeight={30}
                    button="challenge"
                    pfButtonMarginTop="unset"
                    pfButtonFlex="unset"
                    pfButtonMarginLeft={10}
                />}

            {/* MORE PROFILE DETAILS */}
            <ProfileDetails
                bioText="Experienced badminton player with 5+ years of competitive play. Available on weekends for intense matches. Prefer playing at indoor courts in central Tokyo."
                nMatchesLogged={43}
                highestRankAttained={7}
                sportsmanshipRating={4.5}
                strength="Agility, Cardio, Reaction Time"
                competitiveness="High"
            />

            <TouchableOpacity onPress={handleLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    profile: {
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
    editProfileButton: {
        flexDirection: "row",
        gap: 5,
        backgroundColor: Color.whitesmoke_300,
        borderRadius: Border.br_131xl,
        justifyContent: "center",
        alignItems: "center",
        width: "30%",
        paddingVertical: "1%",
        paddingHorizontal: "1%",
    },
    editProfileIcon: {
        height: 13,
        width: 13,
    },
    editProfileText: {
        fontFamily: FontFamily.manropeMedium,
        color: Color.gray_100,
    },
});

export default Profile;
