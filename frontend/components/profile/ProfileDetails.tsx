import React, {useMemo, memo, Dispatch, SetStateAction} from "react";
import {Text, StyleSheet, View, TouchableOpacity, TextInput} from "react-native";
import {Image} from "expo-image";
import {Color, FontFamily, Padding, FontSize, Border, ProfileStyles} from "../../GlobalStyles";

type ProfileDetailsType = {
    bioText?: string;
    nMatchesLogged?: number;
    highestRankAttained?: number;
    sportsmanshipRating?: number;
    strength?: string;
    competitiveness?: string;

    isEditMode: boolean;
    editedBioText: string;
    setEditedBioText: Dispatch<SetStateAction<string>>;
    onSaveButtonPress: () => void;
};

type AnalyticType = {
    iconPath: string;
    name: string;
    analytic: string;
};

const Analytic = ({iconPath, name, analytic}: AnalyticType) => {
    return (
        <View style={styles.analytics}>
            <Image
                style={styles.icon}
                contentFit="cover"
                source={iconPath}
            />
            <View style={styles.analyticGroup}>
                <Text style={styles.analyticName}>
                    {name}
                </Text>
                <Text style={styles.analyticPhrase}>
                    {analytic}
                </Text>
            </View>
        </View>
    )
}

const ProfileDetails = memo(
        ({
             bioText,
             nMatchesLogged,
             highestRankAttained,
             sportsmanshipRating,
             strength,
             competitiveness,

             isEditMode,
             editedBioText,
             setEditedBioText,
             onSaveButtonPress,
         }:
             ProfileDetailsType
        ) => {

            const displayCompetitveness = (competitiveness) => {

                if (competitiveness < 3) {
                    return `Easy: ${competitiveness}/10`
                } else if (competitiveness > 7) {
                    return `High: ${competitiveness}/10`
                } else {
                    return `Moderate: ${competitiveness}/10`
                }
            }

            return (
                <View style={[styles.profileDetails]}>

                    {/* BIO */}
                    <View style={styles.bio}>
                        <Text style={styles.bioHeader}>Bio</Text>
                        {isEditMode ? (
                            <TextInput
                                style={styles.editableBioText}
                                multiline={true}
                                numberOfLines={4}
                                value={editedBioText}
                                onChangeText={setEditedBioText}
                            />
                        ) : (
                            <Text style={styles.bioText}>{bioText}</Text>
                        )}
                        {isEditMode ? (
                            <View style={ProfileStyles.button}>
                                <TouchableOpacity onPress={onSaveButtonPress}>
                                    <Text style={ProfileStyles.buttonText}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        ) : null}
                    </View>


                    <Analytic
                        iconPath={require("../../assets/pf-sportsmanship-rating.png")}
                        name="Sportsmanship"
                        analytic={`Star Rating: ${sportsmanshipRating}/5`}
                    />

                    <Analytic
                        iconPath={require("../../assets/pf-matches-played.png")}
                        name="Matches Played"
                        analytic={`${nMatchesLogged} logged matches`}
                    />

                    <Analytic
                        iconPath={require("../../assets/pf-highest-rank.png")}
                        name="Highest Rank Attained"
                        analytic={`${highestRankAttained}st in Tokyo`}
                    />

                    <Analytic
                        iconPath={require("../../assets/pf-match-competitiveness.png")}
                        name="Match Competitiveness"
                        analytic={displayCompetitveness(competitiveness)}
                    />

                    <Analytic
                        iconPath={require("../../assets/pf-strength.png")}
                        name="Strengths"
                        analytic={strength != "" ? strength : "No strengths yet"}
                    />

                </View>
            );
        }
    )
;

const styles = StyleSheet.create({
    profileDetails: {
        width: "100%",
        backgroundColor: Color.white,
        flexDirection: "column",
        overflow: "scroll",
        paddingVertical: "3%",
    },
    bio: {
        padding: Padding.p_3xs,
        justifyContent: "center",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: "#bababa",
        borderStyle: "solid",
        overflow: "scroll",
        alignItems: "center",
        backgroundColor: Color.white,
    },
    bioHeader: {
        fontSize: FontSize.size_xl,
        fontFamily: FontFamily.manropeBold,
        alignSelf: "stretch",
        textAlign: "left",
        color: Color.gray_300,
    },
    bioText: {
        fontFamily: FontFamily.manropeRegular,
        textAlign: "left",
        color: Color.gray_300,
        fontSize: FontSize.size_smi,
        display: "flex",
        flex: 1,
        alignItems: "center",
        alignSelf: "stretch",
    },
    editableBioText: {
        fontFamily: FontFamily.manropeRegular,
        textAlign: "left",
        color: Color.gray_300,
        fontSize: FontSize.size_smi,
        display: "flex",
        flex: 1,
        alignItems: "center",
        alignSelf: "stretch",
        height: 100,
        borderWidth: 1,
        borderRadius: 5,
        padding: "2%",
    },
    analytics: {
        flexDirection: "row",
        backgroundColor: Color.white,
        paddingVertical: Padding.p_3xs,
        paddingHorizontal: Padding.p_8xs,
        borderBottomWidth: 1,
        borderColor: "#bababa",
        borderStyle: "solid",
        overflow: "scroll",
    },
    icon: {
        height: 25,
        width: 25,
    },
    analyticGroup: {
        justifyContent: "center",
        paddingVertical: Padding.p_0,
        paddingHorizontal: Padding.p_8xs,
        overflow: "scroll",
    },
    analyticName: {
        fontSize: 12,
        fontWeight: "600",
        fontFamily: FontFamily.manropeSemibold,
    },
    analyticPhrase: {
        fontSize: 10,
    },
    button: {
        flexDirection: "row",
        gap: 5,
        backgroundColor: Color.whitesmoke_300,
        borderRadius: Border.br_131xl,
        justifyContent: "center",
        alignItems: "center",
        width: "30%",
        paddingVertical: "1%",
        paddingHorizontal: "1%",
        marginVertical: "2%"
    },
    buttonText: {
        fontFamily: FontFamily.manropeMedium,
        color: Color.gray_100,
    },
});

export default ProfileDetails;
