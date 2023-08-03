import * as React from "react";
import { ImageBackground, StyleSheet, View,  SafeAreaView } from "react-native";
import { Color, Auth } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={[Auth.background]}>
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
    backgroundColor: Color.white,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Splash;
