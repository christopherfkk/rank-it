import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Pressable } from "react-native";
import { AuthProvider } from './AuthContext';
import { RegContextProvider } from './RegContext';

import Login from "./screens/Login";
import OpponentMenu from "./screens/OpponentMenu";
import Ranking from "./screens/Ranking";
import Signup from "./screens/Signup";
import ResetPassword from "./screens/ResetPassword";
import LoadingPage from "./screens/LoadingPage";
import PersonalMenu from "./screens/PersonalMenu";
import PfStart from "./screens/PfStart";
import PfAvailability from "./screens/PfAvailability";
import PfBirthday from "./screens/PfBirthday";
import PfAvatar from "./screens/PfAvatar";
import PfPhone from "./screens/PfPhone";
import PfGender1 from "./screens/PfGender";
import PfLocation from "./screens/PfLocation";
import PfBlurb from "./screens/PfBlurb";
import PfName from "./screens/PfName";
import PfSkill from "./screens/PfSkill";
import ProfileEdit from "./screens/ProfileEdit";
import RankingNav from "./components/RankingNav";
import MatchesNav from "./components/MatchesNav";
import ChatNav from "./components/ChatNav";
import ProfileNav from "./components/ProfileNav";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabsRoot({ navigation }: any) {
  const [bottomTabItemsNormal] = React.useState([
    <RankingNav />,
    <MatchesNav />,
    <ChatNav />,
    <ProfileNav />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <RankingNav />,
    <MatchesNav />,
    <ChatNav />,
    <ProfileNav />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }: any) => {
        const activeIndex = state.index;
        return (
          <View style={{ flexDirection: "row" }}>
            {bottomTabItemsNormal.map((item: any, index: any) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="Ranking"
        component={Ranking}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="PersonalMenu"
        component={PersonalMenu}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const RegistrationStack = createNativeStackNavigator();

function RegistrationScreens() {
  return (
    <RegContextProvider>
      <RegistrationStack.Navigator
        initialRouteName="PfStart"
        screenOptions={{ headerShown: false }}
      >
        <RegistrationStack.Screen
          name="PfStart"
          component={PfStart}
        />
        <RegistrationStack.Screen
          name="PfAvailability"
          component={PfAvailability}
        />
        <RegistrationStack.Screen
          name="PfBirthday"
          component={PfBirthday}
        />
        {/* Add other registration screens here */}
      </RegistrationStack.Navigator>
    </RegContextProvider>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    Manrope_regular: require("./assets/fonts/Manrope_regular.ttf"),
    Manrope_medium: require("./assets/fonts/Manrope_medium.ttf"),
    Manrope_semibold: require("./assets/fonts/Manrope_semibold.ttf"),
    Manrope_bold: require("./assets/fonts/Manrope_bold.ttf"),
    Manrope_extrabold: require("./assets/fonts/Manrope_extrabold.ttf"),
    "Roboto Condensed_extrabold": require("./assets/fonts/Roboto_Condensed_extrabold.ttf"),
    "Bebas Neue_regular": require("./assets/fonts/Bebas_Neue_regular.ttf"),
    Almarai_light: require("./assets/fonts/Almarai_light.ttf"),
    Almarai_regular: require("./assets/fonts/Almarai_regular.ttf"),
    Almarai_extrabold: require("./assets/fonts/Almarai_extrabold.ttf"),
    Montserrat_regular_italic: require("./assets/fonts/Montserrat_regular_italic.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }


  return (
    <AuthProvider>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OpponentMenu"
              component={OpponentMenu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoadingPage"
              component={LoadingPage}
              options={{ headerShown: false }}
            />
            {/* RegistrationScreens contains screens that need RegContextProvider */}
            <Stack.Screen
              name="RegistrationScreens"
              component={RegistrationScreens}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="ProfileEdit"
              component={ProfileEdit}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <LoadingPage />
        )}
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;