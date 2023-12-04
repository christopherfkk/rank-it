import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import NotificationData from './notifSocketMessage'
import {RootState} from '../../../app/store';

export interface NotificationState {
    isEstablishingConnection: boolean;
    isConnected: boolean;
    notification: NotificationData[]
}

const initialState: NotificationState = {
    isEstablishingConnection: false,
    isConnected: false,
    notification: []
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        startConnecting: (state => {
            state.isEstablishingConnection = true;
        }),
        connectionEstablished: (state => {
            state.isConnected = true;
            state.isEstablishingConnection = true;
        }),
        receiveNotification: ((state, action: PayloadAction<{ notification: NotificationData[] }>) => {
            state.notification = action.payload.notification;
        }),
        requestNotifications: (() => {}),
        disconnect: (state => {
            state.isEstablishingConnection = false
            state.isConnected = false
            state.notification = []
        }),
    },
});

export const {startConnecting, connectionEstablished, receiveNotification, requestNotifications, disconnect} = notificationSlice.actions;
export const selectNotification = (state: RootState) => state.notification.notification;
export default notificationSlice.reducer;