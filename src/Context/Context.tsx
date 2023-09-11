import { createContext } from "react";
import { ContextProps, Post, SnackBar } from "./Context.interface";

const defaultValues: ContextProps = {
  snackbar: {
    show: false,
    severity: "success",
  },
  setSnackbar: (_snackbarValues: SnackBar) => null,
  userEmail: "",
  setUserEmail: (_value: string) => null,
  userPosts: [],
  setUserPosts: (_posts: Post[]) => null,
  section: "",
  setSection: (_section: string) => null,
};

export const AppContext = createContext<ContextProps>(defaultValues);
