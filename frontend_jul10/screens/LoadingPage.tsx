import * as React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const LoadingPage = () => {
  return (
    <View style={[styles.loadingPage, styles.containerFlexBox]}>
      <View style={[styles.container, styles.containerFlexBox]}>
        <ImageBackground
          style={styles.componentlottiehttpsassetIcon}
          resizeMode="cover"
          source={require("../assets/componentlottiehttpsassets2lottiefilescompackageslf20xxky4kjson.png")}
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
  componentlottiehttpsassetIcon: {
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
  loadingPage: {
    width: "100%",
    height: 630,
    flexDirection: "row",
  },
});

export default LoadingPage;
