import React, {useEffect, useState} from "react";
import {Pressable, StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView} from "react-native";
import {Image} from "expo-image";
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {RouteProp} from "@react-navigation/native";

import {Padding, Color, FontSize, FontFamily, Border, Home} from "../../GlobalStyles";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileDetails from "../../components/profile/ProfileDetails";
import RegButton from "../../components/setup/RegButton"
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiConfig from '../../apiConfig';

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
    const isFocused = useIsFocused();

    // Check if route.params is defined before destructuring
    const {otherUserId, self} = route.params || {otherUserId: null, self: true};
    const [profile, setProfile] = useState({
        first_name: "",
        last_name: "",
        level: "",
        blurb: "",
        matches_played: "",
        overall_sportsmanship_rating: "",
        top_strengths: [],
        overall_match_competitiveness_rating: "",
    })

    useEffect(() => {
        const fetchData = async () => {

            const selfUserId = JSON.parse(await AsyncStorage.getItem('userInfo')).id
            const userId = self ? selfUserId : otherUserId;

            try {
                const access = await AsyncStorage.getItem('accessToken')
                const response = await fetch(`${apiConfig.BASE_URL}/accounts/${userId}`, {
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
        };
        if (isFocused) {
            fetchData();
        }
    }, [isFocused]);

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
                        avatar={require("../../assets/avatar.png")}
                        fullName={profile.first_name + " " + profile.last_name}
                        location="CB Gym, Tokyo"
                        skill={profile.level}
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
                        bioText={profile.blurb}
                        nMatchesLogged={profile.matches_played}
                        highestRankAttained={1}
                        sportsmanshipRating={profile.overall_sportsmanship_rating}
                        strength={profile.top_strengths.join(", ")}
                        competitiveness={profile.overall_match_competitiveness_rating}
                    />

                    <TouchableOpacity onPress={handleLogout}>
                        <Text>Logout</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </SafeAreaView>
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
