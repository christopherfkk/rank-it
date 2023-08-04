import React, {useState} from "react";
import {Text, StyleSheet, ImageBackground, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import RegSelectAvatarButton from "../../components/setup/RegSelectAvatarButton";

import {FontFamily, Color, Padding, Reg} from "../../GlobalStyles";
import RegBackground from "../../components/setup/RegBackground";
import RegButton from "../../components/setup/RegButton"
import {useRegContext, ACTIONS} from '../../RegContext';
import apiConfig from '../../apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {avatarImages} from './avatarImages';

const PfPickAvatar = () => {
        const navigation = useNavigation();
        const {state, dispatch} = useRegContext();
        const [pickedAvatar, setPickedAvatar] = useState("");

        const storeUserLevelInfo = (pickedAvatar) => {
            dispatch({type: ACTIONS.SET_PICKED_AVATAR, payload: pickedAvatar});
        };

        return (
            <View style={Reg.background}>
                <RegBackground>
                    <Text style={Reg.heading1}>Pick an avatar!</Text>

                    <View style={styles.avatarGrid}>
                        <View style={styles.avatarRow}>
                            <RegSelectAvatarButton
                                onPress={(avatar) => setPickedAvatar(avatar)}
                                selectedOption={pickedAvatar}
                                imageName="man1"
                            />
                            <RegSelectAvatarButton
                                onPress={(avatar) => setPickedAvatar(avatar)}
                                selectedOption={pickedAvatar}
                                imageName="man2"
                            />
                        </View>
                        <View style={styles.avatarRow}>
                            <RegSelectAvatarButton
                                onPress={(avatar) => setPickedAvatar(avatar)}
                                selectedOption={pickedAvatar}
                                imageName="woman1"
                            />
                            <RegSelectAvatarButton
                                onPress={(avatar) => setPickedAvatar(avatar)}
                                selectedOption={pickedAvatar}
                                imageName="woman2"
                            />
                        </View>
                    </View>

                    <RegButton
                        navigation={navigation}
                        screenName="PfLevel" // Replace "OtherScreen" with the next screen name
                        onPress={() => {
                            storeUserLevelInfo(pickedAvatar); // Store the selected avatar
                        }}
                        disabled={pickedAvatar === null}
                        buttonText="Next"
                    />
                </RegBackground>
            </View>
        );
    }
;

const styles = StyleSheet.create({
    avatarGrid: {
        width: "50%",
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
})

export default PfPickAvatar;
