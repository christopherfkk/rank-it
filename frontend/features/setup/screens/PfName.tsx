import React, {useState} from "react";
import {Text, View, TextInput, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

import Background from "../components/Background";
import NextButton from "../components/NextButton"
import {theme} from "../../../theme/GlobalStyles";
import {pageAfter} from '../utils/pageOrder';
import {useAppDispatch} from '../../../app/hooks';
import BackButton from '../../../app/components/BackButton';
import {getPrevSetupScreen} from '../utils/pageOrder';

const PfName = () => {

    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <View style={styles.background}>
            <Background>

                <BackButton
                    onPress={() => navigation.navigate(getPrevSetupScreen("PfName"))}
                    color={"white"}
                />

                <Text style={styles.heading}>
                    What's your first and last name
                </Text>

                <Text style={styles.body}>
                    You won’t be able to change this later
                </Text>

                <TextInput
                    style={styles.textInputBoxStyle}
                    placeholder="Enter your first name"
                    keyboardType="default"
                    placeholderTextColor="#737373"
                    value={firstName}
                    onChangeText={setFirstName}
                />

                <TextInput
                    style={styles.textInputBoxStyle}
                    placeholder="Enter your last name"
                    keyboardType="default"
                    placeholderTextColor="#737373"
                    value={lastName}
                    onChangeText={setLastName}
                />

                <NextButton
                    navigation={navigation}
                    dispatch={dispatch}
                    userInfoKey={["first_name", "last_name"]}
                    userInfoValue={[firstName, lastName]}
                    nextScreenName={pageAfter.PfName}
                    disabled={(firstName.trim() === "" || lastName.trim() === "")}
                />

            </Background>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontSize: theme.textVariants.header.fontSize,
        fontFamily: theme.textVariants.header.fontFamily,
        textAlign: "center",
        color: theme.colors.primary,
        alignSelf: "stretch",
    },
    body: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        textAlign: "center",
        color: theme.colors.primary,
        alignSelf: "stretch",
    },
    textInputBoxStyle: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.primary,
        height: "5%",
        width: "75%",
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: "#fff2f2",
        borderStyle: "solid",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        borderRadius: 20,
        marginTop: 18,
        alignSelf: "center",
        justifyContent: "center",
        textAlign: "center"
    },
});

export default PfName;
