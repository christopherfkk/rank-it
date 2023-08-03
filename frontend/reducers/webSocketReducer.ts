interface WebSocketState {
    socket_ranks: WebSocket | null;
    socket_notifs: WebSocket | null;
}

export enum WebSocketActionTypes {
    INIT_RANKS = 'INIT_RANKS',
    INIT_NOTIFS = 'INIT_NOTIFS',
}

interface InitRanksAction {
    type: WebSocketActionTypes.INIT_RANKS;
    payload: WebSocket;
}

interface InitNotifsAction {
    type: WebSocketActionTypes.INIT_NOTIFS;
    payload: WebSocket;
}

// ... define more Action

type webSocketAction = InitRanksAction | InitNotifsAction // | ... more Action

const webSockerReducer = (state: WebSocketState = { socket_ranks: null, socket_notifs: null }, action: webSocketAction): WebSocketState => {
    switch (action.type) {
        case WebSocketActionTypes.INIT_RANKS:
            return { ...state, socket_ranks: action.payload };
        case WebSocketActionTypes.INIT_NOTIFS:
            return { ...state, socket_notifs: action.payload };
        // ... add more cases depending on actions
        default:
            return state;
    }
};

export default webSockerReducer;
