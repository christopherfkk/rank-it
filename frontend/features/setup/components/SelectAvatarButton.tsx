import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";

import { theme } from "../../../theme/GlobalStyles";
import { avatarImages } from '../utils/avatarImages';

const SelectAvatarButton = ({onPress, selectedOption, imageName}) => {
    const isActive = selectedOption === imageName;

    return (
        <TouchableOpacity
            style={[styles.avatarBoxShadowBox, isActive && styles.activeButton]}
            onPress={() => {onPress(imageName)}}
        >
            <Image
                style={{
                    width: '100%',
                    height: "100%",
                }}
                resizeMode="contain"
                source={avatarImages[imageName]}
            />
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

export default SelectAvatarButton;
