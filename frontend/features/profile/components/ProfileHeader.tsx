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
        height: 229,
        alignSelf: "stretch",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: theme.colors.background,
        justifyContent: "center",
    },
    photoContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: "5%",
    },
    photo: {
        backgroundColor: "#d4d4d4",
        borderRadius: 200,
        width: 77,
        height: 77,
        justifyContent: "center",
        alignItems: "center",
    },
    fullName: {
        lineHeight: 30,
        textAlign: "center",
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
    },
    detail: {
        textAlign: "left",
        fontWeight: "300",
        lineHeight: 14,
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
    },
});

export default ProfileHeader;
