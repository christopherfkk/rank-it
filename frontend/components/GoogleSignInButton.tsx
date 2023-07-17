import React, { useState, useEffect, useContext } from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import apiConfig from "../apiConfig";
import { Color, Auth } from "../GlobalStyles";
import RegContext from "../RegContext";
import { ACTIONS } from "../RegContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

const GoogleSignInButton = () => {
  const navigation = useNavigation();
  const { clientId, iosClientId, androidClientId } = apiConfig.google;
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: clientId,
    iosClientId: iosClientId,
    androidClientId: androidClientId,
  });
  const [signInPressed, setSignInPressed] = useState(false);

  const handleSignInPress = () => {
    // Set the state to indicate that the button has been pressed
    setSignInPressed(true);
  };

  const fetchUserData = async () => {
    try {
      if (response && response?.type === "success"&& signInPressed) {
        console.log(response)
        const accessToken = response.authentication.accessToken;
        const userInfo = await fetchUserInfo(accessToken);
        console.log(userInfo)
        await handleEmailCheck(accessToken,userInfo);
        
        // let backendresponse = await fetch(`${apiConfig.BASE_URL}/accounts/google/`, {
        //   headers: {
        //     Authorization: `Bearer ${accessToken}`,
        //   },

      } else {
        console.error('Access token is null');
      }
    } catch (error) {
      console.error('Error occurred:', error);
      // Handle any errors that occurred during the asynchronous operations
    }
  };

  const handleEmailCheck = async (accessToken: string,userInfo: dict) => {
    try {
      const apiResponse = await fetch(`${apiConfig.BASE_URL}/accounts/user/${userInfo.email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
        console.log(apiResponse)
        if (apiResponse.ok) {
        // Email exists, navigate to the ranking page for registered users
        navigation.navigate("Ranking") 
      } else {
        // Email does not exist, store the user info and access token in AsyncStorage and navigate to "PfName" screen
        await AsyncStorage.setItem('authToken', JSON.stringify(accessToken));
        await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        const { dispatch } = useContext(RegContext);
        console.log('hi')
        dispatch({ type: ACTIONS.SET_LAST_NAME, payload: userInfo.family_name });
        dispatch({ type: ACTIONS.SET_FIRST_NAME, payload: userInfo.given_name });

        navigation.navigate("PfName");
      }
        } catch (error) {
          console.error("Error checking email:", error);
          // Handle any errors that occurred during the API call
        }
      };

  async function fetchUserInfo(accessToken: string) {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const userInfo = await response.json();

    return userInfo;
  }

  return (
    <TouchableOpacity style={[Auth.google, Auth.googleFlexBox]} activeOpacity={0.2} onPress={fetchUserData}>
      <Image style={Auth.logogoogle} source={require("../assets/group-18.png")} />
      <Text style={[Auth.buttonText, { color: Color.black, paddingLeft: 10 }]} numberOfLines={1}>
        Sign in with Google
      </Text>
    </TouchableOpacity>
  );
};

export default GoogleSignInButton;
