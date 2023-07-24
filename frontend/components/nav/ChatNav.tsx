import React, { memo } from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";

type ChatNavType = {
  style?: StyleProp<ViewStyle>;
};

const ChatNav = memo(({ style }: ChatNavType) => {
  return (
    <View style={[styles.chatNav, style]}>
      <Image
        style={styles.messageTextIcon}
        contentFit="cover"
        source={require("../../assets/messagetext.png")}
      />
      <Text style={styles.chatText}>Events</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  messageTextIcon: {
    width: 20,
    height: 20,
  },
  chatText: {
    fontSize: FontSize.size_3xs,
    letterSpacing: 1,
    lineHeight: 13,
    fontFamily: FontFamily.bebasNeueRegular,
    color: Color.lightLabelPrimary,
    textAlign: "center",
    width: 40,
    height: 15,
    marginTop: 1,
  },
  chatNav: {
    alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
    padding: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatNav;
