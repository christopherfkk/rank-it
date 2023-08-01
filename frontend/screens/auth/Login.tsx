import React, {useState} from "react";
import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useRegContext, ACTIONS} from '../../RegContext';

import apiConfig from '../../apiConfig';
import {Color, FontFamily, FontSize, Auth} from "../../GlobalStyles";
import GoogleSignInButton from "../../components/auth/GoogleSignInButton";


const Login = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const {state, dispatch} = useRegContext();

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

    const handleLogin = () => {

        // Reset the error state before attempting login
        setError("");

        if (email && password) {

            // Compile login data
            const loginData = {
                email: email,
                password: password,
            };
            console.log(apiConfig)
            console.log(`${apiConfig.BASE_URL}/accounts/login/`)
            fetch(`${apiConfig.BASE_URL}/accounts/login/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            })
                .then((response) => response.json())
                .then((data) => {

                    console.log(data);
                    const loginSuccess = data.key !== undefined;

                    if (loginSuccess) {
                        storeUserInfo(data, dispatch)

                        // Navigate after login
                        if (data.user.first_name === null ||
                            data.user.last_name === null ||
                            data.user.level === null)
                        {
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
                    source={require("../../assets/rank-it-logo.png")}
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

                {/* <GoogleSignInButton/> */}

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
