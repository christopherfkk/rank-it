import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";

import {theme} from "../../../theme/GlobalStyles";
import {updateInfo} from '../../auth/reducers/userInfoReducer';
import {submitUserInfo} from '../api/submitUserInfo';

const NextButton = ({
                        navigation,
                        dispatch = (action) => {
                        },
                        userInfoKey = [""],
                        userInfoValue = [""],
                        nextScreenName,
                        disabled,
                        buttonText="Next",
                        userToken="",
                        userId=null,
                        userInfo=null
                    }) => {
    return (
        <TouchableOpacity
            style={[styles.button, disabled && styles.disabledButton]}
            onPress={() => {
                if (!disabled) {

                    const isDefaultValues = userInfoKey.every((value) => value === "") &&
                        userInfoValue.every((value) => value === "");

                    if (!isDefaultValues) {
                        if (Array.isArray(userInfoKey)) {
                            for (let i = 0; i < userInfoKey.length; i++) {
                                dispatch(updateInfo([userInfoKey[i], userInfoValue[i]]));
                            }
                        } else {
                            // If userInfoKey is not a list, dispatch a single action
                            dispatch(updateInfo([userInfoKey, userInfoValue]));
                        }
                    }

                    if (buttonText === "Submit") {
                        console.log("Submitting Info")
                        submitUserInfo(userToken, userId, userInfo)
                    }

                    navigation.navigate(nextScreenName);
                }
            }}
            activeOpacity={0.2}
            disabled={disabled}
        >
            <Text style={styles.buttonText} numberOfLines={3}>
                {buttonText}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        backgroundColor: theme.colors.background,
        width: 130,
        height: 32,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 28,
    },
    disabledButton: {
        opacity: 0.5,
    },
    buttonText: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.focused,
        textAlign: "center",
    },
});

export default NextButton;
