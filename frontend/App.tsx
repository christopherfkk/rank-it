import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {useFonts} from "expo-font";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Provider} from 'react-redux';

import {store} from './app/store';
import AuthStackNavigator from "./navigation/AuthStackNavigator";
import SetupStackNavigator from './navigation/SetupStackNavigator';
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import Splash from "./screens/Splash";
import {useAppDispatch, useAppSelector} from './app/hooks';
import {selectIsSignedIn} from './features/auth/reducers/userAuthReducer';

import {startConnecting as startConnectingRankingSocket} from './features/ranking/reducers/rankingSocketReducer';
import {startConnecting as startConnectingNotifSocket} from './features/postmatchfeedback/reducers/notifSocketReducer';

const Stack = createNativeStackNavigator();

const App = () => {

    const [hideSplashScreen, setHideSplashScreen] = useState(false);
    const [fontsLoaded, error] = useFonts({
        manrope_bold: require("./assets/fonts/manrope-bold.ttf"),
        almarai_regular: require("./assets/fonts/almarai-regular.ttf"),
        bebas_neue_regular: require("./assets/fonts/bebas-neue-regular.ttf"),
    });

    useEffect(() => {
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
            <InnerApp hideSplashScreen={hideSplashScreen}/>
        </Provider>
    );
};

const InnerApp = ({hideSplashScreen}) => {

    const [isRegistered, setIsRegistered] = useState(true);
    const isSignedIn = useAppSelector(selectIsSignedIn)
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //
    //     // Check if logged in
    //     const checkLoginStatus = async () => {
    //         const accessToken = await AsyncStorage.getItem("accessToken")
    //         if (accessToken) {
    //             setIsLogIn(true);
    //             console.log("LOGGED IN: Token found");
    //         } else {
    //             console.log("NOT LOGGED IN: No token found");
    //         }
    //     };
    //
    //     // Checked if registered
    //     const checkRegistrationStatus = async () => {
    //         const userInfo = JSON.parse(await AsyncStorage.getItem('userInfo'))
    //         if (userInfo == null) {
    //             console.log("NOT REGISTERED: Details not set");
    //         } else if (userInfo.first_name && userInfo.last_name && userInfo.level) {
    //             setIsRegistered(true);
    //             console.log(userInfo)
    //             console.log("REGISTERED: Details set");
    //         }
    //     };
    //
    //     checkLoginStatus();
    //     checkRegistrationStatus();
    //
    // }, []);

    useEffect(() => {
        const initWebSocket = () => {
            if (isSignedIn && isRegistered) {
                dispatch(startConnectingRankingSocket())
                dispatch(startConnectingNotifSocket())
        }}
        initWebSocket();
    }, [isSignedIn, isRegistered]
    )

    return (
        <NavigationContainer>
            {hideSplashScreen ? (
                <Stack.Navigator
                    initialRouteName={
                        !isSignedIn
                            ? 'AuthStackNavigator'
                            : !isRegistered
                                ? 'SetupStackNavigator'
                                : 'BottomTabNavigator'
                    }
                    screenOptions={{headerShown: false}}
                >
                    <Stack.Screen
                        name="BottomTabNavigator"
                        component={BottomTabNavigator}
                    />
                    <Stack.Screen
                        name="AuthStackNavigator"
                        component={AuthStackNavigator}
                    />
                    <Stack.Screen
                        name="SetupStackNavigator"
                        component={SetupStackNavigator}
                    />
                </Stack.Navigator>
            ) : (
                <Splash/>
            )}
        </NavigationContainer>
    );
};

export default App;
