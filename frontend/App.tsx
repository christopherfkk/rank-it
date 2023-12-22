import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {useFonts} from "expo-font";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Provider} from 'react-redux';

import {store} from './app/store';
import AuthStackNavigator from "./navigation/AuthStackNavigator";
import SetupStackNavigator from './navigation/SetupStackNavigator';
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import Splash from "./app/screens/Splash";
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

    const isSignedIn = useAppSelector(selectIsSignedIn)
    const dispatch = useAppDispatch();

    useEffect(() => {
        const initWebSocket = () => {
            if (isSignedIn) {
                dispatch(startConnectingRankingSocket())
                dispatch(startConnectingNotifSocket())
        }}
        initWebSocket();
    }, [isSignedIn]
    )

    return (
        <NavigationContainer>
            {hideSplashScreen ? (
                <Stack.Navigator
                    initialRouteName={
                        !isSignedIn
                            ? 'AuthStackNavigator'
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
