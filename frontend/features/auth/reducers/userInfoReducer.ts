import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

interface UserInfoState {
    info: object
}

const initialState: UserInfoState = {
    info: {}
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
      storeUserInfo: (state, action: PayloadAction<object>) => {
          state.info = action.payload
      },
      clearUserInfo: (state) => {
          state.info = {}
      },
  },
});

export const { storeUserInfo, clearUserInfo } = userInfoSlice.actions;
export const selectInfo = (state: RootState) => state.userInfo.info;
export default userInfoSlice.reducer;
