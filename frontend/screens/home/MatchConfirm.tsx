import React, { useState, useEffect, useCallback } from 'react';
import { Text, StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';

import ConfirmationContainer from "../../components/home/ConfirmationContainer";
import { Padding, Border, FontFamily, FontSize, Color, Home } from "../../GlobalStyles";
import apiConfig from '../../apiConfig';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const MatchConfirm = () => {
  const [notification, setNotification] = useState([]);
  const [matches, setMatches] = useState([]);
  const [access,setAccess] = useState(null)
  const [refresh, setRefresh] = useState(false);
  const [selfId, setSelfId] = useState();
  const [selfName, setSelfName] = useState();
  const messages = useSelector((state: RootState) => state.webSocketStore.messages);

  useEffect(() => {
    const fetchAccessToken = async () => {
        const token = await AsyncStorage.getItem('accessToken');
        setAccess(token);
    };

    fetchAccessToken();
}, []);

  useEffect(() => {
    if (messages && messages.length > 0) {
      setNotification(messages);
    }
}, [messages]);

  useEffect(() => {
    fetchMatchData(access, notification)
  }, [notification])

  const formatDate = (datetime) => {
    const date = new Date(datetime);
    const formattedDate = format(date, "MMMM dd, yyyy 'at' HH:mm"); // Customize the date and time format as you like
    return formattedDate;
  };

  const fetchData = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const selfInfo = JSON.parse(await AsyncStorage.getItem('userInfo'));
      setSelfName(selfInfo.first_name);
      setSelfId(selfInfo.id);

      const response = await fetch(`${apiConfig.BASE_URL}/notifications/notification/`, {
        method: "GET",
        headers: {
          "Authorization": `Token ${accessToken}`
        }
      });
      const data = await response.json();
      setNotification(data);

      return { accessToken, notifications: data };
    } catch {
      console.error("Error fetching notifications");
    }
  };

  const fetchMatchData = async (accessToken, notifications) => {
    if (notifications.length === 0) {
      setMatches([]);
      return;
    }
    try {
      const allMatches = [];

      for (const notif of notifications) {
        const response = await fetch(`${apiConfig.BASE_URL}/match/${notif.notification_object.id}`, {
          method: "GET",
          headers: {
            "Authorization": `Token ${accessToken}`
          }
        });
        const matchData = await response.json();
        matchData.notifId = notif.id;
        allMatches.push(matchData);
      }

      setMatches(allMatches);
    } catch (error) {
      console.error('Error fetching match data:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData().then(({ accessToken, notifications }) => {
        if (accessToken) {
          fetchMatchData(accessToken, notifications);
          setRefresh(false);
        }
      });
    }, [refresh])
  );

  return (
    <SafeAreaView style={[Home.background]}>
      <View style={Home.body}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Confirmation</Text>
        </View>
        <Text>To record the match in the ranking, both players must confirm the post-match feedback after completing the game.</Text>
        <View style={styles.subheading}>
          <Text style={[styles.subheadingText, { width: "110%" }]}>
            OPPONENT
          </Text>
          <Text style={[styles.subheadingText, { width: "70%" }]}>
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
              opponentName={match.submitter.first_name + " " + match.submitter.last_name}
              date={formatDate(match.updated_at)}
              setRefresh={setRefresh}
              avatar={match.submitter.avatar_image_name}
              selfId={selfId}
              selfName={selfName}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
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
    alignSelf: "flex-start",
    width: "70%",
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
    width: "100%"
  },
});

export default MatchConfirm; 
