import { FC, useState } from "react";
import { Button } from "../Button";
import { TextField } from "@mui/material";
import {
  WrapperButton,
  WrapperCreatePost,
  WrapperField,
} from "./CreatePost.styles";
import { Post } from "../../Context/Context.interface";

type PartialPost = Pick<Post, "title" | "description">;
export type CreatePostProps = {
  handleCreatePost: (post: PartialPost) => Promise<void>;
};

export const CreatePost: FC<CreatePostProps> = ({ handleCreatePost }) => {
  const [newPost, setNewPost] = useState<PartialPost>({
    title: "",
    description: "",
  });

  return (
    <WrapperCreatePost>
      <h1>Create Post</h1>
      <WrapperField>
        <p>Title</p>
        <TextField
          id="title"
          rows={1}
          defaultValue=""
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
      </WrapperField>
      <WrapperField>
        <p>Description</p>
        <TextField
          fullWidth
          id="description"
          multiline
          rows={6}
          defaultValue=""
          onChange={(e) =>
            setNewPost({ ...newPost, description: e.target.value })
          }
        />
      </WrapperField>
      <WrapperButton>
        <Button
          onClick={() => handleCreatePost(newPost)}
          disabled={!(newPost.description && newPost.title)}
        >
          Create
        </Button>
      </WrapperButton>
    </WrapperCreatePost>
  );
};
