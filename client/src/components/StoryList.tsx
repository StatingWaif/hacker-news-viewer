import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
import { IStory } from "../Interfaces";
import GradeIcon from "@mui/icons-material/Grade";
import PersonIcon from "@mui/icons-material/Person";
import formatDate from "../utils/formatDate";
import { Link } from "react-router-dom";

export default function StoryList({ stories }: { stories: IStory[] }) {
  return (
    <List>
      {stories.map((el, index) => {
        return (
          <ListItem key={el.id} divider>
            <ListItemButton component={Link} to={`/article/${el.id}`}>
              <Box>
                <>
                  <Typography variant="h5">
                    {index + 1}) {el.title}
                  </Typography>
                  <Typography color="secondary">
                    <PersonIcon fontSize="small" /> Автор: {el.author}
                  </Typography>
                  <Typography>
                    <GradeIcon fontSize="small" />
                    Рейтинг: {el.rating}
                  </Typography>
                  <Typography>Дата: {formatDate(el.date)}</Typography>
                  <Typography>Кол-во комментов: {el.comment_count}</Typography>
                  <Typography>url: {el.url}</Typography>
                </>
              </Box>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
