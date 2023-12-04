import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../../theme/GlobalStyles'
import Icon from 'react-native-vector-icons/FontAwesome5'; // Import your desired icon library
import {default as IconEntypo} from 'react-native-vector-icons/Entypo';

const StrengthButton = ({imageSource, title, isPressed, onPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                {
                    borderColor: isPressed ? 'darkgreen' : 'black', // change border color based on `isPressed`
                    backgroundColor: isPressed ? '#D4FFE0' : 'white'
                },
            ]}
        >

            <View style={{flex: 0.3, alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                    name={imageSource}
                    size={20}
                    color={isPressed ? 'darkgreen' : 'black'}
                    style={{marginRight: 5}}
                />
            </View>
            <View style={{flex: 0.7, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={[styles.subheading, {color: isPressed ? 'darkgreen' : 'black'}]}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const StrengthGrid = ({onButtonsPressed}) => {
    const buttonsData = [
        {
            id: 1,
            imageSource: 'running',
            title: 'Agility',
        },
        {
            id: 2,
            imageSource: 'ban',
            title: 'Defense',
        },
        {
            id: 3,
            imageSource: 'crosshairs',
            title: 'Offense',
        },
        {
            id: 4,
            imageSource: "heartbeat",
            title: 'Cardio',
        },
        {
            id: 5,
            imageSource: 'shoe-prints',
            title: 'Footwork',
        },
        {
            id: 6,
            imageSource: 'clock',
            title: 'Reaction Time',
        },
    ];

    // Initialize the pressed state for each button
    const [pressedButtons, setPressedButtons] = useState({});

    const handlePress = (buttonTitle) => {
        // Toggle the pressed state of the button with the given title
        setPressedButtons((prevState) => ({
            ...prevState,
            [buttonTitle]: !prevState[buttonTitle],
        }));

        // Pass the updated list of pressed buttons to the parent component
        onButtonsPressed(Object.keys({...pressedButtons, [buttonTitle]: !pressedButtons[buttonTitle]}));
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
        <View style={[styles.container]}>
            <Text style={[styles.heading, {textAlign: "center", marginBottom: 10}]}>
                Opponent Strength
            </Text>
            {getButtonsInRows().map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((button) => (
                        <View style={styles.buttonContainer} key={button.id}>
                            <StrengthButton
                                imageSource={button.imageSource}
                                title={button.title}
                                isPressed={pressedButtons[button.title]}
                                onPress={() => handlePress(button.title)}
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
        width: 180, // Set a fixed width for the buttons
        borderRadius: 8,
        paddingVertical: 3, // Adjust the vertical padding
        paddingHorizontal: 15, // Adjust the horizontal padding
        flexDirection: 'row',
        borderWidth: 1,
        margin: 3, // Adjust the margin
        backgroundColor: 'white',
        borderColor: 'black', // Default border color
    },
    image: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
    subheading: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
    },
    heading: {
        fontSize: theme.textVariants.header.fontSize,
        fontFamily: theme.textVariants.header.fontFamily,
        color: theme.colors.foreground,
    },
});

export default StrengthGrid;
