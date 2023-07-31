import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Pressable, ScrollView, SafeAreaView} from "react-native";
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import RankingContainer from "../../components/home/RankingContainer";
import { Border, FontFamily, FontSize, Color, Home } from "../../GlobalStyles";
import apiConfig from '../../apiConfig';

const Ranking = () => {

    const navigation = useNavigation();
    const [ranking, setRanking] = useState([])
    const [userId, setUserId] = useState()
    const [refresh, setRefresh] = useState(false);

    const fetchData = async () => {

        try {
            const user = JSON.parse(await AsyncStorage.getItem('userInfo'))
            setUserId(user.id)

            const access = await AsyncStorage.getItem('accessToken')
            const response = await fetch(`${apiConfig.BASE_URL}/ranks/skill/`, {
                method: "GET",
                headers: {
                    "Authorization": `Token ${access}`
                }
            })
            const data = await response.json();
            setRanking(data)
            console.log(data)
        } catch {
            console.error("NO RANKING: Can't fetch ranking")
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // change later to see whether we can remove the first useEffect()
    useEffect(() => {
        if (refresh) {
            console.log('autorefresh')
          fetchData(); // Fetch data when 'refresh' is true
          setRefresh(false); // Set 'refresh' back to false after fetching data
        }
      }, [refresh]);

    return (
        <SafeAreaView style={[Home.background]}>
            <View style={Home.body}>

                {/*HEADER*/}
                <View style={styles.header}>
                    <Text style={styles.headerText}>Ranking</Text>
                </View>

                {/* LOCATION TABS
                <View style={styles.location}>
                    <Pressable style={styles.locationTab}>
                        <Text style={styles.locationTabText}>Tokyo</Text>
                    </Pressable>
                    <Pressable style={styles.locationTab}>
                        <Text style={styles.locationTabText}>CB Gym</Text>
                    </Pressable>
                </View> */}

                {/*SUBHEADING*/}
                <View style={styles.subheading}>
                    <Text style={[styles.subheadingText, {width: "20%"}]}>
                        RANK
                    </Text>
                    <Text style={[styles.subheadingText, {width: "50%"}]}>
                        ATHLETE
                    </Text>
                    <Text style={[styles.subheadingText, {width: "30%"}]}>
                        SKILL RATING
                    </Text>
                </View>

                <ScrollView
                    style={styles.ranking}
                    showsVerticalScrollIndicator={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.rankingScrollViewContent}
                >
                    {ranking.map((rank, index) => (
                        <RankingContainer
                            key={index + 1}
                            opponentData={rank.user}
                            rank={index + 1}
                            opponentName={rank.user.first_name + " " + rank.user.last_name}
                            skill={rank.skill}
                            self={rank.user.id == userId}
                            setRefresh={setRefresh}
                            onFrameTouchableOpacityPress={() =>
                                navigation.navigate("Profile",
                                    {otherUserId: rank.user.id, self: rank.user.id == userId}
                                )
                            }
                        />
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    // rankingPage: {
    //     flex: 1,
    //     overflow: "scroll",
    //     width: "100%",
    //     backgroundColor: Color.white,
    // },
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
        paddingHorizontal: "15%",
        paddingVertical: "2%"
    },
    locationTab: {
        width: "30%",
        borderRadius: Border.br_xl,
        backgroundColor: "#ededed",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        paddingVertical: "1%",
    },
    locationTabText: {
        textAlign: "center",
        fontFamily: FontFamily.manropeRegular,
        fontSize: FontSize.size_3xs,
        color: Color.lightLabelPrimary,
    },
    subheading: {
        alignSelf: "flex-start",  // ALIGN LEFT
        width: "70%",  // SAME AS PROFILE IN RANKING CONTAINER
        flexDirection: "row",
        marginBottom: "1%",
        marginTop: "3%"
    },
    subheadingText: {
        letterSpacing: 0.3,
        fontSize: FontSize.size_3xs,
        textAlign: "center",
        color: Color.lightLabelPrimary,
        fontFamily: FontFamily.bebasNeueRegular,
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
