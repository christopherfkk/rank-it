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
      updateInfo: (state, action: PayloadAction<[string, any]>) => {
          state.info[action.payload[0]] = action.payload[1]
      },
      storeUserInfo: (state, action: PayloadAction<object>) => {
          state.info = action.payload
      },
      clearUserInfo: (state) => {
          state.info = {}
      },
  },
});

export const { updateInfo, storeUserInfo, clearUserInfo } = userInfoSlice.actions;
export const selectInfo = (state: RootState) => state.userInfo.info;
export default userInfoSlice.reducer;
