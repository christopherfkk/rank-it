import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ranking from './screens/home/Ranking';
import Profile from './screens/home/Profile';
import MatchConfirm from './screens/home/MatchConfirm';
import Instructions from './screens/home/Instructions';
import {Border, Color, FontFamily} from './GlobalStyles';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Import your desired icon library
import {default as IconEntypo} from 'react-native-vector-icons/Entypo';

// Create bottom tab navigation
const Tab = createBottomTabNavigator();

function BottomTabs({navigation}: any) {
    return (
        <Tab.Navigator>
            // Icon turns red when focused
            <Tab.Screen
                name="Ranking"
                component={Ranking}
                options={{
                    headerShown: false,
                    tabBarLabel: () => null,
                    tabBarIcon: ({focused}) => (
                        <Icon
                            name="medal"
                            size={20}
                            color={focused ? Color.crimson_200 : 'black'} 
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="MatchConfirm"
                component={MatchConfirm}
                options={{
                    headerShown: false,
                    tabBarLabel: () => null,
                    tabBarIcon: ({focused}) => (
                        <IconEntypo
                            name="add-to-list"
                            size={20}
                            color={focused ? Color.crimson_200 : 'black'}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Instructions"
                component={Instructions}
                options={{
                    headerShown: false,
                    tabBarLabel: () => null,
                    tabBarIcon: ({focused}) => (
                        <Icon
                            name="book"
                            size={20}
                            color={focused ? Color.crimson_200 : 'black'}
                        />
                    ),
                }}
            />

            // Navigates to the correct profile when pressed 
            <Tab.Screen
                name="Profile"
                component={Profile}
                listeners={({navigation}) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        navigation.navigate('Profile', {otherUserId: null, self: true,});
                    },
                })}
                options={{
                    headerShown: false,
                    tabBarLabel: () => null,
                    tabBarIcon: ({focused}) => (
                        <Icon
                            name="user"
                            size={20}
                            color={focused ? Color.crimson_200 : 'black'}
                        />
                    ),
                }}
            />
                
        </Tab.Navigator>
    );
}

export default BottomTabs;