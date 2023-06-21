import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const LoadingPage = () => {
  return (
    <View style={[styles.loadingPage, styles.containerLayout]}>
      <View style={[styles.container, styles.containerLayout]}>
        <Image
          style={styles.circleBgIcon}
          contentFit="cover"
          source={require("../assets/circle-bg.png")}
        />
        <Image
          style={styles.componentlottiehttpsassetIcon}
          contentFit="cover"
          source={require("../assets/componentlottiehttpsassets2lottiefilescompackageslf20-xxky4kjson.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerLayout: {
    overflow: "hidden",
    height: 812,
  },
  circleBgIcon: {
    top: 321,
    left: 103,
    width: 169,
    height: 169,
    position: "absolute",
  },
  componentlottiehttpsassetIcon: {
    top: 324,
    left: 105,
    borderRadius: 30,
    width: 164,
    height: 164,
    position: "absolute",
  },
  container: {
    top: 0,
    left: 0,
    width: 375,
    position: "absolute",
  },
  loadingPage: {
    flex: 1,
    width: "100%",
  },
});

export default LoadingPage;
