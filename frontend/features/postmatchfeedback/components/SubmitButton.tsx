import React from "react";
import {Pressable, Text, StyleSheet} from "react-native";
import {theme} from "../../../theme/GlobalStyles";

const PfButton1 = ({onPress}) => {
    return (
        <Pressable style={styles.pfButton} onPress={onPress}>
            <Text style={styles.button}>
                Submit
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.background,
        textAlign: "center",
    },
    pfButton: {
        borderRadius: 20,
        backgroundColor: theme.colors.background,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 1,
        width: 134,
        height: 32,
        alignItems: "center", // Align the content (Text) horizontally center.
        justifyContent: "center", // Align the content (Text) vertically center.
        alignSelf: "center", // Center the Pressable (container) itself horizontally.
        marginTop: 6,
    },
});

export default PfButton1;
