import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Post } from "../../Context/Context.interface";
import { FC } from "react";

type ActionPostProps = {
  handleClickPost: (post: Post) => void;
  post: Post;
  setShowModalDelete: (value: boolean) => void;
};
export const ActionPost: FC<ActionPostProps> = ({
  handleClickPost,
  post,
  setShowModalDelete,
}) => (
  <>
    <IconButton aria-label="editPost" onClick={() => handleClickPost(post)}>
      <EditIcon />
    </IconButton>
    <IconButton
      aria-label="deletePost"
      onClick={() => setShowModalDelete(true)}
    >
      <DeleteForeverIcon />
    </IconButton>
  </>
);
