import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {theme} from "../../../theme/GlobalStyles";
import {pageAfter} from '../utils/pageOrder';
import SkipButton from "../components/SkipButton";
import NextButton from "../components/NextButton"
import Background from "../components/Background";
import {useAppDispatch} from '../../../app/hooks';


const PfBlurb = () => {

    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const [blurb, setBlurb] = useState<string>(null);

    return (
        <View style={styles.background}>
            <Background>

                <SkipButton/>

                <Text style={styles.heading}>
                    Write a short Bio
                </Text>

                <Text style={styles.heading}>
                    When you share some details about yourself, it provides your opponent
                    with a sneak peek into your badminton experience.
                </Text>

                <TextInput
                    value={blurb}
                    onChangeText={(text) => setBlurb(text)}
                    placeholder="Enter your bio"
                    placeholderTextColor="#737373"
                />
                <NextButton
                    navigation={navigation}
                    dispatch={dispatch}
                    userInfoKey={["blurb"]}
                    userInfoValue={[blurb]}
                    nextScreenName={pageAfter.PfBlurb}
                    disabled={false}
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
    textboxText: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.primary,
    },
});

export default PfBlurb;
