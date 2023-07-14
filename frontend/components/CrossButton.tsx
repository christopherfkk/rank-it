import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding } from "../GlobalStyles";

const CrossButton = () => {
  return (
    <Pressable style={[styles.cross, styles.crossFlexBox]}>
      <View style={[styles.basilcrossSolid, styles.crossFlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  crossFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  vectorIcon: {
    width: 15,
    height: 15,
  },
  basilcrossSolid: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_9xs,
  },
  cross: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
});

export default CrossButton;
