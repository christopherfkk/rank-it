import React, {useState} from "react";
import {View, Text, TextInput, Pressable, SafeAreaView, ImageBackground, TouchableOpacity, StyleSheet, Linking,} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {theme} from "../../../theme/GlobalStyles";
import handleLogin from "../api/login"

import {useAppDispatch} from '../../../app/hooks';
import {signIn} from '../../../reducers/userAuthReducer';


const Login = () => {

    const navigation = useNavigation();
    const dispatch = useAppDispatch()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.logo}
                    resizeMode="cover"
                    source={require("../../../assets/rank-it-logo.png")}
                />
                <Text style={[styles.heading]}>
                    Log in to Rank-it
                </Text>
                <View style={styles.signupForm}>
                    <TextInput
                        style={styles.textInputBoxStyle}
                        placeholder="Enter your email "
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholderTextColor="#737373"
                        contextMenuHidden // Disable context menu (copy-paste actions)
                        onChangeText={(text: string) => setEmail(text)}
                    />
                    <TextInput
                        style={styles.textInputBoxStyle}
                        placeholder="Enter your password"
                        keyboardType="default"
                        placeholderTextColor="#737373"
                        secureTextEntry // Redact the password input
                        contextMenuHidden // Disable context menu (copy-paste actions)
                        onChangeText={(text: string) => setPassword(text)}
                    />
                </View>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.2}
                    onPress={() =>
                        handleLogin(navigation, dispatch, signIn, email, password, setError)
                }>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>

                {error ? (
                    <Text style={styles.errorText}>
                        {error}
                    </Text>
                ) : null}

                {/*<TouchableOpacity*/}
                {/*    activeOpacity={0.2}*/}
                {/*    onPress={() => navigation.navigate("ResetPassword")}>*/}
                {/*    <Text style={styles.body}>*/}
                {/*        Forgot password?*/}
                {/*    </Text>*/}
                {/*</TouchableOpacity>*/}

                {/* <GoogleSignInButton/> */}

                <TouchableOpacity
                    activeOpacity={0.2}
                    onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.body}>
                        Don’t have an account?
                        <Text style={styles.underlineText}>
                            Sign up here
                        </Text>
                    </Text>
                </TouchableOpacity>

                <Pressable
                    onPress={() =>
                        Linking.openURL(
                            "https://classy-galette-16d.notion.site/RankIT-Terms-of-Service-17c96ce8b482418c862bcf85e3d08b1a?pvs=25"
                        )
                    }
                >
                    <Text style={styles.body}>
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
        flex: 1,
    },
    container: {
        flex: 1,
        width: "90%",
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
    body: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width: "90%",
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
    underlineText: {
        textDecorationLine: "underline",
    },
    errorText: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.failure,
    }
});

export default Login;
