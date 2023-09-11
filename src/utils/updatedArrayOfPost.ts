import { Post } from "../Context/Context.interface";

type UpdateArrayOfPosts = {
  arrayOfPost: Post[];
  newPost: Post;
};

export const updateArrayOfPosts = ({
  arrayOfPost,
  newPost,
}: UpdateArrayOfPosts) =>
  arrayOfPost.map((post: Post) => {
    if (post.id === newPost.id) {
      return newPost;
    }
    return post;
  });
