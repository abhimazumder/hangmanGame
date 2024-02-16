import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Game from "./Pages/Game";
import Complete from "./Pages/Complete";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Footer from "./Components/Footer";

const ProtectedRoute = ({ children }) => {
  const isGameInProgress = useSelector(
    (state) => state.gameState.gameInProgress
  );
  const location = useLocation();

  if (!isGameInProgress)
    return <Navigate to="/" state={{ from: location }} replace />;
  else return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.any,
};

function App() {
  return (
    <BrowserRouter>
    <div style={{ backgroundColor: "#230046" }}>
      <Header />
      <Container
        style={{
          minHeight: "82vh",
          width: "100%",
          marginTop: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0px",
        }}
      >
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/game"
              element={
                <ProtectedRoute>
                  <Game />
                </ProtectedRoute>
              }
            />
            <Route path="/complete" element={<Complete />} />
          </Routes>
      </Container>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
