import React, { useState, useEffect } from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import apiConfig from "../apiConfig";
import { Color, Auth } from "../GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRegContext, ACTIONS } from '../RegContext';

WebBrowser.maybeCompleteAuthSession();

const fetchUserInfo = async (accessToken: string) => {
  try {
    const googleResponse = await fetch(`${apiConfig.BASE_URL}/accounts/google/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 'access_token': accessToken }),
    });
    
    if (!googleResponse.ok) {
      // Handle the error response here if the API request was not successful
      console.error('Error: API request not successful');
      // Throw an error to trigger the catch block
      throw new Error('API request failed');
    }

    const data = await googleResponse.json();
    return data;
  } catch (error) {
    // Handle any errors that occurred during the API call
    console.error("Error fetching user info:", error);
    // You can also re-throw the error here if needed.
    // throw error;
  }
};

const storeUserInfo = async (data, dispatch) => {
  try {
    console.log(data.access);
    AsyncStorage.setItem('accessToken', JSON.stringify(data.access));
    AsyncStorage.setItem('refreshToken', JSON.stringify(data.refresh));

    dispatch({ type: ACTIONS.SET_PROFILE_PHOTO, payload: data.user.avatar });
    dispatch({ type: ACTIONS.SET_BLURB, payload: data.blurb });
    dispatch({ type: ACTIONS.SET_FIRST_NAME, payload: data.user.first_name });
    dispatch({ type: ACTIONS.SET_LAST_NAME, payload: data.user.last_name });
    dispatch({ type: ACTIONS.SET_GENDER, payload: data.user.gender });
    dispatch({ type: ACTIONS.SET_PHONE_NUMBER, payload: data.user.phone_number });
    console.log('hi3');
  } catch (error) {
    console.error("Error storing user info in AsyncStorage:", error);
  }
};

const GoogleSignInButton = () => {
  const navigation = useNavigation();
  const [accessToken, setAccessToken] = useState("");
  const { state, dispatch } = useRegContext();
  const { clientId, iosClientId, androidClientId } = apiConfig.google;
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: clientId,
    iosClientId: iosClientId,
    androidClientId: androidClientId,
  });

  useEffect(() => {
    checkcontext(dispatch);
  }, [dispatch]);


  const handleGoogleSignIn = async () => {
    try {
      const result = await promptAsync();
      if (result?.type === "success" && result.authentication) {
        setAccessToken(result.authentication.accessToken);
        const data = await fetchUserInfo(result.authentication.accessToken);
        await storeUserInfo(data, dispatch);
        navigation.navigate("PfStart")
      }
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };


  const checkcontext = (dispatch) => {
    // Check if 'firstName' value exists in the state object.
    if (state.firstName !== null) {
      // Do something if the 'firstName' value exists in the state.
      console.log('firstName:', state.profilePhoto);
    } else {
      // Do something else if the 'firstName' value doesn't exist in the state.
      console.log('firstName not set.');
    }
  }

  return (
    <TouchableOpacity style={[Auth.google, Auth.googleFlexBox]} activeOpacity={0.2} onPress={handleGoogleSignIn}>
      <Image style={Auth.logogoogle} source={require("../assets/group-18.png")} />
      <Text style={[Auth.buttonText, { color: Color.black, paddingLeft: 10 }]} numberOfLines={1}>
        Sign in with Google
      </Text>
    </TouchableOpacity>
  );
};

export default GoogleSignInButton;
