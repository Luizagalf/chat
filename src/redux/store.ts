import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import chatReducer from "./chatSlice";

const store = configureStore({
  reducer: {
    chat: chatReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
