import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentLetterSelected } from "../../Slices/selectedLetterSlice";

const SideCard = () => {
  const [letters, setLetters] = useState([]);

  const dispatch = useDispatch();

  const generateNewWord = useSelector(
    (state) => state.gameState?.generateNewWord
  );
  const gameComplete = useSelector((state) => state.tryCount?.gameComplete);

  useEffect(() => {
    const lettersInitState = [
      { letter: "A", isDisabled: false },
      { letter: "B", isDisabled: false },
      { letter: "C", isDisabled: false },
      { letter: "D", isDisabled: false },
      { letter: "E", isDisabled: false },
      { letter: "F", isDisabled: false },
      { letter: "G", isDisabled: false },
      { letter: "H", isDisabled: false },
      { letter: "I", isDisabled: false },
      { letter: "J", isDisabled: false },
      { letter: "K", isDisabled: false },
      { letter: "L", isDisabled: false },
      { letter: "M", isDisabled: false },
      { letter: "N", isDisabled: false },
      { letter: "O", isDisabled: false },
      { letter: "P", isDisabled: false },
      { letter: "Q", isDisabled: false },
      { letter: "R", isDisabled: false },
      { letter: "S", isDisabled: false },
      { letter: "T", isDisabled: false },
      { letter: "U", isDisabled: false },
      { letter: "V", isDisabled: false },
      { letter: "W", isDisabled: false },
      { letter: "X", isDisabled: false },
      { letter: "Y", isDisabled: false },
      { letter: "Z", isDisabled: false },
    ];
    setLetters(lettersInitState);
  }, [generateNewWord]);

  const handleClick = (letter, index) => {
    if (letter?.isDisabled || gameComplete) return;

    const copyLetters = [...letters];
    copyLetters[index].isDisabled = true;
    setLetters(copyLetters);
    dispatch(setCurrentLetterSelected({ letterSelected: letter?.letter }));
  };

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      padding={1}
    >
      {letters.map((letter, index) => (
        <Grid
          item
          xs={2}
          height={"45px"}
          key={index}
          onClick={() => handleClick(letter, index)}
          style={{
            color:"white",
            backgroundColor: letter?.isDisabled ? "gray" : "#030007",
            borderRadius:"10px",
            boxShadow: letter?.isDisabled ? "inset 0 0 4px rgba(0, 0, 0, .6)" : "0 4px 8px rgba(0, 0, 0, .6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "5px",
            cursor:"pointer",
          }}
        >
          <Typography variant="h6">
            {letter?.letter}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default SideCard;
