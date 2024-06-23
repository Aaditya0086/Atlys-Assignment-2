import React from "react";
import { Box } from "@mui/material";
import LoginForm from "../../components/loginForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#131319",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "white", fontSize: "22px", margin: "0 0px" }}>
            &#128901;
          </p>
          <p style={{ color: "white", fontSize: "22px", margin: "0 0px" }}>
            &#128938;
          </p>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-7px",
          }}
        >
          <p style={{ color: "white", fontSize: "22px", margin: "0 0px" }}>
            &#9655;
          </p>
          <p style={{ color: "white", fontSize: "22px", margin: "0 0px" }}>
            &#9723;
          </p>
        </Box>
      </Box>
      <LoginForm handleLogin={handleLogin} />
    </Box>
  );
};

export default Login;
