import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../../app/store';

interface UserAuthState {
    userToken: string | null
    userId: number | null
    isSignedIn: boolean
    isLoading: boolean
}

const initialState: UserAuthState = {
    userToken: null,
    userId: null,
    isSignedIn: false,
    isLoading: true
};

export const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<[string, number]>) => {
            state.userToken = action.payload[0]
            state.userId = action.payload[1]
            state.isSignedIn = true
        },
        signOut: (state) => {
            state.userToken = null
            state.userId = null
            state.isSignedIn = false
        }
    },
});

export const {signIn, signOut} = userAuthSlice.actions;
export const selectToken = (state: RootState) => state.userAuth.userToken;
export const selectId = (state: RootState) => state.userAuth.userId;
export const selectIsSignedIn = (state: RootState) => state.userAuth.isSignedIn;

export const selectIsLoading = (state: RootState) => state.userAuth.isLoading;

export default userAuthSlice.reducer;
