import { createStore, combineReducers } from 'redux';

import fileReducer from './reducers/webSocketReducer';
// ... import more reducers

// Combine reducers
const rootReducer = combineReducers({
    websocketStore: websocketReducer,
    // ... declare more store: reducers
});

// Create the store
const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
