import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, ScrollView, SafeAreaView, RefreshControl} from "react-native";
import {format} from 'date-fns';

import ConfirmationContainer from "../components/ConfirmationContainer";
import {theme} from "../../../theme/GlobalStyles";
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {requestNotifications, selectNotification} from '../reducers/notifSocketReducer';
import {selectInfo} from '../../../reducers/userInfoReducer';
import {selectId, selectToken} from '../../../reducers/userAuthReducer';

import fetchMatchData from '../api/getMatchData';

const MatchConfirm = () => {

    const userToken = useAppSelector(selectToken)
    const userId = useAppSelector(selectId)
    const selfName = useAppSelector(selectInfo)['firstName']
    const notifications = useAppSelector(selectNotification);
    const [matches, setMatches] = useState([]);

    const [refreshing, setRefreshing] = React.useState(false);
    const dispatch = useAppDispatch()

    const onRefresh = React.useCallback(async() => {
        setRefreshing(true);
        await dispatch(requestNotifications());
        setRefreshing(false);
    }, []);


    useEffect(() => {
        fetchMatchData(userToken, notifications, setMatches)
    }, [notifications])

    const formatDate = (datetime) => {
        const date = new Date(datetime);
        const formattedDate = format(date, "MMMM dd, yyyy 'at' HH:mm"); // Customize the date and time format as you like
        return formattedDate;
    };

    return (
        <SafeAreaView style={[styles.background]}>
            <View style={styles.body}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Confirmation</Text>
                </View>
                <Text>To record the match in the ranking, both players must confirm the post-match feedback after
                    completing the game.</Text>
                <View style={styles.subheading}>
                    <Text style={[styles.subheadingText, {width: "110%"}]}>
                        OPPONENT
                    </Text>
                    <Text style={[styles.subheadingText, {width: "70%"}]}>
                        TIME OF MATCH
                    </Text>
                </View>

                <ScrollView
                    style={styles.ranking}
                    showsVerticalScrollIndicator={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.rankingScrollViewContent}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                >
                    {matches && matches.map((match, index) => (
                        <ConfirmationContainer
                            key={index + 1}
                            matchData={match}
                            opponentName={match.submitter.first_name + " " + match.submitter.last_name}
                            date={formatDate(match.updated_at)}
                            avatar={match.submitter.avatar_image_name}
                            selfId={String(userId)}
                            selfName={selfName}
                        />
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flex: 1,
        backgroundColor: theme.colors.background
    },
    body: {
        // paddingHorizontal: Padding.p_9xl,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        alignSelf: "center", // INSTEAD OF STRETCH
        width: "95%", // ADD THIS
        maxWidth: 500, // ADD THIS
    },
    rankingPage: {
        flex: 1,
        overflow: "scroll",
        width: "100%",
        backgroundColor: theme.colors.background
    },
    header: {
        width: "100%",
        alignItems: "center",
        paddingTop: "5%",
    },
    headerText: {
        fontSize: theme.textVariants.header.fontSize,
        fontFamily: theme.textVariants.header.fontFamily,
        color: theme.colors.foreground,
    },
    location: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "15%",
        paddingVertical: "2%",
    },
    locationTab: {
        width: "30%",
        backgroundColor: theme.colors.background,
        height: 21,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
    },
    locationTabText: {
        textAlign: "center",
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
    },
    subheading: {
        alignSelf: "flex-start",
        width: "70%",
        flexDirection: "row",
        marginBottom: "1%",
        marginTop: "3%"
    },
    subheadingText: {
        letterSpacing: 0.3,
        textAlign: "center",
        justifyContent: "center",
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
    },
    ranking: {
        alignSelf: "stretch",
        overflow: "scroll",
    },
    rankingScrollViewContent: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        alignSelf: "stretch",
        overflow: "scroll",
        width: "100%"
    },
});

export default MatchConfirm; 
