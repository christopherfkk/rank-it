import React, { useState } from "react";
import { Text, StyleSheet, ImageBackground, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegSelectButton from "../../components/setup/RegSelectButton";
import { FontFamily, Color, Padding, Reg } from "../../GlobalStyles";
import RegBackground from "../../components/setup/RegBackground";
import RegButton from "../../components/setup/RegButton"
import { useRegContext, ACTIONS } from '../../RegContext';

const PfSkill = () => {
  const navigation = useNavigation();
  const { state, dispatch } = useRegContext();
  const [selectedSkill, setSelectedSkill] = useState("");

  const storeUserSkillInfo = (skill) => {
    // Update the RegContext state with the selected skill
    dispatch({ type: ACTIONS.SET_SKILL, payload: skill });
    console.log(state.firstName)
  };

  return (
    <View style={Reg.background}>
      <RegBackground>
        <Text style={Reg.heading1}>What's your Badminton skill level?</Text>
        <RegSelectButton
          onPress={(skill) => setSelectedSkill(skill)}
          selectedOption={selectedSkill}
          optionLabel="Beginner"
        />
        <RegSelectButton
          onPress={(skill) => setSelectedSkill(skill)}
          selectedOption={selectedSkill}
          optionLabel="Intermediate"
        />
        <RegSelectButton
          onPress={(skill) => setSelectedSkill(skill)}
          selectedOption={selectedSkill}
          optionLabel="Expert"
        />
        <RegButton
          navigation={navigation}
          screenName="BottomTabs" // Replace "OtherScreen" with the next screen name
          onPress={() => {
            storeUserSkillInfo(selectedSkill); // Store the selected skill level
            navigation.navigate("BottomTabs"); // Navigate to the next screen
          }}
          disabled={selectedSkill === ""}
        />
      </RegBackground>
    </View>
  );
};

export default PfSkill;
