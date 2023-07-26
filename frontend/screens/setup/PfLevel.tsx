import React, { useState } from "react";
import { Text, StyleSheet, ImageBackground, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegSelectButton from "../../components/setup/RegSelectButton";

import { FontFamily, Color, Padding, Reg } from "../../GlobalStyles";
import RegBackground from "../../components/setup/RegBackground";
import RegButton from "../../components/setup/RegButton"
import { useRegContext, ACTIONS } from '../../RegContext';
import apiConfig from '../../apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PfLevel = () => {
  const navigation = useNavigation();
  const { state, dispatch } = useRegContext();
  const [ selectedLevel, setSelectedLevel] = useState("");

  const storeUserLevelInfo = (level) => {
    dispatch({ type: ACTIONS.SET_LEVEL, payload: level });
  };

  const submitUserInfo = async () => {

        if (state.firstName && state.lastName && selectedLevel) {

            // Create FormData beacuse content-type should be multipart/form-data
            const accountSetUpData = new FormData();
            accountSetUpData.append('first_name', state.firstName);
            accountSetUpData.append('last_name', state.lastName);
            accountSetUpData.append('level', selectedLevel);

            // Get PUT request paramters
            const userId =  JSON.parse(await AsyncStorage.getItem('userInfo')).id;
            const accessToken = await AsyncStorage.getItem('accessToken');

            fetch(`${apiConfig.BASE_URL}/accounts/${userId}/`, {
                method: "PUT",
                headers: {
                    "Authorization": `Token ${accessToken}`
                },
                body: accountSetUpData,
            })
                .then((response) => {
                    if (response.status == 200) {
                        console.log("REGISTERED: Registered names and level")
                    }
                    return response.json()
                })
                .then((data) => {
                    // Set in Async Storage
                    AsyncStorage.setItem('userInfo', JSON.stringify(data));
                    console.log(data)
                })
                .catch((error) => {
                    throw error
                });
        }
    };

  return (
    <View style={Reg.background}>
      <RegBackground>
        <Text style={Reg.heading1}>What's your Badminton skill level?</Text>
        <RegSelectButton
          onPress={(level) => setSelectedLevel(level)}
          selectedOption={selectedLevel}
          optionLabel="Beginner"
        />
        <RegSelectButton
          onPress={(level) => setSelectedLevel(level)}
          selectedOption={selectedLevel}
          optionLabel="Intermediate"
        />
        <RegSelectButton
          onPress={(level) => setSelectedLevel(level)}
          selectedOption={selectedLevel}
          optionLabel="Expert"
        />
        <RegButton
          navigation={navigation}
          screenName="BottomTabs" // Replace "OtherScreen" with the next screen name
          onPress={() => {
            storeUserLevelInfo(selectedLevel); // Store the selected level
            submitUserInfo();
            navigation.navigate("BottomTabs"); // Navigate to the next screen
          }}
          disabled={selectedLevel === ""}
          buttonText="Submit"
        />
      </RegBackground>
    </View>
  );
};

export default PfLevel;
