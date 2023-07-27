import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';

import ConfirmationContainer from "../../components/home/ConfirmationContainer";
import { Padding, Border, FontFamily, FontSize, Color } from "../../GlobalStyles";
import apiConfig from '../../apiConfig';

const MatchConfirm = () => {
    const navigation = useNavigation();
    const [notification, setNotification] = useState([]);
    const [userId, setUserId] = useState();
    const [access, setAccess] = useState();
    const [matches, setMatches] = useState([]);
    
    const formatDate = (datetime) => {
        const date = new Date(datetime);
        const formattedDate = format(date, "MMMM dd, yyyy 'at' HH:mm"); // Customize the date and time format as you like
        return formattedDate;
      };

    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch the accessToken
          const accessToken = await AsyncStorage.getItem('accessToken');
          setAccess(accessToken);
  
          // Fetch the notifications
          const response = await fetch(`${apiConfig.BASE_URL}/notifications/notification/`, {
            method: "GET",
            headers: {
              "Authorization": `Token ${accessToken}`
            }
          });
          const data = await response.json();
          setNotification(data);
        } catch {
          console.error("Error fetching notifications");
        }
      };
  
      fetchData();
    }, []); // Empty dependency array, so it runs only once on mount
  
    useEffect(() => {
        const fetchMatchData = async () => {
          if (notification.length === 0) return; // Check if there are notifications
      
          try {
            const allMatches = []; // Initialize an array to accumulate all matches
      
            for (const notif of notification) {
              const response = await fetch(`${apiConfig.BASE_URL}/match/${notif.notification_object.id}`, {
                method: "GET",
                headers: {
                  "Authorization": `Token ${access}`
                }
              });
              const matchData = await response.json();
              console.log(matchData); // Log the data for each match
              
              console.log("Submitter:", matchData.submitter.first_name, matchData.submitter.last_name);
              console.log("Updated At:", formatDate(matchData.updated_at));
      
              allMatches.push(matchData); // Add the match to the array
            }
      
            setMatches(allMatches); // Set the matches state with all accumulated matches
          } catch (error) {
            console.error('Error fetching match data:', error);
          }
        };
      
        fetchMatchData();
      }, [notification, access]);
      
  

  return (
        <View style={styles.rankingPage}>

            {/*HEADER*/}
            <View style={styles.header}>
                <Text style={styles.headerText}>Confirmation</Text>
            </View>

            {/*SUBHEADING*/}
            <View style={styles.subheading}>
                <Text style={styles.subheadingText}>
                    OPPONENT
                </Text>
                <Text style={styles.subheadingText}>
                    TIME OF MATCH
                </Text>
            </View>

            <ScrollView
                style={styles.ranking}
                showsVerticalScrollIndicator={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.rankingScrollViewContent}
            >
            {matches && matches.map((match, index) => (
            <ConfirmationContainer
                key={index + 1}
                matchData={match}
                match={index + 1}
                name={match.submitter.first_name + " " + match.submitter.last_name}
                date={formatDate(match.updated_at)}
                // self={rank.user.id == userId}
                // onFrameTouchableOpacityPress={() =>
                //     navigation.navigate("Profile",
                //         { otherUserId: rank.user.id, self: rank.user.id == userId }
                //     )
                // }
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

export default MatchConfirm;
