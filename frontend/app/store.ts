import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import webSocketSlice from '../reducers/webSocketReducer';
import userInfoSlice from '../features/auth/reducers/userInfoReducer';
import userAuthSlice from '../features/auth/reducers/userAuthReducer';
import rankingSlice from '../features/ranking/reducers/rankingSocketReducer';
import notificationSlice from '../features/postmatchfeedback/reducers/notifSocketReducer';

import loggerMiddleware from '../middleware/loggerMiddleware';
import rankingSocketMiddleware from '../features/ranking/middleware/rankingSocketMiddleware';
import notifSocketMiddleware from '../features/postmatchfeedback/middleware/notifSocketMiddleware';

export const store = configureStore({
  reducer: {
    userInfo: userInfoSlice,
    userAuth: userAuthSlice,
    ranking: rankingSlice,
    notification: notificationSlice
  },
  middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat([loggerMiddleware, rankingSocketMiddleware, notifSocketMiddleware])
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;