import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import { theme } from "../../../theme/GlobalStyles";

const SelectButton = ({onPress, selectedOption, optionLabel}) => {
    const isActive = selectedOption === optionLabel;

    return (
        <TouchableOpacity
            style={[styles.avatarBoxShadowBox, isActive && styles.activeButton]}
            onPress={() => {onPress(optionLabel)}}
        >
          {optionLabel}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    avatarBoxShadowBox: {
        backgroundColor: "#000000",
        width: "100%",
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
        justifyContent: "center",
        alignSelf: "stretch"
    },
    activeButton: {
        backgroundColor: theme.colors.background,
        borderColor: theme.colors.primary,
    },
});

export default SelectButton;
