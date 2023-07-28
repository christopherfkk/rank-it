import React, {memo} from "react";
import {StyleProp, ViewStyle, Text, View, ImageBackground} from "react-native";
import { Nav } from "../../GlobalStyles";

type ProfileNavType = {
    style?: StyleProp<ViewStyle>;
};

const ProfileNav = memo(({style}: ProfileNavType) => {
    return (
        <View style={[Nav.nav, style]}>
            <ImageBackground
                style={Nav.icon}
                imageStyle={Nav.iconImage}
                contentFit="cover"
                source={require("../../assets/avatar.png")}
            />
            <Text style={Nav.text}>Profile</Text>
        </View>
    );
});
export default ProfileNav;
