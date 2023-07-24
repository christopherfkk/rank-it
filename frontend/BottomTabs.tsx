import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import RankingNav from './components/nav/RankingNav';
import MatchesNav from './components/nav/MatchesNav';
import ChatNav from './components/nav/ChatNav';
import ProfileNav from './components/nav/ProfileNav';
import {Pressable, View} from 'react-native';
import Ranking from './screens/home/Ranking';
import PersonalMenu from './screens/home/PersonalMenu';
import ModalPostmatchfeedback from './components/home/ModalPostmatchfeedback';

const Tab = createBottomTabNavigator();

function BottomTabs({navigation}: any) {
    const [bottomTabItemsNormal] = React.useState([
        <RankingNav/>,
        <MatchesNav/>,
        <ChatNav/>,
        <ProfileNav/>,
    ]);
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
                name="PersonalMenu"
                component={PersonalMenu}
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