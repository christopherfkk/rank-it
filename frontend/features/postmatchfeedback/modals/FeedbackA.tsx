import React, {useState} from "react";
import {View, ScrollView, Text, StyleSheet, SafeAreaView, Modal} from "react-native";

import StrengthGrid from "../components/StrengthGrid"
import SubmitButton from "../components/SubmitButton";
import InsertMatchScores from "../components/InsertMatchScores";
import SlidersComponent from "../components/Slider";
import FeedbackBlurb from "../components/FeedbackBlurb";
import BackButton from "../../../components/BackButton";
import ProfileBox from "../components/ProfileBox";
import {theme} from "../../../theme/GlobalStyles";

import handleSubmit from '../api/postFeedbackA';
import {useAppSelector} from '../../../app/hooks';
import {selectId, selectToken} from '../../../reducers/userAuthReducer';


type ModalPostmatchfeedbackType = {
    visible: boolean;
    onClose?: () => void;
    opponentName: string;
    selfName: string;
    level: string;
    opponentId: string;
};

const FeedbackA = (
    {
        visible,
        onClose,
        selfName,
        opponentName,
        level,
        opponentId,
    }: ModalPostmatchfeedbackType) => {

    const userId = useAppSelector(selectId)
    const userToken = useAppSelector(selectToken)

    const [submitterScore, setSubmitterScore] = useState(""); // State for "You" score
    const [opponentScore, setOpponentScore] = useState(""); // State for "Opponent" score
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
                    <BackButton
                        onPress={() => onClose()
                        }/>

                    <Text style={styles.heading}>
                        Your Match with {`\n${opponentName}`}
                    </Text>

                    <ProfileBox
                        avatar={require("../../../assets/avatars/man1.png")}  // TODO
                        level={level}
                    />
                    <InsertMatchScores
                        onChangeYourScore={(score) => setSubmitterScore(score)}
                        onChangeOpponentScore={(score) => setOpponentScore(score)}
                        opponentName={opponentName}
                        selfName={selfName}
                    />
                    <StrengthGrid
                        onButtonsPressed={handleButtonsPressed}
                    />
                    <SlidersComponent
                        sportsmanshipValue={sportsmanshipValue}
                        setSportsmanshipValue={setSportsmanshipValue}
                        matchCompetitivenessValue={matchCompetitivenessValue}
                        setMatchCompetitivenessValue={setMatchCompetitivenessValue}
                        onChangeSportsmanship={(score) => setSportsmanshipValue(score)}
                        onChangeCompetitiveness={(score) => setMatchCompetitivenessValue(score)}
                    />
                    <FeedbackBlurb
                        onChangeFeedbackText={(text) => setFeedbackText(text)}
                    />

                    {errorMessage !== "" && (
                        <Text style={styles.errorText}>{errorMessage}</Text>
                    )}

                    <SubmitButton
                        onPress={() =>
                            handleSubmit(
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
                            )}
                    />
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
        alignItems: "center",
        justifyContent: "center",
    },
    heading: {
        letterSpacing: 1.2,
        fontSize: theme.textVariants.header.fontSize,
        fontFamily: theme.textVariants.header.fontFamily,
        color: theme.colors.foreground,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "10%",
    },
});
export default FeedbackA;
