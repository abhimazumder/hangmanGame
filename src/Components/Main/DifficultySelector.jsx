import { MenuItem, Select, Typography } from "@mui/material";
import PropTypes from "prop-types";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useSelector } from "react-redux";

const DifficultySelector = ({
  difficultyLevels,
  selectedDifficulty,
  setSelectedDifficulty,
}) => {
  const handleChange = (event) => {
    setSelectedDifficulty(event.target.value);
  };

  const gameInProgress = useSelector(state => state.gameState?.gameInProgress);

  return (
    <Select
      variant="standard"
      value={selectedDifficulty}
      onChange={handleChange}
      sx={{
        width: "140px",
        border: "1px solid white",
        borderRadius: "5px",
        px: "20px",
        color: "white", 
      }}
      IconComponent={(props) => (<ArrowDropDownIcon style={{color:"white"}} {...props}/>)}
      inputProps={{
        MenuProps: {
          PaperProps: {
            sx: {
              "& .MuiMenuItem-root.Mui-selected": {
                backgroundColor: "#14051A",
              },
              "& .MuiMenuItem-root:hover": {
                backgroundColor: "#230046",
              },
              background: "linear-gradient(45deg, #030007, #14051A)",
            },
          },
        },
      }}
      displayEmpty
      disableUnderline
      disabled={gameInProgress}
    >
      {difficultyLevels?.map((ele) => (
        <MenuItem key={ele?.id} value={ele?.value}>
          <Typography variant="h6" color="white">
            {ele?.label}
          </Typography>
        </MenuItem>
      ))}
    </Select>
  );
};

DifficultySelector.propTypes = {
  difficultyLevels: PropTypes.array,
  selectedDifficulty: PropTypes.string,
  setSelectedDifficulty: PropTypes.func,
};

export default DifficultySelector;
