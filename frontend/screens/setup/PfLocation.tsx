import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";

import { Reg } from "../../GlobalStyles"

import { useRegContext, ACTIONS } from '../../RegContext';

import RegBackground from "../../components/setup/RegBackground";
import RegButton from "../../components/setup/RegButton"
import RegTextInput from "../../components/setup/RegTextInput"

const PfLocation = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState("");
  const { state, dispatch } = useRegContext();

  const storeUserInfo = async (location: string) => {
    try {
      // backend data of user is inserted
      dispatch({ type: ACTIONS.SET_LOCATION, payload: location });

    } catch (error) {
      console.error("Error storing location in context:", error);
    }
  };

  return (
    <View style={Reg.background}>
      <RegBackground>
        <Text style={Reg.heading1}>
          {`
What’s your Location?`}
        </Text>
        <Text style={Reg.heading2}>
          {`E.g. Shibuya, Tokyo or Taito, Tokyo `}
        </Text>
        <RegTextInput
        placeholder="Enter your location"
        value={location}
        onChangeText={setLocation}
      />
        {/* {showError && <Text style={Reg.errorText}>{ERROR_MESSAGE}</Text>} */}
        <RegButton
          navigation={navigation}
          screenName="PfPhone"
          onPress={() => storeUserInfo(location)} 
          disabled={location.trim() === ""}
        />
      </RegBackground>
    </View>
  );
};

PfLocation.propTypes = {
  // Add any required prop types here if needed
};

const ERROR_MESSAGE = "Location is required";

export default PfLocation;
