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
            style={styles.pfButton}
            onPress={onPress}
        >
            <Text style={styles.button}>
                {button}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        textAlign: "center",
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
    },
    pfButton: {
        flex: 1,
        backgroundColor: theme.colors.danger,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default ChallengeButton;
