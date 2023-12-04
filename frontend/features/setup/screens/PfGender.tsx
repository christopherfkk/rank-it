import React, {useState} from "react";
import {Text, StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {theme} from "../../../theme/GlobalStyles";
import {pageAfter} from '../utils/pageOrder';
import Background from "../components/Background";
import SelectButton from "../components/SelectButton";
import NextButton from "../components/NextButton"
import {useAppDispatch} from '../../../app/hooks';

const PfGender = () => {

    const navigation = useNavigation();
    const [selectedGender, setSelectedGender] = useState<string>("");
    const dispatch = useAppDispatch();

    return (
        <View style={styles.background}>
            <Background>

                <Text style={styles.heading}>
                    Pick which best describes you
                </Text>

                <SelectButton
                    onPress={(gender) => setSelectedGender(gender)}
                    selectedOption={selectedGender}
                    optionLabel="Male"
                />
                <SelectButton
                    onPress={(gender) => setSelectedGender(gender)}
                    selectedOption={selectedGender}
                    optionLabel="Female"
                />
                <SelectButton
                    onPress={(gender) => setSelectedGender(gender)}
                    selectedOption={selectedGender}
                    optionLabel="Non-binary"
                />

                <NextButton
                    navigation={navigation}
                    dispatch={dispatch}
                    userInfoKey={["gender"]}
                    userInfoValue={[selectedGender]}
                    nextScreenName={pageAfter.PfGender}
                    disabled={selectedGender === ""}
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

export default PfGender;
