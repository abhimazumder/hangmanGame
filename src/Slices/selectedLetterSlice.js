import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentLetterSelected: "",
};

export const selectedLetterSlice = createSlice({
  name: "selectedLetter",
  initialState,
  reducers: {
    setCurrentLetterSelected: (state, action) => {
      state.currentLetterSelected = action.payload?.letterSelected;
    },
    resetCurrentSelectedLetter: (state) => {
      state.currentLetterSelected = "";
    },
  },
});

export const { setCurrentLetterSelected, resetCurrentSelectedLetter } =
  selectedLetterSlice.actions;

export default selectedLetterSlice.reducer;
