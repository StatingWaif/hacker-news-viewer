import { useEffect, useState } from "react";
import { IStory } from "../Interfaces";
import { getStories } from "../api/itemsApi";
import { Button, Container, CssBaseline, Typography } from "@mui/material";
import StoryList from "../components/StoryList";

export default function HomePage() {
  const [stories, setStories] = useState<IStory[]>([]);
  const updateStories = async () => {
    getStories()
      .then(setStories)
      .catch(() => {});
  };
  useEffect(() => {
    updateStories();
    const timerId = setInterval(() => {
      updateStories();
    }, 60 * 1000);
    return () => clearInterval(timerId);
  }, []);
  return (
    <>
      <CssBaseline />
      <main>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "1rem",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" align="center">
            Статьи
          </Typography>
          <Button
            sx={{ maxWidth: "10rem", margin: "1rem" }}
            variant="contained"
            onClick={() => updateStories()}
          >
            Обновить статьи
          </Button>
          {stories.length ? <StoryList stories={stories} /> : null}
        </Container>
      </main>
    </>
  );
}
