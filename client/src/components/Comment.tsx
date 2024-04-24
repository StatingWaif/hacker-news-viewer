import { FC, useEffect, useState } from "react";
import {
  Box,
  Button,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Person, ExpandLess, ExpandMore } from "@mui/icons-material";
import formatDate from "../utils/formatDate";
import { IComment } from "../Interfaces";
import { addComment, getReplies } from "../api/itemsApi";
import AddCommentWindow from "./AddCommentWindow";

interface CommentProps {
  el: IComment;
}

// export default function Comment({ el }: { el: IComment }) {
const Comment: FC<CommentProps> = ({ el }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [replies, setReplies] = useState<IComment[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [author, setAuthor] = useState<string>("");
  const [text, setText] = useState<string>("");
  useEffect(() => {
    getReplies(el.id)
      .then(setReplies)
      .catch(() => setReplies([]));
  }, [expanded, el]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleReply = () => {
    if (author && text) {
      addComment(el.story_id, el.id, author, text);
      expanded
        ? getReplies(el.id)
            .then(setReplies)
            .catch(() => setReplies([]))
        : setExpanded(true);

      setOpenModal(false);
      setAuthor("");
      setText("");
    }
  };

  return (
    <>
      <ListItem key={el.id} divider>
        <ListItemText
          primary={
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box>
                <Typography>
                  <Person fontSize="small" /> {el.author}
                </Typography>
                <Typography>Дата: {formatDate(el.date)}</Typography>
                <Typography dangerouslySetInnerHTML={{ __html: el.text }} />
              </Box>
              {replies?.length ? (
                <Box sx={{ paddingLeft: "2rem" }}>
                  <ListItemButton onClick={() => setExpanded(!expanded)}>
                    {expanded ? (
                      <>
                        <ExpandLess />
                        Скрыть ответы
                      </>
                    ) : (
                      <>
                        <ExpandMore />
                        Показать ответы ({replies.length})
                      </>
                    )}
                  </ListItemButton>
                  <Collapse in={expanded}>
                    <List>
                      {replies.map((reply) => (
                        <Comment el={reply} key={reply.id} />
                      ))}
                    </List>
                  </Collapse>
                </Box>
              ) : null}
            </Box>
          }
          secondary={<Button onClick={handleOpenModal}>Ответить</Button>}
        />
      </ListItem>
      <AddCommentWindow
        authorState={[author, setAuthor]}
        textState={[text, setText]}
        modalState={[openModal, setOpenModal]}
        handleAddComment={handleReply}
      />
    </>
  );
};
export default Comment;
