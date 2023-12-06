import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

import SelectButton from "../components/SelectButton";
import Background from "../components/Background";
import NextButton from "../components/NextButton"
import {theme} from "../../../theme/GlobalStyles";
import {getPrevSetupScreen, pageAfter} from '../utils/pageOrder';
import {useAppDispatch} from '../../../app/hooks';
import BackButton from '../../../app/components/BackButton';

const PfLevel = () => {

    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const [selectedLevel, setSelectedLevel] = useState<string>("");

    return (
        <View style={styles.background}>
            <Background>
                <BackButton
                    onPress={() => navigation.navigate(getPrevSetupScreen("PfLevel"))}
                    color={"white"}
                />

                <Text style={styles.heading}>
                    What's your Badminton skill level?
                </Text>

                <Text style={styles.body}>
                    Please select your skill level in badminton from the options below:
                </Text>

                <SelectButton
                    onPress={(level) => setSelectedLevel(level)}
                    selectedOption={selectedLevel}
                    optionLabel="Beginner"
                />
                <SelectButton
                    onPress={(level) => setSelectedLevel(level)}
                    selectedOption={selectedLevel}
                    optionLabel="Intermediate"
                />
                <SelectButton
                    onPress={(level) => setSelectedLevel(level)}
                    selectedOption={selectedLevel}
                    optionLabel="Expert"
                />

                <NextButton
                    navigation={navigation}
                    dispatch={dispatch}
                    userInfoKey={["level"]}
                    userInfoValue={[selectedLevel]}
                    nextScreenName={pageAfter.PfLevel}
                    disabled={selectedLevel === ""}
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
});

export default PfLevel;
