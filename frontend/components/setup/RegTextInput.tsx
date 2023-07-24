import React from "react";
import { TextInput } from "react-native";
import { Reg } from "../../GlobalStyles";

const RegTextInput = ({ placeholder, value, onChangeText }) => {
  return (
    <TextInput
      style={[Reg.textboxText, Reg.textboxShadowBox]}
      placeholder={placeholder}
      placeholderTextColor="#737373" // Set placeholder text color here
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default RegTextInput;
