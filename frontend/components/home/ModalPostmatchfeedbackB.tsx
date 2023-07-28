import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  Modal
} from "react-native";
import { Image } from "expo-image";
import StrengthGrid from "./StrengthGrid"
import PfButton1 from "./SubmitButton";
import { Color, FontFamily, FontSize } from "../../GlobalStyles";
import InsertMatchScores from "./InsertMatchScores";
import SlidersComponent from "./Slider";
import FeedbackBlurb from "./FeedbackBlurb";
import BackButton from "./BackButton";
import ProfileBox from "./ProfileBox";
import apiConfig from "../../apiConfig"
import AsyncStorage from "@react-native-async-storage/async-storage";

type ModalPostmatchfeedbackType = {
  visible: boolean; // Add the 'visible' property to the type
  onClose?: () => void;
  name: string;
  level: string;
  opponentId: number;
  matchId:number
  notifId: number
  setRefresh: Function}

const ModalPostmatchfeedbackB = ({ visible, onClose, name, level, opponentId, matchId, notifId, setRefresh}: ModalPostmatchfeedbackType) => {
  const [matchScoresError, setMatchScoresError] = useState(false);
  
  const [submitterScore, setSubmitterScore] = useState(""); // State for "You" score
  const [opponentScore, setOpponentScore] = useState(""); // State for "Opponent" score
  const [pressedButtonsList, setPressedButtonsList] = useState([]);
  const [sportsmanshipValue, setSportsmanshipValue] = useState(3);
  const [matchCompetitivenessValue, setMatchCompetitivenessValue] = useState(5);
  const [feedbackText, setFeedbackText] = useState('');

  const handleButtonsPressed = (pressedButtons) => {
    setPressedButtonsList(pressedButtons);
  };

  const updateRead = async (notifId) => {

    try {
        const access = await AsyncStorage.getItem('accessToken')
        const response = await fetch(`${apiConfig.BASE_URL}/notifications/notification/${notifId}/`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${access}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({status: "Read"})
        })
        const data = await response.json();
        console.log(response)
        console.log(data)
    } catch {
        console.error("NO READ: Can't update notification")
    }
};

  const handleSubmit = async () => {
    // Create the data object to send to the backend
    if (submitterScore === "" || opponentScore === "") {
      console.error("Match scores are mandatory. Please provide both your score and opponent's score.");
      setMatchScoresError(true);
      return;
    }
    setMatchScoresError(false);

    const userInfo = JSON.parse(await AsyncStorage.getItem('userInfo'))
    const access = await AsyncStorage.getItem('accessToken')
    
    const feedbackData = {
        "match_id": matchId,  
        "reporter_id": userInfo.id,
        "opponent_id": opponentId,  
        "strengths": pressedButtonsList, 
        "reporter_is_submitter": false,
        "submitter_score": opponentScore, // they are reversed due to backend database structure when confirming an existing match
        "opponent_score": submitterScore, // they are reversed due to backend database structure when confirming an existing match
        "peer_sportsmanship_rating_given": sportsmanshipValue,  // 1-5
        "match_competitiveness_rating": matchCompetitivenessValue, // 1-10
        "peer_skill_level_given": null,  
        "peer_feedback_blurb_given": ""  
    }
    console.log(feedbackData)
    // Perform the API request to send the feedback data to the backend
    // Example using fetch:
    fetch(`${apiConfig.BASE_URL}/postmatchfeedback/`, {
      method: 'POST',
      headers: {
        "Authorization": `Token ${access}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(feedbackData),
    })
    .then(response => response.json())
    .then(data => {
      // Handle response from the backend if needed
      console.log('Feedback data sent successfully:', data);
    })
    .catch(error => {
      console.error('Error sending feedback data:', error);
    });

    await updateRead(notifId)
    setRefresh(true);
    // Close the modal after submitting
    onClose?.();
  };
    

  return (
    <Modal animationType="slide" transparent visible={visible}>
      <SafeAreaView style={styles.modalPostmatchfeedback}>
        <ScrollView
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
        >
          <BackButton onPress={() => onClose()} />
          <View style={styles.heading1box}>
            <Text style={styles.heading1}>Your Match with</Text>
          </View>
          <ProfileBox name={name} avatar={require("../../assets/avatar.png")} level={level} />
          <InsertMatchScores
            onChangeYourScore={(score) => setSubmitterScore(score)}
            onChangeOpponentScore={(score) => setOpponentScore(score)}
          />
          <StrengthGrid onButtonsPressed={handleButtonsPressed}/>
          <SlidersComponent
            sportsmanshipValue={sportsmanshipValue}
            setSportsmanshipValue={setSportsmanshipValue}
            matchCompetitivenessValue={matchCompetitivenessValue}
            setMatchCompetitivenessValue={setMatchCompetitivenessValue}
            onChangeSportsmanship={(score) => setSportsmanshipValue(score)}
            onChangeCompetitiveness={(score) => setMatchCompetitivenessValue(score)}
          />
          <FeedbackBlurb onChangeFeedbackText={(text) => setFeedbackText(text)}/>
          {matchScoresError && (
              <Text style={styles.errorText}>Please provide both your score and opponent's score.</Text>
          )}
          <Text style={styles.errorText}>In case your scores are not the same, they will be invalidated and your match will be cancelled. </Text>
          <PfButton1 onPress ={handleSubmit}/> 
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalPostmatchfeedback: {
    backgroundColor: Color.white,
    alignItems: "center", // Center items horizontally
    justifyContent: "center", // Center items vertically
    flex: 1,
    paddingBottom: 30,
  },
  errorText: {
    color: "red",
    fontFamily: FontFamily.manropeRegular,
    fontSize: 10,
    textAlign: "center",
  },
  heading1box: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  heading1: {
    fontSize: 30,
    letterSpacing: 1.2,
    fontFamily: FontFamily.bebasNeueRegular,
  },
});
export default ModalPostmatchfeedbackB;
