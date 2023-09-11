import { Post } from "../Context/Context.interface";
import { post } from "../utils/fetch";

export const createPost = (newPost: Post) =>
  post({ url: `/posts`, values: newPost });
