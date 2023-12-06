import React from "react";
import {ImageBackground, StyleSheet, View} from "react-native";

const Background = ({children}) => {
    return (
        <ImageBackground
            imageStyle={{resizeMode: "cover"}}
            style={styles.background}
            source={require("../../../assets/badminton-bg.png")}
        >
            <View style={styles.container}>
                {children}
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    container: {
        flex: 1,
        marginTop: 40,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default Background;
