const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
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
import { AuthProvider } from './AuthContext';


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BASE_URL from './apiConfig.js';

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

  const [csrfToken, setCSRFToken] = React.useState('');

  const fetchCSRFToken = async () => {
    const response = await fetch(`${BASE_URL}/csrf/`);
    const data = await response.json();
    const token = data.csrfToken;
    setCSRFToken(token);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
      fetchCSRFToken();
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
            <Stack.Screen
              name="PfStart"
              component={PfStart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PfAvailability"
              component={PfAvailability}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PfBirthday"
              component={PfBirthday}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PfAvatar"
              component={PfAvatar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PfPhone"
              component={PfPhone}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PfGender"
              component={PfGender1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PfLocation"
              component={PfLocation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PfBio"
              component={PfBlurb}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PfName"
              component={PfName}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PfSkill"
              component={PfSkill}
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