interface WebSocketState {
    socket_ranks: WebSocket | null;
    socket_notifs: WebSocket | null;
    messages: any[];  // assuming messages are of type 'any' for now
}

export enum WebSocketActionTypes {
    INIT_RANKS = 'INIT_RANKS',
    INIT_NOTIFS = 'INIT_NOTIFS',
    MESSAGES = 'MESSAGES'
}

interface InitRanksAction {
    type: WebSocketActionTypes.INIT_RANKS;
    payload: WebSocket;
}

interface InitNotifsAction {
    type: WebSocketActionTypes.INIT_NOTIFS;
    payload: WebSocket;
}

interface Messages {
    type: WebSocketActionTypes.MESSAGES;
    payload: any;
}

type webSocketAction = InitRanksAction | InitNotifsAction | Messages // | ... more Action

//, isPopupOpen: false
const initialState: WebSocketState = { 
    socket_ranks: null, 
    socket_notifs: null, 
    messages: [] 
};

const webSocketReducer = (state: WebSocketState = initialState, action: webSocketAction): WebSocketState => {
    switch (action.type) {
        case WebSocketActionTypes.INIT_RANKS:
            return { ...state, socket_ranks: action.payload };
        case WebSocketActionTypes.INIT_NOTIFS:
            return { ...state, socket_notifs: action.payload };
        case WebSocketActionTypes.MESSAGES:
            return { ...state, messages: [...state.messages, action.payload] };
        default:
            return state;
    }
};

export default webSocketReducer;
