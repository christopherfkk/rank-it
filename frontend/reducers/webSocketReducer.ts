interface WebSocketState {
    socket_ranks: WebSocket | null;
    socket_notifs: WebSocket | null;
    // isPopupOpen: boolean;
}

export enum WebSocketActionTypes {
    INIT_RANKS = 'INIT_RANKS',
    INIT_NOTIFS = 'INIT_NOTIFS',
    // OPEN_POPUP = 'OPEN_POPUP',
    // CLOSE_POPUP = 'CLOSE_POPUP',
}

interface InitRanksAction {
    type: WebSocketActionTypes.INIT_RANKS;
    payload: WebSocket;
}

interface InitNotifsAction {
    type: WebSocketActionTypes.INIT_NOTIFS;
    payload: WebSocket;
}

// interface OpenPopupAction {
//     type: WebSocketActionTypes.OPEN_POPUP;
// }

// interface ClosePopupAction {
//     type: WebSocketActionTypes.CLOSE_POPUP;
}
// ... define more Action OpenPopupAction | ClosePopupAction
type webSocketAction = InitRanksAction | InitNotifsAction // | ... more Action

const webSocketReducer = (state: WebSocketState = { socket_ranks: null, socket_notifs: null, isPopupOpen: false }, action: webSocketAction): WebSocketState => {
    switch (action.type) {
        case WebSocketActionTypes.INIT_RANKS:
            return { ...state, socket_ranks: action.payload };
        case WebSocketActionTypes.INIT_NOTIFS:
            return { ...state, socket_notifs: action.payload };
        // case WebSocketActionTypes.OPEN_POPUP:
        //     return { ...state, isPopupOpen: true };
        // case WebSocketActionTypes.CLOSE_POPUP:
        //     return { ...state, isPopupOpen: false };
        // ... add more cases depending on actions
        default:
            return state;
    }
};

export default webSocketReducer;
