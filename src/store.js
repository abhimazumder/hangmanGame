import { configureStore } from "@reduxjs/toolkit";
import gameStateReducer from "./Slices/gameStateSlice";
import tryCountReducer from "./Slices/tryCountSlice";
import selectedLetterReducer from "./Slices/selectedLetterSlice";

export const store = configureStore({
  reducer: {
    gameState : gameStateReducer,
    tryCount: tryCountReducer,
    selectedLetter: selectedLetterReducer,
  },
});
