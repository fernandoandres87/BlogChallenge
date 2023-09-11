import { Post } from "../Context/Context.interface";
import { put } from "../utils/fetch";

export const editPost = (postEdited: Post) =>
  put({ url: `/posts/${postEdited.id}`, values: postEdited });
