import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Pressable,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../../../theme/GlobalStyles";
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
            <View style={styles.body}>
                <ImageBackground
                    style={styles.memberPhotoIcon}
                    resizeMode="cover"
                    source={require("../../../assets/rank-it-logo.png")}
                />
                <Text style={[styles.heading1]}>Log in to Rank-it</Text>
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
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                {error ? (
                    <Text style={styles.errorText}>{error}</Text>
                ) : null}

                <TouchableOpacity
                    activeOpacity={0.2}
                    onPress={() => navigation.navigate("ResetPassword")}>
                    <Text style={styles.heading2}>
                        Forgot password?
                    </Text>
                </TouchableOpacity>

                {/* <GoogleSignInButton/> */}

                <TouchableOpacity
                    activeOpacity={0.2}
                    onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.heading2}>
                        Don’t have an account? <Text style={styles.underlineText}>Sign up here</Text>
                    </Text>
                </TouchableOpacity>

                <Pressable
                    onPress={() =>
                        Linking.openURL(
                            "https://classy-galette-16d.notion.site/RankIT-Terms-of-Service-17c96ce8b482418c862bcf85e3d08b1a?pvs=25"
                        )
                    }
                >
                    <Text style={styles.heading3}>
                        By continuing, you agree to the Terms and Conditions
                    </Text>
                </Pressable>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flex: 1,
        backgroundColor: theme.colors.primary,
    },
    body: {
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        alignSelf: "center", // INSTEAD OF STRETCH
        flex: 1,
    },
    heading1: {
        alignSelf: "stretch",
        fontFamily: theme.textVariants.header.fontFamily,
        fontSize: theme.textVariants.header.fontSize,
        color: theme.colors.foreground,
        textAlign: "left",
    },
    heading2: {
        alignSelf: "stretch",
        fontSize: theme.textVariants.header.fontSize,
        fontFamily: theme.textVariants.header.fontFamily,
        color: theme.colors.foreground,
    },
    heading3: {
        alignSelf: "stretch",
        fontSize: theme.textVariants.header.fontSize,
        color: theme.colors.foreground,
        fontFamily: theme.textVariants.header.fontFamily,
        textDecorationLine: "underline",
        textAlign: "center",
        marginTop: 21
    },
    textInput: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        fontWeight: "500",
    },
    textInputBoxStyle: {
        paddingVertical: 8,
        borderRadius: 20,
        alignSelf: "stretch",
        height: 33,
        borderWidth: 1,
        borderColor: "#000",
        borderStyle: "solid",
        backgroundColor: theme.colors.background,
        justifyContent: "center",
        marginTop: 15,
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
    },
    button: {
        borderRadius: 20,
        backgroundColor: theme.colors.focused,
        width: 253,
        height: 32,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 28,
    },
    buttonText: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
        textAlign: "center",
    },
    memberPhotoIcon: {
        width: 160,
        height: 139
    },
    underlineText: {
        textDecorationLine: "underline",
    },
    signupForm: {
        paddingBottom: 0,
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",
    },
    errorText: {
        color: "red",
        fontSize: 16,
        marginTop: 10,
    }
});

export default Login;
