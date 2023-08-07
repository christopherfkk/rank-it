import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Padding, Border, FontFamily, FontSize, Color, Home } from '../../GlobalStyles';
import apiConfig from '../../apiConfig';
import { Dimensions } from 'react-native'; // Import Dimensions to get the screen width

const Instructions = () => {
  const navigation = useNavigation();
  const [ranking, setRanking] = useState([]);
  const [userId, setUserId] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = JSON.parse(await AsyncStorage.getItem('userInfo'));
        setUserId(user.id);

        const access = await AsyncStorage.getItem('accessToken');
        const response = await fetch(`${apiConfig.BASE_URL}/ranks/skill/`, {
          method: 'GET',
          headers: {
            Authorization: `Token ${access}`,
          },
        });
        const data = await response.json();
        setRanking(data);
        console.log(data);
      } catch {
        console.error("NO RANKING: Can't fetch ranking");
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={[Home.background]}>
      <View style={Home.body}>
        <ScrollView
          style={styles.ranking}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.rankingScrollViewContent}
        >
          
          <Text style={styles.headerText}>
            Instructions
          </Text> 
          <br />
          <Text style={styles.subtitleText}>
          How do you challenge someone?
          </Text>
          <Text style={styles.instruction}>
          There are two ways to challenge someone. 
          </Text>
          <br />
          <Text style={styles.subtitleitalicsText}>
          The first way is to challenge someone who is at a similar skill rating!:
          </Text>
          <br />
          <Text style={styles.instruction}>
          1. Click on the “ranking/medal” icon found in the bottom bar. 
          </Text>
          <Image
            source={require('../../assets/Instructions/Medal.png')}
            style={styles.medalImage}
            resizeMode="contain"
          />
          <Text style={styles.instruction}>
          2. Find someone who is at a similar skill rating.
          </Text>
          <Text style={styles.instruction}>
          3. Click on “Challenge” found next to the profile of the person
          </Text>
          <Image
            source={require('../../assets/Instructions/RankingPage.png')}
            style={styles.RankingPageImage}
            resizeMode="contain"
          />
          <Text style={styles.instruction}>
          4. After you read their profile, click “record”!
          </Text>
          <Text style={styles.instruction}>
          5. Finally play the game!
          </Text>
          <Text style={styles.instruction}>
          6. After you are done document your score and you’re done!
          </Text>

          <Image
            source={require('../../assets/Instructions/Recordscore.png')}
            style={styles.RecordscoreImage}
            resizeMode="contain"
          />

          <Text style={styles.subtitleitalicsText}>
          The second way is to accept an game invitation:
          </Text>
          <br />
          <Text style={styles.instruction}>
          Once you are done playing the game. If your opponent records your score you will receive an invitation. To accept it you must:
          </Text>
          <Text style={styles.instruction}>
          1. Click on the “confirmation” icon. 
          </Text>

          <Image
            source={require('../../assets/Instructions/Confirmationicon.png')}
            style={styles.medalImage}
            resizeMode="contain"
          />

          <Text style={styles.instruction}>
          2. Look for the game you played
          </Text>
          <Text style={styles.instruction}>
          3. Click on the game 
          </Text>

          <Image
            source={require('../../assets/Instructions/Confirmgame.png')}
            style={styles.ConfirmgameImage}
            resizeMode="contain"
          />

          <Text style={styles.instruction}>
          4. You will then have to record your score (Make sure to put in the same score)
          </Text>
          <Text style={styles.instruction}>
          5. Then fill in the: Opponent Strength, Sportsmanship rating, Match competitiveness rating, and Feedback!
          </Text>

          <Image
            source={require('../../assets/Instructions/RecordPage2.png')}
            style={styles.RankingPageImage}
            resizeMode="contain"
          />

          <Text style={styles.instruction}>
          6. Finally click submit and the AI will calculate your new skill rating!
          </Text>

          <Text style={styles.instruction}>
          Once you’re done reading this you can play!
          </Text>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    alignItems: "center",
    justifyItems: "center",
    paddingTop: "5%",
  },
  headerText: {
    fontSize: FontSize.size_11xl,
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.bebasNeueRegular,
  },
  subtitle: { 
    width: "100%",
    alignItems: "center",
    paddingTop: "5%",
  },
  subtitleText: { 
    fontSize: 16.5, 
    color: Color.lightLabelPrimary,
    fontWeight: 'bold',
  },
  subtitleitalics: { 
    width: "100%",
    alignItems: "center",
    paddingTop: "5%",
  },
  subtitleitalicsText: { 
    fontSize: 14, 
    color: Color.lightLabelPrimary,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  
  
  medalImage: {
    width: 400,
    height: 200,
    marginVertical: 20,
    alignSelf: 'center',
  },
  RankingPageImage: {
    width: 500,
    height: 700,
    marginVertical: 20,
    alignSelf: 'center',
  },
  RecordscoreImage: {
    width: 500,
    height: 1500,
    marginVertical: 20,
    alignSelf: 'center',
  },
  ConfirmgameImage: {
    width: 500,
    height: 250,
    marginVertical: 20,
    alignSelf: 'center',
  },
  instructionText: {
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.bebasNeueRegular,
    justifyContent: "center",
},
instruction: {
    alignSelf: "flex-start",  // ALIGN LEFT
    width: "70%",  // SAME AS PROFILE IN RANKING CONTAINER
    flexDirection: "row",
    marginBottom: "1%",
    marginTop: "3%"
},
  // ... (Existing styles)
});

export default Instructions;
