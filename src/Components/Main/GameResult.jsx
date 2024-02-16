import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { markGameVerdict } from "../../Slices/gameStateSlice";
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import CelebrationIcon from '@mui/icons-material/Celebration';

const GameResult = () => {
  const [displayMessage, setDisplayMessage] = useState("");

  const dispatch = useDispatch();
  const currentLevelInfo = [
    ...(useSelector((state) => state.gameState?.levelsInfo) || []),
  ]?.pop();
  const currentLevel = currentLevelInfo?.level;

  const { gameComplete, gameVerdict } = useSelector((state) => state?.tryCount);

  useEffect(() => {
    if (gameComplete) {
      dispatch(markGameVerdict({ gameVerdict, currentLevel }));
      gameVerdict === "won" && setDisplayMessage("You Won");
      gameVerdict === "lost" && setDisplayMessage("You Lost");
    }
  }, [gameComplete]);

  return gameComplete ? (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
        padding:"10px",
        backgroundColor:"#14051A",
        borderRadius: "14px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, .2)",
      }}
    >
        {gameVerdict.toLowerCase() === "won" ? (
          <CelebrationIcon fontSize={"large"} style={{ color: "lightgreen" }} />
        ) : (
          <ThumbDownOffAltIcon fontSize={"large"} style={{ color: "crimson" }} />
        )}
      <Typography variant="h5" sx={{color: gameVerdict === "won" ? "lightgreen" : "crimson", fontWeight:550}}>{displayMessage}</Typography>
    </div>
  ) : (
    <></>
  );
};

export default GameResult;
