import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Reg} from "../../GlobalStyles";

import RegBackground from "../../components/setup/RegBackground";
import RegButton from "../../components/setup/RegButton"
import RegTextInput from "../../components/setup/RegTextInput";

const PfName = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <View style={Reg.background}>
      <RegBackground>
      <Text style={Reg.heading1}>What's your first and last name</Text>
        <Text style={Reg.heading2}>
          {`You won’t be able to change this later`}
        </Text>
        <RegTextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />        
      <RegTextInput
      placeholder="Last Name"
      value={lastName}
      onChangeText={setLastName}
    />
        {/* {showError && <Text style={Reg.errorText}>{ERROR_MESSAGE}</Text>} */}
        <RegButton
          navigation={navigation}
          screenName="PfSkill"
          disabled={(firstName.trim() === "" || lastName.trim() === "")}
        />
        </RegBackground>
    </View>
  );
};
 
export default PfName;
