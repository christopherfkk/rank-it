import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Login from "../features/auth/screens/Login"
import Signup from "../features/auth/screens/Signup";
import ResetPassword from "../features/auth/screens/ResetPassword";

const Stack = createNativeStackNavigator();
const AuthStackNavigator = () => {

    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen
                name="Login"
                component={Login}
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
        </Stack.Navigator>
    );
};

export default AuthStackNavigator;
