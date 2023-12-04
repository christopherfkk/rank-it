import React, {useState} from "react";
import {Text, View, TextInput, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

import Background from "../components/Background";
import NextButton from "../components/NextButton"
import {theme} from "../../../theme/GlobalStyles"
import {pageAfter} from '../utils/pageOrder';
import {useAppDispatch} from '../../../app/hooks';


const PfLocation = () => {

    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const [location, setLocation] = useState("");

    return (
        <View style={styles.background}>
            <Background>

                <Text style={styles.heading}>
                    What’s your Location?`
                </Text>

                <Text style={styles.heading}>
                    {`E.g. Shibuya, Tokyo or Taito, Tokyo `}
                </Text>

                <TextInput
                    placeholder="Enter your location"
                    value={location}
                    onChangeText={setLocation}
                />

                <NextButton
                    navigation={navigation}
                    dispatch={dispatch}
                    userInfoKey={["location"]}
                    userInfoValue={[location]}
                    nextScreenName={pageAfter.PfLocation}
                    disabled={location.trim() === ""}
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

export default PfLocation;
