import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Link,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";

const RegisterForm = ({ handleRegister, onLoginClick }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleRegistration = async () => {
    try {
      const response = await axios.post("apiUrl", {
        email,
        username,
        password,
      });
      console.log("Registration successful:", response.data);
      setEmail("");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Error in Registering:", error);
    }
  };

  const handleRegisterBtn = () => {
    handleRegistration();
    handleRegister();
  };

  return (
    <Box
      sx={{
        bgcolor: "#27292d",
        color: "white",
        padding: "40px 30px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "400px",
        border: "2px solid #8d8d8d",
      }}
    >
      <Container sx={{ px: "0 !important" }}>
        <Box
          sx={{
            width: "100%",
            bgcolor: "#27292d",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="text"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "normal",
              color: "grey",
              fontSize: "14px",
              letterSpacing: "0.75px",
            }}
          >
            SIGN UP
          </Typography>
          <Typography
            variant="text"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: "18px" }}
          >
            Create an account to continue
          </Typography>
          <br />
          <Box sx={{ width: "100%", mt: 2 }}>
            <label
              htmlFor="email"
              style={{
                display: "flex",
                color: "white",
                fontSize: "14px",
                letterSpacing: "0.75px",
              }}
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                height: "45px",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "4px",
                border: "1px solid #555",
                backgroundColor: "#27292d",
                color: "white",
                fontSize: "16px",
                outline: "none",
                boxSizing: "border-box",
                letterSpacing: "0.75px",
              }}
            />
          </Box>
          <Box sx={{ width: "100%", mt: 2 }}>
            <label
              htmlFor="email"
              style={{
                display: "flex",
                color: "white",
                fontSize: "14px",
                letterSpacing: "0.75px",
              }}
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Choose a preferred username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100%",
                height: "45px",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "4px",
                border: "1px solid #555",
                backgroundColor: "#27292d",
                color: "white",
                fontSize: "16px",
                outline: "none",
                boxSizing: "border-box",
                letterSpacing: "0.75px",
              }}
            />
          </Box>
          <Box sx={{ width: "100%", mt: 0, position: "relative" }}>
            <Box sx={{ display: "flex", width: "100%", mt: 2 }}>
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  color: "white",
                  fontSize: "14px",
                  letterSpacing: "0.75px",
                }}
              >
                Password
              </label>
            </Box>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Choose a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                height: "45px",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "4px",
                border: "1px solid #555",
                backgroundColor: "#27292d",
                color: "white",
                fontSize: "16px",
                outline: "none",
                boxSizing: "border-box",
                letterSpacing: "1px",
                paddingRight: "40px",
              }}
            />
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
              sx={{
                position: "absolute",
                right: "10px",
                top: "74%",
                transform: "translateY(-50%)",
                color: "white",
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>

          <Button
            variant="contained"
            onClick={handleRegisterBtn}
            fullWidth
            sx={{
              mt: 3,
              bgcolor: "#4a96ff",
              textTransform: "none",
              fontSize: "16px",
              letterSpacing: "0.75px",
              color: "white",
              ":hover": { bgcolor: "#0056b3" },
            }}
          >
            Continue
          </Button>
          <Typography
            variant="body2"
            align="left"
            sx={{ mt: 1.5, color: "#aaaaaa", width: "100%" }}
          >
            Already have an account?{" "}
            <Link
              onClick={onLoginClick}
              variant="body2"
              sx={{ color: "white", fontWeight: "bold", cursor: "pointer" }}
            >
              Login
            </Link>{" "}
            →
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default RegisterForm;
