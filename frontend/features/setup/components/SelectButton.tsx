import React from "react";
import {TouchableOpacity, StyleSheet, Text} from "react-native";

import {theme} from "../../../theme/GlobalStyles";

const SelectButton = ({onPress, selectedOption, optionLabel}) => {
    const isActive = selectedOption === optionLabel;

    return (
        <TouchableOpacity
            style={[styles.textboxShadowBox, isActive && styles.activeButton]}
            onPress={() => {
                onPress(optionLabel)
            }}
        >
            <Text style={[styles.textboxText, isActive && styles.activeText]}>
                {optionLabel}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    textboxShadowBox: {
        height: "5%",
        width: "75%",
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: "#fff2f2",
        borderStyle: "solid",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        borderRadius: 20,
        marginTop: 18,
        alignSelf: "center",
        justifyContent: "center",
    },
    textboxText: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.primary,
        textAlign: "center",
    },
    activeText: {
        color: theme.colors.danger,
    },
    activeButton: {
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.primary,
    },
});

export default SelectButton;
