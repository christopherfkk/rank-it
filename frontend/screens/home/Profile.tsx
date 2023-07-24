import * as React from "react";
import {Pressable, StyleSheet, Text, View, ScrollView} from "react-native";
import {Image} from "expo-image";

import {Padding, Color, FontSize, FontFamily, Border} from "../../GlobalStyles";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileDetails from "../../components/profile/ProfileDetails";
import RegButton from '../../components/auth/RegButton';

const Profile = () => {
    return (
        <ScrollView
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

            {/* EDIT PROFILE BUTTON */}
            <Pressable style={styles.editProfileButton}>
                <Image
                    style={styles.editProfileIcon}
                    contentFit="contain"
                    source={require("../../assets/edit-profile-icon.png")}
                />
                <Text style={styles.editProfileText}>
                    Edit Profile
                </Text>
            </Pressable>

            {/* MORE PROFILE DETAILS */}
            <ProfileDetails
                bioText="Experienced badminton player with 5+ years of competitive play. Available on weekends for intense matches. Prefer playing at indoor courts in central Tokyo."
                matchLoggedText="43 logged matches"
                rankingText="444th in Tokyo"
                frame8652Height={448}
                propWidth="unset"
                propAlignSelf="stretch"
                sportsmanshiprating="Star Rating: 4.5 "
                availability={`Monday 16-17, 18-19
                      Tuesday 15-16
                      Wednesday 11-12
                      Thursday 13-14
                      Friday 18-19
                      Saturday 19-20
                      Sunday 11-12, 13-14`}
                strength="Agility, Cardio, Reaction Time"
                competitiveness="High"
            />

            {/* CHALLENGE BUTTON */}
            <RegButton
                pfButtonWidth={10}
                pfButtonHeight={29}
                button="challenge"
                pfButtonMarginTop="unset"
                pfButtonFlex={1}
                pfButtonMarginLeft={10}
            />

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    profileScrollViewContent: {
        width: "100%",
        alignItems: "center",
        flex: 1,
        backgroundColor: Color.white,
        alignSelf: "stretch",
        overflow: "scroll",
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
