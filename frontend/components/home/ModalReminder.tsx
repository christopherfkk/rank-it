import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  Modal
} from "react-native";
import { Color, FontFamily } from "../../GlobalStyles";
import BackButton from "./BackButton";
import RegButton from "../setup/RegButton"
import { useNavigation } from '@react-navigation/native';

type ModalPMFReminderType = {
  visible: boolean; // Add the 'visible' property to the type
  onClose?: () => void;
  nMatchesUnconfirmed: number;
};

const ModalPMFReminder = ({ visible, onClose, nMatchesUnconfirmed}: ModalPMFReminderType) => {
  const navigation = useNavigation();

  return (
    <Modal animationType="slide" transparent visible={visible}>
      <SafeAreaView style={styles.modalPostmatchfeedback}>
          <BackButton onPress={() => onClose()} />
          <View style={styles.heading1box}>
            <Text style={styles.heading1}>Confirmation Required</Text>
            <Text style={styles.heading1}> Hey, there are still {nMatchesUnconfirmed} matches awaiting your confirmation. Please complete the post-match feedback to keep our rankings precise. Thanks!</Text>
          </View>
          <View style={styles.spacing} />
          <RegButton  
            navigation={navigation} 
            screenName='MatchConfirm' 
            buttonText='Confirm'/>  
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalPostmatchfeedback: {
    backgroundColor: Color.white,
    alignItems: "center", // Center items horizontally
    justifyContent: "center", // Center items vertically
    flex: 1,
    paddingBottom: 30,
  },
  errorText: {
    color: "red",
    fontFamily: FontFamily.manropeRegular,
    fontSize: 10,
    textAlign: "center",
  },
  heading1box: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  heading1: {
    fontSize: 40,
    letterSpacing: 1.2,
    fontFamily: FontFamily.bebasNeueRegular,
  },
  spacing: {
    height: 20, // Set the desired vertical spacing between components
  },
});
export default ModalPMFReminder;
