import { FC, useCallback, useEffect, useState } from "react";
import { Post as TPost } from "../../Context/Context.interface";
import { Login, Register } from "../";
import { SnackBar, Post, EditPost } from "../../Components";
import { getContextValues, getFullDate, updateArrayOfPosts } from "../../utils";
import {
  getPost,
  getPostsByUser,
  deletePost,
  createPost,
} from "../../services";
import { PostLayout } from "../../Layouts/Post";
import { CreatePost } from "../../Components/CreatePost";

type TContent = {
  showModal: Record<string, boolean>;
  handleShowModal: (value: string) => void;
};
export const Content: FC<TContent> = ({ showModal, handleShowModal }) => {
  const {
    userEmail,
    section,
    userPosts,
    handleSetPostsByUser,
    handleSetSection,
  } = getContextValues();
  const [posts, setPosts] = useState<TPost[] | null>(null);
  const [editPost, setEditPost] = useState<TPost | null>(null);

  const handleGetPosts = async () => {
    const posts = await getPost();
    setPosts(posts || []);
  };

  const handleGetPostsByUser = useCallback(async () => {
    if (userEmail) {
      const postsByUser = await getPostsByUser(userEmail);
      handleSetPostsByUser(postsByUser);
    }
  }, [userEmail]);

  const handleSelectEditPost = useCallback((value: TPost) => {
    setEditPost(value);
  }, []);

  const handleEditedPost = (newPost: TPost) => {
    handleSetPostsByUser(
      updateArrayOfPosts({
        arrayOfPost: userPosts,
        newPost,
      })
    );
    setPosts(
      updateArrayOfPosts({
        arrayOfPost: posts!,
        newPost,
      })
    );
    handleSetSection("myPosts");
  };

  const handleDeletePost = (postId: number) => {
    deletePost(postId);
    if (posts?.length) {
      setPosts(posts.filter((post) => +post.id! !== postId));
    }
    handleSetPostsByUser(userPosts.filter((post) => +post.id! !== postId));
  };

  const handleCreatePost = async (
    post: Pick<TPost, "title" | "description">
  ) => {
    const newPost = {
      ...post,
      author: userEmail,
      createdAt: getFullDate(new Date()),
    };
    const postCreated = await createPost(newPost);
    handleSetPostsByUser([...userPosts, postCreated]);
    setPosts([...posts!, postCreated]);
    handleSetSection("myPosts");
  };

  useEffect(() => {
    !posts && handleGetPosts();
  }, []);

  useEffect(() => {
    if (userEmail) {
      handleGetPostsByUser();
    }
  }, [userEmail]);

  const getPostList = () => {
    if (section === "myPosts") {
      return (
        <>
          {userPosts.length &&
            userPosts.map((post) => {
              return (
                <Post
                  key={`Post-${post.id}`}
                  post={post}
                  handleSelectEditPost={handleSelectEditPost}
                  handleDeletePost={handleDeletePost}
                />
              );
            })}
        </>
      );
    }
    if (section === "edit") {
      return <EditPost post={editPost!} handleEditedPost={handleEditedPost} />;
    }
    if (section === "create") {
      return <CreatePost handleCreatePost={handleCreatePost} />;
    }
    return (
      <>
        {posts &&
          posts?.map((post) => {
            return (
              <Post
                key={`Post-${post.id}`}
                post={post}
                handleSelectEditPost={handleSelectEditPost}
                handleDeletePost={handleDeletePost}
              />
            );
          })}
      </>
    );
  };

  return (
    <>
      {showModal.login && <Login handleCloseModal={handleShowModal} />}
      {showModal.register && <Register handleCloseModal={handleShowModal} />}
      <PostLayout>{getPostList()}</PostLayout>
      <SnackBar />
    </>
  );
};
