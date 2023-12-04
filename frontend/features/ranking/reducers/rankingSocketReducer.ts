import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import RankingData from './rankingSocketMessage'
import {RootState} from '../../../app/store';

export interface RankingState {
    isEstablishingConnection: boolean;
    isConnected: boolean;
    ranking: RankingData[]
}

const initialState: RankingState = {
    isEstablishingConnection: false,
    isConnected: false,
    ranking: []
};

const rankingSlice = createSlice({
    name: 'ranking',
    initialState,
    reducers: {
        startConnecting: (state => {
            state.isEstablishingConnection = true;
        }),
        connectionEstablished: (state => {
            state.isConnected = true;
            state.isEstablishingConnection = true;
        }),
        receiveRanking: ((state, action: PayloadAction<{ ranking: RankingData[] }>) => {
            state.ranking = action.payload.ranking;
        }),
        disconnect: (state => {
            state.isEstablishingConnection = false
            state.isConnected = false
            state.ranking = []
        }),
    },
});

export const {startConnecting, connectionEstablished, receiveRanking, disconnect} = rankingSlice.actions;
export const selectRanking = (state: RootState) => state.ranking.ranking;
export default rankingSlice.reducer;