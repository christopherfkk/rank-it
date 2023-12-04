import React, { useState, useEffect } from "react";
import {TouchableOpacity, Image, Text, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useRegContext, ACTIONS } from '../../../RegContext';
import apiConfig from "../../../utils/apiConfig";
import {Color, Auth, FontSize, FontFamily, Padding, Border} from "../../../theme/GlobalStyles";


WebBrowser.maybeCompleteAuthSession();

const fetchUserInfo = async (accessToken: string) => {
    try {
        const googleResponse = await fetch(`${apiConfig.BASE_URL}/accounts/google/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({'access_token': accessToken}),
        });

        return await googleResponse.json();

    } catch (error) {
        console.error('Error: API request not successful');
        throw new Error('API request failed');
    }
};

const storeUserInfo = async (data, dispatch) => {
    try {
        AsyncStorage.setItem('accessToken', data.key);
        AsyncStorage.setItem('userInfo', JSON.stringify(data.user));

        dispatch({type: ACTIONS.SET_PROFILE_PHOTO, payload: data.user.avatar});
        dispatch({type: ACTIONS.SET_BLURB, payload: data.blurb});
        dispatch({type: ACTIONS.SET_FIRST_NAME, payload: data.user.first_name});
        dispatch({type: ACTIONS.SET_LAST_NAME, payload: data.user.last_name});
        dispatch({type: ACTIONS.SET_GENDER, payload: data.user.gender});
        dispatch({type: ACTIONS.SET_PHONE_NUMBER, payload: data.user.phone_number});
    } catch (error) {
        console.error("Error storing user info in AsyncStorage:", error);
    }
};

const GoogleSignInButton = () => {
    const navigation = useNavigation();
    const [accessToken, setAccessToken] = useState("");
    const {state, dispatch} = useRegContext();
    const {clientId, iosClientId, androidClientId} = apiConfig.google;
    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: clientId,
        iosClientId: iosClientId,
        androidClientId: androidClientId,
    });

    const handleGoogleSignIn = async () => {
        try {
            const result = await promptAsync();
            if (result?.type === "success" && result.authentication) {
                setAccessToken(result.authentication.accessToken);
                const data = await fetchUserInfo(result.authentication.accessToken);
                console.log(data)
                await storeUserInfo(data, dispatch);
                if ((data.user.first_name != null) && (data.user.last_name != null) && (data.user.level != null)) {
                    navigation.navigate("BottomTabs")
                } else {
                    navigation.navigate("PfStart")
                }
            }
        } catch (error) {
            console.error("Error during Google sign-in:", error);
        }
    };

    return (
        <TouchableOpacity onPress={handleGoogleSignIn}>
            <Image source={require("../../../assets/google-icon.png")}/>
            <Text>
                Sign in with Google
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  googleFlexBox: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    google: {
        paddingHorizontal: Padding.p_31xl,
        borderRadius: Border.br_8xs,
        alignSelf: "stretch",
        height: 33,
        borderWidth: 1,
        borderColor: "#000",
        borderStyle: "solid",
        backgroundColor: Color.white,
        flexDirection: "row",
        marginTop: 21,
        overflow: "hidden",
        justifyContent: "center",  // Align content horizontally in the middle
        alignItems: "center"
    },
    logogoogle: {
        width: 14,
        height: 14,
        overflow: "hidden",
    },
    googleButtonText: {
        fontSize: 12,
        fontWeight: "500",
        fontFamily: FontFamily.manropeMedium,
        color: Color.gray_100,
        textAlign: "center",
        paddingLeft: "5%"
    },
});
export default GoogleSignInButton;
