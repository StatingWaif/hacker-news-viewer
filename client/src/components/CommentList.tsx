import { List } from "@mui/material";
import { IComment } from "../Interfaces";
import Comment from "./Comment";

export default function CommentList({ comments }: { comments: IComment[] }) {
  return (
    <List>
      {comments
        // .sort((a, b) => b.time - a.time)
        .map((el) => {
          return <Comment el={el} key={el.id} />;
        })}
    </List>
  );
}
