import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import RankingNav from './components/nav/RankingNav';
import MatchesNav from './components/nav/MatchesNav';
import ChatNav from './components/nav/ChatNav';
import ProfileNav from './components/nav/ProfileNav';
import {Pressable, View} from 'react-native';
import Ranking from './screens/home/Ranking';
import Profile from './screens/home/Profile';
import ModalPostmatchfeedback from './components/home/ModalPostmatchfeedback';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

function BottomTabs({navigation}: any) {
    // {navigation}: any
    // const [bottomTabItemsNormal] = React.useState([
    //     <RankingNav/>,
    //     <MatchesNav/>,
    //     <ChatNav/>,
    //     <ProfileNav/>,
    // ]);
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Ranking"
                component={Ranking}
                options={{
                    headerShown: false,
                    tabBarIcon: RankingNav.type,
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen
                name="Match"
                component={ModalPostmatchfeedback}
                options={{
                    headerShown: false,
                    tabBarIcon: MatchesNav.type,
                    tabBarLabel: () => null,
                }}
            />
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
                    tabBarIcon: ProfileNav.type,
                    tabBarLabel: () => null,
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabs;