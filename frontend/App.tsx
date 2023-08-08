import React, {useEffect, useState} from "react";
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {useFonts} from "expo-font";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useRegContext, RegContextProvider} from './RegContext';
import {Provider, useDispatch} from 'react-redux';
import store from './store';

import Login from "./screens/auth/Login";
import Signup from "./screens/auth/Signup";
import ResetPassword from "./screens/auth/ResetPassword";
import Splash from "./screens/Splash";
import Profile from "./screens/home/Profile";
import PfStart from "./screens/setup/PfStart";
import PfAvailability from "./screens/setup/PfAvailability";
import PfAvatar from "./screens/setup/PfAvatar";
import PfPhone from "./screens/setup/PfPhone";
import PfGender from "./screens/setup/PfGender";
import PfLocation from "./screens/setup/PfLocation";
import PfBlurb from "./screens/setup/PfBlurb";
import PfName from "./screens/setup/PfName";
import PfLevel from "./screens/setup/PfLevel";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomTabs from "./BottomTabs";
import {WebSocketActionTypes} from './reducers/webSocketReducer';
import PfPickAvatar from './screens/setup/PfPickAvatar';
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
            if (fontsLoaded) {
                setHideSplashScreen(true);
            }
        }, 1000);
    }, [fontsLoaded]);



    if (!fontsLoaded && !error) {
        return <Splash/>;
    }

    return (
        <Provider store={store}>
            <RegContextProvider>
                <InnerApp hideSplashScreen={hideSplashScreen}/>
            </RegContextProvider>
        </Provider>
    );
};

const InnerApp = ({hideSplashScreen}) => {

    const {state} = useRegContext();
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLogIn, setIsLogIn] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {

        // Check if logged in
        const checkLoginStatus = async () => {
            const accessToken = await AsyncStorage.getItem("accessToken")
                .catch((error) => console.log(`NOT LOGGED IN: Asyn Storage getItem error ${error}`));
            if (accessToken) {
                setIsLogIn(true);
                console.log("LOGGED IN: Token found");
            } else {
                console.log("NOT LOGGED IN: No token found");
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

    useEffect(() => {
        // Init websocket
        const initWebSocketRanks = () => {
            if (isLogIn && isRegistered) {
                let socket = new WebSocket(`${apiConfig.WEB_SOCKET_BASE_URL}/ws/ranking/`);
                socket.onopen = (e) => {
                    console.log('Websocket Ranks Opened');
                    dispatch({
                        type: WebSocketActionTypes.INIT_RANKS,
                        payload: socket
                    });
                };
            }
        }
        const initWebSocketNotifs = async () => {
            if (isLogIn && isRegistered) {
                const userInfo = JSON.parse(await AsyncStorage.getItem('userInfo'))
                let socket = new WebSocket(`${apiConfig.WEB_SOCKET_BASE_URL}/ws/notifications/user/${userInfo.id}/`);
                socket.onopen = (e) => {
                    console.log('Websocket Notifs Opened');
                    dispatch({
                        type: WebSocketActionTypes.INIT_NOTIFS,
                        payload: socket
                
                    });
                };
            }
        }

        initWebSocketRanks();
        initWebSocketNotifs();
    }, [isLogIn, isRegistered]);

    return (
        <NavigationContainer>
            {hideSplashScreen ? (
                <Stack.Navigator
                    initialRouteName={
                        !isLogIn
                            ? 'Login'
                            : !isRegistered
                                ? 'PfStart' //PfStart
                                : 'BottomTabs' //BottomTabs
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
                        name="Splash"
                        component={Splash}
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
                    {/*<Stack.Screen*/}
                    {/*    name="PfBirthday"*/}
                    {/*    component={PfBirthday}*/}
                    {/*    options={{headerShown: false}}*/}
                    {/*/>*/}
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
                        component={PfGender}
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
                        name="PfPickAvatar"
                        component={PfPickAvatar}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="PfLevel"
                        component={PfLevel}
                        options={{headerShown: false}}
                    />
                    {/*<Stack.Screen*/}
                    {/*    name="ProfileEdit"*/}
                    {/*    component={ProfileEdit}*/}
                    {/*    options={{headerShown: false}}*/}
                    {/*/>*/}
                </Stack.Navigator>
            ) : (
                <Splash/>
            )}
        </NavigationContainer>
    );
};

export default App;
