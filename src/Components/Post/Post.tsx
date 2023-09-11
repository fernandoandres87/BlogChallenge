import { FC, useCallback, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "../../Components/Button";
import {
  CardContentCustom,
  CardCustom,
  CardHeaderCustom,
  WrapperButtonActions,
  showMoreStyles,
} from "./Post.styles";
import { getContextValues } from "../../utils";
import { ModalDeleteConfirmation } from "../ModalDeleteConfirmation";
import { Post as TPost } from "../../Context/Context.interface";
import { ActionPost } from "./Actions";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useLocalStorage } from "../../hook";

type PostProps = {
  post: TPost;
  handleSelectEditPost: (post: TPost) => void;
  handleDeletePost: (postId: number) => void;
};

export const Post: FC<PostProps> = ({
  post,
  handleSelectEditPost,
  handleDeletePost,
}) => {
  const { getLocalStorage, setLocalStorage } = useLocalStorage();
  const { userEmail, handleSetSection } = getContextValues();
  const [showMore, setShowMore] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [favoritePosts, setFavoritePosts] = useState<number[]>([]);

  const handleClickPost = (post: TPost) => {
    handleSelectEditPost(post);
    handleSetSection("edit");
  };

  const handleShowMore = useCallback(() => {
    setShowMore((prev) => !prev);
  }, [setShowMore]);

  const handleDeletePostById = (postId: number) => {
    const favoriteStorage = getLocalStorage("favorite");
    setShowModalDelete(false);
    deletePost(postId);
    updateFavoriteStorage(favoriteStorage, postId);
  };

  const deletePost = (postId: number) => {
    handleDeletePost(postId);
  };

  const updateFavoriteStorage = (
    favoriteStorage: string | null,
    postId: number
  ) => {
    const parsedValue = JSON.parse(favoriteStorage!);
    const updatedValue = parsedValue.filter((id: number) => id !== +postId);
    setLocalStorage("favorite", JSON.stringify(updatedValue));
  };

  const handleFavoritePost = () => {
    const favoriteStorage = getLocalStorage("favorite");
    const parsedStorage = JSON.parse(favoriteStorage!);
    const postId = +post.id!;

    if (!parsedStorage) {
      setLocalStorage("favorite", JSON.stringify([+post.id!]));
      setFavoritePosts([+post.id!]);
      return;
    }
    if (!parsedStorage?.length || !parsedStorage?.includes(postId)) {
      const updatedStorage = [...parsedStorage, postId];
      setLocalStorage("favorite", JSON.stringify(updatedStorage));
      setFavoritePosts(updatedStorage);
    } else {
      const updatedStorage = parsedStorage?.filter(
        (id: number) => id !== postId
      );
      setLocalStorage("favorite", JSON.stringify(updatedStorage));
      setFavoritePosts(updatedStorage);
    }
  };

  const getFavoriteColor = useCallback(() => {
    const favoriteStorage = getLocalStorage("favorite");
    if (
      JSON.parse(favoriteStorage!)?.find((fav: number) => fav === +post.id!)
    ) {
      return "error";
    }
    return "inherit";
  }, [favoritePosts]);

  useEffect(() => {
    getFavoriteColor();
  }, [favoritePosts]);

  return (
    <CardCustom key={`CardCustom-${post.id}`}>
      <CardHeaderCustom
        title={`Author: ${post.author}`}
        subheader={`Title: ${post.title}`}
        action={
          userEmail === post.author && (
            <ActionPost
              handleClickPost={handleClickPost}
              post={post}
              setShowModalDelete={setShowModalDelete}
            />
          )
        }
      />
      <CardContentCustom>
        <Typography
          variant="body2"
          color="text.secondary"
          id={`card-description-${post.id}`}
          sx={showMore ? null : showMoreStyles}
        >
          {post.description}
        </Typography>
        {showMore && <h5>Created: {post.createdAt}</h5>}
        <WrapperButtonActions>
          {userEmail && (
            <IconButton aria-label="favoriteIcon" onClick={handleFavoritePost}>
              <FavoriteIcon color={getFavoriteColor()} />
            </IconButton>
          )}
          <Button onClick={handleShowMore}>
            {!showMore ? "Read More" : "Read Less"}
          </Button>
        </WrapperButtonActions>
        {showModalDelete && (
          <ModalDeleteConfirmation
            onClose={() => setShowModalDelete(false)}
            onConfirm={handleDeletePostById}
            postId={+post.id!}
          />
        )}
      </CardContentCustom>
    </CardCustom>
  );
};
