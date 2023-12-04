import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {theme} from "../../../theme/GlobalStyles";

const FeedbackBlurb = ({onChangeFeedbackText}) => {
    const [text, setText] = useState('');
    const maxLength = 150;

    const handleTextChange = (inputText) => {
        if (inputText.length <= maxLength) {
            setText(inputText);
            onChangeFeedbackText(inputText); // Call the callback function to update parent component
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Feedback:</Text>
            <TextInput
                value={text}
                onChangeText={handleTextChange}
                placeholder="Provide constructive feedback and pointing out areas they can improve on. Remember to be respectful and avoid being rude!"
                placeholderTextColor="#737373"
                maxLength={maxLength}
                multiline
                style={styles.input}
            />
            <Text style={styles.characterCount}>{text.length}/{maxLength} characters</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      borderRadius: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 8,
        fontWeight: "500",
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        minHeight: 100,
    },
    characterCount: {
        alignSelf: 'flex-end',
        marginTop: 4,
        color: '#999',
        fontSize: 6,
    },
    label: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        marginBottom: 10,
    }
});

export default FeedbackBlurb;
