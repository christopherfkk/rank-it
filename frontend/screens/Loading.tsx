import * as React from "react";
import {ImageBackground, StyleSheet, View, SafeAreaView} from "react-native";
import {theme} from "../theme/GlobalStyles";

const LoadingPage = () => {
    return (
        <View style={[styles.background]}>
            <View style={[styles.container, styles.containerFlexBox]}>
                <ImageBackground
                    style={styles.Icon}
                    resizeMode="cover"
                    source={require("../assets/rank-it-logo.png")}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flex: 1,
        backgroundColor: theme.colors.background
    },
    containerFlexBox: {
        overflow: "hidden",
        flex: 1,
    },
    Icon: {
        borderRadius: 30,
        width: 249,
        height: 240,
    },
    container: {
        alignSelf: "stretch",
        backgroundColor: theme.colors.background,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default LoadingPage;
