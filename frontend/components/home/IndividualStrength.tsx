import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const StrengthButton = ({ imageSource, title, isPressed, onPress, }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: isPressed ? 'pink' : 'white' },
      ]}
    >
      <Image source={imageSource} style={styles.image} />
      <Text style={[styles.heading]}>{title}</Text>
    </TouchableOpacity>
  );
};
const StrengthGrid = () => {
  const buttonsData = [
    {
      id: 1,
      imageSource: require('../../assets/postmatch/agility.png'),
      title: 'Agility',
    },
    {
      id: 2,
      imageSource: require('../../assets/postmatch/defense.png'),
      title: 'Defense',
    },
    {
      id: 3,
      imageSource: require('../../assets/postmatch/offense.png'),
      title: 'Offense', //vector 3
    },
    {
      id: 4,
      imageSource: require('../../assets/postmatch/cardio.png'),
      title: 'Cardio',//img12
    },
    {
      id: 5,
      imageSource: require('../../assets/postmatch/footwork.png'),
      title: 'Footwork',//img15
    },
    {
      id: 6,
      imageSource: require('../../assets/postmatch/reactiontime.png'),
      title: 'Reaction Time',//img14
    },
  ];

  // Initialize the pressed state for each button
  const [pressedButtons, setPressedButtons] = useState({});

  const handlePress = (buttonId) => {
    // Toggle the pressed state of the button with the given id
    setPressedButtons((prevState) => ({
      ...prevState,
      [buttonId]: !prevState[buttonId],
    }));
  };

  // Function to group the buttons in rows of 2
  const getButtonsInRows = () => {
    const rows = [];
    const buttonsPerRow = 2;
    const totalButtons = buttonsData.length;

    for (let i = 0; i < totalButtons; i += buttonsPerRow) {
      const rowButtons = buttonsData.slice(i, i + buttonsPerRow);
      rows.push(rowButtons);
    }

    return rows;
  };

  return (
    <View style={[styles.container, { marginTop: 20 }]}>
      {getButtonsInRows().map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((button) => (
            <View style={styles.buttonContainer} key={button.id}>
              <StrengthButton
                imageSource={button.imageSource}
                title={button.title}
                isPressed={pressedButtons[button.id]}
                onPress={() => handlePress(button.id)}
              />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10, // Adjust the horizontal margin
    borderRadius: 8,
    paddingVertical: 15, // Adjust the vertical padding
    paddingHorizontal: 15, // Adjust the horizontal padding
    flexDirection: 'row',
    borderWidth: 1,
    flex: 1, // Stretch the button to fill the available space horizontally
    backgroundColor: 'white',
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  heading: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default StrengthGrid;
