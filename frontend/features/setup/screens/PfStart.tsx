import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../../../theme/GlobalStyles";
import Background from "../components/Background";
import NextButton from '../components/NextButton';
import { pageAfter } from '../utils/pageOrder';

const PfStart = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.background}>
        <Background>

            <Text style={styles.heading}>
                Welcome!
            </Text>

            <Text style={styles.body}>
                Set up you profile!
            </Text>

            <NextButton
                navigation={navigation}
                nextScreenName={pageAfter.PfStart}
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
    body: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        textAlign: "center",
        color: theme.colors.primary,
        alignSelf: "stretch",
    },
});

export default PfStart;
