import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {default as IconEntypo} from 'react-native-vector-icons/Entypo';

import Ranking from '../features/ranking/screens/Ranking';
import Profile from '../features/profile/screens/Profile';
import MatchConfirm from '../features/postmatchfeedback/screens/MatchConfirm';
import Instructions from '../app/screens/Instructions';
import {theme} from '../theme/GlobalStyles';
import {useAppSelector} from '../app/hooks';
import {selectId} from '../features/auth/reducers/userAuthReducer';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

    const userId = useAppSelector(selectId)

    return (
        <Tab.Navigator>
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
                            color={focused ? theme.colors.danger : theme.colors.foreground}
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
                            color={focused ? theme.colors.danger : theme.colors.foreground}
                        />
                    ),
                }}
            />
            {/*<Tab.Screen*/}
            {/*    name="Instructions"*/}
            {/*    component={Instructions}*/}
            {/*    options={{*/}
            {/*        headerShown: false,*/}
            {/*        tabBarLabel: () => null,*/}
            {/*        tabBarIcon: ({focused}) => (*/}
            {/*            <Icon*/}
            {/*                name="book"*/}
            {/*                size={20}*/}
            {/*                color={focused ? theme.colors.focused : theme.colors.unfocused}*/}
            {/*            />*/}
            {/*        ),*/}
            {/*    }}*/}
            {/*/>*/}
            <Tab.Screen
                name="Profile"
                component={Profile}
                listeners={({navigation}) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        navigation.navigate('Profile', {profileUserId: userId});
                    },
                })}
                options={{
                    headerShown: false,
                    tabBarLabel: () => null,
                    tabBarIcon: ({focused}) => (
                        <Icon
                            name="user"
                            size={20}
                            color={focused ? theme.colors.danger : theme.colors.foreground}
                        />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
