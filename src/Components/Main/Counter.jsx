import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Counter = () => {
  const { triesLeft } = useSelector((state) => state.tryCount);

  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", color:"white"}}>
      <Typography variant="h3">{triesLeft}</Typography>
      <Typography variant="body2" >Tries Left</Typography>
    </div>
  );
};

export default Counter;
