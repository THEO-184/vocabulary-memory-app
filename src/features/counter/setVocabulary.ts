import { RootState } from "./../../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	setStart: false,
};

const VocabStore = createSlice({
	name: "vocabStore",
	initialState,
	reducers: {
		SET_START: (state, action: PayloadAction<boolean>) => {
			state.setStart = action.payload;
		},
	},
});

// selectors
export const selectStart = (state: RootState) => state.Vocabs.setStart;
export const { SET_START } = VocabStore.actions;

export default VocabStore.reducer;
