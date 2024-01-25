import React from "react";
import {Pressable, Text, StyleSheet} from "react-native";
import {theme} from "../../../theme/GlobalStyles";

type ChallengeButtonType = {
    button: string;
    onPress?: () => void; // Add the onPress prop here
};

const ChallengeButton = ({
                             onPress,
                             button,
                         }: ChallengeButtonType) => {

    return (
        <Pressable
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>
                {button}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    buttonText: {
        flex: 1,
        textAlign: "center",
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.danger,
    },
    button: {
        flex: 1,
        backgroundColor: theme.colors.background,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        borderWidth: 1,
    },
});

export default ChallengeButton;
