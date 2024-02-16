import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import GameResult from "./GameResult";
import MainCardActions from "./MainCardActions";
import Counter from "./Counter";
import WordContainer from "./WordContainer";
import DiamondIcon from "@mui/icons-material/Diamond";

const MainCard = () => {
  const { currentLevel } = useSelector((state) => state?.gameState);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid
        item
        xs={12}
        height="100px"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            px: "20px",
            py: "8px",
            color: "gold",
            border: "4px solid gold",
            borderRadius: "16px",
          }}
        >
          <DiamondIcon size={"medium"} />
          {`Level ${currentLevel}`}
        </Typography>
        <Counter />
      </Grid>
      <Grid
        item
        xs={12}
        height="250px"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <WordContainer />
      </Grid>
      <Grid
        item
        xs={12}
        container
        height="100px"
      >
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <GameResult />
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <MainCardActions />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainCard;
