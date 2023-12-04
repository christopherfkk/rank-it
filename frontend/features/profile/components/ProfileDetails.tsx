import React, {useMemo, memo, Dispatch, SetStateAction} from "react";
import {Text, StyleSheet, View, TouchableOpacity, TextInput, Image} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

import {theme} from "../../../theme/GlobalStyles";

type ProfileDetailsType = {
    bioText?: string;
    nMatchesLogged?: string;
    highestRankAttained?: string;
    sportsmanshipRating?: string;
    strength?: string;
    competitiveness?: string;

    isEditMode: boolean;
    editedBioText: string;
    setEditedBioText: Dispatch<SetStateAction<string>>;
    onSaveButtonPress: () => void;
};

type AnalyticType = {
    iconName: string;
    name: string;
    analytic: string;
};

const Analytic = ({iconName, name, analytic}: AnalyticType) => {
    return (
        <View style={styles.analytics}>
            <Icon
                name={iconName}
                size={20}
                color={theme.colors.foreground}
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

                if (competitiveness < 2) {
                    return `Easy: ${competitiveness}/5`
                } else if (competitiveness > 4) {
                    return `High: ${competitiveness}/5`
                } else {
                    return `Moderate: ${competitiveness}/5`
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
                            <View style={styles.button}>
                                <TouchableOpacity onPress={onSaveButtonPress}>
                                    <Text style={styles.buttonText}>
                                        Save
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ) : null}
                    </View>


                    <Analytic
                        iconName="book"
                        name="Sportsmanship"
                        analytic={`Star Rating: ${sportsmanshipRating}/5`}
                    />

                    <Analytic
                        iconName="book"
                        name="Matches Played"
                        analytic={`${nMatchesLogged} logged matches`}
                    />

                    <Analytic
                        iconName="book"
                        name="Highest Rank Attained"
                        analytic={`${highestRankAttained}st in Tokyo`}
                    />

                    <Analytic
                        iconName="book"
                        name="Match Competitiveness"
                        analytic={displayCompetitveness(competitiveness)}
                    />

                    <Analytic
                        iconName="book"
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
        backgroundColor: theme.colors.background,
        flexDirection: "column",
        overflow: "scroll",
        paddingVertical: "3%",
    },
    bio: {
        justifyContent: "center",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: "#bababa",
        borderStyle: "solid",
        overflow: "scroll",
        alignItems: "center",
        backgroundColor: theme.colors.background,
    },
    bioHeader: {
        fontSize: theme.textVariants.header.fontSize,
        fontFamily: theme.textVariants.header.fontFamily,
        color: theme.colors.foreground,
        alignSelf: "stretch",
        textAlign: "left",
    },
    bioText: {
        textAlign: "left",
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
        display: "flex",
        flex: 1,
        alignItems: "center",
        alignSelf: "stretch",
    },
    editableBioText: {
        textAlign: "left",
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
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
        backgroundColor: theme.colors.background,
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
        overflow: "scroll",
    },
    analyticName: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
    },
    analyticPhrase: {
        fontSize: 13,
    },
    button: {
        flexDirection: "row",
        gap: 5,
        backgroundColor: theme.colors.background,
        justifyContent: "center",
        alignItems: "center",
        width: "30%",
        paddingVertical: "1%",
        paddingHorizontal: "1%",
        marginVertical: "2%"
    },
    buttonText: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
    },
});

export default ProfileDetails;
