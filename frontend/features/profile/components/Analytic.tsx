import {Text, View, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {theme} from '../../../theme/GlobalStyles';
import React from 'react';

type AnalyticType = {
    iconName: string;
    name: string;
    analytic: string;
};

const Analytic = ({iconName, name, analytic}: AnalyticType) => {
    return (
        <View style={styles.analyticGroup}>
            <View style={styles.icon}>
                <Ionicons
                    name={iconName}
                    size={30}
                    color={theme.colors.foreground}
                />
            </View>
            <View style={styles.analytic}>
                <Text style={styles.name}>
                    {name}
                </Text>
                <Text style={styles.phrase}>
                    {analytic}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    analyticGroup: {
        flexDirection: "row",
        backgroundColor: theme.colors.background,
        borderBottomWidth: 1,
        borderColor: "#bababa",
        borderStyle: "solid",
        overflow: "scroll",
        gap: 10,
        paddingVertical: "2%",
    },
    icon: {
        justifyContent: "center",
    },
    analytic: {
        justifyContent: "center",
        overflow: "scroll",
        alignSelf: "stretch",
    },
    name: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
        alignSelf: "stretch",
        fontWeight: "bold",
    },
    phrase: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
        alignSelf: "stretch",
    },
})

export default Analytic;
