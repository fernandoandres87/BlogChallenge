export type Section = "home" | "myPosts" | "edit" | "create";
export type SnackBar = {
  show: boolean;
  severity: "success" | "info" | "warning" | "error";
};
export type Post = {
  id?: string;
  title: string;
  author: string;
  description: string;
  createdAt: string;
  updatedAt?: string;
};
export type ShowModalAuthentication = {
  login: false;
  register: false;
};
export type ContextProps = {
  snackbar: SnackBar;
  setSnackbar: (values: SnackBar) => void;
  userEmail: string;
  setUserEmail: (values: string) => void;
  userPosts: Post[];
  setUserPosts: (values: Post[]) => void;
  section: string;
  setSection: (section: Section) => void;
};
