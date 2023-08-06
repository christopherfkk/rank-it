import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
// import RankingNav from './components/nav/RankingNav';
// import MatchesNav from './components/nav/MatchesNav';
// import ProfileNav from './components/nav/ProfileNav';
import Ranking from './screens/home/Ranking';
import Profile from './screens/home/Profile';
import MatchConfirm from './screens/home/MatchConfirm';
import Instructions from './screens/home/Instructions';
import {StyleSheet, View} from 'react-native';
import {Border, Color, FontFamily} from './GlobalStyles';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Import your desired icon library
import {default as IconEntypo} from 'react-native-vector-icons/Entypo';


// const Tab = createBottomTabNavigator();

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
                    tabBarLabel: () => null,
                    // tabBarIcon: RankingNav.type,
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
                    // tabBarIcon: MatchesNav.type,
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
                    // tabBarIcon: ProfileNav.type,
                    tabBarIcon: ({focused}) => (
                        <Icon
                            name="user"
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
                    // tabBarIcon: RankingNav.type,
                    tabBarIcon: ({focused}) => (
                        <Icon
                            name="book"
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