import { ChangeEventHandler, FC, useState } from "react";
import { editPost } from "../../services";
import { Post } from "../../Context/Context.interface";
import { getContextValues, getFullDate } from "../../utils";
import { Button } from "../Button";
import TextField from "@mui/material/TextField";
import {
  WrapperButton,
  WrapperEditPost,
  WrapperField,
} from "./EditPost.styles";

type EditPostProps = {
  post: Post;
  handleEditedPost: (newPost: Post) => void;
};

type PartialPost = Pick<Post, "title" | "description">;

export const EditPost: FC<EditPostProps> = ({ post, handleEditedPost }) => {
  const { handleSetSection } = getContextValues();
  const [editedPost, setEditedPost] = useState<PartialPost>({
    title: post.title,
    description: post.description,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setEditedPost((prev: PartialPost) => ({ ...prev, [id]: value }));
  };

  const hasChanged =
    !(editedPost.title || editedPost.description) &&
    (editedPost.title !== post.title ||
      editedPost.description !== post.description);

  const handleConfirmEdition = () => {
    if (hasChanged) return;
    const newPost = {
      ...post,
      ...editedPost,
      updatedAt: getFullDate(new Date()),
    };
    editPost(newPost);
    handleEditedPost(newPost);
  };

  const handleCancelEdition = () => {
    handleSetSection("home");
  };
  return (
    <WrapperEditPost>
      <WrapperField>
        <p>Title</p>
        <TextField
          fullWidth
          id="title"
          multiline
          rows={6}
          defaultValue={post.title}
          onChange={handleChange}
        />
      </WrapperField>
      <WrapperField>
        <p>Description</p>
        <TextField
          id="description"
          multiline
          rows={6}
          defaultValue={post.description}
          onChange={handleChange}
        />
      </WrapperField>
      <WrapperButton>
        <Button onClick={handleConfirmEdition} disabled={hasChanged}>
          Confirmar
        </Button>
        <Button onClick={handleCancelEdition}>Cancelar</Button>
      </WrapperButton>
    </WrapperEditPost>
  );
};
