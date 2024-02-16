import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalTries: 6,
  triesLeft: 6,
  totalWordLetters: 0,
  totalGuessedLetters: 0,
  gameComplete: false,
  gameVerdict: "",
};

export const tryCountSlice = createSlice({
  name: "tryCount",
  initialState,
  reducers: {
    decreaseCount: (state) => {
      if (state.triesLeft - 1 < 1) {
        state.triesLeft--;
        state.gameComplete = true;
        state.gameVerdict = "lost";
      } else state.triesLeft--;
    },
    setTotalWordLetters: (state, action) => {
      state.totalWordLetters = action.payload?.totalWordLetters;
    },
    setTotalGuessedLetters: (state, action) => {
      state.totalGuessedLetters = action.payload?.totalGuessedLetters;
      if (action.payload?.totalGuessedLetters === state.totalWordLetters) {
        state.gameComplete = true;
        state.gameVerdict = "won";
      }
    },
    resetCounter: (state) => {
      state.triesLeft = state.totalTries;
      state.totalGuessedLetters = 0;
      state.totalWordLetters = 0;
      state.gameComplete = false;
      state.gameVerdict = "";
    },
  },
});

export const {
  decreaseCount,
  setTotalWordLetters,
  setTotalGuessedLetters,
  resetCounter,
} = tryCountSlice.actions;

export default tryCountSlice.reducer;
