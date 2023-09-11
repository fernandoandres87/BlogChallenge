import { PropsWithChildren, useEffect, useState } from "react";
import { AppContext } from "./Context";
import { Post, Section, SnackBar } from "./Context.interface";
import { useLocalStorage } from "../hook/useLocalStorage";

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const localStorage = useLocalStorage();
  const [snackbar, setSnackbar] = useState<SnackBar>({
    show: false,
    severity: "success",
  });
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPosts, setUserPosts] = useState<Post[]>([]);
  const [section, setSection] = useState<Section>("home");

  useEffect(() => {
    const user = localStorage.getLocalStorage("user");
    if (user) {
      setUserEmail(user);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        snackbar,
        userEmail,
        setSnackbar,
        setUserEmail,
        userPosts,
        setUserPosts,
        section,
        setSection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
