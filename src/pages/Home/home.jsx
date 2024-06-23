import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Avatar,
  List,
  ListItemAvatar,
  IconButton,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import HomePageModal from "../../components/homePageModal";
import "./home.css";

const posts = [
  {
    id: 1,
    author: "Theresa Webb",
    emoji: "👋",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: 24,
    avatar: "https://via.placeholder.com/50",
    time: "5mins ago",
  },
  {
    id: 2,
    author: "Marvin McKinney",
    emoji: "😞",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: 15,
    avatar: "https://via.placeholder.com/50",
    time: "8mins ago",
    edited: true,
  },
  {
    id: 3,
    author: "Marvin McKinney",
    emoji: "😞",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: 15,
    avatar: "https://via.placeholder.com/50",
    time: "8mins ago",
    edited: true,
  },
];

const Home = () => {
  const [open, setOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(true);

  const handleCardClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleShowLogin = () => {
    setShowRegister(false);
  };

  const handleShowRegister = () => {
    setShowRegister(true);
  };

  return (
    <Box
      className="page-container"
    >

      <Container className="component-container">
        <Typography
        className="main-heading-title"
          variant="h4"
        >
          Hello Jane
        </Typography>
        <Typography
        className="main-heading-body"
          variant="body1"
        >
          How are you doing today? Would you like to share something with the
          community 🤗
        </Typography>

        <Box onClick={handleCardClick} className="cards-container">
          <Box
          className="create-post-card"
          >
            <Typography
            className="create-post-card-title"
              variant="body1"
            >
              Create post
            </Typography>

            <Box
            className="create-post-card-input-container"
            >
              <IconButton
              className="input-icon-container"
              >
                <Typography
              className="input-icon"
                  component="span"
                  variant="body2"
                >
                  💬
                </Typography>
              </IconButton>
              <input
              className="input-field"
                type="text"
                placeholder="How are you feeling today?"
              />
            </Box>
            <Box className="create-post-card-button-box" sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
              className="create-post-card-button"
                sx={{ width: "100px", height: "40px" }}
                variant="contained"
                color="primary"
              >
                Post
              </Button>
            </Box>
          </Box>

          <List>
            {posts.map((post) => (
              <Card
                key={post.id}
                sx={{
                  mb: 2,
                  bgcolor: "#27292d",
                  borderRadius: "12px",
                  border: "2px solid #35373b",
                  padding: "25px 20px",
                }}
              >
                <CardContent sx={{ padding: "0 !important" }}>
                  <Box
                    alignItems="flex-start"
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        mb: 2,
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar
                          sx={{ width: "50px", height: "50px" }}
                          alt={post.author}
                          src={post.avatar}
                        />
                      </ListItemAvatar>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          width: "100%",
                          ml: 1,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#aaaaaa",
                              fontWeight: "normal",
                              fontSize: "18px",
                              letterSpacing: "0.5px",
                            }}
                          >
                            {post.author}
                          </Typography>
                          <Typography
                            sx={{
                              color: "grey",
                              fontSize: "14px",
                              letterSpacing: "0.5px",
                            }}
                          >
                            {post.time} {post.edited && "• Edited"}
                          </Typography>
                        </Box>
                        <IconButton sx={{ color: "grey" }}>
                          <MoreHorizIcon />
                        </IconButton>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          mt: 1,
                          backgroundColor: "#191920",
                          padding: "20px 15px",
                          borderRadius: "8px",
                        }}
                      >
                        <Box
                          sx={{ display: "flex", justifyContent: "flex-end" }}
                        >
                          <IconButton
                            sx={{
                              color: "#fff",
                              borderRadius: "50%",
                              width: "50px",
                              height: "50px",
                              backgroundColor: "#27292d",
                              "&:hover": { backgroundColor: "#27292d" },
                              mr: 2,
                            }}
                          >
                            <Typography
                              component="span"
                              align="left"
                              variant="body2"
                              sx={{ fontSize: "18px" }}
                            >
                              {post.emoji}
                            </Typography>
                          </IconButton>
                        </Box>
                        <Typography
                          component="span"
                          align="left"
                          variant="body2"
                          sx={{
                            color: "grey",
                            fontSize: "16px",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {post.content}
                        </Typography>
                      </Box>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{
                          color: "#aaaaaa",
                          mt: 2,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            marginRight: "8px",
                            marginLeft: "2px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <ModeCommentOutlinedIcon sx={{ color: "#aaaaaa" }} />
                        </Box>
                        {`${post.comments} comments`}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </List>
        </Box>
        <HomePageModal
          open={open}
          handleClose={handleClose}
          showRegister={showRegister}
          handleShowLogin={handleShowLogin}
          handleShowRegister={handleShowRegister}
        />
      </Container>
    </Box>
  );
};

export default Home;
