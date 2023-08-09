import React, { useState, useEffect, useCallback } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';

import ModalReminder from '../../components/home/ModalReminder';
import RankingContainer from '../../components/home/RankingContainer';
import { Border, FontFamily, FontSize, Color, Home } from '../../GlobalStyles';
import apiConfig from '../../apiConfig';
import { RootState } from '../../store';

interface User {
  id: string;
  first_name: string;
  last_name: string;
  avatar_image_name: string;
}

interface RankingData {
  user: User;
  skill: number;
}

const Ranking = () => {
  const socket = useSelector((state: RootState) => state.webSocketStore.socket_ranks);

  const navigation = useNavigation();
  const [ranking, setRanking] = useState<RankingData[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (socket) {
      socket.onmessage = (e) => {
        console.log('Websocket Ranking Received');
        console.log(JSON.parse(e.data).ranking);
        setRanking(JSON.parse(e.data).ranking);
      };
    }
    return () => {
      // Cleanup function to remove the event listener when the component unmounts
      if (socket) {
        socket.onmessage = null;
      }
    };
  },[]);

  const [unconfirmedMatch, setUnconfirmedMatch] = useState(false);

  const isPopUp = useSelector((state: RootState) => state.webSocketStore.isPopUp);
  const messages = useSelector((state: RootState) => state.webSocketStore.messages);

  useEffect(() => {
    if (isPopUp === true) {
      console.log('isPopup', isPopUp)
      setUnconfirmedMatch(true);
    }
}, [isPopUp, messages]);
    

  const handleClosePopup = () => {
    setUnconfirmedMatch(false);
    // dispatch({ type: WebSocketActionTypes.ISPOPUP, payload: false});
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const user = JSON.parse(await AsyncStorage.getItem('userInfo'));
      setUserId(user.id);
      setUserName(user.first_name);

      const access = await AsyncStorage.getItem('accessToken');
      const response = await fetch(`${apiConfig.BASE_URL}/ranks/skill/`, {
        method: 'GET',
        headers: {
          Authorization: `Token ${access}`,
        },
      });
      const data: RankingData[] = await response.json();
      setRanking(data);
      console.log(data);
    } catch {
      console.error('NO RANKING: Can\'t fetch ranking');
    }
    setIsLoading(false);
  };

  const fetchDataAndRefresh = useCallback(async () => {
    await fetchData();
    setRefresh(false);
  }, []);

  useEffect(() => {
    // Fetch data when the component mounts and when the 'refresh' state changes
    fetchDataAndRefresh();
  }, [refresh, fetchDataAndRefresh]);

  useFocusEffect(
    useCallback(() => {
      // Fetch data when the screen is focused
      fetchDataAndRefresh();
    }, [fetchDataAndRefresh])
  );

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={Color.crimson_100} />
      </View>
    );
  }

  return (
    <SafeAreaView style={[Home.background]}>
      <View style={Home.body}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Ranking</Text>
        </View>

        {/* LOCATION TABS */}
        {/* <View style={styles.location}>
          <Pressable style={styles.locationTab}>
            <Text style={styles.locationTabText}>Tokyo</Text>
          </Pressable>
          <Pressable style={styles.locationTab}>
            <Text style={styles.locationTabText}>CB Gym</Text>
          </Pressable>
        </View>  */}

        {/* SUBHEADING */}
        <View style={styles.subheading}>
          <Text style={[styles.subheadingText, { width: '20%' }]}>RANK</Text>
          <Text style={[styles.subheadingText, { width: '40%' }]}>ATHLETE</Text>
          <Text style={[styles.subheadingText, { width: '40%' }]}>SKILL RATING</Text>
        </View>

        <ScrollView
          style={styles.ranking}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.rankingScrollViewContent}
        >
        
        {/* If username is null, filter out  */}
          {ranking
            .filter((rank) => rank.user.first_name !== null && rank.user.last_name !== null)
            .map((rank, index) => (
              <RankingContainer
                key={index + 1}
                opponentData={rank.user}
                rank={index + 1}
                opponentName={`${rank.user.first_name} ${rank.user.last_name}`}
                avatar_image_name={rank.user.avatar_image_name}
                skill={rank.skill}
                self={rank.user.id === userId}
                selfName={userName}
                setRefresh={setRefresh}
                onFrameTouchableOpacityPress={() => {
                  navigation.navigate('Profile', { otherUserId: rank.user.id, self: rank.user.id === userId });
                }}
              />
            ))}
        </ScrollView>
        {/* Notification Popup */}
        <ModalReminder
          visible={unconfirmedMatch}
          onClose={handleClosePopup}
          // Add more props if your ModalReminder component needs them
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'center',
    paddingTop: '5%',
  },
  headerText: {
    fontSize: FontSize.size_11xl,
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.bebasNeueRegular,
  },
  location: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '15%',
    paddingVertical: '2%',
  },
  locationTab: {
    width: '30%',
    borderRadius: Border.br_xl,
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingVertical: '1%',
  },
  locationTabText: {
    textAlign: 'center',
    fontFamily: FontFamily.manropeRegular,
    fontSize: FontSize.size_3xs,
    color: Color.lightLabelPrimary,
  },
  subheading: {
    alignSelf: 'center',
    width: '70%',
    flexDirection: 'row',
    marginBottom: '1%',
    marginTop: '3%',
  },
  subheadingText: {
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    textAlign: 'center',
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.bebasNeueRegular,
    justifyContent: 'center',
  },
  ranking: {
    alignSelf: 'stretch',
    overflow: 'scroll',
  },
  rankingScrollViewContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    overflow: 'scroll',
  },
});

export default Ranking;
