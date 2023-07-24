import React, { useState } from "react";
import { Text, StyleSheet, ImageBackground, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RegSelectButton from "../../components/setup/RegSelectButton";
import { FontFamily, Color, Padding, Reg } from "../../GlobalStyles";
import RegBackground from "../../components/setup/RegBackground";
import RegButton from "../../components/setup/RegButton"


const PfSkill = () => {
  const navigation = useNavigation();
  const [selectedSkill, setSelectedSkill] = useState("");

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
          screenName="PfAvatar" // Replace "OtherScreen" with the next screen name
          disabled={selectedSkill === ""}
        />
      </RegBackground>
    </View>
  );
};

export default PfSkill;
