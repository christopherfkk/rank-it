import React, {useState} from "react";
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    SafeAreaView,
    Modal
} from "react-native";
import {theme} from "../../../theme/GlobalStyles";
import BackButton from "../../../app/components/BackButton";
import NextButton from "../../setup/components/NextButton"
import {useNavigation} from '@react-navigation/native';

type ModalPMFReminderType = {
    visible: boolean; // Add the 'visible' property to the type
    onClose?: () => void;
    // nMatchesUnconfirmed: number;
};

// nMatchesUnconfirmed
const ModalPMFReminder = ({visible, onClose}: ModalPMFReminderType) => {
    const navigation = useNavigation();

    const handleConfirmButtonPress = () => {
        // Navigate to 'MatchConfirm' and close the modal
        // navigation.navigate("MatchConfirm");
        console.log('closemodal')
        onClose && onClose();
    };

    return (
        <Modal animationType="slide" transparent visible={visible}>
            <SafeAreaView style={styles.modalPostmatchfeedback}>
                <BackButton onPress={() => onClose()}/>
                <View style={styles.heading1box}>
                    <Text style={styles.heading1}>Confirmation Required</Text>
                    <Text style={styles.heading2}> Hey, there are still matches awaiting your confirmation. Please
                        complete the post-match feedback to keep our rankings precise. Thanks!</Text>
                </View>
                <View style={styles.spacing}/>
                <NextButton
                    navigation={navigation}
                    nextScreenName='MatchConfirm'
                    disabled={false}
                />
            </SafeAreaView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalPostmatchfeedback: {
        backgroundColor: theme.colors.background,
        alignItems: "center", // Center items horizontally
        justifyContent: "center", // Center items vertically
        flex: 1,
        paddingBottom: 30,
    },
    errorText: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.failure,
        textAlign: "center",
    },
    heading1box: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
    },
    heading1: {
        letterSpacing: 1.2,
        fontSize: theme.textVariants.header.fontSize,
        fontFamily: theme.textVariants.header.fontFamily,
        color: theme.colors.foreground,
    },
    heading2: {
        color: theme.colors.foreground,
        fontSize: theme.textVariants.header.fontSize,
        fontFamily: theme.textVariants.header.fontFamily,
        textAlign: "center",
        alignSelf: "stretch",
    },
    spacing: {
        height: 20, // Set the desired vertical spacing between components
    },
});
export default ModalPMFReminder;
