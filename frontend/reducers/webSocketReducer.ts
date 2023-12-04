import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface WebSocketState {
    socket_ranks: WebSocket | null;
    socket_notifs: WebSocket | null;
    messages: any[];
    isPopUp: boolean;
}

const initialState: WebSocketState = {
    socket_ranks: null,
    socket_notifs: null,
    messages: [],
    isPopUp: false
};

export const webSocketSlice = createSlice({
  name: 'webSocket',
  initialState,
  reducers: {
    initRanks: (state, action: PayloadAction<WebSocket>) => {
      state.socket_ranks = action.payload;
    },
    initNotifs: (state, action: PayloadAction<WebSocket>) => {
      state.socket_notifs = action.payload;
    },
    getMessage: (state, action: PayloadAction<any>) => {
      state.messages = action.payload;
    },
    isPopUp: (state, action: PayloadAction<boolean>) => {
      state.isPopUp = action.payload;
    },
  },
});

export const { initRanks, initNotifs, getMessage, isPopUp } = webSocketSlice.actions;
export const selectIsPopUp = (state: RootState) => state.webSocket.isPopUp;
export default webSocketSlice.reducer;
