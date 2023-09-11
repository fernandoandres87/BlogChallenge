import { deleted } from "../utils/fetch";

export const deletePost = (postId: number) =>
  deleted({ url: `/posts/${postId}` });
