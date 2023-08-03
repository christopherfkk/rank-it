import React from "react";
import {ImageBackground, View} from "react-native";
import {Reg} from "../../GlobalStyles";

const RegBackground = ({children}) => {
    return (
        <ImageBackground
            imageStyle={{resizeMode: "cover"}}
            style={Reg.signUpBody}
            source={require("../../assets/badminton-bg.png")}
        >
            {children}
        </ImageBackground>
    );
};

export default RegBackground;
