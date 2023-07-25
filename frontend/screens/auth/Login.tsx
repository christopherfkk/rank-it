import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import apiConfig from '../../apiConfig';
import { Color, FontFamily, FontSize, Auth } from "../../GlobalStyles";
import GoogleSignInButton from "../../components/auth/GoogleSignInButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRegContext, ACTIONS } from '../../RegContext';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { state, dispatch } = useRegContext();

  const storeUserInfo = async (userData: any, dispatch: any) => {
    try {
      AsyncStorage.setItem('accessToken', JSON.stringify(userData.access));
      AsyncStorage.setItem('refreshToken', JSON.stringify(userData.refresh));
      AsyncStorage.setItem('id', JSON.stringify(userData.user.id));

      // backend data of user is inserted
      dispatch({ type: ACTIONS.SET_PROFILE_PHOTO, payload: userData.user.avatar });
      dispatch({ type: ACTIONS.SET_BLURB, payload: userData.blurb });
      dispatch({ type: ACTIONS.SET_FIRST_NAME, payload: userData.user.first_name });
      dispatch({ type: ACTIONS.SET_LAST_NAME, payload: userData.user.last_name });
      dispatch({ type: ACTIONS.SET_GENDER, payload: userData.user.gender });
      dispatch({ type: ACTIONS.SET_PHONE_NUMBER, payload: userData.user.phone_number });

    } catch (error) {
      console.error("Error storing user info in AsyncStorage:", error);
    }
  };

  const handleLogin = () => {
    console.log('hi')
    setError(""); // Reset the error state before attempting login
    console.log('hi')
    if (email && password) {
      const loginData = {
        email: email,
        password: password,
      };

      fetch(`${apiConfig.BASE_URL}/accounts/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the backend
          console.log(data);
          // Check if the login was successful (adjust this based on your backend response)
          const loginSuccess = data.access !== undefined;

          if (loginSuccess) {
            // ** add access and refresh token to asyncstorage
            console.log(data)
            storeUserInfo(data, dispatch)

            if (state.gender === null) {
              navigation.navigate("PfStart");
            }
            else {
              navigation.navigate("Ranking")
            }
          } else {
            // Set the error state based on the response data from the backend
            setError(Object.values(data).join(', '));
          }
        })
        .catch((error) => {
          // Handle network or other fetch-related errors
          setError("Network Request Failed");
        });
    } else {
      setError("Please enter email and password");
    }
  };



  return (
    <SafeAreaView style={[Auth.background]}>
      <View style={Auth.body}>
        <ImageBackground
          style={Auth.memberPhotoIcon}
          resizeMode="cover"
          source={require("../../assets/companylogo.png")}
        />
        <Text style={[Auth.heading1]}>Log in to Rank-it</Text>
        <View style={Auth.signupForm}>
          <TextInput
            style={[Auth.textInputBoxStyle]}
            placeholder="Enter your email "
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#737373"
            contextMenuHidden // Disable context menu (copy-paste actions)
            onChangeText={(text: string) => setEmail(text)}
          />
          <TextInput
            style={[Auth.textInputBoxStyle]}
            placeholder="Enter your password"
            keyboardType="default"
            placeholderTextColor="#737373"
            secureTextEntry // Redact the password input
            contextMenuHidden // Disable context menu (copy-paste actions)
            onChangeText={(text: string) => setPassword(text)}
          />
        </View>

        <TouchableOpacity
          style={[Auth.button]}
          activeOpacity={0.2}
          onPress={handleLogin} // onPress = {handleLogin}
        >
            <Text style={[Auth.buttonText]}>Login</Text>
        </TouchableOpacity>

        {error ? (
          <Text style={Auth.errorText}>{error}</Text>
        ) : null}

        <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate("ResetPassword")}>
          <Text style={[Auth.heading2]}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        
        <GoogleSignInButton/>
        
    <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate("Signup")}>
        <Text style={[Auth.heading2]}>
          Don’t have an account? <Text style={Auth.underlineText}>Sign up here</Text>
        </Text>
    </TouchableOpacity>
    
        <Pressable
          onPress={() =>
            Linking.openURL(
              "https://classy-galette-16d.notion.site/RankIT-Terms-of-Service-17c96ce8b482418c862bcf85e3d08b1a?pvs=25"
            )
          }
        >
          <Text style={[Auth.heading3]}>
        By continuing, you agree to the Terms and Conditions
      </Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
};

export default Login;
