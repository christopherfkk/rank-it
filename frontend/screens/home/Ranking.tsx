import * as React from "react";
import {Text, StyleSheet, View, Pressable, ScrollView} from "react-native";
import {useNavigation} from "@react-navigation/native";
import OpponentContainer from "../../components/home/OpponentContainer";
import ProfileContainer from "../../components/home/ProfileContainer";
import {Padding, Border, FontFamily, FontSize, Color} from "../../GlobalStyles";

const Ranking = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.rankingPage}>

            {/*HEADER*/}
            <View style={styles.header}>
                <Text style={styles.headerText}>Ranking</Text>
            </View>

            {/*LOCATION TABS*/}
            <View style={styles.location}>
                <Pressable style={styles.locationTab}>
                    <Text style={styles.locationTabText}>Tokyo</Text>
                </Pressable>
                <Pressable style={styles.locationTab}>
                    <Text style={styles.locationTabText}>Shibuya</Text>
                </Pressable>
            </View>

            {/*SUBHEADING*/}
            <View style={styles.subheading}>
                <Text style={styles.subheadingText}>
                    ATHLETE
                </Text>
                <Text style={styles.subheadingText}>
                    SKILL RATING
                </Text>
            </View>

            <ScrollView
                style={styles.ranking}
                showsVerticalScrollIndicator={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.rankingScrollViewContent}
            >

                <OpponentContainer
                    onFrameTouchableOpacityPress={() =>
                        navigation.navigate("OpponentMenu")
                    }
                />
                <OpponentContainer
                    onFrameTouchableOpacityPress={() =>
                        navigation.navigate("OpponentMenu")
                    }
                />
                <OpponentContainer
                    onFrameTouchableOpacityPress={() =>
                        navigation.navigate("OpponentMenu")
                    }
                />
                <OpponentContainer
                    onFrameTouchableOpacityPress={() =>
                        navigation.navigate("OpponentMenu")
                    }
                />
                <OpponentContainer
                    onFrameTouchableOpacityPress={() =>
                        navigation.navigate("OpponentMenu")
                    }
                />
                <OpponentContainer
                    onFrameTouchableOpacityPress={() =>
                        navigation.navigate("OpponentMenu")
                    }
                />
                <OpponentContainer
                    onFrameTouchableOpacityPress={() =>
                        navigation.navigate("OpponentMenu")
                    }
                />
                <OpponentContainer
                    onFrameTouchableOpacityPress={() =>
                        navigation.navigate("OpponentMenu")
                    }
                />
                <OpponentContainer
                    onFrameTouchableOpacityPress={() =>
                        navigation.navigate("OpponentMenu")
                    }
                />
                <OpponentContainer
                    onFrameTouchableOpacityPress={() =>
                        navigation.navigate("OpponentMenu")
                    }
                />
                <OpponentContainer
                    onFrameTouchableOpacityPress={() =>
                        navigation.navigate("OpponentMenu")
                    }
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    rankingPage: {
        flex: 1,
        overflow: "scroll",
        width: "100%",
        backgroundColor: Color.white,
    },
    header: {
        width: "100%",
        alignItems: "center",
        paddingTop: "5%",
    },
    headerText: {
        fontSize: FontSize.size_11xl,
        color: Color.lightLabelPrimary,
        fontFamily: FontFamily.bebasNeueRegular,
    },
    location: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal:"15%",
        paddingVertical: "2%",
    },
    locationTab: {
        width: "30%",
        borderRadius: Border.br_xl,
        backgroundColor: "#ededed",
        height: 21,
        paddingVertical: Padding.p_11xs,
        paddingHorizontal: Padding.p_0,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",

    },
    locationTabText: {
        textAlign: "center",
        fontFamily: FontFamily.manropeRegular,
        fontSize: FontSize.size_3xs,
        color: Color.lightLabelPrimary,
    },
    subheading: {
        paddingHorizontal: "8%",
        paddingVertical: "1%",
        flexDirection: "row",
    },
    subheadingText: {
        width: "40%",
        letterSpacing: 0.3,
        fontSize: FontSize.size_3xs,
        textAlign: "left",
        color: Color.lightLabelPrimary,
        fontFamily: FontFamily.bebasNeueRegular,
        alignItems: "center",
        justifyContent: "center",
    },
    ranking: {
        alignSelf: "stretch",
        overflow: "scroll",
    },
    rankingScrollViewContent: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        alignSelf: "stretch",
        overflow: "scroll",
    },
});

export default Ranking;
