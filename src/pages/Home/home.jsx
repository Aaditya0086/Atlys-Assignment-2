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
    <Box className="page-container">
      <Container className="component-container">
        <Typography className="main-heading-title" variant="h4">
          Hello Jane
        </Typography>
        <Typography className="main-heading-body" variant="body1">
          How are you doing today? Would you like to share something with the
          community 🤗
        </Typography>

        <Box onClick={handleCardClick} className="cards-container">
          <Box className="create-post-card">
            <Typography className="create-post-card-title" variant="body1">
              Create post
            </Typography>

            <Box className="create-post-card-input-container">
              <IconButton className="input-icon-container">
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
            <Box
              className="create-post-card-button-box"
            >
              <Button
                className="create-post-card-button"
                variant="contained"
                color="primary"
              >
                Post
              </Button>
            </Box>
          </Box>

          <List>
            {posts.map((post) => (
              <Card key={post.id} className="post-card-container">
                <CardContent sx={{ padding: "0 !important" }}>
                  <Box className="post-card">
                    <Box className="post-card-header">
                      <ListItemAvatar>
                        <Avatar
                          className="post-card-header-avatar"
                          alt={post.author}
                          src={post.avatar}
                        />
                      </ListItemAvatar>
                      <Box className="post-card-header-title-and-icon-container">
                        <Box className="post-card-header-title-container">
                          <Typography className="post-card-header-title">
                            {post.author}
                          </Typography>
                          <Typography className="post-card-header-subtitle">
                            {post.time} {post.edited && "• Edited"}
                          </Typography>
                        </Box>
                        <IconButton className="post-card-header-icon">
                          <MoreHorizIcon />
                        </IconButton>
                      </Box>
                    </Box>
                    <Box className="post-card-footer-container">
                      <Box className="post-card-body-container">
                        <Box className="post-card-body-avatar-container">
                          <IconButton className="post-card-body-avatar-button">
                            <Typography
                              className="post-card-body-avatar"
                              component="span"
                              variant="body2"
                            >
                              {post.emoji}
                            </Typography>
                          </IconButton>
                        </Box>
                        <Typography
                          className="post-card-body"
                          component="span"
                          variant="body2"
                        >
                          {post.content}
                        </Typography>
                      </Box>
                      <Typography
                        className="post-card-body-comments"
                        component="span"
                        variant="body2"
                      >
                        <Box
                          className="post-card-body-comments-icon"
                          component="span"
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
