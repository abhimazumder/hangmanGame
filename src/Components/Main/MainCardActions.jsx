import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  markGameComplete,
  toggleGenerateNewWord,
} from "../../Slices/gameStateSlice";
import { useNavigate } from "react-router-dom";

const MainCardActions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const gameComplete = useSelector((state) => state?.tryCount?.gameComplete);

  const handleNextLevel = () => {
    dispatch(toggleGenerateNewWord());
  };

  const handleCompleteGame = () => {
    dispatch(markGameComplete());
    navigate("/complete");
  };

  return gameComplete ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        height: "auto",
        width: "auto",
      }}
    >
      <Button
        variant="contained"
        style={{
          backgroundColor: "white",
          textTransform: "none",
          "& .MuiFocused .MuiOutlinedInputNotchedOutline": {
            border: "none",
            borderRadius: "2px 2px 2px 2px",
          },
        }}
        onClick={() => handleCompleteGame()}
      >
        <Typography variant="h6" color="#030007">
          {`I'm Done`}
        </Typography>
      </Button>
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
        onClick={() => handleNextLevel()}
      >
        <Typography variant="h6" color="white">
          Try Next
        </Typography>
      </Button>
    </div>
  ) : (
    <></>
  );
};

export default MainCardActions;
