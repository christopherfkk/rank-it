import * as React from "react";
import {TouchableOpacity, StyleSheet} from "react-native";
import {theme} from '../../theme/GlobalStyles'
import {Ionicons} from '@expo/vector-icons'; // You may need to install this package

const BackButton = ({onPress, color = "black"}) => {
    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={styles.container}
        >
            <Ionicons name="arrow-back" size={24} color={color}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 10,
        left: 10,
    },
});

export default BackButton;
