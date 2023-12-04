import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {theme} from "../../../theme/GlobalStyles";

type ProfileBoxProps = {
    name: string;
    avatar: any; // Change the type according to the actual type of the avatar
    level: string;
};

const ProfileBox = ({name, avatar, level}: ProfileBoxProps) => {
    return (
        <View style={styles.profile}>
            <Image style={styles.memberPhotoIcon} source={avatar}/>

            <View style={styles.profileBox}>
                <Text style={styles.fullName}>{name}</Text>

                <View style={styles.location}>
                    <Image
                        style={styles.iconLocation}
                        source={require("../../../assets/google-icon.png")}
                    />
                    <Text style={styles.locationText}>CB Gym</Text>
                </View>

                <View style={styles.location}>
                    <Image
                        style={styles.iconBadminton}
                        source={require("../../../assets/google-icon.png")}
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
        borderRadius: 211,
        width: 50,
        height: 50,
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
        textAlign: "left",
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
    iconLocation: {
        height: 10,
        width: 8,
        marginRight: 5,
    },
    iconBadminton: {
        height: 8,
        width: 8,
        marginRight: 5,
    },
});

export default ProfileBox;
