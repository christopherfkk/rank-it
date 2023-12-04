import React, {useState} from "react";
import {Text, View, TextInput, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

import Background from "../components/Background";
import NextButton from "../components/NextButton"
import {theme} from "../../../theme/GlobalStyles";
import {pageAfter} from '../utils/pageOrder';
import {useAppDispatch} from '../../../app/hooks';

const PfName = () => {

    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <View style={styles.background}>
            <Background>

                <Text style={styles.heading}>
                    What's your first and last name
                </Text>

                <Text style={styles.heading}>
                    You won’t be able to change this later
                </Text>

                <TextInput
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={setFirstName}
                />

                <TextInput
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={setLastName}
                />

                <NextButton
                    navigation={navigation}
                    dispatch={dispatch}
                    userInfoKey={["firstName", "lastName"]}
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
});

export default PfName;
