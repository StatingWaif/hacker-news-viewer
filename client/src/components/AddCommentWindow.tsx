import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type State<T> = [T, Dispatch<SetStateAction<T>>];

interface Props {
  authorState: State<string>;
  textState: State<string>;
  modalState: State<boolean>;
  handleAddComment(): void;
}
export default function AddCommentWindow({
  authorState,
  textState,
  modalState,
  handleAddComment,
}: Props) {
  const [author, setAuthor] = authorState;
  const [text, setText] = textState;
  const [openModal, setOpenModal] = modalState;

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          width: 400,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Написать комментарий
        </Typography>
        <TextField
          label="Имя"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          fullWidth
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          label="Текст"
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
          multiline
          rows={4}
          sx={{ marginBottom: "1rem" }}
        />
        <Button variant="contained" onClick={handleAddComment}>
          Отправить
        </Button>
      </Box>
    </Modal>
  );
}
