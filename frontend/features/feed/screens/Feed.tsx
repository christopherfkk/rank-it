import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import FeedContainer from '../components/FeedContainer';
import fetchFeedData from '../api/getFeed';
import {useAppSelector} from '../../../app/hooks';
import {selectId, selectToken} from '../../auth/reducers/userAuthReducer';
import {theme} from '../../../theme/GlobalStyles';

const Feed = () => {
    const [feedData, setFeedData] = useState([]);
    const userToken = useAppSelector(selectToken)
    const userId = useAppSelector(selectId)

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetchFeedData(userToken, setFeedData);
            } catch (error) {
                console.error('Error fetching feed data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <SafeAreaView style={[styles.background]}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Feed
                    </Text>
                </View>
                <ScrollView
                    style={styles.feed}
                    showsVerticalScrollIndicator={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.feedScrollViewContent}
                >
                    {feedData.map((match) => (
                        <FeedContainer key={match.id} match={match}/>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: theme.colors.background
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "95%",
        maxWidth: 500,
    },
    header: {
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '5%',
        fontSize: theme.textVariants.header.fontSize,
        fontFamily: theme.textVariants.header.fontFamily,
        color: theme.colors.foreground,
    },
    headerText: {
        fontSize: theme.textVariants.header.fontSize,
        fontFamily: theme.textVariants.header.fontFamily,
        color: theme.colors.foreground,
    },
    feed: {
        flex: 1,
        width: '100%',
    },
    feedScrollViewContent: {
        alignItems: 'center',
        overflow: 'scroll',
    },
});

export default Feed;