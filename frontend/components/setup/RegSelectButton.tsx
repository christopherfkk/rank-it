import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Color, FontFamily, Reg } from "../../GlobalStyles";

const RegSelectButton = ({ onPress, selectedOption, optionLabel }) => {
  const isActive = selectedOption === optionLabel;

  return (
    <TouchableOpacity
      style={[Reg.textboxShadowBox, isActive && Reg.activeButton]}
      onPress={() => onPress(optionLabel)}
    >
      <Text style={[Reg.textboxText,isActive && Reg.activeText]}>
        {optionLabel}
      </Text>
    </TouchableOpacity>
  );
};

export default RegSelectButton;
