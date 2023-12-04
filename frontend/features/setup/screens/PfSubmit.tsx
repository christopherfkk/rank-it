import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../../../theme/GlobalStyles";
import { pageAfter } from '../utils/pageOrder';
import Background from "../components/Background";
import NextButton from '../components/NextButton';

const PfSubmit = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.background}>
        <Background>

            <Text style={styles.heading}>
                Done
            </Text>

            <Text style={styles.heading}>
                We're thrilled to welcome you aboard and play badminton with you!
            </Text>

            <NextButton
                navigation={navigation}
                nextScreenName={pageAfter.PfSubmit}
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
});

export default PfSubmit;
