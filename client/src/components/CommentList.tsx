import { List } from "@mui/material";
import { IComment } from "../Interfaces";
import Comment from "./Comment";
import { FC } from "react";

interface CommentListProps {
  comments: IComment[];
}
// export default function CommentList({ comments }: { comments: IComment[] }) {
const CommentList: FC<CommentListProps> = ({ comments }) => {
  return (
    <List>
      {comments
        // .sort((a, b) => b.time - a.time)
        .map((el) => {
          return <Comment el={el} key={el.id} />;
        })}
    </List>
  );
};
export default CommentList;
