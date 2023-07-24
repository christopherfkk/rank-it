import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Reg } from "../GlobalStyles";

const RegButton = ({ navigation, screenName, disabled }) => {
  return (
    <TouchableOpacity
      style={[Reg.button, disabled && styles.disabledButton]} // Apply the disabledButton style when the button is disabled
      onPress={() => !disabled && navigation.navigate(screenName)} // Only navigate if the button is not disabled
      activeOpacity={0.2}
      disabled={disabled} // Disable the TouchableOpacity component based on the disabled prop
    >
      <Text style={Reg.buttonText} numberOfLines={3}>
        Next
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  disabledButton: {
    opacity: 0.5, // Reduce the opacity of the button when it's disabled
  },
});

export default RegButton;
