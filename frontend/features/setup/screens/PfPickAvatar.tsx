import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../../../theme/GlobalStyles";
import SelectAvatarButton from "../components/SelectAvatarButton";
import Background from "../components/Background";
import NextButton from "../components/NextButton"
import {getPrevSetupScreen, pageAfter} from '../utils/pageOrder';
import {useAppDispatch} from '../../../app/hooks';
import BackButton from '../../../components/BackButton';

const PfPickAvatar = () => {

    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const [pickedAvatarName, setPickedAvatarName] = useState<string>("");

    return (
        <View style={styles.background}>
            <Background>

                <BackButton
                    onPress={() => navigation.navigate(getPrevSetupScreen("PfPickAvatar"))}
                    color={"white"}
                />

                <Text style={styles.heading}>
                    Pick an avatar!
                </Text>

                <View style={styles.avatarGrid}>
                    <View style={styles.avatarRow}>
                        <SelectAvatarButton
                            onPress={(avatar) => setPickedAvatarName(avatar)}
                            selectedOption={pickedAvatarName}
                            imageName="man1"
                        />
                        <SelectAvatarButton
                            onPress={(avatar) => setPickedAvatarName(avatar)}
                            selectedOption={pickedAvatarName}
                            imageName="man2"
                        />
                    </View>
                    <View style={styles.avatarRow}>
                        <SelectAvatarButton
                            onPress={(avatar) => setPickedAvatarName(avatar)}
                            selectedOption={pickedAvatarName}
                            imageName="woman1"
                        />
                        <SelectAvatarButton
                            onPress={(avatar) => setPickedAvatarName(avatar)}
                            selectedOption={pickedAvatarName}
                            imageName="woman2"
                        />
                    </View>
                </View>

                <NextButton
                    navigation={navigation}
                    dispatch={dispatch}
                    userInfoKey={["avatar_image_name"]}
                    userInfoValue={[pickedAvatarName]}
                    nextScreenName={pageAfter.PfPickAvatar}
                    disabled={pickedAvatarName === null}
                />

            </Background>
        </View>
        );
    }
;

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
    avatarGrid: {
        width: "75%",
        height: "50%",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        columnGap: 1,
    },
    avatarRow: {
        width: "50%",
        height: "50%",
        flexDirection: "row",
        alignSelf: "stretch",
    }
});

export default PfPickAvatar;
