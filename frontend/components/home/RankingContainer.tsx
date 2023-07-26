import React, {memo} from "react";
import {Text, StyleSheet, ImageBackground, View, TouchableOpacity,} from "react-native";
import RegButton from "../auth/RegButton";
import {Color, FontFamily, FontSize, Border, Padding} from "../../GlobalStyles";

type RankingContainerType = {
    /** Text props */
    rank: number;
    name: string;
    avatar?: string;
    skill: number;
    self: boolean;

    /** Action props: Navigates to the opponent profile */
    onFrameTouchableOpacityPress?: () => void;
};

const RankingContainer = memo(({
                                   rank,
                                   name,
                                   avatar,
                                   skill,
                                   onFrameTouchableOpacityPress,
                                   self
                               }: RankingContainerType) => {

        const backgroundColor = self ? Color.dimgray_100 : Color.lavenderblush;

        return (
            <View style={[styles.rankingContainer, {backgroundColor}]}>
                <TouchableOpacity
                    style={styles.rankingContainer}
                    activeOpacity={self ? 1 : 0.3}
                    onPress={self ? null : onFrameTouchableOpacityPress}
                >

                    {/* PROFILE DETAILS */}
                    <View style={styles.profile}>
                        <Text style={styles.rankText}>
                            {rank}
                        </Text>
                        <ImageBackground
                            style={styles.avatar}
                            imageStyle={styles.avatar_image}
                            resizeMode="cover"
                            source={require("../../assets/avatar.png")}
                        />

                        <Text style={styles.name}>
                            {name}
                        </Text>
                        <Text style={styles.skillText}>
                            {skill}
                        </Text>
                    </View>

                    {/* START CHALLENGE BUTTON */}
                    {self ?
                        null :
                        <RegButton
                            pfButtonWidth={10}
                            pfButtonHeight={29}
                            button="start"
                            pfButtonMarginTop="unset"
                            pfButtonFlex={1}
                            pfButtonMarginLeft={10}
                        />}
                </TouchableOpacity>
            </View>
        );
    }
);

const styles = StyleSheet.create({

    rankingContainer: {
        flex: 1,
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: Padding.p_8xs,
        paddingVertical: Padding.p_0,
        marginVertical: 5,
        borderRadius: Border.br_8xs,
    },
    profile: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "55%",
        height: 35,
    },
    rankText: {
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontSize: FontSize.size_3xs,
        fontFamily: FontFamily.manropeExtrabold,
        color: Color.darkslategray,
        width: "10%",
    },
    avatar: {
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
    },
    avatar_image: {
        borderRadius: 75,
    },
    name: {
        fontFamily: FontFamily.manropeBold,
        fontSize: FontSize.size_3xs,
        color: Color.lightLabelPrimary,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "48%",
    },
    skillText: {
        fontSize: FontSize.size_3xs,
        fontFamily: FontFamily.manropeBold,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingHorizontal: "8%",
    },
});

export default RankingContainer;
