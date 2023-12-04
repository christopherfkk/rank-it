import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import PfStart from '../features/setup/screens/PfStart';
import PfGender from '../features/setup/screens/PfGender';
import PfLocation from '../features/setup/screens/PfLocation';
import PfBlurb from '../features/setup/screens/PfBlurb';
import PfName from '../features/setup/screens/PfName';
import PfPickAvatar from '../features/setup/screens/PfPickAvatar';
import PfLevel from '../features/setup/screens/PfLevel';

const Stack = createNativeStackNavigator();
const SetupStackNavigator = () => {

    return (
        <Stack.Navigator
            initialRouteName='PfStart'
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen
                name="PfStart"
                component={PfStart}
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
        </Stack.Navigator>
    );
};

export default SetupStackNavigator;
