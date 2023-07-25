import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Reg } from "../../GlobalStyles";

const RegButton = ({ navigation, screenName, disabled, onPress }) => {
  return (
    <TouchableOpacity
      style={[Reg.button, disabled && styles.disabledButton]}
      onPress={() => {
        if (!disabled) {
          navigation.navigate(screenName);
          onPress && onPress();
        }
      }}
      activeOpacity={0.2}
      disabled={disabled}
    >
      <Text style={Reg.buttonText} numberOfLines={3}>
        Next
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  disabledButton: {
    opacity: 0.5,
  },
});

export default RegButton;
