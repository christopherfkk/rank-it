import * as React from "react";
import {
    ImageBackground,
    Text,
    TextInput,
    View,
    Pressable,
    TouchableOpacity,
    Linking,
    SafeAreaView
} from "react-native";
import { useState } from "react";
import {useNavigation} from "@react-navigation/native";
import { Auth } from "../../GlobalStyles";
import apiConfig from "../../apiConfig";
import BackButton from '../../components/home/BackButton';
import GoogleSignInButton from "../../components/auth/GoogleSignInButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ACTIONS, useRegContext} from '../../RegContext';

const Signup = () => {

    const navigation = useNavigation();
    const {state, dispatch} = useRegContext();
    const [email, setEmail] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [error, setError] = useState("")

    const storeUserInfo = async (userData: any, dispatch: any) => {
        try {
            await AsyncStorage.setItem('accessToken', userData.key);
            await AsyncStorage.setItem('userInfo', JSON.stringify(userData.user));

            // backend data of user is inserted
            dispatch({type: ACTIONS.SET_PROFILE_PHOTO, payload: userData.user.avatar});
            dispatch({type: ACTIONS.SET_BLURB, payload: userData.blurb});
            dispatch({type: ACTIONS.SET_FIRST_NAME, payload: userData.user.first_name});
            dispatch({type: ACTIONS.SET_LAST_NAME, payload: userData.user.last_name});
            dispatch({type: ACTIONS.SET_GENDER, payload: userData.user.gender});
            dispatch({type: ACTIONS.SET_PHONE_NUMBER, payload: userData.user.phone_number});

        } catch (error) {
            console.error("Error storing user info in AsyncStorage:", error);
        }
    };
    const handleRegister = () => {
        const registrationData = {
            email: email,
            password1: password1,
            password2: password2
        };
        // Perform your API call or network request here to send email and password to the backend
        fetch(`${apiConfig.BASE_URL}/accounts/registration/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registrationData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the backend
                console.log(data);
                const registerSuccess = data.key !== undefined;

                if (registerSuccess) {
                    storeUserInfo(data, dispatch)

                    // Navigate after register
                    if (data.user.first_name === null ||
                        data.user.last_name === null ||
                        data.user.level === null) {
                        navigation.navigate("PfStart");
                    } else {
                        navigation.navigate("BottomTabs")
                    }

                } else {
                    // Set the error state based on the response data from the backend
                    setError(Object.values(data).join(', '));
                }
            })
            .catch((error) => {
                // Handle network or other fetch-related errors
                setError(`Network Request Failed ${error}`);
            });
    };

    return (
        <SafeAreaView style={Auth.background}>
            <View style={Auth.body}>
                <BackButton onPress={() => navigation.navigate("Login")}/>
                <ImageBackground
                    style={Auth.memberPhotoIcon}
                    resizeMode="cover"
                    source={require("../../assets/companylogo.png")}
                />
                <Text style={[Auth.heading1]}>
                    Create an Account
                </Text>
                <View style={Auth.signupForm}>
                    <TextInput
                        style={[Auth.textInputBoxStyle]}
                        placeholder="Enter your email "
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholderTextColor="#737373"
                        onChangeText={(text: string) => setEmail(text)}
                        contextMenuHidden // Disable context menu (copy-paste actions)
                    />
                    <TextInput
                        style={[Auth.textInputBoxStyle]}
                        placeholder="Enter your password"
                        keyboardType="default"
                        placeholderTextColor="#737373"
                        onChangeText={(text: string) => setPassword1(text)}
                        secureTextEntry // Redact the password input
                        contextMenuHidden // Disable context menu (copy-paste actions)
                    />
                    <TextInput
                        style={[Auth.textInputBoxStyle]}
                        placeholder="Confirm your password"
                        keyboardType="default"
                        placeholderTextColor="#737373"
                        onChangeText={(text: string) => setPassword2(text)}
                        secureTextEntry // Redact the password input
                        contextMenuHidden // Disable context menu (copy-paste actions)
                    />
                </View>
                <TouchableOpacity
                    style={[Auth.button]}
                    activeOpacity={0.2}
                    onPress={handleRegister}
                >
                    <TouchableOpacity activeOpacity={0.2} onPress={() => {
                    }}>
                        <Text style={[Auth.buttonText]}>Sign-up</Text>
                    </TouchableOpacity>
                </TouchableOpacity>

                {error ? (
                    <Text style={Auth.errorText}>{error}</Text>
                ) : null}

                {/* <GoogleSignInButton/> */}

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

                {/* <View>
          {user && <Text>user.name</Text>}
        </View> */}

            </View>
        </SafeAreaView>
    );
};

export default Signup;
