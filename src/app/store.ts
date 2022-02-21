import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import VocabStore from "../features/counter/setVocabulary";

export const store = configureStore({
	reducer: {
		Vocabs: VocabStore,
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
