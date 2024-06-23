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
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import HomePageModal from "../../components/homePageModal";

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
    <Box
      sx={{
        margin: 0,
        backgroundColor: "#131319",
        color: "white",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          bgcolor: "#131319",
          color: "white",
          padding: "20px",
          minHeight: "100vh",
          minWidth: "750px",
        }}
      >
        <Typography
          sx={{ color: "white", letterSpacing: "0.5px" }}
          align="left"
          variant="h4"
          gutterBottom
        >
          Hello Jane
        </Typography>
        <Typography
          sx={{
            color: "grey",
            mb: 4,
            letterSpacing: "0.5px",
            maxWidth: "550px",
          }}
          align="left"
          variant="body1"
          gutterBottom
        >
          How are you doing today? Would you like to share something with the
          community 🤗
        </Typography>

        <Box onClick={handleCardClick} sx={{ cursor: "pointer" }}>
          <Box
            sx={{
              bgcolor: "#27292d",
              mb: 1,
              mt: 2,
              padding: "25px 20px",
              borderRadius: "12px",
              border: "2px solid #35373b",
            }}
          >
            <Typography
              sx={{
                color: "#aaaaaa",
                mb: 2,
                letterSpacing: "0.75px",
                fontSize: "18px",
              }}
              align="left"
              variant="body1"
              gutterBottom
            >
              Create post
            </Typography>

            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <IconButton
                sx={{
                  color: "#fff",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  position: "absolute",
                  top: "12%",
                  left: "2%",
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
                  💬
                </Typography>
              </IconButton>
              <input
                type="text"
                placeholder="How are you feeling today?"
                style={{
                  width: "100%",
                  height: "50px",
                  fontSize: "16px",
                  letterSpacing: "0.5px",
                  padding: "10px",
                  paddingLeft: "80px",
                  color: "white",
                  backgroundColor: "#191920",
                  border: "none",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
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
