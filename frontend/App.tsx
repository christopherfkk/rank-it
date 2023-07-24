import React, {useEffect, useState} from "react";
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {useFonts} from "expo-font";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {View, Text, Pressable} from "react-native";
import {useRegContext, RegContextProvider} from './RegContext';


import Login from "./screens/auth/Login";
import OpponentMenu from "./screens/home/OpponentMenu";
import Ranking from "./screens/home/Ranking";
import Signup from "./screens/auth/Signup";
import ResetPassword from "./screens/auth/ResetPassword";
import LoadingPage from "./screens/LoadingPage";
import PersonalMenu from "./screens/home/PersonalMenu";
import PfStart from "./screens/setup/PfStart";
import PfAvailability from "./screens/setup/PfAvailability";
import PfBirthday from "./screens/setup/PfBirthday";
import PfAvatar from "./screens/setup/PfAvatar";
import PfPhone from "./screens/setup/PfPhone";
import PfGender1 from "./screens/setup/PfGender";
import PfLocation from "./screens/setup/PfLocation";
import PfBlurb from "./screens/setup/PfBlurb";
import PfName from "./screens/setup/PfName";
import PfSkill from "./screens/setup/PfSkill";
import ProfileEdit from "./screens/home/ProfileEdit";
import RankingNav from "./components/nav/RankingNav";
import MatchesNav from "./components/nav/MatchesNav";
import ChatNav from "./components/nav/ChatNav";
import ProfileNav from "./components/nav/ProfileNav";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomTabs from "./BottomTabs"

const Stack = createNativeStackNavigator();

const App = () => {
    const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
    const [fontsLoaded, error] = useFonts({
        Manrope_regular: require("./assets/fonts/Manrope_regular.ttf"),
        Manrope_medium: require("./assets/fonts/Manrope_medium.ttf"),
        Manrope_semibold: require("./assets/fonts/Manrope_semibold.ttf"),
        Manrope_bold: require("./assets/fonts/Manrope_bold.ttf"),
        Manrope_extrabold: require("./assets/fonts/Manrope_extrabold.ttf"),
        "Roboto Condensed_extrabold": require("./assets/fonts/Roboto_Condensed_extrabold.ttf"),
        "Bebas Neue_regular": require("./assets/fonts/Bebas_Neue_regular.ttf"),
        Almarai_light: require("./assets/fonts/Almarai_light.ttf"),
        Almarai_regular: require("./assets/fonts/Almarai_regular.ttf"),
        Almarai_extrabold: require("./assets/fonts/Almarai_extrabold.ttf"),
        Montserrat_regular_italic: require("./assets/fonts/Montserrat_regular_italic.ttf"),
    });

    React.useEffect(() => {
        setTimeout(() => {
            setHideSplashScreen(true);
        }, 1000);
    }, []);

    if (!fontsLoaded && !error) {
        return null;
    }

    return (
        <RegContextProvider>
            <InnerApp hideSplashScreen={hideSplashScreen}/>
        </RegContextProvider>
    );
};

const InnerApp = ({hideSplashScreen}) => {
    const {state} = useRegContext();
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLogIn, setIsLogIn] = useState(false);

    //check if someone is logged in after entering app
    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const accessToken = await AsyncStorage.getItem("accessToken")

                if (accessToken) {
                    setIsLogIn(true)
                }
            } catch {
                console.log("Not Logged In: no access token found")
            }
        }

        // Check if the user has completed registration based on RegContext state
        const checkRegistrationStatus = () => {
            // You can adjust the condition based on your registration criteria
            const isCompletedRegistration = state.firstName !== null && state.gender !== null;
            setIsRegistered(isCompletedRegistration);
        };

        checkLoginStatus();
        checkRegistrationStatus();
        setIsLogIn(true)
        setIsRegistered(true)
    }, [state]);

    //ask chatgpt
    return (
        <NavigationContainer>
            {hideSplashScreen ? (
                <Stack.Navigator
                    initialRouteName={
                        !isLogIn
                            ? 'Login'
                            : !isRegistered
                                ? 'Signup'
                                : 'BottomTabs'
                    }
                    screenOptions={{headerShown: false}}
                >
                    <Stack.Screen
                        name="BottomTabs"
                        component={BottomTabs}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="OpponentMenu"
                        component={OpponentMenu}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Signup"
                        component={Signup}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="ResetPassword"
                        component={ResetPassword}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="LoadingPage"
                        component={LoadingPage}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="PfStart"
                        component={PfStart}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="PfAvailability"
                        component={PfAvailability}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="PfBirthday"
                        component={PfBirthday}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="PfAvatar"
                        component={PfAvatar}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="PfPhone"
                        component={PfPhone}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="PfGender"
                        component={PfGender1}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="PfLocation"
                        component={PfLocation}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="PfBio"
                        component={PfBlurb}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="PfName"
                        component={PfName}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="PfSkill"
                        component={PfSkill}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="ProfileEdit"
                        component={ProfileEdit}
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
            ) : (
                <LoadingPage/>
            )}
        </NavigationContainer>
    );
};

export default App;