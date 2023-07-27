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
import Profile from "./screens/home/Profile";
import PfStart from "./screens/setup/PfStart";
import PfAvailability from "./screens/setup/PfAvailability";
import PfBirthday from "./screens/setup/PfBirthday";
import PfAvatar from "./screens/setup/PfAvatar";
import PfPhone from "./screens/setup/PfPhone";
import PfGender1 from "./screens/setup/PfGender";
import PfLocation from "./screens/setup/PfLocation";
import PfBlurb from "./screens/setup/PfBlurb";
import PfName from "./screens/setup/PfName";
import PfLevel from "./screens/setup/PfLevel";
import PfSubmit from './screens/setup/PfSubmit';
import ProfileEdit from "./screens/home/ProfileEdit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomTabs from "./BottomTabs"
import apiConfig from './apiConfig';

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


    useEffect(() => {

        // Check if logged in
        const checkLoginStatus = async () => {
            const accessToken = await AsyncStorage.getItem("accessToken")
                .catch((error) => console.log(`NOT LOGGED IN: Asyn Storage getItem error ${error}`));
            if (accessToken) {
                setIsLogIn(true);
                console.log("LOGGED IN: Access token found");
            } else {
                console.log("NOT LOGGED IN: No access token found");
            }
        };

        // Checked if registered
        const checkRegistrationStatus = async () => {
            const userInfo = JSON.parse(await AsyncStorage.getItem('userInfo'))
            console.log(userInfo)
            if (userInfo == null) {
                console.log("NOT REGISTERED: Details not set");
            } else if (userInfo.first_name && userInfo.last_name && userInfo.level) {
                setIsRegistered(true);
                console.log("REGISTERED: Details set");
            }
        };

        checkLoginStatus();
        checkRegistrationStatus();

    }, []);

    //ask chatgpt
    return (
        <NavigationContainer>
            {hideSplashScreen ? (
                <Stack.Navigator
                    initialRouteName={
                        !isLogIn
                            ? 'BottomTabs' //Login
                            : !isRegistered
                                ? 'PfStart'
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
                        name="Profile"
                        component={Profile}
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
                        name="PfLevel"
                        component={PfLevel}
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