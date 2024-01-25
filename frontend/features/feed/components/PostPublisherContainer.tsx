import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

import {theme} from '../../../theme/GlobalStyles';
import {avatarImages} from '../../setup/utils/avatarImages';
import formatDateTime from '../../../utils/datetime';

const PostPublisherContainer = ({match}) => {

    return (
        <View style={styles.container}>
            <View style={styles.photoContainer}>
                <ImageBackground
                    style={styles.photo}
                    resizeMode="contain"
                    source={avatarImages[match.submitter.avatar_image_name]}
                />
            </View>
            <View style={styles.publishDetailsContainer}>
                <Text>{match.submitter.first_name + ` ` + match.submitter.last_name}</Text>
                <Text>{formatDateTime(match.created_at)}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: theme.colors.unfocused,
        width: '100%',
        height: '25%',
        paddingLeft: '5%',
        paddingTop: '2.5%',
    },
    body: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
    },
    photoContainer: {
        height: "100%",
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20,
    },
    photo: {
        backgroundColor: "#d4d4d4",
        borderRadius: 200,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    publishDetailsContainer: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
    }
});

export default PostPublisherContainer;