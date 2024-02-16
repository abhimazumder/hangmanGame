import { Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import LetterContainer from "./LetterContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { decreaseCount, setTotalGuessedLetters, setTotalWordLetters } from "../../Slices/tryCountSlice";
import { updateLevelWord } from "../../Slices/gameStateSlice";
import { resetCurrentSelectedLetter } from "../../Slices/selectedLetterSlice";

const WordContainer = () => {
  const dispatch = useDispatch();
  
  const currentLevelInfo = [...useSelector(state => state.gameState?.levelsInfo) || []]?.pop();
  const currentLevel = currentLevelInfo?.level;
  const wordArray = currentLevelInfo?.word || [];
  const wordString = wordArray?.map(letter => letter.letter).join("") || "";

  const { currentLetterSelected } = useSelector(({ selectedLetter }) => selectedLetter) || "";

  const {gameComplete, gameVerdict} = useSelector(state => state.tryCount);

  useEffect(() => {
    if(wordString?.length !== 0)
      dispatch(setTotalWordLetters({totalWordLetters: wordString?.length}));
  }, [wordString]);

   useEffect(() => {
    if (wordString?.length === 0 || currentLetterSelected?.length === 0) return;

    const foundIndexes = wordArray?.reduce((acc, letter, index) => {
      if (currentLetterSelected === letter?.letter) acc.push(index);
      return acc;
    }, []);

    if (foundIndexes?.length === 0) {
      dispatch(decreaseCount());
    } else {
      const newWordArray = 
        wordArray?.map((letter, index) => ({
          ...letter,
          isVisible: foundIndexes?.includes(index) ? true : letter?.isVisible,
        }));
      dispatch(updateLevelWord({currentLevel, newWordArray}));
      const totalGuessedLetters = newWordArray.filter(letter => letter.isVisible === true).length;
      dispatch(setTotalGuessedLetters({totalGuessedLetters}))
    }

    dispatch(resetCurrentSelectedLetter());
  }, [currentLetterSelected]);

  return (
    <Grid
      height={"100%"}
      width={"100%"}
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {wordArray && wordArray?.map((ele, index) => (
        <Grid item key={`letter${index}`} px={.8}>
          <LetterContainer letter={ele} />
        </Grid>
      ))}
      <Grid
        item
        container
        xs={12}
        style={{
          display: gameComplete && gameVerdict?.toLowerCase() === "lost" ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          gap:"5px",
          color:"white"
        }}
      >
        <Typography variant="body2">
          The word was :
        </Typography>
        <Typography
            variant={"h6"}
            style={{ fontWeight: 600, letterSpacing: "1px" }}
          >
            {wordString}
          </Typography>
      </Grid>
    </Grid>
  );
};

WordContainer.propTypes = {
  word: PropTypes.array,
};

export default WordContainer;
