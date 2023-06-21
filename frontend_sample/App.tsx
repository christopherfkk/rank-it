const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import LoadingPage from "./screens/LoadingPage";
import PfBlurb from "./screens/PfBlurb";
import PfSkill from "./screens/PfSkill";
import PfGender from "./screens/PfGender";
import ResetPassword from "./screens/ResetPassword";
import PfBirthday from "./screens/PfBirthday";
import PfAvatar from "./screens/PfAvatar";
import PfLocation from "./screens/PfLocation";
import PfName from "./screens/PfName";
import Signup from "./screens/Signup";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    Manrope_medium: require("./assets/fonts/Manrope_medium.ttf"),
    Manrope_semibold: require("./assets/fonts/Manrope_semibold.ttf"),
    Manrope_bold: require("./assets/fonts/Manrope_bold.ttf"),
    Manrope_extrabold: require("./assets/fonts/Manrope_extrabold.ttf"),
    Roboto_semibold: require("./assets/fonts/Roboto_semibold.ttf"),
    "Roboto Condensed_extrabold": require("./assets/fonts/Roboto_Condensed_extrabold.ttf"),
    Lato_medium: require("./assets/fonts/Lato_medium.ttf"),
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
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoadingPage"
              component={LoadingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PfBlurb"
              component={PfBlurb}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PfSkill"
              component={PfSkill}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PfGender"
              component={PfGender}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
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
              name="PfLocation"
              component={PfLocation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PfName"
              component={PfName}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <LoadingPage />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
