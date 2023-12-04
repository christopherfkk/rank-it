import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {theme} from "../../../theme/GlobalStyles";

const InsertMatchScores = ({
                               onChangeYourScore, onChangeOpponentScore,
                               selfName, opponentName,
                               preSubmitterScore="", preOpponentScore=""
                           }) => {
    const [yourScore, setYourScore] = useState(preSubmitterScore);
    const [opponentScore, setOpponentScore] = useState(preOpponentScore);
    const [scoreError, setScoreError] = useState(false);

    const handleYourScoreChange = (text) => {
        // Allow only numeric input
        const numericValue = text.replace(/[^0-9]/g, '');
        setYourScore(numericValue);

        // Check for non-numeric input and set the error state
        if (text !== numericValue) {
            setScoreError(true);
        } else {
            setScoreError(false);
        }

        // Call the parent component's onChangeYourScore event handler
        onChangeYourScore(numericValue);
    };

    const handleOpponentScoreChange = (text) => {
        // Allow only numeric input
        const numericValue = text.replace(/[^0-9]/g, '');
        setOpponentScore(numericValue);

        // Check for non-numeric input and set the error state
        if (text !== numericValue) {
            setScoreError(true);
        } else {
            setScoreError(false);
        }

        // Call the parent component's onChangeOpponentScore event handler
        onChangeOpponentScore(numericValue);
    };

    return (
        <View style={styles.body}>
            <Text style={styles.heading}>Match Scores</Text>
            <View style={styles.insertMatchScores}>
                <View style={styles.inputContainer}>
                    <Text style={styles.subheading}>You</Text>
                    <TextInput
                        style={[styles.score, scoreError && styles.errorBorder]} // Apply error border style if there's an error
                        placeholder="Score"
                        keyboardType="numeric"
                        placeholderTextColor="#737373"
                        maxLength={2}
                        value={yourScore}
                        onChangeText={handleYourScoreChange}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.subheading}>{opponentName}</Text>
                    <TextInput
                        style={[styles.score, scoreError && styles.errorBorder]} // Apply error border style if there's an error
                        placeholder="Score"
                        keyboardType="numeric"
                        placeholderTextColor="#737373"
                        maxLength={2}
                        value={opponentScore}
                        onChangeText={handleOpponentScoreChange}
                    />
                </View>
            </View>
            {scoreError && <Text style={styles.errorMessage}>Enter a valid number</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    errorBorder: {
        borderColor: 'red',
    },
    errorMessage: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    },
    body: {
        flexDirection: "column",
        alignItems: "center",
    },
    heading: {
        fontSize: theme.textVariants.header.fontSize,
        fontFamily: theme.textVariants.header.fontFamily,
        color: theme.colors.foreground,
        textAlign: "center",
        alignSelf: "stretch",
    },
    subheading: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
        textAlign: "center",
    },
    insertMatchScores: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch",
    },
    inputContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
    },
    score: {
        borderRadius: 10,
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        borderWidth: 1,
        alignSelf: "stretch",
        alignItems: "center",
        textAlign: "center",
        borderColor: "#000",
        borderStyle: "solid",
        backgroundColor: theme.colors.background,
        padding: 10,
    },
});

export default InsertMatchScores;
