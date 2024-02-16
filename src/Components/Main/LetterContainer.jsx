import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const LetterContainer = ({ letter }) => {
  return (
    <div
      style={{
        height: "80px",
        width: "80px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, .6)",
        border: "4px solid white",
        borderRadius: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" style={{color:"white"}}>
        {letter?.isVisible ? letter?.letter : " "}
      </Typography>
    </div>
  );
};

LetterContainer.propTypes = {
  letter: PropTypes.object,
};

export default LetterContainer;
