import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

import {theme} from '../../../theme/GlobalStyles';

const LikeCommentContainer = ({match}) => {

    return (
        <View style={styles.container}>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.unfocused,
        width: '100%',
        height: '10%',
    },
    body: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
    },
});

export default LikeCommentContainer;