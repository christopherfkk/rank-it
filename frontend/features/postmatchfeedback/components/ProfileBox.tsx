import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {theme} from "../../../theme/GlobalStyles";
import {Ionicons} from '@expo/vector-icons';

type ProfileBoxProps = {
    avatar: any; // Change the type according to the actual type of the avatar
    level: string;
};

const ProfileBox = ({name, avatar, level}: ProfileBoxProps) => {
    return (
        <View style={styles.profile}>
            <Image style={styles.memberPhotoIcon} source={avatar}/>

            <View style={styles.profileBox}>
                <View style={styles.location}>
                    <Ionicons
                        name={"location"}
                        size={30}
                        color={theme.colors.foreground}
                    />
                    <Text style={styles.locationText}>
                        CB Gym
                    </Text>
                </View>

                <View style={styles.location}>
                    <Ionicons
                        name={"analytics"}
                        size={30}
                        color={theme.colors.foreground}
                    />
                    <Text style={styles.locationText}>{level}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    profile: {
        flexDirection: "row",
        paddingVertical: 10,
        marginTop: 2,
        overflow: "hidden",
        justifyContent: "center",
    },
    memberPhotoIcon: {
        borderRadius: 200,
        width: 80,
        height: 80,
    },
    profileBox: {
        alignSelf: "stretch",
        justifyContent: "center",
        paddingHorizontal: 15,
    },
    fullName: {
        lineHeight: 20,
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
        textAlign: "center",
        marginBottom: 6
    },
    location: {
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
    },
    locationText: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
        marginLeft: 5,
    },
});

export default ProfileBox;
