import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import PostPublisherContainer from './PostPublisherContainer';
import PostContainer from './PostContainer';
import LikeCommentContainer from './LikeCommentContainer';
import {theme} from '../../../theme/GlobalStyles';

const FeedContainer = ({match}) => {
    const {submitter, opponent, submitter_score, opponent_score} = match;

    return (
        <View style={styles.feedContainer}>
            <PostPublisherContainer
                key={submitter.id}
                match={match}
            />
            <PostContainer
                key={match.id}
                match={match}
            />
            <LikeCommentContainer
                key={match.id}
                match={match}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    feedContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.colors.unfocused,
        height: 300,
        marginVertical: 10,
        width: '98%',
    },
    body: {
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
    },
    scoresContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default FeedContainer;