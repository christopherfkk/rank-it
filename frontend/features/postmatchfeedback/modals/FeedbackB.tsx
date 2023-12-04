import React, {useState} from "react";
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    SafeAreaView,
    Modal
} from "react-native";

import StrengthGrid from "../components/StrengthGrid"
import PfButton1 from "../components/SubmitButton";
import {theme} from "../../../theme/GlobalStyles";
import InsertMatchScores from "../components/InsertMatchScores";
import SlidersComponent from "../components/Slider";
import FeedbackBlurb from "../components/FeedbackBlurb";
import BackButton from "../../../components/BackButton";
import ProfileBox from "../components/ProfileBox";
import {useAppSelector} from '../../../app/hooks';
import {selectId, selectToken} from '../../../reducers/userAuthReducer';

import handleSubmit from '../api/postFeedbackB';


type ModalPostmatchfeedbackType = {
    visible: boolean; // Add the 'visible' property to the type
    onClose?: () => void;
    name: string;
    level: string;
    opponentId: number;
    matchId: number;
    notifId: number;
    selfName: string;
    selfId: string;
    preOpponentScore: string;
    preSubmitterScore: string;
}

const FeedbackB = (
    {
        visible,
        onClose,
        name,
        level,
        opponentId,

        matchId,  // second feedback specific
        notifId,  // to update read second feedback specific

        selfName, // remove

        preOpponentScore,
        preSubmitterScore
    }: ModalPostmatchfeedbackType) => {

    const userToken = useAppSelector(selectToken)
    const userId = useAppSelector(selectId)

    const [submitterScore, setSubmitterScore] = useState<string>(preSubmitterScore); // State for "You" score
    const [opponentScore, setOpponentScore] = useState<string>(preOpponentScore); // State for "Opponent" score
    const [pressedStrengthsList, setPressedStrengthsList] = useState([]);
    const [sportsmanshipValue, setSportsmanshipValue] = useState(3);
    const [matchCompetitivenessValue, setMatchCompetitivenessValue] = useState(3);
    const [feedbackText, setFeedbackText] = useState('');
    const [errorMessage, setErrorMessage] = useState("");

    const handleButtonsPressed = (pressedButtons) => {
        setPressedStrengthsList(pressedButtons);
    };

    return (
        <Modal animationType="slide" transparent visible={visible}>
            <SafeAreaView style={styles.modalPostmatchfeedback}>
                <ScrollView
                    showsVerticalScrollIndicator={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <BackButton onPress={() => onClose()}/>
                    <View style={styles.heading1box}>
                        <Text style={styles.heading1}>Your Match with</Text>
                    </View>
                    <ProfileBox name={name} avatar={require("../../../assets/avatars/woman1.png")} level={level}/>
                    <InsertMatchScores
                        onChangeYourScore={(score) => setSubmitterScore(score)}
                        onChangeOpponentScore={(score) => setOpponentScore(score)}
                        opponentName={name}
                        selfName={selfName}
                        preSubmitterScore={preSubmitterScore}
                        preOpponentScore={preOpponentScore}
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
                    {errorMessage !== "" && (
                        <Text style={styles.errorText}>{errorMessage}</Text>
                    )}
                    <Text style={styles.errorText}>In case your scores are not the same, they will be invalidated and
                        your match will be cancelled. </Text>
                    <PfButton1 onPress={() => handleSubmit(
                        userToken,
                        userId,
                        opponentId,
                        submitterScore,
                        opponentScore,
                        setErrorMessage,
                        pressedStrengthsList,
                        sportsmanshipValue,
                        matchCompetitivenessValue,
                        feedbackText,

                        onClose,

                        matchId,  // FeedbackB extra
                        notifId,  // FeedbackB extr a
                    )}/>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalPostmatchfeedback: {
        backgroundColor: theme.colors.background,
        alignItems: "center", // Center items horizontally
        justifyContent: "center", // Center items vertically
        flex: 1,
        paddingBottom: 30,
    },
    errorText: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.failure,
        textAlign: "center",
    },
    heading1box: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
    },
    heading1: {
        letterSpacing: 1.2,
        fontSize: theme.textVariants.header.fontSize,
        fontFamily: theme.textVariants.header.fontFamily,
        color: theme.colors.foreground,
    },
    spacing: {
        height: 20, // Set the desired vertical spacing between components
    },
});
export default FeedbackB;
