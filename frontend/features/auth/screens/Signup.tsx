import * as React from "react";
import {
    Text,
    TextInput,
    View,
    Pressable,
    TouchableOpacity,
    Linking,
    SafeAreaView,
    StyleSheet
} from "react-native";
import { useState } from "react";
import {useNavigation} from "@react-navigation/native";

import { theme } from "../../../theme/GlobalStyles";
import BackButton from '../../../components/BackButton';
import handleRegister from '../api/signup';
import {useAppDispatch} from '../../../app/hooks';
import {signIn} from '../reducers/userAuthReducer';

const Signup = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [error, setError] = useState("")

    const dispatch = useAppDispatch()

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.container}>
                <BackButton
                    onPress={() => navigation.navigate("Login")}
                />
                <Text style={styles.heading}>
                    Create an Account
                </Text>
                <View style={styles.signupForm}>
                    <TextInput
                        style={styles.textInputBoxStyle}
                        placeholder="Enter your email "
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholderTextColor="#737373"
                        onChangeText={(text: string) => setEmail(text)}
                        contextMenuHidden // Disable context menu (copy-paste actions)
                    />
                    <TextInput
                        style={styles.textInputBoxStyle}
                        placeholder="Enter your password"
                        keyboardType="default"
                        placeholderTextColor="#737373"
                        onChangeText={(text: string) => setPassword1(text)}
                        secureTextEntry // Redact the password input
                        contextMenuHidden // Disable context menu (copy-paste actions)
                    />
                    <TextInput
                        style={styles.textInputBoxStyle}
                        placeholder="Confirm your password"
                        keyboardType="default"
                        placeholderTextColor="#737373"
                        onChangeText={(text: string) => setPassword2(text)}
                        secureTextEntry // Redact the password input
                        contextMenuHidden // Disable context menu (copy-paste actions)
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.2}
                    onPress={() => handleRegister(email, password1, password2, navigation, setError, dispatch, signIn)}
                >
                        <Text style={[styles.buttonText]}>Sign-up</Text>
                </TouchableOpacity>

                {error ? (
                    <Text style={styles.errorText}>{error}</Text>
                ) : null}

                {/* <GoogleSignInButton/> */}

                <Pressable
                    onPress={() =>
                        Linking.openURL(
                            "https://classy-galette-16d.notion.site/RankIT-Terms-of-Service-17c96ce8b482418c862bcf85e3d08b1a?pvs=25"
                        )
                    }
                >
                    <Text style={[styles.body, {textDecorationLine: "underline"}]}>
                        Terms and Conditions
                    </Text>
                </Pressable>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: theme.colors.primary,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        flex: 1,
    },
    container: {
        flex: 1,
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    body: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    heading: {
        fontFamily: theme.textVariants.header.fontFamily,
        fontSize: theme.textVariants.header.fontSize,
        color: theme.colors.foreground,
        alignSelf: "center",
        textAlign: "left",
    },
    signupForm: {
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'column',
        marginVertical: 30,
        gap: 5,
    },
    textInputBoxStyle: {
        backgroundColor: theme.colors.background,
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        alignSelf: "stretch",
        justifyContent: "center",
        borderStyle: "solid",
        height: 50,
        borderWidth: 2,
        borderRadius: 20,
        paddingHorizontal: 20
    },
    button: {
        borderRadius: 20,
        backgroundColor: theme.colors.focused,
        width: "50%",
        height: "5%",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30
    },
    buttonText: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.background,
        textAlign: "center",
    },
    logo: {
        height: 200,
        width: 200,
    },
    errorText: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.failure,
    }
});

export default Signup;
