import { useContext } from "react";
import { AppContext } from "../Context/Context";
import { Post, Section, SnackBar } from "../Context/Context.interface";
export const getContextValues = () => {
  const {
    setSnackbar,
    setUserEmail,
    setUserPosts,
    setSection,
    snackbar,
    ...rest
  } = useContext(AppContext);

  const handleSetSnackBar = (snackbarValues: Partial<SnackBar>) => {
    setSnackbar({ ...snackbar, ...snackbarValues });
  };

  const handleSetUserEmail = (userEmail: string) => {
    setUserEmail(userEmail);
  };

  const handleSetPostsByUser = (posts: Post[]) => {
    setUserPosts(posts);
  };

  const handleSetSection = (section: Section) => {
    setSection(section);
  };

  return {
    handleSetSnackBar,
    handleSetUserEmail,
    handleSetPostsByUser,
    handleSetSection,
    snackbar,
    ...rest,
  };
};
