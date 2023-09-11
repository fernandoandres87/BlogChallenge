import { auth } from "../../services/auth";
import { getContextValues } from "../../utils/";
import { useLocalStorage } from "../../hook/";
import {
  AuthenticationModal,
  LoginComponent,
} from "../../Components/AuthenticationModal";
import { getPostsByUser } from "../../services";

type UserValues = { username: string; password: string };
export const Login = ({ handleCloseModal }: any) => {
  const { handleSetSnackBar, handleSetUserEmail, handleSetPostsByUser } =
    getContextValues();
  const localStorage = useLocalStorage();

  const handleGetUserPosts = async (user: string) => {
    const posts = await getPostsByUser(user);
    handleSetPostsByUser(posts);
  };

  const handleLogin = async (userValues: UserValues) => {
    const login = await auth(`?username=${userValues.username}`);
    if (login[0].password === userValues.password) {
      handleSetSnackBar({ show: true, severity: "success" });
      handleSetUserEmail(userValues.username);
      localStorage.setLocalStorage("user", userValues.username);
      handleGetUserPosts(userValues.username);
      handleCloseModal();
    }
  };

  return (
    <AuthenticationModal label={"Login"} handleCloseModal={handleCloseModal}>
      <LoginComponent handleLogin={handleLogin} />
    </AuthenticationModal>
  );
};
