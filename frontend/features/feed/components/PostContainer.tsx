import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

import {theme} from '../../../theme/GlobalStyles';

const PostContainer = ({match}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                {match.submitter_score} - {match.opponent_score}</Text>
            <Text style={styles.header}>
                {match.submitter.first_name} - {match.opponent.first_name}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        height: '65%',
        width: '90%',
        marginTop: '2.5%',
    },
    header: {
        fontSize: theme.textVariants.header.fontSize,
        fontFamily: theme.textVariants.header.fontFamily,
        color: theme.colors.foreground,
    },
});

export default PostContainer;