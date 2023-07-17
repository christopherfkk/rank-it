import React, { useState, useEffect } from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import apiConfig from "../apiConfig";
import { Color,Auth} from "../GlobalStyles";
import AuthContext from "../AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import { makeRedirectUri } from 'expo-auth-session';

//web: 68084720196-u4a0f5ah112920qpn8bq342ov8h6i82v.apps.googleusercontent.com
//ios: 68084720196-a2l8185469oj62i2jl8g9jmqi65lfmu5.apps.googleusercontent.com
//android: 68084720196-0p37fkv7oi57clhrvlboa02iad4mep19.apps.googleusercontent.com

WebBrowser.maybeCompleteAuthSession();

const GoogleSignInButton = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState("");
  const { clientId, iosClientId, androidClientId } = apiConfig.google;
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: clientId,
    iosClientId: iosClientId,
    androidClientId: androidClientId,
  });

  useEffect(() => {
    if (response?.type === "success") {
      const accessToken = response.authentication.accessToken;
      accessToken && fetchUserInfo(accessToken);

      try {
        console.log(accessToken);
        AsyncStorage.setItem('authToken', JSON.stringify(accessToken));
        checkStoredData();
      } catch (error) {
        console.error('Error storing authentication token in AsyncStorage:', error);
      }
    }
  }, [response]);

  const checkStoredData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('authToken');
      console.log('Stored Data:', storedData);
      if (storedData !== null) {
        // Data is found in AsyncStorage, you can use it as needed
      } else {
        // Data is not found in AsyncStorage
      }
    } catch (error) {
      console.error('Error checking data in AsyncStorage:', error);
    }
  };
  

  async function fetchUserInfo(accessToken) {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const userInfo = await response.json();
    setUser(userInfo);

    // Store the user data in AsyncStorage after successful login
    // try {
    //   console.log(userInfo)
    //   await AsyncStorage.setItem('authToken', JSON.stringify());
    // } catch (error) {
    //   console.error('Error storing authentication token in AsyncStorage:', error);
    // }

    navigation.navigate('PfName'); // Navigate to "pfname" screen if successful
  }

  return (
    <TouchableOpacity style={[Auth.google, Auth.googleFlexBox]} activeOpacity={0.2} onPress={() => promptAsync()}>
      <Image style={Auth.logogoogle} source={require("../assets/group-18.png")} />
      <Text style={[Auth.buttonText, { color: Color.black, paddingLeft: 10 }]} numberOfLines={1}>
        Sign in with Google
      </Text>
    </TouchableOpacity>
  );
};

export default GoogleSignInButton;
