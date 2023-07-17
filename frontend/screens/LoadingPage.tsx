import * as React from "react";
import { ImageBackground, StyleSheet, View,  SafeAreaView } from "react-native";
import { Color, Auth } from "../GlobalStyles";

const LoadingPage = () => {
  return (
    <SafeAreaView style={[Auth.background]}>
      <View style={[styles.container, styles.containerFlexBox]}>
        <ImageBackground
          style={styles.Icon}
          resizeMode="cover"
          source={require("../assets/companylogo.png")}
        />
      </View>
    </SafeAreaView>
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
    paddingHorizontal: 76,
    paddingVertical: 178,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoadingPage;
