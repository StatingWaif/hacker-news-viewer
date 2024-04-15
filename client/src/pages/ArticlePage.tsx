import { useEffect, useState } from "react";
import { Box, Button, Container, CssBaseline, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { IComment, IStory } from "../Interfaces";
import { getComments, getStoryById, addComment } from "../api/itemsApi";
import CommentList from "../components/CommentList";
import StoryInfo from "../components/StoryInfo";
import AddCommentWindow from "../components/AddCommentWindow";
import { useNavigate } from "react-router-dom";

export default function ArticlePage() {
  const { id } = useParams();
  const numberId = Number(id);
  const [story, setStory] = useState<IStory | null>(null);
  const [comments, setComments] = useState<IComment[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [author, setAuthor] = useState<string>("");
  const [text, setText] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    let story: IStory;
    if (numberId) {
      getStoryById(numberId)
        .then((data) => (story = data))
        .then(() => setStory(story))
        .then(() => getComments(numberId))
        .then(setComments);
    }
  }, [numberId]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleAddComment = () => {
    if (author && text) {
      addComment(numberId, null, author, text).then(() => {
        getComments(numberId).then(setComments);
        setOpenModal(false);
        setAuthor("");
        setText("");
      });
    }
  };

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {story ? <StoryInfo story={story} /> : null}

        <Button
          onClick={() => navigate("/")}
          variant="contained"
          sx={{ marginBottom: "1rem" }}
        >
          Назад
        </Button>
        <Box sx={{ width: "100%" }}>
          <Typography align="center" variant="h4" gutterBottom>
            Комментарии
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Button
              variant="outlined"
              onClick={() => {
                let story: IStory;

                getStoryById(numberId)
                  .then((data) => (story = data))
                  .then(() => setStory(story))
                  .then(() => getComments(numberId))
                  .then(setComments);
              }}
            >
              Обновить
            </Button>
            <Button onClick={handleOpenModal}>Добавить комментарий</Button>
          </Box>

          <CommentList comments={comments} />
        </Box>
      </Container>
      <AddCommentWindow
        authorState={[author, setAuthor]}
        textState={[text, setText]}
        modalState={[openModal, setOpenModal]}
        handleAddComment={handleAddComment}
      />
    </>
  );
}
