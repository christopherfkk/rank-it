import React, { useState } from "react";
import { Text, StyleSheet, ImageBackground, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Reg } from "../../GlobalStyles";
import { useRegContext, ACTIONS } from '../../RegContext';

import RegBackground from "../../components/setup/RegBackground";
import RegSelectButton from "../../components/setup/RegSelectButton";
import RegButton from "../../components/setup/RegButton"

const PfGender = () => {
  const navigation = useNavigation();
  const { dispatch } = useRegContext();
  const [selectedGender, setSelectedGender] = useState("");

  const storeUserGenderInfo = (gender) => {
    dispatch({ type: ACTIONS.SET_GENDER, payload: gender });
  };

  return (
    <View style={Reg.background}>
      <RegBackground>
        <Text style={Reg.heading1}>Pick which best describes you</Text>
        <RegSelectButton
          onPress={(gender) => setSelectedGender(gender)}
          selectedOption={selectedGender}
          optionLabel="Male"
        />
        <RegSelectButton
          onPress={(gender) => setSelectedGender(gender)}
          selectedOption={selectedGender}
          optionLabel="Female"
        />
        <RegSelectButton
          onPress={(gender) => setSelectedGender(gender)}
          selectedOption={selectedGender}
          optionLabel="Non-binary"
        />
        <RegSelectButton
          onPress={(gender) => setSelectedGender(gender)}
          selectedOption={selectedGender}
          optionLabel="Prefer not to say"
        />
        <RegButton
          navigation={navigation}
          screenName="PfLocation"
          onPress={() => storeUserGenderInfo(selectedGender)} // Store the selected gender
          disabled={selectedGender === ""}
        />
      </RegBackground>
    </View>
  );
};

export default PfGender;
