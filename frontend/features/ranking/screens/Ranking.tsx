import React, {useState, useEffect, useCallback} from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    SafeAreaView,
    ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ModalReminder from '../../postmatchfeedback/modals/Reminder';
import RankingContainer from '../components/RankingContainer';
import {theme} from '../../../theme/GlobalStyles';
import {useAppSelector} from '../../../app/hooks';

import {selectRanking} from '../reducers/rankingSocketReducer';
import {selectId} from '../../../reducers/userAuthReducer';

const Ranking = () => {

    const navigation = useNavigation();
    const userId = useAppSelector(selectId)

    const [userName, setUserName] = useState<string | null>(null);
    const [refresh, setRefresh] = useState(false);

    const ranking = useAppSelector(selectRanking)

    return (
        <SafeAreaView style={[styles.background]}>
            <View style={styles.container}>
                {/* HEADER */}
                    <Text style={styles.header}>
                        Ranking
                    </Text>

                {/* LOCATION TABS */}
                {/* <View style={styles.location}>
          <Pressable style={styles.locationTab}>
            <Text style={styles.locationTabText}>Tokyo</Text>
          </Pressable>
          <Pressable style={styles.locationTab}>
            <Text style={styles.locationTabText}>CB Gym</Text>
          </Pressable>
        </View>  */}

                {/* SUBHEADING */}
                <View style={[styles.subheading, {width: "98%"}]}>
                    <View style={{width: '70%', flexDirection: "row"}}>
                        <Text style={[styles.subheadingText, {width: '20%'}]}>
                          RANK
                        </Text>
                        <Text style={[styles.subheadingText, {width: '60%'}]}>
                          ATHLETE
                        </Text>
                        <Text style={[styles.subheadingText, {width: '20%'}]}>
                          SKILL
                        </Text>
                    </View>
                    <View style={{width: '30%'}}></View>
                </View>

                <ScrollView
                    style={styles.ranking}
                    showsVerticalScrollIndicator={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.rankingScrollViewContent}
                >

                    {/* If username is null, filter out  */}
                    {ranking
                        .filter((rank) => rank.user.first_name !== null && rank.user.last_name !== null)
                        .map((rank, index) => (
                            <RankingContainer
                                key={index + 1}
                                opponentData={rank.user}
                                rank={index + 1}
                                opponentName={`${rank.user.first_name} ${rank.user.last_name}`}
                                avatar_image_name={rank.user.avatar_image_name}
                                skill={rank.skill}
                                self={rank.user.id === userId}
                                selfName={userName}
                                setRefresh={setRefresh}
                                onFrameTouchableOpacityPress={() => {
                                    navigation.navigate('Profile', {
                                        profileUserId: rank.user.id
                                    } as never);
                                }}
                            />
                        ))}
                </ScrollView>
                {/* Notification Popup */}
                {/*<ModalReminder*/}
                {/*    visible={unconfirmedMatch}*/}
                {/*    onClose={handleClosePopup}*/}
                {/*    // Add more props if your ModalReminder component needs them*/}
                {/*/>*/}
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
    header: {
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '5%',
        fontSize: theme.textVariants.header.fontSize,
        fontFamily: theme.textVariants.header.fontFamily,
        color: theme.colors.foreground,
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        alignSelf: "center", // INSTEAD OF STRETCH
        width: "95%", // ADD THIS
        maxWidth: 500, // ADD THIS
    },
    location: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '15%',
        paddingVertical: '2%',
    },
    locationTab: {
        width: '30%',
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        paddingVertical: '1%',
    },
    locationTabText: {
        textAlign: 'center',
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
    },
    subheading: {
        alignSelf: 'center',
        width: '70%',
        flexDirection: 'row',
        marginBottom: '1%',
        marginTop: '3%',
    },
    subheadingText: {
        letterSpacing: 0.3,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: theme.textVariants.body.fontSize,
        fontFamily: theme.textVariants.body.fontFamily,
        color: theme.colors.foreground,
    },
    ranking: {
        alignSelf: 'stretch',
        overflow: 'scroll',
    },
    rankingScrollViewContent: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        overflow: 'scroll',
    },
});

export default Ranking;
