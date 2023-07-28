import React, {memo} from "react";
import { StyleProp, ViewStyle, Text, View, ImageBackground } from "react-native";
import { Nav } from "../../GlobalStyles";

type RankingNavType = {
    style?: StyleProp<ViewStyle>;
};

const RankingNav = memo(({style}: RankingNavType) => {
    return (
        <View style={[Nav.nav, style]}>
            <ImageBackground
                style={Nav.icon}
                imageStyle={Nav.iconImage}
                contentFit="cover"
                source={require("../../assets/rankingicon.png")}
            />
            <Text style={Nav.text}>Ranking</Text>
        </View>
    );
});

export default RankingNav;
