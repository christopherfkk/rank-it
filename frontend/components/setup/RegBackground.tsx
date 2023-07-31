import React from "react";
import { ImageBackground } from "react-native";
import { Reg } from "../../GlobalStyles";

const RegBackground = ({ children }) => {
  return (
    <ImageBackground
      style={Reg.signUpBody}
      resizeMode="cover"
      source={require("../../assets/badminton_background.png")}
    >
      {children}
    </ImageBackground>
  );
};

export default RegBackground;
