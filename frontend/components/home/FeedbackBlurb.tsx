import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const FeedbackBlurb = () => {
  const [text, setText] = useState('');
  const maxLength = 150;

  const handleTextChange = (inputText) => {
    if (inputText.length <= maxLength) {
      setText(inputText);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={handleTextChange}
        placeholder="Provide constructive feedback and pointing out areas they can improve on. Remember to be respectful and avoid being rude!"
        maxLength={maxLength}
        multiline
        style={styles.input}
      />
      <Text style={styles.characterCount}>{maxLength - text.length} characters remaining</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    fontSize: 8,
    minHeight: 100,
  },
  characterCount: {
    alignSelf: 'flex-end',
    marginTop: 4,
    color: '#999',
    fontSize: 6,
  },
});

export default FeedbackBlurb;
