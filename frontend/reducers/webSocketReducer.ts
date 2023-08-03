interface WebSocketState {
    socket: WebSocket | null;
}

export enum WebSocketActionTypes {
    INIT = 'INIT',
}

interface InitAction {
    type: WebSocketActionTypes.INIT;
    payload: WebSocket;
}

// ... define more Action

type webSocketAction = InitAction // | ... more Action

const webSockerReducer = (state: WebSocketState = { socket: null }, action: webSocketAction): WebSocketState => {
    switch (action.type) {
        case WebSocketActionTypes.INIT:
            return { socket: action.payload };
        // ... add more cases depending on actions
        default:
            return state;
    }
};

export default webSockerReducer;
