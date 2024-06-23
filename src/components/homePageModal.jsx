import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "none",
  borderRadius: "12px",
  boxShadow: 24,
};

const HomePageModal = ({
  open,
  handleClose,
  showRegister,
  handleShowLogin,
  handleShowRegister,
}) => {
  const handleLogin = () => {
    handleClose();
  };

  const handleRegister = () => {
    handleClose();
  };

  return (
    <Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                top: "20px",
                right: "20px",
              }}
            >
              <IconButton
                onClick={handleClose}
                sx={{
                  color: "#fff",
                  borderRadius: "50%",
                  backgroundColor: "#131319",
                  "&:hover": { backgroundColor: "#131319" },
                }}
              >
                <CloseIcon sx={{ fontWeight: "normal", fontSize: "18px" }} />
              </IconButton>
            </Box>
            {showRegister ? (
              <RegisterForm
                onLoginClick={handleShowLogin}
                handleRegister={handleRegister}
              />
            ) : (
              <LoginForm
                onRegisterClick={handleShowRegister}
                handleLogin={handleLogin}
              />
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default HomePageModal;
