import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";
import { Reg } from "../../GlobalStyles";
import RegBackground from "../../components/RegBackground";
import RegButton from "../../components/RegButton";
import RegTextInput from "../../components/RegTextInput"

const PfLocation = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState("");
  // const [showError, setShowError] = useState(false);

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
          screenName="PfName"
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
