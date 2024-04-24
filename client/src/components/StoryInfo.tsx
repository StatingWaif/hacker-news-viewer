import React from "react";
import { Box, Link, Typography, Grid } from "@mui/material";
import formatDate from "../utils/formatDate";
import { IStory } from "../Interfaces";
import PersonIcon from "@mui/icons-material/Person";

interface StoryInfoProps {
  story: IStory;
}

export default function StoryInfo({ story }: StoryInfoProps) {
  return (
    <Box p={4}>
      <Typography variant="h3" color="secondary" gutterBottom>
        {story.title}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <PersonIcon fontSize="large" />
        </Grid>
        <Grid item>
          <Typography variant="h4" component="span">
            Автор: {story.author}
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h4">Дата: {formatDate(story.date)}</Typography>
      <Typography variant="h4">
        Кол-во комментариев: {story.comment_count}
      </Typography>
      <Link href={story.url} variant="h4" target="_blank" rel="noopener">
        Источник: {story.url}
      </Link>
    </Box>
  );
}
