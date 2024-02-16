import { useEffect } from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { resetGameState } from "../Slices/gameStateSlice";
import { resetCounter } from "../Slices/tryCountSlice";
import { useNavigate } from "react-router-dom";

const Complete = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const levelsInfo = useSelector((state) => state.gameState?.levelsInfo);

  useEffect(() => () => {
    dispatch(resetGameState());
    dispatch(resetCounter());
  }, [])

  const handleOnClick = () => {
    navigate("/");
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" align="center" color={"white"}>
          Game Summary
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={2}>
          {levelsInfo?.length !== 0 &&
            levelsInfo.map((ele) => (
              <div
                key={ele.level}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "5px",
                  padding: "10px",
                  color:"white",
                  backgroundColor:"#14051A",
                  borderRadius: "16px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, .4)"
                }}
              >
                <Typography variant="h6">
                  {`${ele?.difficulty
                    ?.charAt(0)
                    .toUpperCase()}${ele?.difficulty?.slice(1)}`}
                </Typography>
                <Typography variant="h6">{`Level ${ele?.level}`}</Typography>
                <Typography variant="h6" style={{ fontWeight: 600 }}>
                  {ele.word.map((letter) => letter?.letter)?.join("")}
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    color:
                      ele?.verdict === "won"
                        ? "lightgreen"
                        : ele?.verdict === "lost"
                        ? "crimson"
                        : "none",
                      fontWeight:550
                  }}
                >
                  {ele?.verdict?.toUpperCase()}
                </Typography>
              </div>
            ))}
        </Stack>
      </Grid>
      <Grid item container xs={12} justifyContent={"center"} alignItems={"center"}>
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
        onClick={() => handleOnClick()}
        >
          <Typography variant="h6" color="white">
            End
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Complete;