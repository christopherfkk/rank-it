import React, {memo} from "react";
import {StyleProp, ViewStyle, Text, View, ImageBackground} from "react-native";
import { Color, Nav } from "../../GlobalStyles";

type MatchesNavType = {
    style?: StyleProp<ViewStyle>;
};

const MatchesNav = memo(({style}: MatchesNavType) => {
    return (
        <View style={[Nav.nav, style]}>
            <ImageBackground
                style={Nav.icon}
                imageStyle={Nav.iconImage}
                contentFit="cover"
                source={require("../../assets/mathcesicon.png")}
            />
            <Text style={[Nav.text, {color: Color.crimson_200}]}>Matches</Text>
        </View>
    );
});

export default MatchesNav;
