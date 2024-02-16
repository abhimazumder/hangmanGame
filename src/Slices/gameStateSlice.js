import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  difficultyStage: "easy",
  currentLevel: 0,
  levelsInfo: [],
  gameInProgress: false,
  hasGameEnded: false,
  generateNewWord: true,
};

export const gameStateSlice = createSlice({
  name: "gameState",
  initialState,
  reducers: {
    markGameStart: (state) => {
      state.gameInProgress = true;
    },
    markGameComplete: (state) => {
      state.gameInProgress = false;
      state.hasGameEnded = true;
    },
    setDifficultyStage: (state, action) => {
      state.difficultyStage = action.payload?.difficultyStage;
    },
    pushNewLevel: (state, action) => {
      const wordArray = action.payload?.wordArray;
      const levelInfo = {
        level: ++state.currentLevel,
        word: wordArray,
        difficulty: state.difficultyStage,
        verdict: "",
        timeTaken: "",
      };
      state.levelsInfo.push(levelInfo);
    },
    updateLevelWord: (state, action) => {
      const currentLevel = action.payload?.currentLevel;
      const newWordArray = action.payload?.newWordArray;
      state.levelsInfo = state.levelsInfo?.map((level) =>
        level.level === currentLevel ? { ...level, word: newWordArray } : level
      );
    },
    markGameVerdict: (state, action) => {
      const { gameVerdict, currentLevel } = action.payload;
      state.levelsInfo = state.levelsInfo.map((level) =>
        level.level === currentLevel
          ? {
              ...level,
              verdict: gameVerdict,
            }
          : level
      );
    },
    toggleGenerateNewWord: (state) => {
      state.generateNewWord = !state.generateNewWord;
    },
    resetGameState: (state) => {
      state.difficultyStage = "easy";
  state.currentLevel = 0;
  state.levelsInfo = [];
  state.gameInProgress = false;
  state.hasGameEnded = false;
    }
  },
});

export const {
  markGameStart,
  markGameComplete,
  setDifficultyStage,
  pushNewLevel,
  updateLevelWord,
  markGameVerdict,
  toggleGenerateNewWord,
  resetGameState,
} = gameStateSlice.actions;

export default gameStateSlice.reducer;
