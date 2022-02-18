import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import Something from "../features/counter/Something";
export const store = configureStore({
	reducer: {
		counter: Something,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
