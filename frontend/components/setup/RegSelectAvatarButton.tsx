import React from "react";
import {TouchableOpacity, Text, StyleSheet, Image} from "react-native";
import {Color, FontFamily, Reg} from "../../GlobalStyles";
import {avatarImages} from '../../screens/setup/avatarImages';

const RegSelectAvatarButton = ({onPress, selectedOption, imageName}) => {
    const isActive = selectedOption === imageName;

    return (
        <TouchableOpacity
            style={[Reg.avatarBoxShadowBox, isActive && Reg.activeButton]}
            onPress={() => {onPress(imageName)}}
        >
            <Image
                style={{
                    width: '100%',
                    height: "100%",
                }}
                resizeMode="contain"
                source={avatarImages[imageName]}
            />
        </TouchableOpacity>
    );
};

export default RegSelectAvatarButton;
