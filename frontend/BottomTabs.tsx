// Import necessary libraries and components
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Ranking from './screens/home/Ranking';
import Profile from './screens/home/Profile';
import MatchConfirm from './screens/home/MatchConfirm';
import Instructions from './screens/home/Instructions';
import { Border, Color, FontFamily } from './GlobalStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { default as IconEntypo } from 'react-native-vector-icons/Entypo';

// Create bottom tab navigation using createBottomTabNavigator from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator();

// Function to render the bottom tab navigation
function BottomTabs({ navigation }: any) {
    return (
        <Tab.Navigator>
            {/* Ranking Screen */}
            <Tab.Screen
                name="Ranking"
                component={Ranking}
                options={{
                    headerShown: false,
                    tabBarLabel: () => null, // Hide the tab bar label
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name="medal"
                            size={20}
                            color={focused ? Color.crimson_200 : 'black'} // Set the icon color based on focus
                        />
                    ),
                }}
            />

            {/* Match Confirm Screen */}
            <Tab.Screen
                name="MatchConfirm"
                component={MatchConfirm}
                options={{
                    headerShown: false,
                    tabBarLabel: () => null, // Hide the tab bar label
                    tabBarIcon: ({ focused }) => (
                        <IconEntypo
                            name="add-to-list"
                            size={20}
                            color={focused ? Color.crimson_200 : 'black'} // Set the icon color based on focus
                        />
                    ),
                }}
            />

            {/* Instructions Screen */}
            <Tab.Screen
                name="Instructions"
                component={Instructions}
                options={{
                    headerShown: false,
                    tabBarLabel: () => null, // Hide the tab bar label
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name="book"
                            size={20}
                            color={focused ? Color.crimson_200 : 'black'} // Set the icon color based on focus
                        />
                    ),
                }}
            />

            {/* Profile Screen */}
            <Tab.Screen
                name="Profile"
                component={Profile}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        // When the Profile tab is pressed, navigate to the Profile screen with parameters.
                        navigation.navigate('Profile', { otherUserId: null, self: true });
                    },
                })}
                options={{
                    headerShown: false,
                    tabBarLabel: () => null, // Hide the tab bar label
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name="user"
                            size={20}
                            color={focused ? Color.crimson_200 : 'black'} // Set the icon color based on focus
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabs;
