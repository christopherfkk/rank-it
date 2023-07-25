import {React, useEffect} from 'react';
import {Text, StyleSheet, View, Pressable, ScrollView} from "react-native";
import {useNavigation} from "@react-navigation/native";
import RankingContainer from "../../components/home/RankingContainer";
import {Padding, Border, FontFamily, FontSize, Color} from "../../GlobalStyles";
import apiConfig from '../../apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to get the value of a specific cookie
function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null; // Return null if cookie not found
}
const Ranking = () => {

    const navigation = useNavigation();

    useEffect(() => {
        const fetchData = async () => {

            const r = await fetch(`${apiConfig.BASE_URL}/csrf/`, {
                method: "GET",
            })
            const d = await r.json();
            console.log(r)
            console.log(d)


            const access = await AsyncStorage.getItem('accessToken')
            console.log(`ACCESS TOKEN ${access}`)

            const sessionid = getCookie('sessionid')
            console.log(sessionid)

            const response = await fetch(`${apiConfig.BASE_URL}/ranks/skill/`, {
                method: "GET",
                credentials: 'include',
                headers: {
                    "Authorization": `Token ${access}`
                    "X-CSRFToken": d['csrfToken'],
                },
            })
            const data = await response.json();
            console.log(response)
            console.log(data)
        };

        fetchData();
    }, []);

    const data = [
        {"name": "Chris Fok", "avatar": "", "skill": 420},
        {"name": "Jin Tanaka", "avatar": "", "skill": 420},
        {"name": "Peter Wang", "avatar": "", "skill": 420},
    ]

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
                {data.map((item, index) => (
                    <RankingContainer
                        rank={index + 1}
                        name={item.name}
                        avatar={item.avatar}
                        skill={item.skill}
                        onFrameTouchableOpacityPress={() =>
                            navigation.navigate("Profile")
                        }
                    />
                ))}
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
        paddingHorizontal: "15%",
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
