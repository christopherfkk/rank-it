import * as React from "react";
import {StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {theme} from "../../../theme/GlobalStyles";
import {getPrevSetupScreen, pageAfter} from '../utils/pageOrder';
import Background from "../components/Background";
import NextButton from '../components/NextButton';
import BackButton from '../../../app/components/BackButton';
import {useAppSelector} from '../../../app/hooks';
import {selectId, selectToken} from '../../auth/reducers/userAuthReducer';
import {selectInfo} from '../../auth/reducers/userInfoReducer';

const PfSubmit = () => {

    const navigation = useNavigation();
    const userToken = useAppSelector(selectToken)
    const userId = useAppSelector(selectId)
    const userInfo = useAppSelector(selectInfo);

    return (
        <View style={styles.background}>
            <Background>
                <BackButton
                    onPress={() => navigation.navigate(getPrevSetupScreen("PfSubmit"))}
                    color={"white"}
                />

                <Text style={styles.heading}>
                    We're thrilled to welcome you aboard and play badminton with you!
                </Text>

                <NextButton
                    navigation={navigation}
                    nextScreenName={pageAfter.PfSubmit}
                    disabled={false}
                    buttonText={"Submit"}
                    userToken={userToken}
                    userId={userId}
                    userInfo={userInfo}
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
