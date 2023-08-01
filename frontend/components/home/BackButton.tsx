import * as React from "react";
import { TouchableOpacity, Image, StyleSheet, Text} from "react-native";
import {FontFamily} from '../../GlobalStyles'

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress = {onPress}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require("../../assets/left-back-button.png")}
      />

      <Text style={styles.text}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 9,
  },
  text: {
    color: "#007AFF",
    fontFamily: FontFamily.manropeSemibold,
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: -0.408,
    marginLeft: 5,
  },
  image: {
    width: 6,
    height: 10,
  },
});

export default BackButton;
