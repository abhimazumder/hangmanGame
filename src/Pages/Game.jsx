import { Grid } from "@mui/material";
import SideCard from "../Components/SideCard/SideCard";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWord } from "../Controllers/WordGenController";
import { pushNewLevel } from "../Slices/gameStateSlice";
import { resetCounter } from "../Slices/tryCountSlice";
import MainCard from "../Components/Main/MainCard";

const Game = () => {
  const wordLength = useMemo(
    () => ({
      easy: 6,
      medium: 7,
      hard: 8,
    }),
    []
  );

  const { levelsInfo, currentLevel } = useSelector((state) => state.gameState);
  const [currentLevelInfo = {}] = levelsInfo.filter(
    (level) => level?.level === currentLevel
  );

  const { difficultyStage = "easy", generateNewWord } = useSelector(
    (state) => state.gameState
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentLevelInfo?.verdict === "") return;

    const controller = new AbortController();
    const signal = controller.signal;

    const length = wordLength[difficultyStage];

    getWord(length, signal).then((res) => {
      const newWord = res[0] || "";
      if (newWord?.length > 0) {
        const wordArray = newWord?.split("")?.map((letter) => ({
          letter: letter.toUpperCase(),
          isVisible: false,
        }));
        dispatch(pushNewLevel({ wordArray }));
        dispatch(resetCounter());
      }
    }).catch(err => {
      console.log(err);
    });

    return () => {
      controller.abort();
    };
  }, [generateNewWord]);

  return (
    <Grid container>
      <Grid item xs={9}>
        <MainCard />
      </Grid>
      <Grid item xs={3}>
        <SideCard />
      </Grid>
    </Grid>
  );
};

export default Game;
