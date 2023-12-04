import React, {memo} from "react";
import {ImageBackground, StyleSheet, View, Text, ImageSourcePropType,} from "react-native";
import {theme} from "../../../theme/GlobalStyles";

type ProfileSummaryContainerType = {
    avatar?: ImageSourcePropType;
    fullName?: string;
    location?: string;
    skill?: string;
};

const ProfileHeader = memo(
    ({
         avatar,
         fullName = "Name",
         location = "Location",
         skill = "Skill",
     }: ProfileSummaryContainerType) => {
        return (
            <View style={styles.profileHeader}>

                <View style={styles.photoContainer}>
                    <ImageBackground
                        style={styles.photo}
                        resizeMode="contain"
                        source={avatar}
                    />
                </View>
                <Text style={styles.fullName}>
                    {fullName}
                </Text>
                <Text style={styles.detail}>
                    {location}
                </Text>
                <Text style={styles.detail}>
                    {skill}
                </Text>
            </View>
        );
    }
);

const styles = StyleSheet.create({
    profileHeader: {
        height: "30%",
        alignSelf: "stretch",
        alignItems: "center",
        backgroundColor: theme.colors.background,
        justifyContent: "center",
    },
    photoContainer: {
        height: "60%",
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    photo: {
        backgroundColor: "#d4d4d4",
        borderRadius: 200,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    fullName: {
        textAlign: "center",
        alignSelf: "stretch",
        fontSize: theme.textVariants.header.fontSize,
        fontFamily: theme.textVariants.header.fontFamily,
        color: theme.colors.foreground,
    },
    detail: {
        textAlign: "center",
        alignSelf: "stretch",
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
    },
});

export default ProfileHeader;
