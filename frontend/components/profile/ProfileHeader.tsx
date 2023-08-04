import React, {memo} from "react";
import {
    ImageBackground,
    StyleSheet,
    View,
    Text,
    ImageSourcePropType,
} from "react-native";
import {Color, Padding, FontFamily, FontSize} from "../../GlobalStyles";

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
        paddingTop: Padding.p_25xl,
        paddingBottom: Padding.p_8xs,
        alignSelf: "stretch",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: Color.white,
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
        fontSize: FontSize.size_11xl,
        lineHeight: 30,
        fontFamily: FontFamily.bebasNeueRegular,
        textAlign: "center",
        color: Color.gray_300,
    },
    detail: {
        textAlign: "left",
        fontFamily: FontFamily.almaraiLight,
        fontWeight: "300",
        lineHeight: 14,
        fontSize: FontSize.size_2xs,
        color: Color.gray_300,
    },
});

export default ProfileHeader;
