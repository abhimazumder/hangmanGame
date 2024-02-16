import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { markGameStart, setDifficultyStage } from "../Slices/gameStateSlice";
import DifficultySelector from "../Components/Main/DifficultySelector";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
  const difficultyLevels = [
    { id: "diff_0", label: "Easy", value: "easy" },
    { id: "diff_1", label: "Medium", value: "medium" },
    { id: "diff_2", label: "Hard", value: "hard" },
  ];

  const gameInProgress = useSelector(state => state.gameState?.gameInProgress);

  const naviagte = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDifficultyStage({ difficultyStage: selectedDifficulty }));
  }, [dispatch, selectedDifficulty]);

  const handleOnClick = () => {
    dispatch(markGameStart());
    naviagte("/game");
  };
  return (
    <Grid container gap={"20px"}>
      <Grid item container xs={12} justifyContent={"center"}>
        <Typography
          variant="h2"
          style={{
            fontWeight: 500,
            backgroundColor: "rgba(3, 0, 7, 0.5)",
            color: "white",
            padding: "40px",
            borderRadius: "16px",
          }}
        >
          Hangman Game
        </Typography>
      </Grid>
      <Grid item container xs={12} justifyContent={"center"} gap={"20px"}>
        <DifficultySelector
          difficultyLevels={difficultyLevels}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
        />
        <Button
          variant="outlined"
          style={{
            color: "white",
            textTransform: "none",
            borderColor: "white",
            "& .MuiFocused .MuiOutlinedInputNotchedOutline": {
              border: "none",
              borderRadius: "2px 2px 2px 2px",
            },
          }}
          endIcon={<ArrowForwardIosIcon/>}
          onClick={() => handleOnClick()}
        >
          <Typography variant="h6" color="white">
            {`${gameInProgress ? "Resume Game" : "Start New Game"}`}
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
