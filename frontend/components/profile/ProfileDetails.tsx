import React, {useMemo, memo} from "react";
import {Text, StyleSheet, View} from "react-native";
import {Image} from "expo-image";
import {Color, FontFamily, Padding, FontSize} from "../../GlobalStyles";

type ProfileDetailsType = {
    bioText?: string;
    nMatchesLogged?: number;
    highestRankAttained?: number;
    sportsmanshipRating?: number;
    strength?: string;
    competitiveness?: string;
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
     }:
         ProfileDetailsType) => {

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
                    <Text style={styles.bioHeader}>
                        Bio
                    </Text>
                    <Text style={styles.bioText}>
                        {bioText}
                    </Text>
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
                    analytic={strength}
                />

            </View>
        );
    }
);

const styles = StyleSheet.create({
    profileDetails: {
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
});

export default ProfileDetails;
