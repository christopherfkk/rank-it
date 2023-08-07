import React from 'react';
import { Text, StyleSheet, View, ScrollView, SafeAreaView, Image } from 'react-native';
import { FontFamily, FontSize, Color, Home } from '../../GlobalStyles';

const Instructions = () => {
  return (
    <SafeAreaView style={[Home.background]}>
      <View style={Home.body}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
        >
          <Text style={styles.headerText}>
            Instructions
          </Text> 
          
          <Text style={styles.subtitleText}>
            How do you challenge someone?
          </Text>
          <Text style={styles.instruction}>
            There are two ways to challenge someone. 
          </Text>

          {/* First way */}
          <Text style={styles.subtitleItalicsText}>
            The first way is to challenge someone who is at a similar skill rating!:
          </Text>
          <Text style={styles.instruction}>
            1. Click on the "ranking/medal" icon found in the bottom bar. 
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

          {/* Second way */}
          <Text style={styles.subtitleItalicsText}>
            The second way is to accept a game invitation:
          </Text>
          <Text style={styles.instruction}>
            Once you are done playing the game, if your opponent records your score, you will receive an invitation. To accept it, you must:
          </Text>
          <Text style={styles.instruction}>
            1. Click on the "confirmation" icon. 
          </Text>
          <Image
            source={require('../../assets/Instructions/Confirmationicon.png')}
            style={styles.confirmationIcon}
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
            Once you're done reading this, you can play!
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: FontSize.size_11xl,
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.bebasNeueRegular,
    marginBottom: 10,
    textAlign: "center",
  },
  subtitleText: {
    fontSize: FontSize.size_6xl,
    color: Color.lightLabelPrimary,
    fontWeight: 'bold',
    textAlign: "center",
    marginBottom: 10,
  },
  subtitleItalicsText: {
    fontSize: FontSize.size_sm,
    color: Color.lightLabelPrimary,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: "center",
    marginBottom: 10,
  },
  instruction: {
    fontSize: FontSize.size_2xs,
    color: Color.lightLabelPrimary,
    textAlign: "left",
    marginBottom: 5,
  },
  medalImage: {
    width: 300,
    height: 150,
    alignSelf: 'center',
    marginBottom: 10,
  },
  confirmationIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 10,
  },
  ConfirmgameImage: {
    width: 500,
    height: 250,
    marginVertical: 20,
    alignSelf: 'center',
  },  
  RecordscoreImage: {
    width: 500,
    height: 1500,
    marginVertical: 20,
    alignSelf: 'center',
  },
  RankingPageImage: {
    width: 500,
    height: 700,
    marginVertical: 20,
    alignSelf: 'center',
  },
});

export default Instructions;